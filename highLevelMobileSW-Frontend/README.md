# highLevelMobileSW

React frontend project

## 프론트엔드

**모이자** 서비스의 React 기반 프론트엔드입니다. 모바일 형태의 UI로 로그인, 회원가입, 아이디 찾기, 비밀번호 찾기 화면을 제공합니다.

### 기술 스택

| 구분 | 사용 기술 |
| --- | --- |
| UI | React 19, React DOM 19 |
| 언어 / 스타일 | JavaScript (JSX), CSS |
| 개발 서버 / 빌드 | Vite 8, @vitejs/plugin-react |
| 코드 검사 | ESLint 10, React Hooks / React Refresh 플러그인 |
| 상태 관리 / 통신 | React Hooks, Fetch API |

### 주요 화면 및 구현 상태

| 화면 | 구현 내용 | API 연동 상태 |
| --- | --- | --- |
| 로그인 | 아이디·비밀번호 입력, 필수 입력 검사, 로그인 유지 체크박스, 회원가입·계정 찾기 화면 이동 | 로그인 및 세션 유지 미연동 |
| 회원가입 | 아이디·비밀번호 형식 검사, 비밀번호 확인, 이름·이메일·전화번호·주소 입력, 전화번호 자동 형식 적용, 약관 동의 검사 | 회원가입 POST 요청 및 결과 안내 구현. 실제 가입은 백엔드 실행 필요 |
| 아이디 찾기 | 이름·전화번호 입력 및 검증, 로그인 화면으로 복귀 | 아이디 조회 미연동 |
| 비밀번호 찾기 | 아이디·이름·전화번호 입력 및 검증, 로그인 화면으로 복귀 | 본인 확인 및 비밀번호 재설정 미연동 |

- 화면 전환은 `src/App.jsx`의 `screen` 상태와 `useState`로 처리합니다. 별도의 URL 라우팅은 없습니다.
- 회원가입의 아이디 중복 확인 버튼은 UI와 형식 검사만 구현되어 있으며, 실제 중복 조회 API는 연결되지 않았습니다.
- `BottomNav`에는 홈·모임 추가·마이페이지 버튼과 클릭 안내 메시지가 구현되어 있으나, 현재 `App`에서는 사용하지 않습니다.

### 로컬 실행

Node.js 22.13 이상인 22.x 또는 Node.js 24 이상과 npm이 필요합니다.

```bash
git clone https://github.com/Gomoph/highLevelMobileSW-Frontend.git
cd highLevelMobileSW-Frontend
npm ci
npm run dev
```

터미널에 표시되는 개발 서버 주소로 접속합니다. 기본 주소는 `http://localhost:5173`이며, 포트가 사용 중이면 달라질 수 있습니다.

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 배포용 파일을 `dist/`에 생성 |
| `npm run preview` | 빌드 결과를 로컬에서 미리보기 (`npm run build` 후 실행) |
| `npm run lint` | ESLint 코드 검사 |

### 백엔드 연동

현재 `src/pages/Signup.jsx`에서 다음 주소로 회원가입 요청을 보냅니다.

```text
POST http://localhost:8080/api/signup
Content-Type: application/json
```

- 요청 본문은 `userId`, `password`, `passwordConfirm`, `name`, `email`, `phone`, `address`, `addressDetail`을 포함합니다.
- 약관 동의는 프론트엔드에서 검사하며 현재 요청 본문에는 포함되지 않습니다.
- 회원가입 동작을 확인하려면 해당 API를 제공하는 백엔드를 실행하고, 프론트엔드 개발 서버 출처에 대한 CORS를 허용해야 합니다.
- API 주소는 현재 코드에 직접 지정되어 있습니다. 서버 주소를 변경할 때는 `Signup.jsx`의 `fetch` 주소를 수정해야 합니다.
- 응답 성공 여부에 따라 완료·실패 메시지를 표시하고, 네트워크 오류 시 서버 연결 안내를 표시합니다.

### 폴더 구조

```text
src/
├── assets/                 # 이미지 및 SVG 리소스
├── components/
│   ├── login/
│   │   └── LoginField.jsx  # 로그인 공통 입력 컴포넌트
│   ├── BottomNav.jsx      # 하단 내비게이션 컴포넌트
│   └── BottomNav.css
├── pages/
│   ├── Login.jsx          # 로그인
│   ├── Login.css
│   ├── Signup.jsx         # 회원가입 및 API 요청
│   ├── Signup.css
│   ├── FindId.jsx         # 아이디 찾기
│   ├── FindId.css         # 계정 찾기 화면 공통 스타일
│   └── FindPassword.jsx   # 비밀번호 찾기
├── App.jsx                # 화면 전환
├── App.css
├── main.jsx               # React 진입점
└── index.css              # 전역 스타일
```
