import { Component, OnInit, Inject } from '@angular/core';
import{ServletService}from'../servlet.service';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import{ Router}from'@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editdrive',
  templateUrl: './editdrive.component.html',
  styleUrls: ['./editdrive.component.css']
})
export class EditdriveComponent implements OnInit {

viewDrives:any[];
  singleDrive:any;
  id:number;
  editform:FormGroup;
 

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private _ser:ServletService,private _r:Router, public  dialogref:MatDialogRef<EditdriveComponent>) { }
  
  ngOnInit() {
  
    
    
      this.singleDrive=null;
    
      //console.log(this.data.id);
      this.id=this.data.id;
    
    
      // this.id = this._ar.snapshot.params['cid'];
       console.log(this.id);
       this._ser.viewData().subscribe((e:any)=>{this.viewDrives=e;
       
       for(let i=0; i<this.viewDrives.length; i++)
       {
         if(this.viewDrives[i].id==this.id)
         {
           this.singleDrive=this.viewDrives[i];
         }
       }
       console.log(this.singleDrive.companyname);
    
       });
      
      
//for edit purpose

      this.editform=new FormGroup({
      id:new FormControl(this.id,[Validators.required]),
      companyname:new FormControl('',[Validators.required]),
      exp:new FormControl('',[Validators.required]),
      ctc:new FormControl('',[Validators.required]),
      joining:new FormControl('',[Validators.required]),
      bond:new FormControl('',[Validators.required]),
      position:new FormControl('',[Validators.required]),
      education:new FormControl('',[Validators.required]),
      followup: new FormControl('',[Validators.required]),
     
      });
    }




editData() 
{

  this._ser.editData(this.editform.value).subscribe();
  console.log(this.editform.value);
  //alert("Drive Updated Successfully");
  this._r.navigate(['/view']);
}


}
