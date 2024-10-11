import { Component } from '@angular/core';
import { ICar } from '../../interfaces/i-car';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss',
})
export class AudiComponent {
  arrayCarAudi: ICar[] = [];

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
        this.arrayCarAudi = dati.filter((car: ICar) => car.brand === 'Audi');
      })
      .catch((err) => {
        console.log('ERRORE', err);
      });
  }
}
