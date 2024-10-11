import { Component } from '@angular/core';
import { ICar } from '../../interfaces/i-car';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss',
})
export class FiatComponent {
  arrayCarFiat: ICar[] = [];

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
        this.arrayCarFiat = dati.filter((car: ICar) => car.brand === 'Fiat');
      })
      .catch((err) => {
        console.log('ERRORE', err);
      });
  }
}
