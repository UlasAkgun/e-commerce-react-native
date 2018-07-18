export default class Constants {
    static Categories = [
        {
            name: 'Ses Sistemleri',
            id: 1528577793503,
        },
        {
            name: 'Motorlu Taşıtlar',
            id: 1529028944009,
        },
        {
            name: 'Oyun & Konsol',
            id: 1529394794135,
        },
        {
            name: 'Hobi & Oyuncak',
            id: 1529351911901,
        },
        {
            name: 'Fotoğraf & Kamera',
            id: 1529352712173,
        },
        {
            name: 'Televizyon & Görüntü Sistemleri',
            id: 1528584595738,
        },
    ];

    static ConditionsArray = [
        // Level 1
        {
            name: 'Any working',
            parent: null,
            children: ['Factory Sealed', '2nd Hand / Used']
        },
        {
            name: 'Broken',
            parent: null,
            children: ['Needs to be repaired', 'Can only be used as spare parts']
        },

        // Level 2
        {
            name: 'Factory Sealed',
            parent: 'Any working',
            children: ['Brand New', 'Refurbished']
        },
        {
            name: '2nd Hand / Used',
            parent: 'Any working',
            children: ['Never Used', 'Like New / Mint', 'Some Defects']
        },
        {
            name: 'Needs to be repaired',
            parent: 'Broken',
            children: null
        },
        {
            name: 'Can only be used as spare parts',
            parent: 'Broken',
            children: null
        },

        // Level 3
        {
            name: 'Brand New',
            parent: 'Factory Sealed',
            children: null
        },
        {
            name: 'Refurbished',
            parent: 'Factory Sealed',
            children: null
        },
        {
            name: 'Never Used',
            parent: '2nd Hand / Used',
            children: null
        },
        {
            name: 'Like New / Mint',
            parent: '2nd Hand / Used',
            children: null
        },
        {
            name: 'Some Defects',
            parent: '2nd Hand / Used',
            children: null
        }
    ];
}
