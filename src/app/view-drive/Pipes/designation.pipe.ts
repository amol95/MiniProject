import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'designation'
})
export class DesignationPipe implements PipeTransform {

  transform(value:number): any 
  {
  
    if( value==0)
    {
      return "Full stack developer";
    }
    else if( value==1)
    {
      return "Ui developer";
    }
    else if( value==2)
    {
      return "Backend developer";
    }
    else( value==3)
    {
      return "Testing Engineer"
    }
  
    
  }

}
