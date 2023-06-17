import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { ServerUsuariosComponent } from './components/admin/usuarios/server-usuarios/server-usuarios.component';
import { VistaUsuariosComponent } from './components/admin/usuarios/vista-usuarios/vista-usuarios.component';
import { AdministracionComponent } from './components/admin/administracion/administracion.component';
import { Error404Component } from './components/error404/error404.component';
import { RangeScroll1Component } from './components/ejmplos/range-scroll1/range-scroll1.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        InicioComponent,
        RegistroComponent,
        IngresoComponent,
        ServerUsuariosComponent,
        VistaUsuariosComponent,
        AdministracionComponent,
        Error404Component,
        RangeScroll1Component,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
