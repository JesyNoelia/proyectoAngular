export interface Producto {
    id: number,
    titulo: string,
    precio: number,
    descripcion: string,
    talla?: string,
    curso?: string,
    estado: string,
    imagen: string,
    fk_categoria: string
}