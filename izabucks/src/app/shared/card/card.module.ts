import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

import { CardComponent } from './card.component';

@NgModule({
  declarations: [ CardComponent ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ButtonModule],
  exports: [ CardComponent ],

})
export class CardModule {}
