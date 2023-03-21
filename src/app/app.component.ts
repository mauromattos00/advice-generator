import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdviceService } from './services/advice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  adviceId$: Observable<number> = this.adviceService.adviceId$;
  adviceText$: Observable<string> = this.adviceService.adviceText$;

  constructor(private adviceService: AdviceService) { }

  ngOnInit() {
    this.adviceService.getRandomAdvice();
  }
  
  getRandomAdvice() {
    this.adviceService.getRandomAdvice();
  }
}
