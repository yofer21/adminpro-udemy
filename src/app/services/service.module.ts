import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  SettingsService,
  SharedService,
  SidebarService,
  UsuarioService,
  SubirArchivoService,
  LoginGuard
} from './service.index';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UsuarioService,
    SubirArchivoService,
    LoginGuard
  ],
  declarations: []
})
export class ServiceModule {}
