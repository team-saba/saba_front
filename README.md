
> 실행시키고 싶을 때
##### 레포 클론받아온 이후에 필요 모듈 설치
 npm install
###### 시작
 npm start

 ------------

> 코드 수정 후 pr 남기고 싶은 경우
##### fork 받은 본인 레포 클론
 git clone https://github.com/team-saba/cpplovelove_front
##### 원격 레포 추가
 git remote add upstream https://github.com/team-saba/saba_front.git
##### 연결 상태 확인
 git remote -v 


> 풀푸시  
##### 포크해 온 레포 업데이트
git fetch upstream 
git merge upstream/main
---

#### Material UI

Material UI is available as an [npm package](https://www.npmjs.com/package/@mui/material).

**npm:**

```sh
npm install @mui/material @emotion/react @emotion/styled
```
