import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';

const SETUP_ROUTES: Routes = [
  {
    path: 'setup',
    component: SetupComponent
  }
];


@NgModule({
  declarations: [
    SetupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SETUP_ROUTES),
  ],
  exports: [
    // SetupComponent
  ]
})
export class SetupModule { }
