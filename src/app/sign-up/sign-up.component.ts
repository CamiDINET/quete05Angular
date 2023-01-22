import { Component } from '@angular/core';
import { Order } from './order';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  model: Order = new Order("", "", "", "");
  

  constructor() { }

  onSubmit(): void {
    // Formulaire envoyé
    
    console.log(this.model);
  }
  
}


