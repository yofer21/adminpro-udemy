import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  SettingsService,
  SharedService,
  SidebarService,
  UsuarioService,
  SubirArchivoService,
  HospitalService,
  MedicoService,
  LoginGuard,
  AdminGuard,
  VerificaTokenGuard
} from './service.index';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UsuarioService,
    SubirArchivoService,
    ModalUploadService,
    HospitalService,
    MedicoService,
    LoginGuard,
    AdminGuard,
    VerificaTokenGuard
  ],
  declarations: []
})
export class ServiceModule {}
