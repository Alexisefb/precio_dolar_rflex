## Tecnologías utilizadas

- **Backend**: Laravel 10
- **Frontend**: React 18.2.0 con JavaScript
- **Estilos**: Material UI
- **Gráficos**: Recharts
- **Context API**: para el manejo de estado global

---

## Requisitos

- [Laravel](https://laravel.com/) (yo utilizo Laragon)
- PHP ≥ 8.1
- MySQL o similar (base de datos)
- Node.js y npm

---

## ⚙ Instalación y ejecución

### Base de datos

1. importar archivo .sql adjunto para la creacion de la base.

### Backend (Laravel)

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Alexisefb/precio_dolar_rflex
   cd precio_dolar_rflex
   ```

2. Instalar dependencias:
   ```bash
   composer install
   ```

3. Crear el archivo `.env`:
   ```bash
   cp .env.example .env
   ```

4. Configurar las credenciales de tu base de datos en `.env`. (dejé por defecto en el archivo .env.example)

5. Generar la clave de la aplicación:
   ```bash
   php artisan key:generate
   ```

6. Ejecutar las migraciones:
   ```bash
   php artisan migrate
   ```

7. Obtener datos del valor del dolar:
   ```bash
   php artisan dolar:importar
   ```

8. Levantar el servidor de :
   ```bash
   php artisan serve
   ```

### Frontend (React)

1. En una nueva terminal, ir a la carpeta del frontend:
   ```bash
   cd frontend
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Ejecutar la app:
   ```bash
   npm start
   ```

---

## Notas:
-Adjunto archivo .sql para la creacion de la base.

-Prueba por Alexis Farias Blanco.

---
