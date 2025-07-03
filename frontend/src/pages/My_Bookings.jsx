import React from 'react'
import Title from '../components/Title'
import dummyData from '../assets/dummydata'
import BookingCard from '../components/BookingCard'

const My_Bookings = () => {
  const bookings = dummyData.bookings
    return (
    <>
    <Title title="My Bookings" description="View and manage your bookings here." />
    
    {bookings.map((booking) =>(
        <BookingCard
          key={booking._id} {...booking}
        />
      ))}
    </>
  )
}

export default My_Bookings