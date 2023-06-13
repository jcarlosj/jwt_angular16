import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Usuario } from "../models/Usuario";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    url = 'http://localhost:4001/api'
    tokenUsuario:string | null = ''

    constructor(private http:HttpClient, private router:Router) {
        this.tokenUsuario = (sessionStorage.getItem('token') !== null ) ? sessionStorage.getItem('token') : 'no-token';
    }

    getUsuarios(): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenUsuario}`);
        return this.http.get(`${this.url}/usuarios`, { headers });
    }

    getUsuario(id: String): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenUsuario}`);
        return this.http.get(`${this.url}/usuario`, { headers });
    }

    postUsuarios(usuario:Usuario): Observable<any> {
        return this.http.post(`${this.url}/usuario`, usuario);
    }

    putUsuarios(id: String, usuario:Usuario): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenUsuario}`);
        return this.http.put(`${this.url}/usuario/${id}`, usuario, { headers });
    }

    deleteUsuarios(id: String): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${this.tokenUsuario}`);
        return this.http.delete(`${this.url}/usuario/${id}`, { headers });
    }

    //inicio de sesion
    postIngresoUsuario(dataLogin:object): Observable<any> {
        return this.http.post(`${this.url}/ingreso`, dataLogin);
    }

    estaLogueado(){
        let estado = (sessionStorage.getItem('token') !== null) ? true : false
        console.log(estado)
        return estado
    }

    cerrarSesion(){
        sessionStorage.removeItem('token');
        this.router.navigate(['/ingreso'])
    }

}
