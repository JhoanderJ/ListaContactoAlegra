import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioApiAlegraService } from '../../app/API/servicios.services';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  contacts:any;
  identificacion = '';
  nombre='';
  movil='';
  direccion='';
  email='';
  phoneprimary='';
  constructor(public navCtrl: NavController, public navParams: NavParams,private servicioapialegra :ServicioApiAlegraService,public alertCtrl: AlertController) {
  }


 agregarContacto(){
   const contacto = {
    "name":  this.nombre,
    "identification": this.identificacion,
    "phonePrimary": this.phoneprimary,
    "email": this.email,
    "address": this.direccion,
}
       this.servicioapialegra.crearContacto(contacto)
       .subscribe(
         (response)=>{
          console.log(response)
         },
         (error)=>{
          console.log(error)
         }
       );
   }
   

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Contacto Agregado con Exito',
      subTitle: 'El contacto se mostrara en su lista de contacto',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.setRoot(HomePage);
    
  }
}


