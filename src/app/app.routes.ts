import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'list',
        loadChildren: () =>
          import('./list/list.module').then((m) => m.ListModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./forms/forms.module').then( m => m.FormModules)
      },
      {
        path: 'forms-capcha',
        loadChildren: () => 
          import('./forms-capcha/forms-capcha.module').then(m => m.FormsCapchaModlue)
      },
      {
        path: '',
        redirectTo: 'forms-capcha',
        pathMatch: 'full',
      },
    ],
  },
];
