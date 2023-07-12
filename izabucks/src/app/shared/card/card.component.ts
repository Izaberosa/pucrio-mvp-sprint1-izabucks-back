import { AfterViewInit, Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { BebidasService } from 'src/app/core/api/bebidas.service';
import { Bebida } from '../models/bebida.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements AfterViewInit {
  unsubscribeAll$ = new Subject();
  allBebidas: Bebida[] = [];

  constructor(public bebidasService: BebidasService) {}

  ngAfterViewInit(): void {
    this.bebidasService
      .getBebidas()
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe((value) => {
        this.allBebidas = value.bebidas;
      });
  }
}
