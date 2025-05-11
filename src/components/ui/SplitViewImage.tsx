"use client";

import React, { useState } from 'react';

type HoverState = 'none' | 'design' | 'code';

// Component for code representation
interface CodeLineProps {
  indent?: number;
  color?: string;
  mb?: string;
  children: React.ReactNode;
}

const CodeLine: React.FC<CodeLineProps> = ({ indent = 0, color = "blue-600", mb = "0.5", children }) => (
  <div className={`ml-${indent} text-${color} mb-${mb}`}>{children}</div>
);

// Component for flower product cards
interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

const FlowerProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => (
  <div className="bg-[var(--color-background)] rounded-lg p-2 flex flex-col items-center border border-gray-200">
    <div className="w-8 h-8 mb-1 flex items-center justify-center bg-white rounded-full border border-gray-200">
      <img src={`/flofers/${image}.svg`} alt={name} className="w-6 h-6" />
    </div>
    <div className="text-gray-700 text-[8px] xs:text-[10px] font-medium text-center">{name}</div>
    <div className="text-gray-600 text-[8px] xs:text-[10px] text-center">{price}</div>
  </div>
);

interface SplitViewSideProps {
  type: 'design' | 'code';
  hoverState: HoverState;
  getZIndex: (type: 'design' | 'code') => number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: React.ReactNode;
}

const SplitViewSide: React.FC<SplitViewSideProps> = ({ 
  type, 
  hoverState, 
  getZIndex, 
  onMouseEnter, 
  onMouseLeave, 
  children 
}) => {
  return (
    <div 
      className={`relative transition-all duration-700 ease-in-out ${
        hoverState === type ? 'w-full' : 
        hoverState === (type === 'design' ? 'code' : 'design') ? 'w-0' : 'w-1/2'
      }`}
      style={{ zIndex: getZIndex(type) }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute inset-0 bg-white p-3 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

const SplitViewImage = () => {
  const [hoverState, setHoverState] = useState<HoverState>('none');
  
  // Get z-index values based on hover state to prevent overlapping
  const getZIndex = (type: 'design' | 'code') => {
    if (hoverState === type) return 20;
    if (hoverState === (type === 'design' ? 'code' : 'design')) return 10;
    return type === 'design' ? 15 : 14; // Default state - design slightly above code
  };
  
  return (
    <div className="relative w-full h-[325px] md:h-[315px] lg:h-[325px] rounded-lg overflow-hidden shadow-lg mt-6">
      <div className="flex w-full h-full">
        <SplitViewSide
          type="design"
          hoverState={hoverState}
          getZIndex={getZIndex}
          onMouseEnter={() => setHoverState('design')}
          onMouseLeave={() => setHoverState('none')}
        >
          <div className="w-full h-full flex flex-col">
            {/* Header */}
            <div className="bg-[var(--color-background)] h-12 w-full rounded-lg mb-3 p-2 flex justify-between items-center border border-gray-200">
              <div className="flex items-center">
                <div className="w-6 h-6 mr-2 flex items-center justify-center">
                    <img src="/flofers/logo-flowers.svg" alt="Flower logo" className="w-5 h-5" />
                </div>
                <div className="text-gray-700 font-bold text-sm">Bloom & Petal</div>
              </div>
                {/* Hamburger menu for xs screens */}
              <div className="sm:hidden">
                <div className="w-6 h-6 flex flex-col justify-center items-center gap-1 cursor-pointer">
                  <div className="w-4 h-0.5 bg-gray-700 rounded-full"></div>
                  <div className="w-4 h-0.5 bg-gray-700 rounded-full"></div>
                  <div className="w-4 h-0.5 bg-gray-700 rounded-full"></div>
                </div>
              </div>
                {/* Regular menu for sm+ screens */}
              <div className="hidden sm:flex gap-3">
                <div className="text-gray-700 text-xs font-medium">Home</div>
                <div className="text-gray-700 text-xs font-medium">Shop</div>
                <div className="text-gray-700 text-xs font-medium">About</div>
              </div>
            </div>
              
              {/* Hero Section */}
            <div className="bg-[var(--color-background)] h-20 w-full rounded-lg mb-3 p-2 flex flex-col justify-center items-center border border-gray-200">
              <div className="text-gray-700 text-lg font-bold mb-1">Beautiful Flowers</div>
              <div className="text-gray-600 text-xs mb-2 text-center">Fresh bouquets for every occasion</div>
              <div className="flex gap-2">
                <div className="bg-[var(--color-primary-light)] text-white px-2 py-1 rounded text-xs font-medium">Shop Now</div>
                <div className="border border-gray-300 text-gray-600 px-2 py-1 rounded text-xs font-medium">View More</div>
              </div>
            </div>
              
              {/* Featured Products */}
            <div className="mb-2">
              <div className="text-gray-600 text-xs font-medium mb-2">Best Sellers</div>
              <div className="grid grid-cols-3 gap-1 md:gap-2">
                <FlowerProductCard image="rose" name="Rose Bouquet" price="$29.99" />
                <FlowerProductCard image="tulip" name="Tulip Mix" price="$24.99" />
                <FlowerProductCard image="lily" name="Lily Bouquet" price="$34.99" />
              </div>
            </div>
              
              {/* Footer */}
            <div className="mt-auto pt-1 xs:pt-2">
              <div className="bg-[var(--color-background)] h-6 xs:h-7 sm:h-8 w-full rounded-lg p-1 flex justify-between items-center border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="text-gray-500 text-[6px] xs:text-[8px] sm:text-[10px] mt-auto">© 2025 Bloom & Petal</div>
                </div>
                <div className="flex gap-1 xs:gap-2">
                  <div className="text-gray-500 text-[6px] xs:text-[8px] sm:text-[10px]">Contact</div>
                  <div className="text-gray-500 text-[6px] xs:text-[8px] sm:text-[10px]">Terms</div>
                  <div className="text-gray-500 text-[6px] xs:text-[8px] sm:text-[10px]">Privacy</div>
                </div>
              </div>
            </div>
          </div>
        </SplitViewSide>

        <SplitViewSide
          type="code"
          hoverState={hoverState}
          getZIndex={getZIndex}
          onMouseEnter={() => setHoverState('code')}
          onMouseLeave={() => setHoverState('none')}
        >
          <div className="w-full h-full flex flex-col font-mono text-xs">
            {/* These are just visual representations of code, not actual code */}
            {[
              { content: 'import React from "react";', color: 'blue-600', mb: '1' },
              { content: 'import "./FlowerStore.css";', color: 'blue-600', mb: '2' },
              
              { content: 'interface Product {', color: 'purple-700', mb: '1' },
              { content: '  id: string;', indent: 2, color: 'blue-800' },
              { content: '  name: string;', indent: 2, color: 'blue-800' },
              { content: '  price: number;', indent: 2, color: 'blue-800' },
              { content: '  imageUrl: string;', indent: 2, color: 'blue-800' },
              { content: '}', color: 'purple-700', mb: '2' },
              
              { content: 'const FlowerStore = () => {', color: 'blue-600', mb: '1' },
              { content: '  const [products, setProducts] = useState([]);', indent: 2, color: 'blue-600' },
              { content: '  const [loading, setLoading] = useState(true);', indent: 2, color: 'blue-600' },
              { content: '', indent: 2, color: 'blue-600' },
              { content: '  React.useEffect(() => {', indent: 2, color: 'blue-600' },
              { content: '    // Fetch products', indent: 4, color: 'green-700' },
              { content: '    fetchProducts().then(data => {', indent: 4, color: 'blue-600' },
              { content: '      setProducts(data);', indent: 6, color: 'blue-600' },
              { content: '      setLoading(false);', indent: 6, color: 'blue-600' },
              { content: '    });', indent: 4, color: 'blue-600' },
              { content: '  }, []);', indent: 2, color: 'blue-600' },
              { content: '', indent: 2, color: 'blue-600', mb: '1' },
              { content: '  return (', indent: 2, color: 'blue-600' },
              { content: '    <div className="flower-store">', indent: 4, color: 'green-700' },
              { content: '      <header>Bloom & Petal</header>', indent: 6, color: 'green-700' },
              { content: '      {loading ? <p>Loading...</p> :', indent: 6, color: 'green-700' },
              { content: '        <div className="products">', indent: 8, color: 'green-700' },
              { content: '          {products.map(p => (', indent: 10, color: 'green-700' },
              { content: '            <ProductCard product={p} />', indent: 12, color: 'green-700' },
              { content: '          ))}', indent: 10, color: 'green-700' },
              { content: '        </div>', indent: 8, color: 'green-700' },
              { content: '      }', indent: 6, color: 'green-700' },
              { content: '    </div>', indent: 4, color: 'green-700' },
              { content: '  );', indent: 2, color: 'blue-600' },
              { content: '};', color: 'blue-600', mb: '1' },
              
              { content: 'export default FlowerStore;', color: 'blue-600' }
            ].map((line, index) => (
              <CodeLine key={index} indent={line.indent} color={line.color} mb={line.mb}>
                {line.content}
              </CodeLine>
            ))}
            </div>
        </SplitViewSide>

        <div className={`absolute top-0 bottom-0 w-[2px] bg-gray-300 left-1/2 transform -translate-x-1/2 z-30 transition-opacity duration-500 ${hoverState === 'none' ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </div>
  );
};

export default SplitViewImage;
