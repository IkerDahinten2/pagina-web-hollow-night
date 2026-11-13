# Hollow Knight — Página Web para Fans

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Sitio web temático para los fans de **Hollow Knight**: no solo para quienes disfrutan el juego, sino también para quienes se interesan por todo lo que lo rodea, como su historia, personajes, ambientación, mundo, trasfondo, interacciones y desafíos.

---

## Contenido del sitio

- **Inicio**: portada e introducción al mundo de Hallownest.
- **Herramientas principales** del Caballero: Aguijón, Espíritu Vengativo, Capa de polilla, Garras de mantis, Salto desolador, Corazón de cristal, Aguijón onírico y Lágrima de Isma.
- **Personajes secundarios**, cada uno con su propia página:
  - Hornet (incluye una sección sobre *Silksong*)
  - Quirrel
  - Cornifer
  - Zote
  - Ciervocaminos
- **Registro del Caballero**: formulario para fans con validación y mensaje de confirmación.

## Características técnicas

- **HTML5 semántico**: un solo `h1` por página, encabezados `h2`/`h3` en orden, `<main>`, `<nav>`, `<article>` y tablas con `thead` y `caption`.
- **Accesibilidad**: texto alternativo en todas las imágenes, enlaces descriptivos, etiquetas asociadas a cada campo y foco visible al navegar con teclado.
- **Responsive**: viewport correcto e imágenes que se adaptan al ancho de la pantalla.
- **Rendimiento**: imágenes en WebP/AVIF/JPEG con su extensión real y carga diferida (`loading="lazy"`). El fondo pasó de 2 MB (PNG) a 57 KB (WebP).
- **CSS3**: animación de entrada (`@keyframes fadeIn`), efectos al pasar el cursor y `@media` para móviles.
- **JavaScript**: validación del formulario de registro (`js/registro.js`).
- Favicon completo y `site.webmanifest`.

## Estructura del proyecto

```
pagina-web-hollow-night/
├── index.html            # Página principal
├── css/
│   └── style.css         # Hoja de estilos global
├── js/
│   └── registro.js       # Validación del formulario de registro
├── pages/                # Páginas de personajes
│   ├── hornet.html
│   ├── quirrel.html
│   ├── cornifer.html
│   ├── zote.html
│   └── ciervocaminos.html
└── images/               # Imágenes en minúsculas con guiones (ej. garras-de-mantis.jpg)
    └── favicon/
```

## Cómo ejecutarlo

No requiere instalación ni dependencias.

```bash
git clone https://github.com/IkerDahinten2/pagina-web-hollow-night.git
cd pagina-web-hollow-night
```

Abre `index.html` en tu navegador o usa la extensión *Live Server* de VS Code.

## Pruebas realizadas

| Caso | Resultado |
|------|-----------|
| Todas las rutas a imágenes, estilos y páginas existen (52 verificaciones) | ✅ |
| Las 11 imágenes del inicio cargan y tienen texto alternativo | ✅ |
| Vista móvil (375 px) sin zoom forzado ni desbordes | ✅ |
| Formulario: nombre vacío, correo inválido, horas negativas y juramento sin marcar se rechazan | ✅ |
| Formulario válido: muestra la confirmación y se limpia sin recargar la página | ✅ |

## Flujo de ramas

| Rama | Propósito |
|------|-----------|
| `main` | Versión estable |
| `dev` | Integración de cambios |
| `frontend` | Desarrollo del sitio |

## Créditos

*Hollow Knight* es una marca de **Team Cherry**. Este es un proyecto académico sin fines de lucro creado por fans; las imágenes pertenecen a sus respectivos autores.

## Autor

**Iker Dahinten** — [@IkerDahinten2](https://github.com/IkerDahinten2)
