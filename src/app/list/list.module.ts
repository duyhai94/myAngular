import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ListDetailComponent } from "./list-detail/list-detail.component";
import { ListHomeComponent } from "./list-home/list-home.component";
import { listRoutes } from "./list.routes";
import {  CardFilterModule } from './component/card-filter/card-filter.component';
import {  BaseTableModule } from './component/base-table/base-table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
          declarations: [ListHomeComponent, ListDetailComponent,],
          imports: [CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    RouterModule.forChild(listRoutes),
                    CardFilterModule,
                    BaseTableModule,
                    HttpClientModule
                  ],
          
          exports:[]
})
export class ListModule{}