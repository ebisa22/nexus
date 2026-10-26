# Nexus Techstore

Nexus Techstore is a full-stack inventory management application built with Node.js, Express, EJS, and PostgreSQL. It allows users to manage product categories and inventory items through a clean, responsive interface.

## Features

- View inventory items and categories
- Create, update, and delete items
- Create, update, and delete categories
- View individual item and category details
- Assign items to existing categories
- Prevent deletion of categories that still contain items
- Input validation and error handling
- Responsive user interface

## Technologies Used

- **Node.js** — JavaScript runtime
- **Express.js** — Backend framework
- **EJS** — Server-rendered pages
- **PostgreSQL** — Relational database
- **CSS** — Styling and responsive layout
- **Render** — Application hosting
- **Neon** — Hosted PostgreSQL database

## Getting Started

### Prerequisites

- Node.js and npm
- A PostgreSQL database, either local or hosted

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ebisa22/nexus.git
   cd nexus
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and configure your database connection using the environment variable expected by your application.

   ```env
   DATABASE_URL=your_postgresql_connection_url
   ```

4. Start the application using your configured npm script.

   ```bash
   npm start
   ```

   If you have not configured a `start` script in `package.json`, use your existing development or production start command instead.

5. Open the local URL printed by your application in the terminal.

## Database

Nexus Techstore uses PostgreSQL to store categories and inventory items. Items are associated with categories through a foreign key relationship.

For deployment, the application can connect to a hosted PostgreSQL database on Neon using its connection string stored in an environment variable.

## Deployment

The application is intended to be deployed using:

- **Render** for hosting the Express application.
- **Neon** for the hosted PostgreSQL database.

Configure the required environment variables in Render and ensure the database connection uses Neon's recommended connection settings. Never commit database credentials or `.env` files to the repository.

## Project Purpose

This project was built to practice full-stack web development, including server-side rendering, REST-style routing, database integration, CRUD operations, and application deployment.
