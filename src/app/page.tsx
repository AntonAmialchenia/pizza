import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductsGroupList,
} from '@/components/shared';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* {categories.map(
                (category) =>
                  category.products.length > 0 && ( */}
              <ProductsGroupList
                key={'pizza'}
                title={'Пицца'}
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                    items: [
                      {
                        id: 1,
                        name: 'Пицца',
                        price: 150,
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                    items: [
                      {
                        id: 1,
                        name: 'Пицца',
                        price: 150,
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                    items: [
                      {
                        id: 1,
                        name: 'Пицца',
                        price: 150,
                      },
                    ],
                  },
                  {
                    id: 4,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                    items: [
                      {
                        id: 1,
                        name: 'Пицца',
                        price: 150,
                      },
                    ],
                  },
                  {
                    id: 5,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                    items: [
                      {
                        id: 1,
                        name: 'Пицца',
                        price: 150,
                      },
                    ],
                  },
                  {
                    id: 6,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                    items: [
                      {
                        id: 1,
                        name: 'Пицца',
                        price: 150,
                      },
                    ],
                  },
                ]}
              />
              <ProductsGroupList
                key={'product'}
                title={'Завтрак'}
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                    items: [
                      {
                        id: 1,
                        name: 'Пицца',
                        price: 150,
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                    items: [
                      {
                        id: 1,
                        name: 'Пицца',
                        price: 150,
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                    items: [
                      {
                        id: 1,
                        name: 'Пицца',
                        price: 150,
                      },
                    ],
                  },
                  {
                    id: 4,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                    items: [
                      {
                        id: 1,
                        name: 'Пицца',
                        price: 150,
                      },
                    ],
                  },
                  {
                    id: 5,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                    items: [
                      {
                        id: 1,
                        name: 'Пицца',
                        price: 150,
                      },
                    ],
                  },
                  {
                    id: 6,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF38570B8F74A3A71E200F82DCAEB8.avif',
                    items: [
                      {
                        id: 1,
                        name: 'Пицца',
                        price: 150,
                      },
                    ],
                  },
                ]}
              />
              {/* ),
              )} */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
