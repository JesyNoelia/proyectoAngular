export interface Usuario {
    id: string,
    nombre: string,
    apellidos: string,
    email: string,
    telefono: string,
    password: string,
    fk_colegio: number,
    fecha_registro: string,
}
