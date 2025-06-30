import React from 'react';

const ReviewCard = (props) => {
  return (
    <div className="bg-white shadow-md border p-4 rounded-lg max-w-sm w-full">
      <div className="flex items-center gap-4 mb-4">
        <img src={props.img} alt={props.author} className="w-12 h-12 rounded-full" />
        <div className="text-left">
          <p className="font-semibold text-gray-800">{props.author}</p>
          <p className="text-sm text-gray-500">{props.city}</p>
        </div>
      </div>
      <p className="text-gray-600 italic mb-3">"{props.review}"</p>
      <div className="flex justify-end">
        <span className="text-yellow-500 font-semibold">{props.stars} ★</span>
      </div>
    </div>
  );
};

export default ReviewCard;
