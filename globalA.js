// global이 전역 객체라면 global 에이에 저장된 데이터를 globalb 에서 사용할수있다
// 전역 객체이기때문에 파일간 global 이 공유된다. 

module.exports = () => global.message;