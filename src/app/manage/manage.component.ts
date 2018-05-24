import { Component, OnInit } from '@angular/core';
import { SmartPhone } from '../models/smart-phone';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  smartphones:Array<SmartPhone> = [new SmartPhone(9798790998,'Samsung','Galaxy S9 plus','black','https://www.olixar.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/6/5/65946.jpg'),
                                  new SmartPhone(312314124,'Apple','iPhone X','white','https://cdn.shopify.com/s/files/1/0149/8032/products/main_photo_-_crystal_2048x2048.jpg?v=1509128083'),
                                  new SmartPhone(123121321,'Huawei','P20 Pro','blue','https://cdn.eglobalcentral.com/images/detailed/33/huawei-p20-pro-6gb-128gb-dual-sim-clt-l29c-twilight.jpg')];

  constructor() { }
  msg:string = '';
  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addSmartPhone():void{
    
      this.smartphones.push(this.model);
      this.msg = 'Smartphone added successfully';
      this.model = {};
    
    
  }

  deleteSmartPhone(i):void {
    var answer = confirm('Do you want to delete this smartphone?');
    if(answer) {
      this.smartphones.splice(i, 1);
      this.msg = 'Smartphone deleted successfully ';
    }
  }

  myValue;
  editSmartPhone(i):void {
    this.hideUpdate = false;
    this.model2.imei = this.smartphones[i].imei;
    this.model2.brand = this.smartphones[i].brand;
    this.model2.model = this.smartphones[i].model;
    this.model2.color = this.smartphones[i].color;
    this.model2.imageUrl = this.smartphones[i].imageUrl;
    this.myValue = i;
  }

  updateSmartPhone():void {
    let i = this.myValue;
    for(let j = 0; j < this.smartphones.length; j++){
      if(i == j) {
        this.smartphones[i] = this.model2;
        this.msg = 'Fields updated successfully';
        this.model2 = {};
        this.myValue = null;
        this.hideUpdate = true;
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }
  showCreate():void {
    this.hideUpdate = true;
    this.msg = '';
  }
  ngOnInit() {
  }

}
