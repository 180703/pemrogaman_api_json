let data = [
    {
        id: 1,
        name: 'John Doe',
        hobbies: [
            {
                id: 1,
                name: 'bermain game',
            },
        ],
        age: 30,
        address: '123 Main St',
        city: 'New York',
        phone: '555-1234',
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        address: '456 Oak Ave',
        city: 'Los Angeles',
        phone: '555-5678',
    },
    {
        id: 3,
        name: 'Michael Johnson',
        age: 40,
        address: '789 Pine Rd',
        city: 'Chicago',
        phone: '555-8765',
    },
    {
        id: 4,
        name: 'Emily Davis',
        age: 35,
        address: '321 Cedar St',
        city: 'New York',
        phone: '555-4321',
    },
];

//TODO 1 : dapatkan semua data
//TODO 2 : dapatkan data dengan nama tertentu
//TODO 3 : dapatkan data dengan alamat New York
//TODO 4 : dapatkan data dengan umur >= 30
// filter data by price > min_price

// Fungsi untuk mendapatkan semua data
const getAllData = () => data;

// Fungsi untuk mendapatkan data berdasarkan nama tertentu
const getDataByName = (name) => data.filter(person => person.name.toLowerCase() === name.toLowerCase());

// Fungsi untuk mendapatkan data dengan alamat "New York"
const getDataByCity = (city) => data.filter(person => person.city.toLowerCase() === city.toLowerCase());

// Fungsi untuk mendapatkan data dengan umur >= 30
const getDataByAge = (minAge) => data.filter(person => person.age >= minAge);

// Contoh data yang dimodifikasi dengan harga untuk TODO 5
let dataWithPrice = [
    { id: 1, name: 'John Doe', age: 30, price: 100 },
    { id: 2, name: 'Jane Smith', age: 25, price: 200 },
    { id: 3, name: 'Michael Johnson', age: 40, price: 150 },
    { id: 4, name: 'Emily Davis', age: 35, price: 250 },
];

// Fungsi untuk memfilter data dengan harga > min_price
const getDataByPrice = (minPrice) => dataWithPrice.filter(item => item.price > minPrice);
console.log("Semua Data:", getAllData());
console.log("Data berdasarkan Nama (Jane Smith):", getDataByName('Jane Smith'));
console.log("Data berdasarkan Kota (New York):", getDataByCity('New York'));
console.log("Data berdasarkan Umur (>= 30):", getDataByAge(30));
console.log("Data berdasarkan Harga (> 150):", getDataByPrice(150));
