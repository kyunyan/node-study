// global이 전역 객체라면 global 에이에 저장된 데이터를 globalb 에서 사용할수있다
// 전역 객체이기때문에 파일간 global 이 공유된다. 
// global 마구 자비로 데이터를 저장하면 누구나 접근이 가능하기때문에 global사용은 하지말자
module.exports = () => global.message;