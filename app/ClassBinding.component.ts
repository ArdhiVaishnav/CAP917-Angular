import { Component } from '@angular/core'

@Component({
  selector:'cb',
  template:`<h1>
  <button [class.btn]="cl1" [class.btn-primary]="cl2"
  [class.active]="one">click here</button>
  </h1>`
})

export class cbComponent
{
  cl1 = true;
  cl2 = true;
  one = false;
}