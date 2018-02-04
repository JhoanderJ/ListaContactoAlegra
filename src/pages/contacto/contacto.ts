import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioApiAlegraService } from '../../app/API/servicios.services';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  item:Object;
  contacto:Object;
  id:any;
  contacts:any;
  identificacion = '';
  nombre='';
  movil='';
  direccion='';
  email='';
  phoneprimary='';

  constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                private servicioapialegra :ServicioApiAlegraService,
                public alertCrl: AlertController) {
        this.item = navParams.data;
        this.contacto = navParams.data;
  }
  
  eliminarContacto(item){
   console.log(item)
        this.servicioapialegra.eliminarContacto(item.id)
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
     let alert = this.alertCrl.create({
       title: 'Contacto Eliminado con Exito',
       subTitle: 'El contacto desaparecera de su lista de contacto',
       buttons: ['OK']
     });
     alert.present();
     this.navCtrl.setRoot(HomePage);
     
   }
  
}
