import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDriveComponent } from './create-drive/create-drive.component';
import { ViewDriveComponent } from './view-drive/view-drive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { JoiningProcessPipe } from './view-drive/Pipes/joining-process.pipe';
import { DesignationPipe } from './view-drive/Pipes/designation.pipe';
import { EduCriteriaPipe } from './view-drive/Pipes/edu-criteria.pipe';
import { EditdriveComponent } from './editdrive/editdrive.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateDriveComponent,
    ViewDriveComponent,
    JoiningProcessPipe,
    DesignationPipe,
    EduCriteriaPipe,
    EditdriveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
