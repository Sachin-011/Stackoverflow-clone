import React, { useState, useEffect } from 'react';
import { fetchQuestions } from '../../services/stackExchangeApi';
import QuestionList from './QuestionList';
import TabBar from './TabBar';

export default function MainContent() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('interesting');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadQuestions = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const result = await fetchQuestions(activeTab, page);
        
        if (!mounted) return;

        if (result.error) {
          setError(result.error);
        } else {
          setQuestions(prev => page === 1 ? result.items : [...prev, ...result.items]);
          setHasMore(result.has_more);
        }
      } catch (err) {
        if (mounted) {
          setError('An unexpected error occurred');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };
    
    loadQuestions();

    return () => {
      mounted = false;
    };
  }, [activeTab, page]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setPage(1);
    setQuestions([]);
  };

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage(prev => prev + 1);
    }
  };

  return (
    <main className="flex-1 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl">Top Questions</h1>
        <button className="bg-[#0095FF] text-white px-4 py-2 rounded-md hover:bg-[#0077CC]">
          ASK QUESTION
        </button>
      </div>

      <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
      
      {error ? (
        <div className="text-red-500 p-4 text-center rounded bg-red-50">
          {error}
        </div>
      ) : (
        <>
          <QuestionList questions={questions} isLoading={loading} />
          
          {hasMore && !loading && (
            <div className="mt-6 text-center">
              <button
                onClick={loadMore}
                className="px-4 py-2 text-[#0095FF] hover:bg-[#F1F8FF] rounded-md"
              >
                Load more questions
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}