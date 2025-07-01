import React from 'react'
import ReviewCard from './ReviewCard'
import capacity from '../assets/capacity.png'
import Title from './Title'
const CustomerReviews = () => {
    return (
        <div>
            <Title 
                title="What our customers say"
                description="We value our customers' feedback. Here are some of the reviews from our happy customers."
            />

            <div className="flex w-full justify-between flex-wrap gap-4 px-6 md:px-20">
            <ReviewCard 
                author="John Doe" 
                review="Great service! The car was in excellent condition."
                img={capacity}
                city="Delhi"
                stars={4.5}
            />
            <ReviewCard 
                author="John Doe" 
                review="Great service! The car was in excellent condition."
                img={capacity}
                city="Delhi"
                stars={4.5}
            />
            <ReviewCard 
                author="John Doe" 
                review="Great service! The car was in excellent condition."
                img={capacity}
                city="Delhi"
                stars={4.5}
            />
            </div>

        </div>
    )
}

export default CustomerReviews