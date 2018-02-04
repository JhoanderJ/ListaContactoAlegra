import { Component } from '@angular/core';
import { ContactoPage } from '../contacto/contacto';
import { ServicioApiAlegraService } from '../../app/API/servicios.services';
import { AddPage } from '../add/add';
import { NavController } from 'ionic-angular';






@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  contacts:any;
  contactoPage = ContactoPage;
  items:any;
  constructor(private servicioapialegra :ServicioApiAlegraService, public navCtrl: NavController) { 
   
    this.servicioapialegra.getContact().subscribe(
      (response:any)=> {
        console.log(response)
        this.contacts=response
      },
      (error:any)=> {
        console.log(error)
      }
    )
    
  }
 
  goToAddPage(){

this.navCtrl.push(AddPage);

}


  
  
}
