import { takeUntil, Subject } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BebidasService } from 'src/app/core/api/bebidas.service';
import { Bebida } from '../models/bebida.model';

import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-modal-form-card',
  templateUrl: './modal-form-card.component.html',
  styleUrls: ['./modal-form-card.component.css'],
})
export class ModalFormCardComponent {
  form: FormGroup;
  unsubscribeAll$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private bebidasService: BebidasService,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      categoria: [null, Validators.required],
      nome: [null, Validators.required],
      imagem: [null, Validators.required],
      valor: [null, Validators.required],
      descricao: [null, Validators.required],
    });
  }

  cadastrarBebida() {
    const dadosBebidas: Bebida = {
      bebidas: {
        categoria: this.form.get('categoria')?.value,
        nome: this.form.get('nome')?.value,
        imagem: this.form.get('imagem')?.value,
        valor: this.form.get('valor')?.value,
        descricao: this.form.get('descricao')?.value,
        price: null,
        id: null,
        nota_media: null,
      },
    };
    this.bebidasService
      .postBebidas(dadosBebidas)
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(
        (value) => {
          if (value) {
            alert(value);
            this.messageService.add({
              severity: 'success',
              summary: 'Bebida Cadastrada com Sucesso!',
              detail: 'Cadastro feito com sucesso',
            });
          }
        },
        (error: HttpErrorResponse) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Não foi possível cadastrar a bebida',
            detail: 'Falha no cadastro',
          });
        }
      );
  }
}
