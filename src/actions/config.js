// import cloudinary from 'cloudinary';

// export const localEndpoint = 'https://benalsam-backend.herokuapp.com';
// export const endpoint = 'http://localhost:7000/api/';
export const endpoint = 'http://80.211.11.72:7000/api/';
// export const endpoint = 'https://classibuybackend.herokuapp.com/api/';
// export const endpoint = 'https://classibuy-backend.eu-gb.mybluemix.net/api/';

export const currency = [
  'USD',
  'EURO',
  'TL',
];

export const defaultCurrency = 'USD';

export const wishProperties = [
  {
    propName: 'title',
    propTitle: 'Title',
    message1: 'Please enter title',
    message2: 'If you enter a link, title will be automatically retrieved from linked webpage',
    type: 'title',
  },
  {
    propName: 'description',
    propTitle: 'Description',
    message1: 'Please enter description for your listing',
    type: 'description',
  },
  {
    propName: 'quantity',
    propTitle: 'Quantity',
    message1: 'How many items would you like to buy?',
    type: 'quantity',
  },
  {
    propName: 'pricingsingle',
    propTitle: 'Pricing Type Single',
    message1: 'How much would you think about to pay?',
    type: 'pricingsingle',
  },
  {
    propName: 'pricingmulti',
    propTitle: 'Pricing Type Multi',
    type: 'pricingmulti',
  },
  {
    propName: 'pricingedit',
    propTitle: 'Pricing Edit',
    type: 'pricingedit',
  },
  {
    propName: 'condition',
    propTitle: 'Condition',
    message1: 'In what condition would you like to buy your item?',
    type: 'condition',
    values: [
      'Any working',
      'Factory Sealed',
      'Brand New',
      'Refurbished',
      '2nd Hand / Used',
      'Never Used',
      'Like New / Mint',
      'Some Defects',
      'Broken',
      'Needs to be repaired',
      'Can only be used as spare parts',

    ],
  },
  {
    propName: 'return',
    propTitle: 'Return',
    message1: 'Return BLAH BLAH',

    type: 'list',
    values: [
      'Any',
      'Only from sellers who accept returns',

    ],
  },
  {
    propName: 'boxing',
    propTitle: 'Boxing',
    message1: 'Boxing BLAH BLAH',

    type: 'list',
    values: [
      'Any',
      'Only from sellers who offer original-boxing',


    ],
  },
  {
    propName: 'warrantystatus',
    propTitle: 'Warranty Status',
    message1: 'Warranty Status BLAH BLAH',
    type: 'list',
    values: [
      'Any',
      'Under Warranty',
      'No Warranty',

    ],
  },
  {
    propName: 'preferredlocations',
    propTitle: 'Preferred Locations',
    type: 'preferredlocations'
  },
  {
    propName: 'currency',
    propTitle: 'Currency',
    type: 'currency',
  },
];
export const conditionPaths = [
  {
    parent: [],
    child: [
      'Any working',
      'Factory Sealed',
      'Brand New',
      'Refurbished',
      '2nd Hand / Used',
      'Never Used',
      'Like New / Mint',
      'Some Defects',
    ],
  },
  {
    parent: [
      'Any working',
    ],
    child: [
      'Brand New',
      'Refurbished',
    ],
  },
  {
    parent: [
      'Any working',
      'Factory Sealed',
    ],
    child: [],
  },
  {
    parent: [
      'Any working',
      'Factory Sealed',
    ],
    child: [],
  },
  {
    parent: [
      'Any working',
    ],
    child: [
      'Never Used',
      'Like New / Mint',
      'Some Defects',
    ],
  },
  {
    parent: [
      'Any working',
      '2nd Hand / Used',
    ],
    child: [],
  },
  {
    parent: [
      'Any working',
      '2nd Hand / Used',
    ],
    child: [],
  },
  {
    parent: [
      'Any working',
      '2nd Hand / Used',
    ],
    child: [],
  },
  {
    parent: [],
    child: [
      'Needs to be repaired',
      'Can only be used as spare parts',
    ],
  },
  {
    parent: [
      'Broken',
    ],
    child: [],
  },
  {
    parent: [
      'Broken',
    ],
    child: [],
  },
];

// cloudinary.config({
//     cloud_name: "classibuy34",
//     api_key: "945176254346645",
//     api_secret: "PyY5EjSizpMqeHEVlaV8gD6nCgY"
// });

export const attrDefaults = [
  {
    name: 'Yıl',
    maxLength: 4,
    maxValue: 2012,
  },
  {
    name: 'Km',
    maxLength: 8,
    maxValue: 2012,
  },
];

// {
//   name: 'Antikalar',
//     id: 142111,
//   },
// {
//   name: 'Otomobil',
//     id: 70247,
//   },
// {
//   name: 'Kolleksiyon',
//     id: 858223,
//   },
// {
//   name: 'Kitap & Dergi',
//     id: 584357,
//   },
// {
//   name: 'Film & Müzik',
//     id: 324077,
//   },
// {
//   name: 'Fotoğraf & Kamera',
//     id: 12844,
//   },
// {
//   name: 'Cep Telefonu',
//     id: 753494,
//   },
// {
//   name: 'Bilgisayar',
//     id: 41896,
//   },
// {
//   name: 'Donanım',
//     id: 915783,
//   },
// {
//   name: 'Ev & Bahçe',
//     id: 420531,
//   },
// {
//   name: 'Lensler',
//     id: 424850,
//   },
// {
//   name: 'Küçük ev aletleri',
//     id: 450314,
//   },
// {
//   name: 'Televizyon & Görüntü Sistemleri',
//     id: 704398,
//   },
// {
//   name: 'Emlak & Arazi',
//     id: 422968,
//   },
// {
//   name: 'Yiyecek & İçecek',
//     id: 147082,
//   },