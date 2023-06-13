export class Usuario{
    _id?:string
    nombres:string
    apellidos:string
    edad:number
    correo:string
    password:string
    rol?:string

    constructor(nombres:string, apellidos:string, edad:number, correo:string, password:string){
        this.nombres = nombres
        this.apellidos = apellidos
        this.edad = edad
        this.correo = correo
        this.password = password
    }
}

