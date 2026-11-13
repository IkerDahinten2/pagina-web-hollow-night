# Hollow Knight — Página Web para Fans

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

Sitio web temático dedicado a los fans de **Hollow Knight**: no solo para quienes disfrutan el juego, sino también para quienes se interesan por todo lo que lo rodea — su historia, personajes, ambientación, mundo, trasfondo, interacciones y desafíos.

---

## Contenido del sitio

- **Inicio** con portada, introducción al mundo de Hallownest y mapa.
- **Herramientas principales** del Caballero: Aguijón, Espíritu Vengativo, Capa de Polilla, Garras de Mantis, Salto Desolador, Corazón de Cristal, Aguijón Onírico y Lágrima de Isma.
- **Personajes secundarios** con página propia para cada uno:
  - Hornet (incluye sección de *Silksong*)
  - Quirrel
  - Cornifer
  - Zote
  - Ciervocaminos
- **Registro del Caballero**: formulario de inscripción para fans.

## Características técnicas

- HTML5 semántico con navegación entre páginas, tablas y formularios.
- CSS3 con animación de entrada (`@keyframes fadeIn`) y diseño responsivo (`@media`).
- Favicon completo y `site.webmanifest` para dispositivos móviles.

## Estructura del proyecto

```
pagina-web-hollow-night/
├── index.html          # Página principal
├── css/
│   └── style.css       # Hoja de estilos global
├── pages/              # Páginas individuales de personajes
│   ├── hornet.html
│   ├── quirrel.html
│   ├── cornifer.html
│   ├── zote.html
│   └── Ciervocaminos.html
└── images/             # Fondos, herramientas, personajes y favicon
    └── favicon/
```

## Cómo ejecutarlo

No requiere instalación ni dependencias.

```bash
git clone https://github.com/IkerDahinten2/pagina-web-hollow-night.git
cd pagina-web-hollow-night
```

Abre `index.html` en tu navegador o usa la extensión *Live Server* de VS Code.

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
