버전을 만든 효용 차이점과 과거의 시점으로 돌아갈수있다.

git log -p 
-p를 붙이면 각각 에 커밋과 커밋사이에 소스 차이를 알수있다.

/dev/null 은 파일이 생겻다 는 것을 의미한다

diff

git log 커밋아이디 시
 커밋아이디 이전만 보인다

git diff 커밋아이디..커밋아이디 
이것과 이것의 소스상의 차이점을 보여준다.

git diff 
명령어 사용시 현재 워킹디렉토리에 있는 파일의 내용을 보여준다
커밋을 하기전에 작업한 내용이 문제가있는지 문제가없는지 확인할수있는 기회를 제공한다.

git diff 커밋하기전에 이전커밋과의 차이점을 보여준다. 

reset vs revert

git reset git ID --hard

깃에서는 왠만한 정보를 삭제하지 않는다.