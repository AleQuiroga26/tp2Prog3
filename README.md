#  Rocket Pizza

## Descripción

Rocket Pizza es una aplicación web desarrollada con Next.js que simula el sitio web de una pizzería. La aplicación permite navegar entre distintas secciones, visualizar productos, realizar pedidos y gestionar un carrito utilizando estado global y persistencia de datos.

Además, integra una API externa para mostrar información obtenida dinámicamente desde internet.

## Funcionalidades

### Navegación

* Página de inicio.
* Página de carta.
* Página de sucursales.
* Página de contacto.
* Página de productos obtenidos desde una API externa.
* Página de pedidos (carrito).

### Gestión de pedidos

* Agregar pizzas al carrito.
* Visualizar cantidad de pedidos en tiempo real.
* Eliminar pedidos individuales.
* Cálculo automático del total del pedido.
* Persistencia de datos mediante LocalStorage.

### Integración de API

* Consumo de una API REST externa mediante `fetch`.
* Visualización dinámica de productos obtenidos desde la API.

## Componentes reutilizables

* Navbar
* Footer
* PizzaCard
* Button

## Estado Global y Persistencia

Se implementó Context API mediante un `CartContext` para gestionar los pedidos desde cualquier parte de la aplicación.

También se utilizó LocalStorage para almacenar los pedidos y mantener la información incluso después de recargar la página.

## Tecnologías utilizadas

* Next.js
* React
* Tailwind CSS
* JavaScript
* Context API
* LocalStorage
* Fetch API

## API Utilizada

* FakeStore API
La API se utiliza para obtener productos de manera dinámica y mostrarlos dentro de la aplicación.

## Grupo

* Número de grupo: 7
* Nombre del grupo: LikeRiRi

## Integrantes

* Bellandi, Facundo
* Delfino, Santiago
* Capellino, Santiago
* Gonzalez, Mateo
* Quiroga, Alejandro


## Cómo ejecutar el proyecto

Instalar dependencias:

npm install

Iniciar el servidor de desarrollo:

npm run dev

Abrir en el navegador:
http://localhost:3000

## Objetivos cumplidos

* Rutas y navegación con Next.js.
* Layout principal con Navbar y Footer.
* Componentes reutilizables.
* Server Components y Client Components.
* Estado global utilizando Context API.
* Persistencia de datos mediante LocalStorage.
* Consumo de una API REST externa.
* Gestión de pedidos y carrito de compras.
