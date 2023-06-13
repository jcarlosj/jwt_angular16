import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdministracionComponent } from './components/admin/administracion/administracion.component';
import { autenticacionGuard } from './guards/autenticacion.guard';
import { Error404Component } from './components/error404/error404.component';
import { VistaUsuariosComponent } from './components/admin/usuarios/vista-usuarios/vista-usuarios.component';

const routes: Routes = [
    { path: '', redirectTo: 'inicio' , pathMatch:'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'ingreso', component: IngresoComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'admin', canMatch:[autenticacionGuard],  component: AdministracionComponent },
    { path: 'admin/gestion-usuarios', canMatch:[autenticacionGuard],  component: VistaUsuariosComponent },
    { path: '404', component: Error404Component },
    { path: '**', pathMatch: 'full', redirectTo: '404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
