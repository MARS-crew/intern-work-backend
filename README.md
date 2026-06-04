# intern-work-backend

## 버전 정보

| 항목 | 버전 |
|------|------|
| Java | 17 |
| Spring Boot | 3.4.5 |
| MyBatis Spring Boot Starter | 3.0.3 |
| MySQL Connector | 최신 (Spring Boot 관리) |
| Gradle | 8.x |

---

## 파일 구조

```
intern-work-backend/
├── src/
│   └── main/
│       ├── java/com/mars/internworkbackend/
│       │   ├── InternWorkBackendApplication.java   # 애플리케이션 진입점
│       │   ├── controller/
│       │   │   └── UserController.java             # REST API 컨트롤러
│       │   ├── service/
│       │   │   └── UserService.java                # 비즈니스 로직
│       │   ├── mapper/
│       │   │   └── UserMapper.java                 # MyBatis 매퍼 인터페이스
│       │   ├── domain/
│       │   │   └── User.java                       # 엔티티 클래스
│       │   └── dto/
│       │       └── UserDto.java                    # 데이터 전송 객체
│       └── resources/
│           ├── application.properties              # 애플리케이션 설정
│           └── mapper/
│               └── UserMapper.xml                  # MyBatis SQL 쿼리
└── build.gradle
```

---

## ⚠️ 실행 전 필수: DB 연결 설정

> **DB 연결 없이는 애플리케이션이 시작되지 않습니다.**
> 반드시 아래 설정을 완료한 후 실행하세요.

`src/main/resources/application.properties` 파일을 열고 DB 정보를 입력합니다.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/{DB명}?serverTimezone=Asia/Seoul&characterEncoding=UTF-8
spring.datasource.username={MySQL 사용자명}
spring.datasource.password={비밀번호}
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

### 설정 예시

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/sys?serverTimezone=Asia/Seoul&characterEncoding=UTF-8
spring.datasource.username=root
spring.datasource.password=your_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

> MySQL이 로컬에 설치되어 있어야 하며, 지정한 DB가 존재해야 합니다.

---

서버 기본 포트: `http://localhost:8080`
