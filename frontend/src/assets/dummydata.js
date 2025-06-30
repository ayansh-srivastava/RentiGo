import mainCar from '../assets/mainCar.png';

const dummyData = {
    cars: [
        {
            id: 1,
            name: 'Car 1',
            model: 'Model 1',
            price: 100,
            capacity: 4,
            transmission: 'Automatic',
            fuel: 'Petrol',
            city: 'City 1',
            img: mainCar,
            description: 'This luxurious car offers an amazing driving experience. Comfortable, fuel-efficient, and fully maintained for city and highway use. Whether it\'s a business trip or weekend getaway, this car fits all.',
            features: [
                'Air Conditioning',
                "Sunroof",
                "Wireless charging",
                "Antique"]
        },
        {
            id: 2,
            name: 'Car 2',
            model: 'Model 2',
            price: 150,
            capacity: 5,
            transmission: 'Manual',
            fuel: 'Diesel',
            city: 'City 2',
            img: mainCar,
            description: 'This car is perfect for city driving and short trips. Compact, easy to park, and fuel-efficient.',
            features: [
                'Air Conditioning',
                "Sunroof",
                "Wireless charging",
                "Antique"]
        }
    ]
};

export default dummyData;