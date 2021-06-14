import { Producto } from "../interfaces/producto.interface";

export const PRODUCTOS: Producto[] = [
    {
        id: 1,
        titulo: 'Mochila',
        precio: 20,
        descripcion: 'Mochila escolar para niños',
        curso: '2',
        estado: 'muy bueno',
        imagen: 'https://img01.ztat.net/article/spp-media-p1/11433a6d81bb31588fb729443a96d366/e05af28ae3ad4ed09fccc174d0292b41.jpg?imwidth=1800&filter=packshot',
        fk_categoria: 'material_escolar'

    },
    {
        id: 2,
        titulo: 'Pelota de Fantasia',
        precio: 5,
        descripcion: 'Pelota de fútbol',
        curso: '3',
        estado: 'como nueva',
        imagen: 'https://images-na.ssl-images-amazon.com/images/I/71p7KdLe3XL._AC_SX425_.jpg',
        fk_categoria: 'juguetes_didacticos'

    },
    {
        id: 3,
        titulo: 'Zapatillas',
        precio: 15,
        descripcion: 'Zapatillas deportivas',
        talla: '24',
        curso: '4',
        estado: 'buen estado',
        imagen: 'https://img01.ztat.net/article/spp-media-p1/da846abbfa8f4197b76ae6b0a5da7320/8151726ab9da4b11a40a1da6720e28d5.jpg?imwidth=1800&filter=packshot',
        fk_categoria: 'material_deportivo'

    },

    {
        id: 4,
        titulo: 'Uniforme',
        precio: 15,
        descripcion: 'Uniforme para niña',
        talla: 'M',
        curso: '5',
        estado: 'muy bueno',
        imagen: 'https://sc04.alicdn.com/kf/H07af5bd5f5404f8fa80521e0c80af213Q.jpg',
        fk_categoria: 'uniformes'

    },
    {
        id: 5,
        titulo: 'Juguete',
        precio: 20,
        descripcion: 'Juguete didáctico',
        curso: '3',
        estado: 'buen estado',
        imagen: 'https://images-eu.ssl-images-amazon.com/images/I/51x37e2StHL.jpg',
        fk_categoria: 'juguetes_didacticos'

    },
    {
        id: 6,
        titulo: 'Tablet',
        precio: 15,
        descripcion: 'Tablet infaltil',
        curso: '2',
        estado: 'buen estado',
        imagen: 'https://i.blogs.es/b3967d/61guyk2ae0l._sl1001_/450_1000.jpg',
        fk_categoria: 'tecnologia'

    },


]