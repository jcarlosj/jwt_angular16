import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
    selector: 'app-vista-usuarios',
    templateUrl: './vista-usuarios.component.html',
    styleUrls: ['./vista-usuarios.component.scss']
})
export class VistaUsuariosComponent implements OnInit{

    listaUsuarios: Usuario[] = [];

    constructor(private _usuarioService: UsuarioService){}

    ngOnInit(): void {
        this.obtenerUsuarios()
    }

    obtenerUsuarios(){
        this._usuarioService.getUsuarios().subscribe(data =>{
            console.log(data)
            this.listaUsuarios = data
        }, err => console.log(err));
    }

    eliminarProducto(id:any){}
}
