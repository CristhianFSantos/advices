import { AfterViewInit, Component } from '@angular/core';
import { AdviceService } from 'src/app/services/advice.service';
import { Advice } from './../../models/advice';

@Component({
  selector: 'advices-card-search-advice',
  templateUrl: './card-search-advice.component.html',
  styleUrls: ['./card-search-advice.component.scss'],
})
export class CardSearchAdviceComponent implements AfterViewInit {
  constructor(private service: AdviceService) {}

  advice: string;
  adviceObj: Advice;

  ngAfterViewInit(): void {
    this.service.getAdvices().subscribe((data) => {
      this.adviceObj = data;
      this.advice = this.adviceObj.slip.advice;
    });
  }
}
