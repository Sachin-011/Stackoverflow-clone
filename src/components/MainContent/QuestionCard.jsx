import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { decode } from 'html-entities';

export default function QuestionCard({ question }) {
  const formatDate = (timestamp) => {
    return formatDistanceToNow(new Date(timestamp * 1000), { addSuffix: true });
  };

  return (
    <div className="border-t py-4 hover:bg-gray-50">
      <div className="flex gap-4">
        <div className="flex flex-col items-center min-w-[80px] text-sm">
          <div className="flex flex-col items-center mb-2">
            <span className="font-medium">{question.score}</span>
            <span className="text-gray-600">votes</span>
          </div>
          <div className={`flex flex-col items-center p-2 border rounded ${
            question.is_answered 
              ? 'border-green-500 text-green-600' 
              : question.answer_count > 0 
                ? 'border-orange-500 text-orange-600'
                : 'border-gray-300 text-gray-600'
          }`}>
            <span className="font-medium">{question.answer_count}</span>
            <span>answers</span>
          </div>
          <div className="flex flex-col items-center mt-2 text-gray-600">
            <span>{question.view_count}</span>
            <span>views</span>
          </div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-lg text-[#0074CC] mb-2 hover:text-[#0A95FF] cursor-pointer">
            {decode(question.title)}
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
            <div className="flex items-center gap-1">
              {question.owner.profile_image && (
                <img 
                  src={question.owner.profile_image} 
                  alt={question.owner.display_name}
                  className="w-4 h-4 rounded"
                />
              )}
              <span className="text-[#0074CC] hover:text-[#0A95FF] cursor-pointer">
                {question.owner.display_name}
              </span>
              <span>
                asked {formatDate(question.creation_date)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}