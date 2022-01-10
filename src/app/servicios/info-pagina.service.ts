import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  public viaje: any[] = [];
  
  constructor(private http: HttpClient) {
    console.log('Servicio de infoPagina listo');

    this.http.get('assets/data/info-pagina.json')
    .subscribe((resp: any) => {
      console.log(resp);
    })

    this.cargarViajes();

  }

  private cargarViajes(){
    this.http.get('https://departuredata-c9ab9-default-rtdb.firebaseio.com/viajes.json')
    .subscribe((resp: any) => {
      console.log(resp);
      this.viaje = resp;
    });
  }

}
