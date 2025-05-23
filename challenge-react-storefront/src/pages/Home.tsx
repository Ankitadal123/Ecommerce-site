import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import type { Product } from '../types/product';
import ProductCard from '../components/ProductCard';
import CategorySidebar from '../components/CategorySidebar';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFiltered(data);
    });
  }, []);

  useEffect(() => {
    const filteredByCategory =
      category === 'all' ? products : products.filter(p => p.category === category);

    const finalFiltered = filteredByCategory.filter(p =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFiltered(finalFiltered);
  }, [category, searchTerm, products]);

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-8 gap-6">
      <CategorySidebar selected={category} onSelect={setCategory} />

      <div className="flex-1">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Explore Products</h2>

        {/* Search Input */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search for products,brands..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
