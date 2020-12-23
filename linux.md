현재디렉토리의 파일 목록 ls -al

아이콘 같은 방식을 gui방식 명렁어로 하는 방식 cli 방식 command line interface
내가 내리는 명령은 현재 내가 있는 디렉토리를 대상으로 된다.
현재 위치 확인 pwd
mkdir 디렉토리 생성
touch 파일명 파일생성
ls -l 현재 디렉토리에 파일과 디렉토리를 조금더 자세하게 보여준다. 파일의 리스트를 보여준다.

권한 / 소유자 / 파일용량 / 생성날자 맨앞에 d는 디렉토리 아니면 파일

디렉토리를 들어간다 바꾼다 change directory
cd hello_linux      tab 키 누르면 자동완성

cd 절대경로 /home/ubuntu
cd 상대경로 .. 현재 디렉토리토리에 부모

/ 루트 디렉토리 최상위 디렉토리

rm hello_linux          // 디렉토리 삭제 안됨
rm empty_file.txt       // 파일은 삭제됨

rm -r hello_linux       // 리무브 디렉토리  안에 있는 디렉토리 다삭제
rm --help               rm 에 명령에대한 도움말 나옴

명령어를 자세한 설명이 필요한경우
man 상세한 설명서가 나온다 man ls
help 는 현재 화면에서 간단한 메뉴얼이 나오고
man 은 화면이 이동해서 상세한 메뉴얼이 나온다

man으로 나온것을 /sort 문자열을 찾고 다음문자열은 n
나가는 것은 q

mkdir --help    내용이 나오는데
mkdir --help

mkdir --version     대부분의 명령들이 version이라는 것을 가지고있다

리눅스나 유닉스의 명령어는 대부분은 프로그램들이다
mkdir rm ls 기본적으로 내장되어있는 프로그램들이다 그래서 이것을 명령어처럼 사용한다.

mkdir -p dir1/dir2/dir3/dir4 mkdir 은 기본적으로 디렉토리 하나만 생성하는데 -p는 디렉토리를 부모의 디렉토리를 생성한다.
-p 축약형 --parents 풀네임

ls --help
ls -a 모든 파일들을 보여준다.   숨김파일까지 보내준다 숨김파일은 . 이붙는다.
ls -l 자세히
ls -al
ls -alS     파일 사이즈를 구별한다.

cp cp.txt dir/cp.txt

rm cp.txt

mv cp.txt cp1.txt       파일 이동 및 파일명 변경 가능

sudo super user do 슈퍼 유저가 하는일
리눅스 계열에 특징이 다중사용자가 특징이다.
permission 을 통해서 사용자가 할수있는일과 없는일을 만든다.

user 로 우분투는 apt-get 명령어로 git 을 설치할수있는데
apt-get install git 명령을 할시 permission denied 를 당한다.

sudo apt-get install git 명령을 통해 git을 설치할수잇다.

리눅스에서도 패키지가 적용가능하다.
오늘날에는 리눅스 유닉스는 패키지 매니저를 제공한다 핸드폰의 앱스토어랑 비슷하다.

리눅스에서 대표적인 패키지 매니저는 apt, yum
apt -get update;

sudo apt-get update;

sudo apt-cache search htop htop 에 관련되어있는 패키지목록을 보여준다

기본적으로 리눅스에서는 top이라는 게 설치되어있다 . 윈도우에서 치면 작업관리자 현재 컴퓨터에서 실행되고있는 목록을 보여준다
알파벳 q를 누르면 빠젼가간다.

sudo apt-cache search htop
// htop을 설치한다.
sudo apt-get install htop

htop 입력시 조금더 gui 치중되게 top의 정보가 나온다.

현재 설치되있는 버전을 업그레이드 하고싶다면
sudo apt-get upgrade htop
현재 설치되어있는 모든 프로그램들을 최신 상태로 업그레이드 하고싶다면 그냥 쓰면된다.
sudo apt-get upgrade

지금 설치 되어있는 프로그램을 삭제
sudo apt-get remove htop

htop을 사용할때는 sudo htop 을쓰는게 모든 프로그램을 확인 할수 있으므로 더 정확하다.

home brew 패키지 메니저
brew search search 는 내가 필요한 프로그램을 현재 다운받을수있는지 없는지
brew search htop
brew install htop-osx       홈브루에 저장소에서  htop-osx 라는 프로그램을 다운 받는데
htop을 삭제 하고싶다면
brew list 내 컴퓨터에 homebrew 를 통해 설치한 디렉토리 명이 나온다.
홈브루 삭제
brew uninstall htop-osx

brew upgrade vim   홈브루 업그레이드
brew upgrade       모든 프로그램들을 전체적으로 업그레이드
brew update        업데이트를 최신버전으로 맞춰줌
