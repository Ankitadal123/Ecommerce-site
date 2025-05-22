import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import type { Product } from '../types/product';
import ProductCard from '../components/ProductCard';
import CategorySidebar from '../components/CategorySidebar';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>('all');

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFiltered(data);
    });
  }, []);

  useEffect(() => {
    if (category === 'all') {
      setFiltered(products);
    } else {
      setFiltered(products.filter(p => p.category === category));
    }
  }, [category, products]);

  return (
    <div className="flex gap-6">
      <CategorySidebar selected={category} onSelect={setCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
