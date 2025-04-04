import { Component } from '@angular/core';
import { Car } from '../../car';

@Component({
  selector: 'app-cars-table',
  standalone: false,
  templateUrl: './cars-table.component.html',
  styleUrl: './cars-table.component.css'
})
export class CarsTableComponent {
  car: Car = {} as Car;
  idCount: number = 4;
  cars: Car[] = [
    {
      id: 1,
      name: "Uno",
      automaker: "Fiat",
      price: 10000,
      year: 2000
    },
    {
      id: 2,
      name: "Corsa",
      automaker: "Chevrolet",
      price: 20000,
      year: 2008
    },
    {
      id: 3,
      name: "Polo",
      automaker: "Volkswagen",
      price: 38000,
      year: 2012
    }
  ];
  saveCar() {
    this.car.id = this.idCount;
    this.idCount++;
    this.cars.push(this.car);
    this.car = {} as Car;
  }
}
