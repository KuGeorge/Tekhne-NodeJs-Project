import { Component, OnInit, Input } from '@angular/core';
import { SmartPhone } from '../../models/smart-phone';
@Component({
  selector: 'app-smart-phone-list',
  templateUrl: './smart-phone-list.component.html',
  styleUrls: ['./smart-phone-list.component.css']
})
export class SmartPhoneListComponent implements OnInit {
  smartphones:Array<SmartPhone> = [new SmartPhone(9798790998,'Samsung','Galaxy S9 plus','black','https://www.olixar.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/6/5/65946.jpg'),
                                  new SmartPhone(312314124,'Apple','iPhone X','white','https://cdn.shopify.com/s/files/1/0149/8032/products/main_photo_-_crystal_2048x2048.jpg?v=1509128083'),
                                  new SmartPhone(123121321,'Huawei','P20 Pro','blue','https://cdn.eglobalcentral.com/images/detailed/33/huawei-p20-pro-6gb-128gb-dual-sim-clt-l29c-twilight.jpg')];

  constructor() { }

  ngOnInit() {
   
  }

}
