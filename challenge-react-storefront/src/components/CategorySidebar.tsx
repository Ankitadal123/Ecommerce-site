import { useEffect, useState } from 'react';
import { fetchCategories } from '../services/categoryService';
import { ChevronRight, ChevronUp } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategorySidebar({ selected, onSelect }: Props) {
  const [categories, setCategories] = useState<string[]>([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  const allCategories = ['all', ...categories];

  return (
    <aside className="w-full lg:w-64 bg-white rounded-lg shadow-sm p-4 lg:sticky top-24">
      {/* Header toggle */}
      <div
        className="flex justify-between items-center font-semibold text-white bg-gray-800 px-4 py-2 rounded cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        Shop by Department
        <ChevronUp
          className={`w-4 h-4 transform transition duration-200 ${
            open ? '' : 'rotate-180'
          }`}
        />
      </div>

      {/* Category List */}
      {open && (
        <ul className="mt-4 space-y-2">
          {allCategories.map((cat) => (
            <li
              key={cat}
              onClick={() => onSelect(cat)}
              className={clsx(
                'flex justify-between items-center px-4 py-2 rounded cursor-pointer transition text-sm',
                selected === cat
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'hover:bg-gray-100 text-gray-800'
              )}
            >
              {cat === 'all' ? 'All' : capitalize(cat)}
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
