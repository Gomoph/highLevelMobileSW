import './Home.css';
import BottomNav from '../BottomNav.jsx';
import Map from '../Map/Map.jsx';

export default function Home({ userName }) {
  return (
    <>
      <main className="home">
        <h1>모이자</h1>
        <p>{userName}님, 환영합니다.</p>
        {/* 추후 추가 예정 */}
        <Map />
      </main>
      <BottomNav />
    </>
  );
}
