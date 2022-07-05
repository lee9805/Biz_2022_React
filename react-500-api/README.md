# 공공DB API 프로젝트

- data.go.kr 의 기상청 기상특보 서비스를 활용한 App 제작

## React API 를 사용하기 위햐여

- data.go.kr : 대한민국 공공 DB 서비스 회원가입
- 기상청 기상특보 활용 신청
- Service 카 받기

## React CORS 문제 해결학

- http-prowx- mieles 설치하기 : yarn add http-prowy-middleware
- 현재 react 에서 가장 보편적으로 많이 사용하는 중간자 컴포넌트
- 실제 localhost:300 에서 api.data.go.kr 로 요청을 보내면 CORS 오류가 나면서 요청이 거부된다
- 이때 http-proxy-middlewre가 중간에 마치 localhost:300 주소를 API.data.go.kr 에서 요청하는 것처럼
