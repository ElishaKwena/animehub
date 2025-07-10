import React from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <h2 className="text-2xl font-bold mb-4 text-sapphire">Login Page</h2>
    <button
      onClick={onLogin}
      className="px-6 py-2 bg-sapphire text-white rounded shadow hover:bg-dark900 transition"
    >
      Log In
    </button>
  </div>
);

export default Login; 