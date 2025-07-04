import React from 'react'
import Title from '../../components/owner/Title'
import dummyData from '../../assets/dummydata'
import CarDetails from '../../components/owner/CarDetails'
const ManageCars = () => {
  const bookings=dummyData.bookings
  console.log(bookings)
  return (
    <div className='ml-4'>
    <Title 
      title="Manage Cars"
      description="View all listed cars, update their details, or remove them from the booking platform">
    </Title>
    <div>
      <div>Car Price Status Action</div>
      {
        bookings.map((booking) => {
          
          <CarDetails booking={booking} />
        })
      }
    </div>
    </div>
  )
}

export default ManageCars