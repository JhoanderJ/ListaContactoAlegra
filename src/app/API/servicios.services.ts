import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Header} from "ionic-angular/components/toolbar/toolbar-header";




@Injectable()
export class ServicioApiAlegraService {
    constructor(private httpClient: HttpClient) { }
    
    getContact() {
        return this.httpClient.get('https://app.alegra.com/api/v1/contacts/?start=0&limit=30&order_direction=ASC&order_field=name',
            {
                headers: {
                    'Accept': '*/*'
                    , 'authorization': 'Basic amhvYW5kZXJ0MjNAZ21haWwuY29tOmJhZWIxNjk1ZmZjMTJiMDM2M2Iz'
                    , 'accept-encoding': 'gzip, deflate'
                }
            })

    }
    eliminarContacto(id) {
        return this.httpClient.delete('https://app.alegra.com/api/v1/contacts/'+id,
            {
                headers: {
                    'Accept': '*/*'
                    , 'authorization': 'Basic amhvYW5kZXJ0MjNAZ21haWwuY29tOmJhZWIxNjk1ZmZjMTJiMDM2M2Iz'
                    , 'accept-encoding': 'gzip, deflate'
                    , 'content-type': 'application/json'
                    , 'content-length': '2'
                }
            })
    }

    crearContacto(contacto) {
        return this.httpClient.post('https://app.alegra.com/api/v1/contacts',contacto,
            {
                headers: {
                    'Accept': '*/*'
                    , 'authorization': 'Basic amhvYW5kZXJ0MjNAZ21haWwuY29tOmJhZWIxNjk1ZmZjMTJiMDM2M2Iz'
                    , 'accept-encoding': 'gzip, deflate'
                    , 'content-type': 'application/json'
                    , 'content-length': '259'
                }
            })
    }
    
}