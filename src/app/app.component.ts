import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FITme';

  btn1 = 'btn btn-primary active'
  btn2 = 'btn btn-primary'
  btn3 = 'btn btn-primary'

  hddtq = false
  hdpdt = true
  hdspt = true

  dtq1 = 'vestido'
  dtq2 = 'camisa'
  dtq3 = 'macacão'

  dscdtq1 = 'Vestido bonito 14,99'
  dscdtq2 = 'Camisa dahora 89,99'
  dscdtq3 = 'Macacão roxo 29,99'

  imgdtq1 = '/../assets/vestido.jpg'
  imgdtq2 = '/../assets/camisa.jpg'
  imgdtq3 = '/../assets/macacao.jpg'

  home(){

    this.btn1 = 'btn btn-primary active'
    this.btn2 = 'btn btn-primary'
    this.btn3 = 'btn btn-primary'

    this.hddtq = false
    this.hdpdt = true
    this.hdspt = true
  }

  produtos(){

    this.btn1 = 'btn btn-primary'
    this.btn2 = 'btn btn-primary active'
    this.btn3 = 'btn btn-primary'

    this.hddtq = true
    this.hdpdt = false
    this.hdspt = true
  }

  suporte(){

    this.btn1 = 'btn btn-primary'
    this.btn2 = 'btn btn-primary'
    this.btn3 = 'btn btn-primary active'

    this.hddtq = true
    this.hdpdt = true
    this.hdspt = false
  }
}
