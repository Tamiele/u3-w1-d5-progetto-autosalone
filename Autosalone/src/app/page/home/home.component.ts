import { Component, OnInit } from '@angular/core';
import { ICar } from '../../interfaces/i-car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  arrayCarAvailable: ICar[] = [];

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
        this.arrayCarAvailable = dati.filter(
          (car: ICar) => car.available === true
        );
        this.shuffleArray(this.arrayCarAvailable);
      })
      .catch((err) => {
        console.log('ERRORE', err);
      });
  }

  shuffleArray(array: ICar[]): ICar[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
