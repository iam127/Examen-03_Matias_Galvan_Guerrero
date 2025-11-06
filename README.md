# Dragon Ball Explorer

Proyecto desarrollado para el examen de React. Es una aplicación web que muestra personajes de Dragon Ball usando su API pública.

## Tecnologías

- React 18
- Vite
- React Router DOM
- Axios
- CSS3

## Netlify

Link: examen-3-matias-galvan-guerrero.netlify.app

## Instalación

Clonar el repositorio:
```bash
git clone https://github.com/iam127/Examen-03_Matias_Galvan_Guerrero.git
cd dragonball-react
```

Instalar dependencias:
```bash
npm install
```

Ejecutar el proyecto:
```bash
npm run dev
```

El proyecto se abrirá en `http://localhost:5173`

## Estructura
```
src/
├── pages/
│   ├── Home.jsx       # Página principal
│   └── Entities.jsx   # Lista de personajes
├── App.jsx            # Rutas principales
└── App.css            # Estilos
```

## Funcionalidades

**Página Home (/):**
- Título y descripción del proyecto
- Muestra 6 personajes principales
- Cards con imagen y nombre

**Página Entities (/entities):**
- Lista completa de 20 personajes
- Cada personaje muestra:
  - Nombre
  - Raza
  - Ki
  - Género

## API

Uso la API pública de Dragon Ball: https://dragonball-api.com

Endpoints usados:
- `/api/characters?limit=6` para la página principal
- `/api/characters?limit=20` para la lista completa

## Características técnicas

- React Router para la navegación
- Axios para las peticiones HTTP
- useState y useEffect para manejar el estado
- CSS personalizado con gradientes
- Diseño responsive

## Deploy

Deploy: [Agregar enlace cuando esté listo]

Video: [Agregar enlace cuando esté listo]

## Autor

Matias Galvan Guerrero - Examen React 2025

## Notas

Proyecto realizado como parte del examen práctico de React. Cumple con todos los requisitos solicitados:

- Configuración con Vite 
- Consumo de API 
- Ruta Home con hero 
- Ruta Entities con propiedades 
- React Router 
- Estilos personalizados 

---

Repositorio: https://github.com/iam127/Examen-03_Matias_Galvan_Guerrero