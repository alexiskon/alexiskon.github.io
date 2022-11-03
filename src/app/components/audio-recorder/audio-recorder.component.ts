import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';

@Component({
  selector: 'app-audio-recorder',
  templateUrl: './audio-recorder.component.html',
  styleUrls: ['./audio-recorder.component.scss']
})
export class AudioRecorderComponent implements OnInit {

  isRecording = false;
  recordedTime: any;
  blobUrl: any;
  recordedAudio: any;
  results: boolean = false;
  originalResult: any;

  constructor(
      private audioRecordingService: AudioRecordingService,
      private sanitizer: DomSanitizer,
      private apiSerice: ApiService,
      private toastService: ToastrService
    ) {

    this.audioRecordingService.recordingFailed().subscribe(() => {
      this.isRecording = false;
    });

    this.audioRecordingService.getRecordedTime().subscribe((time) => {
      this.recordedTime = time;
    });
  }

  ngOnInit(): void {

  }

  startRecording() {
    if (!this.isRecording) {
      this.isRecording = true;
      this.audioRecordingService.startRecording();
    }
  }

  abortRecording() {
    if (this.isRecording) {
      this.isRecording = false;
      this.audioRecordingService.abortRecording();
    }
  }

  stopRecording() {
    if (this.isRecording) {
      this.audioRecordingService.stopRecording();
      this.isRecording = false;
      this.audioRecordingService.getRecordedBlob().subscribe((data) => {
        this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
        this.recordedAudio = data
      });
    }
  }

  clearRecordedData() {
    this.blobUrl = null;
    this.recordedAudio = null;
    this.results = false;
  }

  uploadRecording() {
    let formData = new FormData();
    formData.append('audio_file', this.recordedAudio.blob);
    this.apiSerice.speech2text(formData).subscribe((res: any) => {
      console.log(res)
      if (res.original) {
        this.originalResult = res.original;
        this.results = true;
      } else {
        this.toastService.error('Please speak clearly or closer to the microphone');
        this.results = false;
      }
    }, err => {
      console.log(err)
    })    
  }

  ngOnDestroy(): void {
    this.abortRecording();
  }

}
