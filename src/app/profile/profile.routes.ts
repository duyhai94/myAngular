import { Routes } from '@angular/router';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { CreateWordComponent } from './profile-word/create-word/create-word.component';
import { DetailWordComponent } from './profile-word/detail-word/detail-word.component';
import { ProfileWordComponent } from './profile-word/profile-word.component';

export const profileRoutes: Routes = [
  {
    path: 'detail',
    component: ProfileDetailComponent,
  },
  {
    path: 'edit',
    component: ProfileEditComponent,
  },
  {
    path: 'word',
    component: ProfileWordComponent,
    children: [
      {
        path: 'word-create',
        component: CreateWordComponent,
      },
      {
        path: 'word-detail',
        component: DetailWordComponent,
      },
      {
        path: '',
        redirectTo: 'word-create',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '',
    redirectTo: 'detail',
    pathMatch: 'full',
  },
];
