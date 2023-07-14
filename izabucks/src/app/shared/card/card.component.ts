import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { BebidasService } from 'src/app/core/api/bebidas.service';
import { Bebida } from '../models/bebida.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements AfterViewInit {
  unsubscribeAll$ = new Subject();
  allBebidas: Bebida[] = [];

  constructor(
    public bebidasService: BebidasService,
    public messageService: MessageService,
    public cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.getBebidas();
  }

  getBebidas(): void {
    this.bebidasService
      .getBebidas()
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe((value) => {
        this.allBebidas = value.bebidas;
        window.sessionStorage.setItem(
          'dadosBebidas',
          JSON.stringify(this.allBebidas)
        );
      });
  }

  async deleteBebida(bebida: Bebida) {
    await this.delete(bebida);
    this.cdr.detectChanges();
    setTimeout(() => {
      this.getBebidas();
    }, 200);
  }

  delete(bebida: Bebida) {
    let result;
    this.bebidasService.deleteBebida(bebida.id, String(bebida.nome)).subscribe({
      next: () => {
        const deleted = this.allBebidas.find(
          (x) => x.id === (bebida.id, bebida.nome)
        );
        this.allBebidas.splice(this.allBebidas.indexOf(deleted as any), -1);
      },
      error: (err) => {
        this.messageService.add(err);
      },
    });
  }
}
