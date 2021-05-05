import { Component, Input, OnInit } from '@angular/core';

interface HeaderProfile {
  cssClass?: string;
  width: string;
  heigth: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss'],
})
export class HeaderProfileComponent implements OnInit {
  @Input() headerProfile: HeaderProfile;
  constructor() {}

  ngOnInit(): void {}
}
