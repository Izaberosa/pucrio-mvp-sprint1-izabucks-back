import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { BebidasService } from 'src/app/core/api/bebidas.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements AfterViewInit {
  form: FormGroup;
  unsubscribeAll$ = new Subject();

  valor = '200';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public bebidasService: BebidasService
  ) {
    this.form = this.fb.group({
      id: null,
      imagem: null,
      nome: null,
      categoria: null,
      descricao: null,
      valor: null,
    });

    this.bebidasService
      .getBebidas()
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe((value) => {
        // console.log(value);
        this.form.get('nome')?.setValue(value[0].nome);
      });
  }

  ngAfterViewInit(): void {
    this.bebidasService
      .getBebidas()
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe((value) => {
      });
      this.form.get('valor')?.setValue('TESTE');
      // console.log(this.form.get('valor')?.value);
  }
}
