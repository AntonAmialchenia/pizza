import Link from 'next/link';
import { FC } from 'react';
import { Title } from './Title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  //   ingredients: Ingredient[];
  className?: string;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { className, id, imageUrl, name, price } = props;
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <Image
            className="w-[215px] h-[215px]"
            src={imageUrl}
            alt={name}
            width={215}
            height={215}
          />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          {/* {ingredients.map((ingredient) => ingredient.name).join(', ')} */}
		  Цыпленок, мацарелла, морковь, сыр, томаты
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
