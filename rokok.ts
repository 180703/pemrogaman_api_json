let cigarettes = [
    {
        id: 1,
        brand: 'Marlboro',
        type: 'Regular',
        nicotineContent: 1.2, // in mg
        tarContent: 10, // in mg
        flavors: ['Classic', 'Menthol'],
        country: 'USA',
    },
    {
        id: 2,
        brand: 'Dunhill',
        type: 'Premium',
        nicotineContent: 0.9,
        tarContent: 8,
        flavors: ['Red', 'Gold'],
        country: 'UK',
    },
    {
        id: 3,
        brand: 'Lucky Strike',
        type: 'Regular',
        nicotineContent: 1.0,
        tarContent: 9,
        flavors: ['Original', 'Menthol'],
        country: 'USA',
    },
    {
        id: 4,
        brand: 'Lark',
        type: 'Low Tar',
        nicotineContent: 0.7,
        tarContent: 5,
        flavors: ['Regular', 'Light'],
        country: 'Japan',
    },
];

// 1. Display all data in table format
console.log("Semua data rokok dalam format tabel:");
console.table(cigarettes);

// 2. Get cigarette data by brand
const getCigaretteByBrand = (brand) => cigarettes.filter(cigarette => cigarette.brand === brand);
console.log("Data rokok dengan Merek 'Marlboro':", getCigaretteByBrand('Marlboro'));

// 3. Get cigarettes by country of origin
const getCigarettesByCountry = (country) => cigarettes.filter(cigarette => cigarette.country === country);
console.log("Data rokok dari negara 'USA':", getCigarettesByCountry('USA'));

// 4. Get cigarettes with nicotine content >= 1.0 mg
const getCigarettesByNicotineContent = (nicotine) => cigarettes.filter(cigarette => cigarette.nicotineContent >= nicotine);
console.log("Data rokok dengan kandungan nikotin >= 1.0 mg:", getCigarettesByNicotineContent(1.0));

// 5. Get cigarettes by flavor
const getCigarettesByFlavor = (flavor) => cigarettes.filter(cigarette => cigarette.flavors.includes(flavor));
console.log("Data rokok dengan rasa 'Menthol':", getCigarettesByFlavor('Menthol'));
