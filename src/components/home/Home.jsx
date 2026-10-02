import './Home.css';
import BottomNav from '../BottomNav.jsx';

export default function Home({ userName }) {
  return (
    <>
      <main className="home">
        <h1>모이자</h1>
        <p>{userName}님, 환영합니다.</p>
        {/* 추후 추가 예정 */}
      </main>
      <BottomNav />
    </>
  );
}
