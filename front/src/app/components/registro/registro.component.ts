import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from "src/app/models/Usuario";
import { UsuarioService } from "src/app/services/usuario.service"
import Swal from 'sweetalert2';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {

    usuarioForm: FormGroup;
    regexNumeros = /^[0-9]+$/;
    regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    constructor(private fb: FormBuilder, private router: Router, private _Usuarioservice: UsuarioService, private idRoute: ActivatedRoute) {
        this.usuarioForm = this.fb.group({
            nombres: ['', [Validators.required]],
            apellidos: ['', [Validators.required]],
            edad: ['', [Validators.required, Validators.pattern(this.regexNumeros)]],
            correo: ['', [Validators.required, Validators.pattern(this.regexCorreo)]],
            password: ['', [Validators.required]],
            passVerify: ['', [Validators.required]]
        })
    }

    ngOnInit(): void { }

    crearUsuario() {
        if (this.usuarioForm.get('password')?.value == this.usuarioForm.get('passVerify')?.value) {
            this._Usuarioservice.postUsuarios(this.usuarioForm.value).subscribe(data => {
                this.router.navigate(['/ingreso']);
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario creado correctamente',
                    background: '#212529',
                    iconColor: '#00ff00',
                    color: '#fff',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#121212'
                })
            }, error => {
                console.log(error);
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Las contraseñas ingresadas no concuerdan',
                background: '#212529',
                iconColor: '#ff0000',
                color: '#fff',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#121212'
            })
        }
    }
}
