import React from 'react';
import { formatDistanceToNow } from 'date-fns';

export default function QuestionCard({ question }) {
  const formatDate = (timestamp) => {
    return formatDistanceToNow(new Date(timestamp * 1000), { addSuffix: true });
  };

  return (
    <div className="border-b py-4 hover:bg-gray-50">
      <div className="flex">
        <div className="flex flex-col items-center mr-6 w-16">
          <div className="text-center mb-2">
            <div className="text-gray-600">{question.score}</div>
            <div className="text-xs text-gray-500">votes</div>
          </div>
          <div className={`text-center mb-2 ${
            question.answer_count > 0 
              ? question.is_answered 
                ? 'border border-green-500 text-green-600' 
                : 'border border-orange-500 text-orange-600'
              : 'border text-gray-600'
          } rounded px-2 py-1`}>
            <div>{question.answer_count}</div>
            <div className="text-xs">answers</div>
          </div>
          <div className="text-center text-xs text-gray-500">
            <div>{question.view_count}</div>
            <div>views</div>
          </div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-[#0074CC] text-lg mb-2 hover:text-[#0A95FF] cursor-pointer">
            {question.title}
          </h2>
          <div className="flex flex-wrap gap-2 mb-2">
            {question.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-[#E1ECF4] text-[#39739D] rounded-sm text-xs hover:bg-[#D0E3F1] cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-end text-xs text-gray-600">
            <div className="flex items-center">
              {question.owner.profile_image && (
                <img 
                  src={question.owner.profile_image} 
                  alt={question.owner.display_name}
                  className="w-4 h-4 rounded mr-1"
                />
              )}
              <span className="text-[#0074CC] hover:text-[#0A95FF] cursor-pointer">
                {question.owner.display_name}
              </span>
              <span className="mx-2">
                asked {formatDate(question.creation_date)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}