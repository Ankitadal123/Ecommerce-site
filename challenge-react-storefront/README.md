## Project Overview

- React and TypeScript proficiency
- Custom global state management using Zustand
- Clean and modern UI using Tailwind CSS
- API integration using the native fetch API
- Component-driven architecture
- Routing and navigation
- Custom UI enhancements (toast notifications, dynamic totals)

## Features

- Fetches product data from Fake Store API
- Displays products in responsive card layout
- Users can add products to a cart
- Cart page displays items with quantity and total
- Toast notification on adding to cart
- Navigation between Home and Cart views
- Responsive and accessible HTML structure

## Technology Stack

- React 18 with Vite
- TypeScript
- Zustand for global state
- React Router DOM
- Tailwind CSS
- Native fetch API
- Lucide-react (for icons)

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed.

### Installation

1. Clone the repository

```bash
git clone https://github.com/DVT/challenge-react-storefront-ankita-dalmia.git
cd challenge-react-storefront-ankita-dalmia

Install dependencies
---------------------
npm install react-router-dom zustand
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react
npm install
npm run dev

Folder Structure :
src/
│
├── components/
│   ├── ProductCard.tsx        # Reusable product display card
│   ├── Toast.tsx              # Reusable toast message component
│
├── pages/
│   ├── Home.tsx               # Displays all products
│   ├── Cart.tsx               # Displays cart items
│
├── services/
│   └── productService.ts      # API interaction using fetch
│
├── store/
│   └── cartStore.ts           # Zustand global state for cart
│
├── types/
│   └── product.ts             # Type definition for product object
│
├── App.tsx                    # Main application with routing and layout
└── main.tsx                   # Application entry point
