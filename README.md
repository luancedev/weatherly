# 🌤️ Weatherly

> Weather forecast app with 7-day forecast, real-time stats and geolocation. Built with React, TypeScript, Tailwind CSS and Open-Meteo API.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

- 📍 **Geolocalización automática** — detecta tu ubicación al abrir la app
- 🔍 **Búsqueda por ciudad** — busca cualquier ciudad del mundo
- 🌡️ **Temperatura actual** — con sensación térmica, máxima y mínima
- 📅 **Pronóstico de 7 días** — con probabilidad de lluvia por día
- 💧 **Estadísticas detalladas** — humedad, viento, índice UV y presión
- 🕐 **Reloj en tiempo real** — actualizado cada segundo
- 📱 **Responsive** — adaptado para móvil y escritorio

## 🛠️ Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Animations](https://tailwind-animations.com/)
- [Open-Meteo API](https://open-meteo.com/) — clima sin API key
- [BigDataCloud API](https://www.bigdatacloud.com/) — reverse geocoding

## 🚀 Getting Started

```bash
# Clonar el repositorio
git clone https://github.com/LUISCVG3/weatherly.git

# Instalar dependencias
cd weatherly
npm install

# Iniciar en desarrollo
npm run dev
```

## 📁 Project Structure

```
src/
├── components/
│   ├── BarLocation.tsx       # Barra superior con ciudad y reloj
│   ├── SearchFormCity.tsx    # Formulario de búsqueda
│   ├── DashboardWeather.tsx  # Temperatura principal
│   ├── PronosticsDays.tsx    # Pronóstico 7 días
│   ├── StadisticsWeather.tsx # Estadísticas del clima
│   ├── WeatherCard.tsx       # Tarjeta reutilizable
│   ├── DaysCard.tsx          # Tarjeta por día
│   └── LoadingWeather.tsx    # Pantalla de carga
├── hooks/
│   └── useGetWeather.ts      # Custom hook para el clima
├── services/
│   └── GetWeather.ts         # Servicio de la API
├── types/
│   └── weather.ts            # Interfaces de TypeScript
└── App.tsx
```

## 🌐 APIs

| API                                                                  | Uso                  | API Key         |
| -------------------------------------------------------------------- | -------------------- | --------------- |
| [Open-Meteo](https://open-meteo.com/)                                | Datos del clima      | ❌ No requerida |
| [Open-Meteo Geocoding](https://open-meteo.com/en/docs/geocoding-api) | Ciudad → Coordenadas | ❌ No requerida |
| [BigDataCloud](https://www.bigdatacloud.com/)                        | Coordenadas → Ciudad | ❌ No requerida |

## 📄 License

MIT © 2026
