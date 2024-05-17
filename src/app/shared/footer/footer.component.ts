import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  sendDate=new Date();
  formattedDate : any;
  constructor(){
    this.sendDate.setMonth(this.sendDate.getMonth());
    this.formattedDate=this.sendDate.toISOString().slice(0,4);
  }

}
