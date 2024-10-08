import { FC } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './Container';
import { SearchInput } from './SearchInput';

interface HeaderProps {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const { className, hasSearch = true } = props;
  return (
    <div className={cn('border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          {/* <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} /> */}

          {/* <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} /> */}

          {/* {hasCart && <CartButton />} */}
        </div>
      </Container>
    </div>
  );
};
