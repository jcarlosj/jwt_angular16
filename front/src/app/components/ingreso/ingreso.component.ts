import { Component } from '@angular/core';
import { UsuarioService } from "src/app/services/usuario.service"
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-ingreso',
    templateUrl: './ingreso.component.html',
    styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent {

    user = {
        correo: '',
        password: ''
    }

    constructor(private _usuarioService: UsuarioService, private router:Router) { }

    ingresoUsuario() {
        this._usuarioService.postIngresoUsuario(this.user).subscribe(data => {
            sessionStorage.setItem('token', data.token)
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido!',
                background: '#212529',
                iconColor: '#00ff00',
                color: '#fff',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#121212'
            })
            this.router.navigate(['/inicio'])
        }, err => {
            Swal.fire({
                icon: 'error',
                title: 'Usuario y/o contraseña invalidos',
                background: '#212529',
                iconColor: '#ff0000',
                color: '#fff',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#121212'
            })
        })
    }
}
