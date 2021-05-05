import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { profileRoutes } from './profile.routes';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileWordComponent } from './profile-word/profile-word.component';
import { DetailWordComponent } from './profile-word/detail-word/detail-word.component';
import { CreateWordComponent } from './profile-word/create-word/create-word.component';
import { HeaderProfileComponent } from './component/header-profile/header-profile.component';
import { ModalFormComponent } from './component/modal-form/modal-form.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ProfileDetailComponent,
    ProfileEditComponent,
    ProfileWordComponent,
    DetailWordComponent,
    CreateWordComponent,
    CreateWordComponent,
    DetailWordComponent,
    HeaderProfileComponent,
    ModalFormComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(profileRoutes)],
  exports: [MatDialogModule],
})
export class ProfileModule {}
