import { useState } from 'react';
import './App.css';
import Login from './pages/Login.jsx';
import FindId from './pages/FindId.jsx';
import FindPassword from './pages/FindPassword.jsx';

export default function App() {
  const [screen, setScreen] = useState('login');

  if (screen === 'findId') {
    return <FindId onBack={() => setScreen('login')} />;
  }

  if (screen === 'findPassword') {
    return <FindPassword onBack={() => setScreen('login')} />;
  }

  return (
    <Login
      onFindId={() => setScreen('findId')}
      onFindPassword={() => setScreen('findPassword')}
    />
  );
}
