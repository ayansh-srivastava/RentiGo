import React from 'react'
import ReviewCard from './ReviewCard'
import capacity from '../assets/capacity.png'
const CustomerReviews = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 text-center mt-14">What our customers say</h1>
            <p className="text-gray-400 text-center mb-8">We value our customers' feedback. Here are some of the reviews from our happy customers.</p>

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