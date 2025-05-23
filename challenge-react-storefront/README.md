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
- Responsive product cards with consistent layout
- Add to Cart functionality with quantity controls
- Cart state management using Zustand
- Dynamic cart count displayed in the header
- Cart page with real-time quantity and total pricing
- Checkout page with order summary and payment button
- On payment, cart is cleared and user is redirected to homepage
- Payment confirmation uses toast notification (react-hot-toast)
- Left navigation with collapsible category sidebar
- Global search bar (on Home only)
- Login form with Zustand-based authentication
- Dynamic user greeting based on email (e.g., ankitadalmia@gmail.com → Ankita Dalmia)
- Logout and conditional rendering of user actions
- Global responsive footer with links and newsletter input
- Fully responsive layout with Tailwind CSS utilities
- Route handling via React Router
- Basic error handling for API requests


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
│   ├── ProductCard.tsx         // Product display with quantity control
│   ├── CategorySidebar.tsx     // Left nav for filtering by category
│   ├── Toast.tsx               // (Optional) reusable toast
│   └── Footer.tsx              // Global site footer
│
├── pages/                  // Page-based views
│   ├── Home.tsx                // Product grid + filters
│   ├── Cart.tsx                // Shopping cart with quantity and removal
│   ├── Checkout.tsx            // Summary and payment logic
│   ├── Login.tsx               // Mock login screen
│   └── ProductDetail.tsx       // Expanded view of a product
│
├── services/               // API abstraction layer
│   ├── productService.ts       // Fetch product data
│   └── categoryService.ts      // Fetch category data
│
├── store/                  // Zustand store setup
│   ├── cartStore.ts            // Cart logic and clearCart method
│   └── authStore.ts            // Auth state and login/logout logic
│
├── types/                  // TypeScript shared types
│   └── product.ts              // Product interface
│
├── App.tsx                 // Application layout and routes
└── main.tsx                // Application entry point
