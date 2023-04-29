import { Component } from '@angular/core';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.css']
})
export class SuporteComponent {

  dtq1 = 'vestido'
  dtq2 = 'camisa'
  dtq3 = 'macacão'

  dscdtq1 = 'Vestido bonito 14,99'
  dscdtq2 = 'Camisa dahora 89,99'
  dscdtq3 = 'Macacão roxo 29,99'

  imgdtq1 = '/../../assets/vestido.jpg'
  imgdtq2 = '/../../assets/camisa.jpg'
  imgdtq3 = '/../../assets/macacao.jpg'
}
