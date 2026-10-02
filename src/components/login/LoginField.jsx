// components/login/LoginField.jsx
// 로그인에서 공통으로 사용하는 밑줄 형태의 입력 컴포넌트
export default function LoginField({
  name,
  label,
  type = 'text',
  autoComplete,
}) {
  return (
    // 화면에 입력창과 보조 기기용 이름을 표시합니다.
    // label이 입력창을 감싸므로 화면 읽기 프로그램도 항목 이름을 알 수 있습니다.
    <label className="login-field">
      {/* 디자인에는 숨기고 화면 읽기 프로그램에만 제공하는 이름입니다. */}
      <span className="login-visually-hidden">{label}</span>
      {/* 입력값은 제출할 때 name을 기준으로 읽으며, required로 빈칸을 검사합니다. */}
      <input
        name={name}
        type={type}
        placeholder={`${label}를 입력하세요`}
        autoComplete={autoComplete}
        required
      />
    </label>
  );
}
