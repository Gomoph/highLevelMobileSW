import { useState } from 'react';
import './App.css';
import Login from './pages/Login.jsx';
import FindId from './pages/FindId.jsx';
import FindPassword from './pages/FindPassword.jsx';
import Signup from './pages/Signup.jsx';
import Home from './components/home/Home.jsx';

export default function App() {
  const [screen, setScreen] = useState('login');

  // 로그인 페이지로 돌아가는 함수
  if (screen === 'findId') {
    return <FindId onBack={() => setScreen('login')} />;
  }

  if (screen === 'findPassword') {
    return <FindPassword onBack={() => setScreen('login')} />;
  }

  if (screen === 'signup') {
    return <Signup onBack={() => setScreen('login')} />;
  }

  if (screen === 'home') {
    return <Home />;
  }

  return (
    <Login
      onSignup={() => setScreen('signup')}
      onFindId={() => setScreen('findId')}
      onFindPassword={() => setScreen('findPassword')}
    />
  );
}
