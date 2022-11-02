import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AppToastService } from '../../services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private apiService: ApiService,
  ) {}

  languages = [
    {value: 'el', name: 'Greek'},
    {value: 'fr', name: 'French'},
    {value: 'es', name: 'Spanish'},
    {value: 'de', name: 'German'}
  ]

  tabActiveIndex: number = 0;

  ngOnInit(): void {

  }

  handleTabChange(event: any) {
    this.tabActiveIndex = event.index;
  }

}
