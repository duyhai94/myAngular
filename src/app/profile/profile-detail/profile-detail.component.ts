import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent implements OnInit {
  data = {
    cssClass: '',
    width: '350px',
    heigth: '50px',
    title: 'Card header profile',
    content: 'aaaaaaaaaaaaaaa',
  };
  constructor() {}

  ngOnInit(): void {}
}
