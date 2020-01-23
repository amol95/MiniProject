import { Component, OnInit, OnChanges } from '@angular/core';
import { ServletService } from '../servlet.service';
import {MatDialog} from '@angular/material';
import { EditdriveComponent } from '../editdrive/editdrive.component';


@Component({
  selector: 'app-view-drive',
  templateUrl: './view-drive.component.html',
  styleUrls: ['./view-drive.component.css']
})
export class ViewDriveComponent implements OnInit {


  viewDrives:any[];
  constructor(private _v:ServletService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.reload(); 
  }

  reload(){
    this.viewDrives=null;
    this._v.viewData().subscribe((d:any)=>{this.viewDrives=d});
  }

  deleteData(id)
  {
   this._v.deleteData(id).subscribe();
   alert("Deleted Successfully.");
   this.reload();

  }
  editDialog(id)
  {
   const dilogref=this.dialog.open(EditdriveComponent,{data:{id:id}});
      dilogref.afterClosed().subscribe((d:any)=>{this.reload()});

  }
    

}