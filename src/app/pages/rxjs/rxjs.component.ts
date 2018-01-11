import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  intervalo: any;

  constructor() {
    this.subscription = this.regresaObservable()
      // .retry(2)
      .subscribe(
        numero => console.log('Subs', numero),
        error => console.error('Error en el obs (retry 2 veces)', error),
        () => console.log('El observador terminó')
      );
  }

  ngOnInit() {}

  ngOnDestroy() {
    clearInterval(this.intervalo);
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable(observer => {
      let contador = 0;

      this.intervalo = setInterval(() => {
        contador += 1;

        let salida = {
          valor: contador
        };

        observer.next(salida);

        /*     if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
 */
        /*        if (contador === 2) {
          clearInterval(intervalo);
          observer.error('Auxilio!');
        } */
      }, 500);
    })
      .retry(2)
      .map((resp: any) => {
        return resp.valor;
      })
      .filter((valor, index) => {
        if (valor % 2 === 1) {
          // inpar
          return true;
        } else {
          // par
          return false;
        }
      });
  }
}
