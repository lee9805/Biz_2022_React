# 다이어트 도와줘

- 오늘 하루 섭취한 식품의 칼로리가 얼마인지 기록하여 다이어트를 하는데 도와주는 App
- Express + MySQL + React + NodeJS 연동 프로젝트

## NodeJS backend Project 를 생성하기 위하여

- 프로젝트 생성 : express-21c node-320-Food (프로젝트 명)
- 프로젝트 폴드에서 : npm install

## React Frontend Project 를 생성하기 위하여

- node-310-Food 폴더에서 React client 생성 (명령어 : create-react-app client)
- client 폴더에서 터미널 열기
- yarn 실행하여 update 하기 (명령어 : yarn)
- yarn build 실행하여 build 생성하기 ( 명령어 : yarn bulid )
- node-310-Food/client/build 폴더 생성 확인

## NodeJS 에서 client 인식시키기

- node-310-Food/app.js 파일 열기
- `app.use(express.static(path.join("./client/build")));` 폴더 경로 변경 (public -> client/build)
- `app.use("/", indexRouter);` 삭제 또는 주석 처리
- node-310-Food 폴더에서 서버 실행하기 ( 명령어 : nodemon )
- Web Browser 에서 localhost:3000 주소 입력하여 React 화면 출력 확인

## React 프로젝트 파일 이름 변경

- App._ 으로 시작되는 파일을 모두 React._ 으로 변경

## MySQL 연동하기

- MySQL DB 와 연동하기 위해 Dependency 설지

```
npm install mysql2
npm install sequelize
npm install moment
```

- Sequelize 도구 설치 : 반드시 해당 상위 폴더 에서 관리자 권한으로 gloval로 설치

```
npm install -g sequelize-cli
npm install -g sequelize-auto
npm install -g mysql2
```

- sequelize 도구를 사용하여 mysql DB 연동 정보 자동화 : 터미널

```
sequelize init
sequelize-auto -o "./models" -d mydb -h 127.0.0.1 -u lee98 -x
'!Korea8080' -e mysql -l esm
```

- sequelize-auto 사용할때 끝에 ``-l esm `옵션을 생략하면 CommonsJS(ES5 이전)
  버전으로 모듈이 생성이 된다

- 사용자의 password 에 특수문자가 포함된 경우 반드시 작은 따옴표로 묶어줄것
- 선택사항들

```
-o 폴더 : model 설정 파일이 출력될 곳
-d DB명 : 사용할 mysqlDB
-h HOST :  MySQL 서버가 설치된 컴퓨터의 ip, localhost, 127.0.0.1
-u username : MySQL 접속할 권한이 있는 사용자
-x PASSWORD : MySQL 접속 사용자 비번
-e mysql : 사용할 데이터베이스 소프트웨어(engine)
-l ems :  ES6+ 버전으로 생성하기
-l em5 : ES5 버전으로 설치하기
-p PORTNUM : port 3306 이외의 다른포트로 사용하는 경우
```
