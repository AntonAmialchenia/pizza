import {FC} from 'react';
import { Container } from './Container';
import { Categories } from './Categories';
import { SortPopup } from './SortPopup';
import { cn } from '@/lib/utils';

interface TopBarProps {
  className?:string
}

export const TopBar:FC<TopBarProps> = (props) => {
  const {className} = props
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className="flex items-center justify-between ">
        <Categories
		//  items={categories} 
		 />
        <SortPopup />
      </Container>
    </div>
  );
};