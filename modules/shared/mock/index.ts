export interface Person {
  name: string;
  id: string;
  hair_color: string;
  skin_color: string;
  gender: string;
  eye_color: string;
  birth_year: string;
}

export const people: Person[] = [
  {
    name: 'Ben Kenobi',
    id: '1',
    hair_color: 'blond',
    skin_color: 'fair',
    gender: 'male',
    eye_color: 'blue',
    birth_year: '19BBY'
  },
  {
    name: 'Luke Skywalker',
    id: '2',
    hair_color: 'gold',
    skin_color: 'yellow',
    gender: 'male',
    eye_color: 'yellow',
    birth_year: '112BBY'
  },
  {
    name: 'R2-D2',
    id: '3',
    hair_color: 'red',
    skin_color: 'white',
    gender: 'n/a',
    eye_color: 'red',
    birth_year: '33BBY'
  },
  {
    name: 'Darth Vader',
    id: '4',
    hair_color: 'brown',
    skin_color: 'light',
    gender: 'female',
    eye_color: 'yellow',
    birth_year: '41.9BBY'
  },
  {
    name: 'Leia Organa',
    id: '5',
    hair_color: 'brown',
    skin_color: 'light',
    gender: 'female',
    eye_color: 'brown',
    birth_year: '19BBY'
  },
  {
    name: 'Owen Lars',
    id: '6',
    hair_color: 'blond',
    skin_color: 'light',
    gender: 'female',
    eye_color: 'blue',
    birth_year: '52BBY'
  }
];

export interface Appliance {
  name: string;
  id: string;
  image: string;
  price: number;
  info: {
    guarantee: string;
    producingCountry: string;
    energyClass: string;
    weight: string;
    productColor: string;
    feature: string;
  }
}

export const appliances: Appliance[] = [
  {
    name: 'Стиральная машина WHIRLPOOL',
    id: '1',
    image: 'https://content1.rozetka.com.ua/goods/images/big_tile/27232070.jpg',
    price: 8800,
    info: {
      guarantee: '12 місяців',
      producingCountry: 'Slovakia',
      energyClass: 'A++',
      weight: '71 кг',
      productColor: 'white',
      feature: 'foam control'
    }
  },
  {
    name: 'Холодильник LOFRA DOLCEVITA AVORIO',
    id: '2',
    image: 'https://content.rozetka.com.ua/goods/images/big/159845189.jpg',
    price: 12000,
    info: {
      guarantee: '10 місяців',
      producingCountry: 'Poland',
      energyClass: 'A++',
      weight: '80 кг',
      productColor: 'white',
      feature: 'freshness zone'
    }
  },
  {
    name: 'Холодильник для вина LIEBHERR WTes',
    id: '3',
    image: 'https://content.rozetka.com.ua/goods/images/big/45840001.jpg',
    price: 50000,
    info: {
      guarantee: '36 місяців',
      producingCountry: 'Slovakia',
      energyClass: 'A++',
      weight: '52 кг',
      productColor: 'stainless steel',
      feature: 'internally illuminated'
    }
  },
  {
    name: 'Духовой шкаф',
    id: '4',
    image: 'https://content1.rozetka.com.ua/goods/images/big/160975058.png',
    price: 14300,
    info: {
      guarantee: '24 місяців',
      producingCountry: 'USA',
      energyClass: 'A',
      weight: '62 кг',
      productColor: 'white',
      feature: 'dish drawer'
    }
  },
  {
    name: 'Кофеварка Jura S8',
    id: '5',
    image: 'https://pngicon.ru/file/uploads/kofemashina.png',
    price: 15600,
    info: {
      guarantee: '12 місяців',
      producingCountry: 'Switzerland',
      energyClass: 'B',
      weight: '22 кг',
      productColor: 'white',
      feature: 'pulse Extraction Process'
    }
  },
  {
    name: 'Вытяжка ELICA SHEEN BL/A/60',
    id: '6',
    image: 'https://content2.rozetka.com.ua/goods/images/big/27183816.jpg',
    price: 4800,
    info: {
      guarantee: '12 місяців',
      producingCountry: 'Slovakia',
      energyClass: 'A',
      weight: '6 кг',
      productColor: 'white',
      feature: 'grease collection tray'
    }
  }, {
    name: 'Пылесос без мешка SAMSUNG VC05K41H0HG/UK',
    id: '7',
    image: 'https://content2.rozetka.com.ua/goods/images/big/32899890.jpg',
    price: 4600,
    info: {
      guarantee: '12 місяців',
      producingCountry: 'Slovakia',
      energyClass: 'A++',
      weight: '71 кг',
      productColor: 'white',
      feature: 'foam control'
    }
  }, {
    name: 'Вытяжка BOSCH DWK065G60R',
    id: '8',
    image: 'https://content2.rozetka.com.ua/goods/images/big/23607842.jpg',
    price: 6600,
    info: {
      guarantee: '12 місяців',
      producingCountry: 'Slovakia',
      energyClass: 'A++',
      weight: '71 кг',
      productColor: 'white',
      feature: 'foam control'
    }
  }, {
    name: 'Электрическая поверхность ELECTROLUX EHF96547XK',
    id: '9',
    image: 'https://content1.rozetka.com.ua/goods/images/big/10622174.jpg',
    price: 7700,
    info: {
      guarantee: '12 місяців',
      producingCountry: 'Slovakia',
      energyClass: 'A++',
      weight: '71 кг',
      productColor: 'white',
      feature: 'foam control'
    }
  }, {
    name: 'Варочная поверхность газовая WHIRLPOOL GOS 6415/NB',
    id: '10',
    image: 'https://content.rozetka.com.ua/goods/images/big/10707638.jpg',
    price: 9300,
    info: {
      guarantee: '12 місяців',
      producingCountry: 'Slovakia',
      energyClass: 'A++',
      weight: '71 кг',
      productColor: 'white',
      feature: 'foam control'
    }
  }
];
