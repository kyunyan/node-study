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