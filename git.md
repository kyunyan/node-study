git init --bare bare 작업을 할수 없고 저장소로만 사용한다.

.git 디렉토리만 있는 디렉토리


origin 이라는 것은 별명 같은것이다 한번 사용하면 계속해서 사용할수있다. 기니까 별명으로 사용하겟다


git remote -v  remote 에 붙은 주소를 알수있다.

git remote remove origin  지정된 리모트 저장소를 삭제할수잇다.

git push --set-upstream origin master 깃을 푸쉬할때 오리진에 마스터 브랜치에 푸쉬한다.
--set-upstream 마스터에서 푸쉬명령을 내리면 마스터에다가 푸쉬한다는 의미이다.
명시적으로 세팅해주는 옵션이다.



명시적으로 항상 origin에 마스터 브랜치로 세팅한다는 의미이다.


원격저장소 만들기

git remote add origin 저장소 지정 origin 은 별명같은것이다 길어서 지정

git remote      origin 이라는 원격 저장소 만들어졋다

git remote -v 
origin 주소
origin 주소         origin의 주소는 이것이다.

git remote add friend   remote 주소 추가가능

추가하면 git remote -v 햇을때 현재 등록한 remote 주소 확인 가능하다
origin이 원본이다

git remote remove friend

git push 
local 저장소를 기준으로 내가 작업한 내용을 원격저장소로 보낼때 push 사용한다
git push origin master

origin 이라는 이름으로 master 브랜치를 등록하겟다고 push 를 저장한다

git clone .git
clone 을 하면 git remote -v 하면 지정된 리모트 저장소가 같다는 것을 확인할수있다.

동기화 작업
git pull 땡겨온다 지역저장소 입장에서 원격저장소에 있는 소스를

