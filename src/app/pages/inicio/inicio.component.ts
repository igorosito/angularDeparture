import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/servicios/info-pagina.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css',]
})
export class InicioComponent implements OnInit {

  constructor(public servicios: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
