import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../../car';

@Component({
  selector: 'app-car',
  standalone: false,
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input() //pai para filho
  carFilho: Car = {} as Car;

  @Output() //filho para o pai
  saveEmitter = new EventEmitter();

  save() {
    this.saveEmitter.emit();
  }
}
