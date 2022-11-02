import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';
import { AppToastService } from 'src/app/services/toast.service';

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
        // this.recordedAudio = data;
        this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
      });
    }
  }

  clearRecordedData() {
    this.blobUrl = null;
    // this.recordedAudio = null;
  }

  uploadRecording() {
    console.log(this.audioRecordingService.getRecordedBlob())
    this.apiSerice.speech2text(this.audioRecordingService.getRecordedBlob()).subscribe((res: any) => {
      console.log(res)
    }, err => {
      console.log(err);
    })    
  }

  ngOnDestroy(): void {
    this.abortRecording();
  }

}
