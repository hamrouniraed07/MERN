# TpReact - Mini React Application with Vite

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF.svg)](https://vitejs.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-9.36.0-4B32C3.svg)](https://eslint.org/)
[![License](https://img.shields.io/badge/License-Educational-green.svg)]()

A simple React application built with Vite, demonstrating a blog-like interface with articles and a product catalog. This project showcases the use of custom React components to display dynamic content.

## Overview

TpReact is a mini-project created for learning and demonstrating React concepts. It features a responsive layout displaying a list of articles and products, utilizing reusable components for better code organization. The application includes sample data for articles (with titles, authors, and content) and products (with names, prices, and categories), rendered using custom components like Header, Article, ProductCard, Badge, and Footer.

## Features

- **Article Display**: Showcases a list of articles with titles, authors, and content. Each article is rendered in a clean format with author attribution.
- **Product Catalog**: Displays products with names, prices (in euros), and categories. Products are presented in card format with visual styling.
- **Custom Components**: Includes Header, Article, Footer, Badge, and ProductCard components, all built with inline styles for simplicity.
- **Responsive Design**: Basic styling for a clean, centered layout that works on various screen sizes.
- **Fast Development**: Powered by Vite for quick builds and hot module replacement, enabling rapid development and testing.
- **Sample Data**: Pre-loaded with example articles and products to demonstrate functionality without external data sources.

## Installation

1. Clone the repository or navigate to the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To run the development server:
```bash
npm run dev
```

To build for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

To lint the code:
```bash
npm run lint
```

## Demo

After running `npm run dev`, open your browser to `http://localhost:5173` to view the application. You'll see:

- A blue header with the blog title "Mon Blog React"
- A count of available articles
- A list of sample articles below the header
- A "Liste des Produits" section with product cards
- Colorful badges (green "Nouveau", red "Populaire", default blue)
- A footer with author and year information

## Components

### Header
- **Props**: `title` (string, required), `subtitle` (string, optional)
- **Description**: Displays the main title and subtitle of the blog in a blue header bar with centered text and rounded corners.

### Article
- **Props**: `title` (string, required), `author` (string, required), `content` (string, required)
- **Description**: Renders individual articles with a heading, author attribution in gray text, and the main content.

### ProductCard
- **Props**: `name` (string, required), `price` (number, required), `category` (string, required)
- **Description**: Shows product details in a card format with a border, shadow, green price display, and category badge.

### Badge
- **Props**: `text` (string, required), `color` (string, optional, default: "blue")
- **Description**: A simple badge component for highlighting items. Supports different colors (e.g., "green", "red", "blue").

### Footer
- **Props**: `author` (string, required), `year` (number, required)
- **Description**: Displays copyright information and credits at the bottom of the page with a top border.

## Technologies Used

- React 19.1.1
- Vite 7.1.7
- ESLint for code linting
- JSX for component rendering

## Project Structure

```
TpReact/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Article.jsx
│   │   ├── Badge.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── ProductCard.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Contributing

Feel free to fork this project and submit pull requests for improvements or additional features.

## License

This project is for educational purposes and does not include a specific license.
