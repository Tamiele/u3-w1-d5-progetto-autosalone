import { Component } from '@angular/core';
import { ICar } from '../../interfaces/i-car';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss',
})
export class FordComponent {
  arrayCarFord: ICar[] = [];

  ngOnInit(): void {
    fetch('db.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('ERROR');
        }
      })
      .then((dati) => {
        this.arrayCarFord = dati.filter((car: ICar) => car.brand === 'Ford');
      })
      .catch((err) => {
        console.log('ERRORE', err);
      });
  }
}
