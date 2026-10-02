import './BottomNav.css';
import { useState, useEffect } from 'react';

export default function BottomNav() {
  const [toastMessage, setToastMessage] = useState('');

  function handleClick(message) {
    setToastMessage(message);
  }

  // toastMessage가 변경될 때 실행
  useEffect(() => {
    // 메시지가 없으면 아무것도 하지 않음
    if (!toastMessage) return;

    // 2초 후 메시지 제거
    const timer = setTimeout(() => {
      setToastMessage('');
    }, 2000);

    // 기존 타이머 정리
    return () => {
      clearTimeout(timer);
    };
  }, [toastMessage]);

  return (
    <>
      {toastMessage && <div className="toast-message">{toastMessage}</div>}

      <nav className="mobile-bottom-nav">
        <button
          className="mb-item"
          onClick={() => handleClick('홈 버튼을 클릭했습니다.')}>
          <span className="material-symbols-outlined">home</span>
          <span>홈</span>
        </button>

        <button
          className="mb-item mb-add"
          onClick={() => handleClick('새 모임을 추가합니다.')}>
          <span className="material-symbols-outlined">add</span>
        </button>

        {/* <button
          className="mb-item"
          onClick={() => handleClick('찜 목록을 확인합니다.')}>
          <span className="material-symbols-outlined">favorite</span>
          <span>찜</span>
        </button> */}

        <button
          className="mb-item"
          onClick={() => handleClick('마이페이지로 이동합니다.')}>
          <span className="material-symbols-outlined">account_circle</span>
          <span>마이페이지</span>
        </button>
      </nav>
    </>
  );
}
