# TpReact - Mini React Application with Vite

A simple React application built with Vite, demonstrating a blog-like interface with articles and a product catalog. This project showcases the use of custom React components to display dynamic content.

## Overview

TpReact is a mini-project created for learning and demonstrating React concepts. It features a responsive layout displaying a list of articles and products, utilizing reusable components for better code organization.

## Features

- **Article Display**: Showcases a list of articles with titles, authors, and content.
- **Product Catalog**: Displays products with names, prices, and categories.
- **Custom Components**: Includes Header, Article, Footer, Badge, and ProductCard components.
- **Responsive Design**: Basic styling for a clean, centered layout.
- **Fast Development**: Powered by Vite for quick builds and hot module replacement.

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

## Components

- **Header**: Displays the main title and subtitle of the blog.
- **Article**: Renders individual articles with title, author, and content.
- **ProductCard**: Shows product details including name, price, and category.
- **Badge**: A simple badge component for highlighting items (e.g., "Nouveau", "Populaire").
- **Footer**: Displays author and year information.

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
