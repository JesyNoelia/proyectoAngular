export interface Producto {
    id: number,
    titulo: string,
    precio: number,
    descripcion: string,
    talla?: string,
    curso?: string,
    estado: string,
    imagen: string,
    disponibilidad?: number,
    fk_categoria: string,
    fk_colegio: string,
}