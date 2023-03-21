import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AdviceResponse } from '../interfaces/advice-response';
import { Slip } from '../interfaces/slip';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  private _adviceTextSubject = new BehaviorSubject<string>('');
  public adviceText$ = this._adviceTextSubject.asObservable();

  private _adviceNumberSubject = new BehaviorSubject<number>(0);
  public adviceNumber = this._adviceNumberSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getRandomAdvice() {
    this.httpClient.get<AdviceResponse>('https://api.adviceslip.com/advice')
      .pipe(
        map((response: AdviceResponse) => response.slip),
        tap((slip: Slip) => {
          this._adviceNumberSubject.next(slip.id);
          this._adviceTextSubject.next(slip.advice);
        }),
      ).subscribe();
  }
}
