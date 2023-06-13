import { inject } from "@angular/core";
import { CanActivateFn, CanMatchFn } from '@angular/router';
import { UsuarioService } from "../services/usuario.service";


export const autenticacionGuard: CanMatchFn = (route, state) => {

    const _usuarioService = inject(UsuarioService)
    return _usuarioService.estaLogueado();
};
