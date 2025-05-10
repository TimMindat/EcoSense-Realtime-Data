import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import { Loader2 } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 text-green-500 animate-spin mb-4" />
        <h2 className="text-xl font-medium text-gray-700">Loading EcoSense Data...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 flex flex-col">
      <Header />
      <main className="flex-grow py-4">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;