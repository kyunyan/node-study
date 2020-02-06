// 노드에서 제공하는 기능
console.log(__filename);    // 현재 파일까지의 경로
console.log(__dirname);     // 현재 파일이 들어있는 기능

// process 객체에는 현재 실행중인 노드 프로그램 정보가 들어있어요
// 원래는 global.process
/*
    프로세스는 스레도 보다 큰 개념
    프로레스는 하나의 프로그램 
    노드가 실행하고있는 자바스크립트 정보가 프로세스에 담겨있다

    process.versin : 노드가 설치된버전
    process.arch : 윈도우면 x86
    process.platform : 현재 실행중인 운영체재 정보
    process.pid : 현재 실행중인 프로세스 아이디
    process.uptime() : 노드프로그램이 실행된지 얼마나 됫는지를 알려준다.
    process.cwd() : 노드 프로그램을 어디서 실행하고있는지 알려준다 
    process.execPath : 노드가 설치된 경로
    process.cpuUsage()
    process.exit() : process 로 프로그램을 종료할수있따
    process.env , process.nextTick 은 추하에 사용

    // 데스크탑 프로그램을 노드가 돌릴때 데스크탑 자원정보를 사용할때 주로 사용한다!!!
*/