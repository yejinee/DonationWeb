# 사용방법

## Version

node 버전 : 10.16.1
npm 버전 : 6.9.0


## 주의 사항 
오류나면 node와 npm 버전 맞춰 볼 것.


## 순서
1. git clone을 원하는 폴더에 받기

2. vscode(또는 다른 에디터)로 폴더 열기

3. server.js와 package.json이 있는 폴더에서 npm install을 입력

4. package.json 의 dependencies에 적혀 있는 모듈들을 전부 설치

5. cd ui를 입력하여 ui 폴더로 이동해서 npm install을 입력

6. ui/package.json의 dependencies에 적혀 있는 모듈들을 전부 설치

7. npm install -g nodemon 을 입력하여 nodemon을 설치

8. 최상위 폴더에서 nodemon server를 입력하여 서버를 실행시켜줌

→ ' 5000서버가 열렸습니다.'  라고 콘솔창에 나오면 서버가 열린 것임

9. cd ui를 입력하여 ui 폴더로 이동

10. npm start 또는 yarn start를 입력하여 클라이언트를 실행시킴

→ 3000번 포트에서 알아서 열리고 웹 사용 가능


현재 Server 구동중 아니므로 작동 불가능 
