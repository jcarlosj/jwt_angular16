import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    habilitaLogOut:boolean = false
    constructor(public _usuarioService: UsuarioService){}

    ngOnInit(): void {
        // this.verificarLogin();
    }

    // verificarLogin():void{
    //     this.habilitaLogOut = this._usuarioService.estaLogueado()
    // }

    // cerrarSesionNav():void{
    //     this._usuarioService.cerrarSesion()
    // }

}
