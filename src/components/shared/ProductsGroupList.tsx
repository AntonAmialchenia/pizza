'use client';

import { FC, useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { Title } from './Title';
import { ProductCard } from './ProductCard';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface ProductsGroupListProps {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: FC<ProductsGroupListProps> = (props) => {
  const { className, categoryId, items, title, listClassName } = props;

  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            // ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
