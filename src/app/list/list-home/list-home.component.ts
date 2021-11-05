import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.scss'],
})
export class ListHomeComponent implements OnInit {
  data = {
    cssClass: '',
    data: [
      {
        id: 'id',
        label: 'ID',
        name: 'id',
        type: 'string',
        value: '',
      },
      {
        id: 'name',
        label: 'name',
        name: 'name',
        type: 'string',
        value: '',
      },
      {
        id: 'email',
        label: 'email',
        name: 'email',
        type: 'string',
        value: '',
      },
      {
        id: 'address',
        label: 'address',
        name: 'address',
        type: 'string',
        value: '',
      },
    ],
  };

  dataTable = {
    cssClass: '',
    Data: [
      {
        text: 'ID',
        cssTh: '',
        cssTD: '',
        condition: 'id',
        type: '',
      },
      {
        text: 'Name',
        cssTh: '',
        cssTD: '',
        condition: 'name',
        type: '',
      },
      {
        text: 'Email',
        cssTh: '',
        cssTD: '',
        condition: 'email',
        type: '',
      },
      {
        text: 'Address',
        cssTh: '',
        cssTD: '',
        condition: 'address',
        type: '',
      },
    ],
  };

  dataApi = [
    {
      id: '1',
      name: '222222222',
      email: 'qweqwe@gmail.com',
      address: '123123',
    },
    {
      id: '2',
      name: 'ffff',
      email: 'qweqwe@gmail.com',
      address: '123123',
    },
    {
      id: '3',
      name: 'ffff',
      email: 'qweqwe@gmail.com',
      address: '123123',
    },
    {
      id: '4',
      name: 'ffff',
      email: 'qweqwe@gmail.com',
      address: '123123',
    },
    {
      id: '5',
      name: 'ffff',
      email: 'qweqwe@gmail.com',
      address: '123123',
    },
    {
      id: '6',
      name: 'ffff',
      email: 'qweqwe@gmail.com',
      address: '123123',
    },
    {
      id: '7',
      name: 'ffff',
      email: 'qweqwe@gmail.com',
      address: '123123',
    },
    {
      id: '8',
      name: 'ffff',
      email: 'qweqwe@gmail.com',
      address: '123123',
    },
    {
      id: '9',
      name: 'ffff',
      email: 'qweqwe@gmail.com',
      address: '123123',
    },
    {
      id: '10',
      name: 'ffff',
      email: 'qweqwe@gmail.com',
      address: '123123',
    },
  ];

  dataApiSub = [];
  constructor(
    private http : HttpClient
  ) {}

  ngOnInit(): void {
    this.dataApiSub = this.dataApi;

    
  }

  onChangeValueFilter = () => {
    const optionFilter = this.data.data.filter((x) => x.value);
    if (!optionFilter.length) return (this.dataApiSub = this.dataApi);
    optionFilter.forEach((x, ix) => {
      if (ix === 0) {
        
        this.dataApiSub = this.dataApi.filter((a) => a[x.id] === x.value);
      } else {
        this.dataApiSub = this.dataApiSub.filter((a) => a[x.id] === x.value);
      }
    });
  };
}
