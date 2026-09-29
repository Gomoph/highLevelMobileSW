// ./pages/Signup.jsx

import { useState } from 'react';

// 이전으로 돌아가기, 회원가입 성공!
export default function Signup({ onBack, onComplete }) {
  // 개인정보
  const [form, setForm] = useState({
    userId: '',
    password: '',
    passwordConfirm: '',
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  // 약관 동의
  const [agreement, setAgreement] = useState({
    terms: false,
    privacy: false,
    marketing: false,
  });

  // 아이디 중복 확인
  const [duplication, setDuplication] = useState({
    value: '',
    status: 'idle',
  });

  return (
    <main className="Signup-page">
      <section className="signup-phone">
        <div className="signup-status" aria-hidden="true">
          <span>9:41</span>
          <span>▮▮▮ · ▰</span>
        </div>
        <header className="signup-header">
          <button
            className="signup-back"
            type="button"
            onClick={onBack}
            aria-label="로그인 화면으로 돌아가기">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <h1 id="signup-title">회원가입</h1>
        </header>

        <div className="signup-content">
          
        </div>
      </section>
    </main>
  );
}
