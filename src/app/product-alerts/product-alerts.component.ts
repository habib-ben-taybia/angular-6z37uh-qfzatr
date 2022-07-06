import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  //The @Input() decorator indicates that the property value (product) comes from the parent component ProductListComponent.
  @Input() product! : Product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
