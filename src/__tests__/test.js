import extract from '../index';
import { character, character2 } from '../dataList';

test.each([
  [
    'Лучник',
    character,
    [
      {
        id: 8,
        name: 'Двойной выстрел',
        description: 'Двойной выстрел наносит двойной урон',
        icon: 'http://...'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        description: 'Описание недоступно',
        icon: 'http://...'
      }
    ]
  ],
  [
    'Маг',
    character2,
    [
      {
        id: 2,
        name: 'Огненный выстрел',
        description: 'Огненный выстрел наносит уроногнём',
        icon: 'http://...'
      },
      {
        id: 3,
        name: 'Небесный удар',
        description: 'Описание недоступно',
        icon: 'http://...'
      }
    ]
  ]
])// eslint-disable-next-line
('testing extract function with %s', (_, specifications, expected) => {
  const result = extract(specifications);
  expect(result).toEqual(expected);
})