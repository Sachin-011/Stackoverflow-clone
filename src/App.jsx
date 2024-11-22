import React from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <div className="min-h-screen bg-[#FDB515]"> {/* Updated background color to match image */}
      <div className="max-w-[1264px] mx-auto bg-white min-h-screen shadow-lg">
        <Header />
        <div className="flex">
          <LeftSidebar />
          <MainContent />
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default App;