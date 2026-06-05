# intern-work-backend

MARS 깍두기 백엔드 프로젝트입니다. Express.js 기반의 Node.js 서버로 구성되어 있습니다.

---

## 버전 정보

| 항목 | 버전 |
|------|------|
| Node.js | 권장: v18 이상 |
| Express | ^5.2.1 |
| mysql2 | ^3.22.4 |
| dotenv | ^17.4.2 |
| 모듈 시스템 | CommonJS (`require`) |

---

## 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 서버 실행

```bash
node app.js
```

서버가 정상적으로 실행되면 아래 메시지가 출력됩니다.

```
App running on port 3000...
```

### 3. 동작 확인

브라우저 또는 API 클라이언트에서 아래 주소로 접속합니다.

```
http://localhost:3000
```

---

## 폴더 구조

```
intern-work-backend/
├── app.js                  # 앱 진입점. Express 인스턴스 생성, 라우트 등록, 서버 실행
├── package.json            # 프로젝트 메타데이터 및 의존성 관리
├── config/
│   └── db.js               # 데이터베이스 연결 설정
└── src/
    ├── controllers/
    │   └── index.js        # 요청/응답 처리. req, res를 받아 Service를 호출하고 응답 반환
    ├── services/
    │   └── index.js        # 비즈니스 로직. 핵심 데이터 처리 로직 작성
    ├── models/
    │   └── index.js        # 데이터 구조 정의. DB 스키마와 모델 명세
    ├── routes/
    │   └── index.js        # URL 라우팅. 어떤 URL이 어떤 Controller로 연결되는지 정의
    ├── middlewares/
    │   └── index.js        # 공통 처리 레이어. 인증, 로깅, 에러 처리 등 라우터 실행 전후 공통 함수
    └── utils/
        └── index.js        # 공통 유틸 함수. 여러 곳에서 재사용되는 헬퍼 함수 모음
```

### 레이어 역할 요약

```
Request → Route → Middleware → Controller → Service → Model → DB
                                                ↑
                                            Utils (공통 함수)
```

| 레이어 | 역할 |
|--------|------|
| **routes** | URL과 Controller를 연결하는 라우팅 정의 |
| **middlewares** | 요청 전/후 공통 처리 (인증, 로깅, 에러 핸들링) |
| **controllers** | 요청 수신 및 응답 반환. 로직은 Service에 위임 |
| **services** | 비즈니스 로직 집중. Controller를 얇게 유지하는 핵심 레이어 |
| **models** | DB 스키마 및 데이터 구조 정의 |
| **utils** | 공통으로 재사용되는 헬퍼 함수 모음 |
| **config/db** | 데이터베이스 연결 설정 |

---

## 레포지토리

- GitHub: [MARS-crew/intern-work-backend](https://github.com/MARS-crew/intern-work-backend)
- 이슈: [Issues](https://github.com/MARS-crew/intern-work-backend/issues)
