import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { ButtonModule } from 'primeng/button';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { CardModule } from './shared/card/card.module';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ModalFormCardComponent } from './shared/modal-form-card/modal-form-card.component';

//Services
import { BebidasService } from './core/api/bebidas.service';
import {MessageService} from 'primeng/api';


@NgModule({
  declarations: [AppComponent, HeaderComponent, ModalFormCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MessagesModule,
    MessageModule,
  ],
  providers: [BebidasService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
