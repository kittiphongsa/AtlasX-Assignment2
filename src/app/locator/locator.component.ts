import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CustomPoint } from './custompoint.class';

@Component({
  selector: 'app-locator',
  templateUrl: './locator.component.html',
  styleUrls: ['./locator.component.css']
})
export class LocatorComponent implements OnInit {

  position: CustomPoint;
  @Input() formTitle = "Locator";
  @Output() located = new EventEmitter<CustomPoint>();

  ngOnInit(){
    this.position = new CustomPoint(undefined,undefined);
    console.dir(this.position);
  }

  onLocate(form: NgForm){
    this.position = new CustomPoint(form.value.lat,form.value.lng);
    this.located.emit(this.position);
    console.dir(this.position);
  }

}
