// require 로 모듈을 불러올수 있다.

const os = require("os");
os.arch()
'x64'
os.platform()
'darwin'
os.type()
'Darwin'
os.uptime()     // 운영체제가 시작되고 나서 흐른 시간
2559
os.hostname()
'igeon-wan-ui-MacBookPro-2.local'
os.release()
'18.7.0'
os.homedir()
'/Users/igeon-wan'
os.tmpdir()
'/var/folders/dh/d1hj8z5j20q_8v708qq_rd0r0000gn/T'
os.freemem()            // 사용 가능한 메모리
1629380608
os.totalmem()           // 내 메모리
8589934592
os.cpus()               // cpu 정보를 알려준다
[
  {
    model: 'Intel(R) Core(TM) i5-8257U CPU @ 1.40GHz',
    speed: 1400,
    times: { user: 286780, nice: 0, sys: 152790, idle: 2368690, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8257U CPU @ 1.40GHz',
    speed: 1400,
    times: { user: 18410, nice: 0, sys: 13780, idle: 2775600, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8257U CPU @ 1.40GHz',
    speed: 1400,
    times: { user: 249370, nice: 0, sys: 103400, idle: 2455020, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8257U CPU @ 1.40GHz',
    speed: 1400,
    times: { user: 17870, nice: 0, sys: 12670, idle: 2777250, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8257U CPU @ 1.40GHz',
    speed: 1400,
    times: { user: 211840, nice: 0, sys: 82070, idle: 2513890, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8257U CPU @ 1.40GHz',
    speed: 1400,
    times: { user: 17890, nice: 0, sys: 11460, idle: 2778450, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8257U CPU @ 1.40GHz',
    speed: 1400,
    times: { user: 158750, nice: 0, sys: 59680, idle: 2589370, irq: 0 }
  },
  {
    model: 'Intel(R) Core(TM) i5-8257U CPU @ 1.40GHz',
    speed: 1400,
    times: { user: 17800, nice: 0, sys: 10470, idle: 2779520, irq: 0 }
  }
]

// os는 운영체제와 관련된 모듈 
/* cpus 사용법 
    노드는 싱글스레드라서 하나의 코어밖에 안쓰는데
    코어가 8개면 7개가 노니까 
    실무에서는 시피유개수를 파악해서 반북문을 통해서 시피유를 모두 사용하도록한다 이런것을 멀티프로세싱이라한다.
*/










