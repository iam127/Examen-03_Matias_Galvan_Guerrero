# Dragon Ball Explorer

Proyecto desarrollado para el examen de React. Es una aplicación web que muestra personajes de Dragon Ball usando su API pública.

## Tecnologías

- React 18
- Vite
- React Router DOM
- Axios
- CSS3

## Enlaces

**Deploy Netlify:** https://examen-3-matias-galvan-guerrero.netlify.app

**Video YouTube:** https://youtu.be/37dYDyyE0Dw

**Repositorio:** https://github.com/iam127/Examen-03_Matias_Galvan_Guerrero

## Instalación

Clonar el repositorio:
```bash
git clone https://github.com/iam127/Examen-03_Matias_Galvan_Guerrero.git
cd Examen-03_Matias_Galvan_Guerrero
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

## Estructura del Proyecto
```
dragonball-react/
├── src/
│   ├── pages/
│   │   ├── Home.jsx       # Página principal con hero
│   │   └── Entities.jsx   # Lista de personajes
│   ├── App.jsx            # Rutas principales
│   ├── App.css            # Estilos globales
│   └── main.jsx           # Punto de entrada
├── package.json
└── README.md
```

## Funcionalidades

**Página Home (/):**
- Hero con título y descripción del proyecto
- Muestra 6 personajes destacados
- Cards con imagen y nombre
- Efectos hover

**Página Entities (/entities):**
- Lista completa de 20 personajes
- Cada personaje muestra:
  - Nombre
  - Raza
  - Ki (nivel de poder)
  - Género

## API Utilizada

Dragon Ball API: https://dragonball-api.com

Endpoints usados:
- `/api/characters?limit=6` - Personajes para Home
- `/api/characters?limit=20` - Todos los personajes para Entities

## Características Técnicas

- React Router DOM para navegación entre rutas
- Axios para peticiones HTTP a la API
- Hooks: useState y useEffect para manejo de estado
- CSS personalizado con gradientes y animaciones
- Diseño responsive (desktop, tablet, mobile)
- Loaders mientras carga la información

## Compilar para Producción
```bash
npm run build
```

## Autor

**Matias Galvan Guerrero**
