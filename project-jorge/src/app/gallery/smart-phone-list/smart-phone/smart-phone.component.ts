import { Component, OnInit, Input } from '@angular/core';
import { SmartPhone } from '../../../models/smart-phone';
@Component({
  selector: 'app-smart-phone',
  templateUrl: './smart-phone.component.html',
  styleUrls: ['./smart-phone.component.css']
})
export class SmartPhoneComponent implements OnInit {
  @Input() smartphone: SmartPhone;
  constructor() { }

  ngOnInit() {
   
  }

}
