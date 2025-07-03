import mainCar from '../assets/card3.png';

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
        },
        {
            id: 3,
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
            id: 4,
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
        },
        {
            id: 5,
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
            id: 6,
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
        },
        {
            id: 7,
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
            id: 8,
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
        },
        {
            id: 9,
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
            id: 10,
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
        },
        {
            id: 11,
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
            id: 12,
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
,
    bookings: [
  {
    _id: 1,
    user: 1,
    car: 1,
    pickupDate: new Date("2025-07-05"),
    returnDate: new Date("2025-07-08"),
    totalPrice: 4500,
    status: "confirmed",
    owner: 1,
    createdAt: new Date("2025-06-28T12:34:56"),
    updatedAt: new Date("2025-06-29T10:00:00"),
  },
  {
    _id: 2,
    user: 2,
    car: 2,
    owner: 2,
    pickupDate: new Date("2025-07-01"),
    returnDate: new Date("2025-07-03"),
    totalPrice: 3000,
    status: "pending",
    createdAt: new Date("2025-06-27T14:15:00"),
    updatedAt: new Date("2025-06-27T14:15:00"),
  },
  {
    _id: 3,
    user: 3,
    car: 3,
    owner: 3,
    pickupDate: new Date("2025-06-20"),
    returnDate: new Date("2025-06-23"),
    totalPrice: 3600,
    status: "completed",
    createdAt: new Date("2025-06-15T10:30:00"),
    updatedAt: new Date("2025-06-24T09:00:00"),
  },
  {
    _id: 4,
    user: 4,
    car: 4,
    owner: 4,
    pickupDate: new Date("2025-07-10"),
    returnDate: new Date("2025-07-15"),
    totalPrice: 7500,
    status: "cancelled",
    createdAt: new Date("2025-06-30T11:00:00"),
    updatedAt: new Date("2025-07-01T08:00:00"),
  },
],
users :[
  {
    _id: 1,
    name: "Rahul Verma",
    email: "rahul.verma@example.com",
    password: "hashedpassword123",
    phone: "+91 9876543210",
    isOwner: false,
    createdAt: new Date("2025-06-01T10:00:00"),
    updatedAt: new Date("2025-06-10T12:00:00")
  },
  {
    _id: 2,
    name: "Priya Mehta",
    email: "priya.mehta@example.com",
    password: "hashedpassword456",
    phone: "+91 9123456780",
    isOwner: true,
    createdAt: new Date("2025-05-15T09:30:00"),
    updatedAt: new Date("2025-06-01T11:45:00")
  },
  {
    _id: 3,
    name: "Amit Shah",
    email: "amit.shah@example.com",
    password: "hashedpassword789",
    phone: "+91 9988776655",
    isOwner: false,
    createdAt: new Date("2025-06-20T08:15:00"),
    updatedAt: new Date("2025-06-28T14:00:00")
  },
  {
    _id: 4,
    name: "Sneha Kapoor",
    email: "sneha.kapoor@example.com",
    password: "hashedpassword321",
    phone: "+91 8877665544",
    isOwner: true,
    createdAt: new Date("2025-06-05T16:00:00"),
    updatedAt: new Date("2025-06-25T18:00:00")
  }
]

};

export default dummyData;