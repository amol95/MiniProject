import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDriveComponent } from './create-drive/create-drive.component'
import { ViewDriveComponent } from './view-drive/view-drive.component';
import { EditdriveComponent } from './editdrive/editdrive.component';


const routes: Routes = [
  {path:'create',component:CreateDriveComponent},
  {path:'view',component:ViewDriveComponent},
  {path:'edit',component:EditdriveComponent},

  {path:'edit/:id',component:EditdriveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
