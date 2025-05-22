## Project Overview

- React and TypeScript proficiency
- Custom global state management using Zustand
- Clean and modern UI using Tailwind CSS
- API integration using the native fetch API
- Component-driven architecture
- Routing and navigation
- Custom UI enhancements (toast notifications, dynamic totals)

## Features

Product Listing Page with:
  - Clean card grid layout
  - Responsive design
  - Consistent card heights and button alignment
- Global search bar (controlled input, lifted to App level)
- Sidebar filter by category (fetched dynamically from the API)
- Add to Cart functionality:
  - Global state management using Zustand
  - Quantity increment/decrement
  - Visual feedback (Add to cart notification)
- Cart Page:
  - Product summary table
  - Quantity control
  - Remove item from cart
  - Auto-calculated subtotal, tax, shipping, and total
- Checkout Page:
  - Delivery method and pickup details
  - Order summary with cost breakdown
  - Item preview
- Product Details Page (per product)
- Error handling for failed API requests
- Loading states for all major fetches
- Page not found fallback
- Semantic HTML and accessible markup
- Clean commit history and modular file organization

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
├── components/ // Reusable UI components
│ ├── ProductCard.tsx
│ ├── CategorySidebar.tsx
│ └── Toast.tsx
│
├── pages/ // Route views
│ ├── Home.tsx
│ ├── Cart.tsx
│ ├── Checkout.tsx
│ └── ProductDetail.tsx
│
├── services/ // API abstraction layer
│ ├── productService.ts
│ └── categoryService.ts
│
├── store/ // Zustand store setup
│ └── cartStore.ts
│
├── types/ // TypeScript types
│ └── product.ts
│
├── App.tsx // Layout and routing
└── main.tsx // App entry point