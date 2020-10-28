import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['BMW', 40],
    ['Audi', 30],
    ['Mercedes', 90],
    ['Jaguar', 20],
    ['Volvo', 10]
  ];

  constructor() { }

  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    });
  }

}
