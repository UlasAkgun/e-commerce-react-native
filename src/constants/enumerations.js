export const ButtonClass = Object.freeze({
    Orange: 'orange',
    Blue: 'blue',
    Red: 'red',
    Grey: 'grey'
});

export const ButtonContainerClass = Object.freeze({
    Half: 'half',
    Full: 'full'
});

export const ButtonGradientColor = Object.freeze({
    orange: ['#ff9833', '#eb6a2f'],
    red: ['#f55151', '#9f0303'],
    blue: ['#5e80a8', '#35475e'],
    grey: ['#f5f5f5', '#d4d4d4']
});

export const KeyboardType = Object.freeze({
    default: 'default',
    numeric: 'numeric',
    email: 'email-address',
    phone: 'phone-pad'
});

export const AdStatus = Object.freeze({
    wishList: 'wishlist',
    published: 'published'
});

export const Limits = Object.freeze({
    titleCharLimit: 80,
    descriptionCharLimit: 800,
    quantityLimit: 99,
    photoUploadLimit: 10
});

export const ApiRequestMethod = Object.freeze({
    Get: 'GET',
    Post: 'POST',
    Put: 'PUT',
    Delete: 'DELETE'
});

export const WarrantyStatus = Object.freeze({
    Any: 'Any',
    UnderWarranty: 'Under Warranty',
    NoWarranty: 'No Warranty'
});

export const ReturnType = Object.freeze({
    Any: 'Any',
    OnlyFromSellersWhoAcceptReturns: 'Only from sellers who accept returns'
});

export const BoxingType = Object.freeze({
    Any: 'Any',
    OnlyFromSellersWhoOfferOriginalBoxing: 'Only from sellers who offer original boxing'
});

export const PricingType = Object.freeze({
    Negotiation: 'negotiation',
    PriceRange: 'pricerange'
});

export const PricingIndexes = Object.freeze({
    PricingType: 0,
    MinPrice: 1,
    MaxPrice: 2,
    Unk1: 3,
    Unk2: 4,
    Currency: 5
});


export const CurrencyType = Object.freeze({
    USD: 'USD',
    EURO: 'EURO',
    TL: 'TL'
});

export const MinOrMax = Object.freeze({
    Min: 'Minimum',
    Max: 'Maximum'
});

export const ConditionType = Object.freeze({
    AnyWorking: 'Any working',
    FactorySealed: 'Factory Sealed',
    BrandNew: 'Brand New',
    Refurbished: 'Refurbished',
    SecondHandUsed: '2nd Hand / Used',
    NeverUsed: 'Never Used',
    LikeNewMint: 'Like New / Mint',
    SomeDefects: 'Some Defects',
    Broken: 'Broken',
    NeedsToBeRepaired: 'Needs to be repaired',
    CanOnlyBeUsedAsSpareParts: 'Can only be used as spare parts'

});