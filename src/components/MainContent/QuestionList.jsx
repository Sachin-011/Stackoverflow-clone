import React from 'react';
import QuestionCard from './QuestionCard';

export default function QuestionList({ questions, isLoading }) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <QuestionCard key={question.question_id} question={question} />
      ))}
    </div>
  );
}