import React from 'react';

const Dashboard: React.FC = () => {
  // Intentionally throw an error to test ErrorBoundary
  throw new Error("This is a test error from Dashboard!");
  // return <h2 className="text-2xl font-bold text-sapphire p-8">Protected Dashboard</h2>;
};

export default Dashboard; 