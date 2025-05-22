## Project Overview

- React and TypeScript proficiency
- Custom global state management using Zustand
- Clean and modern UI using Tailwind CSS
- API integration using the native fetch API
- Component-driven architecture
- Routing and navigation
- Custom UI enhancements (toast notifications, dynamic totals)

## Features

- Product listing fetched from Fake Store API
- Product cards with consistent height and hover effects
- Add to Cart functionality with quantity increment/decrement
- Zustand-based global cart state management
- Cart page with item summary, pricing, and quantity control
- Checkout page with cost breakdown and delivery section
- Responsive category sidebar with toggle and filter
- Global search bar shown on the home page
- Login/Logout functionality with Zustand store
- Dynamic display of user's name derived from email
- Protected UI elements based on auth state
- Responsive layout with Tailwind CSS utilities
- Routing using React Router v6
- Error handling for API requests
- Clean and structured commit history

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
Folder Structure:
src/
├── components/             // Reusable UI components
│   ├── ProductCard.tsx         // Product card display with cart actions
│   ├── CategorySidebar.tsx     // Collapsible category filter sidebar
│   └── Toast.tsx               // Notification component for cart actions

├── pages/                  // Route-based views
│   ├── Home.tsx                // Main storefront with product grid
│   ├── Cart.tsx                // Cart contents and quantity management
│   ├── Checkout.tsx            // Order summary and delivery info
│   ├── Login.tsx               // Mock login form using Zustand
│   └── ProductDetail.tsx       // Individual product details page

├── services/               // API abstraction layer
│   ├── productService.ts       // Fetch all products
│   └── categoryService.ts      // Fetch product categories

├── store/                  // Zustand store setup
│   ├── cartStore.ts            // Cart state management
│   └── authStore.ts            // Auth state with login/logout

├── types/                  // TypeScript shared types
│   └── product.ts              // Product interface definition

├── App.tsx                 // Application layout and routes
└── main.tsx                // Application entry point
