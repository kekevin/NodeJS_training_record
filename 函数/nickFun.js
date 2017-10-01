function execute(someFun, value) {
  someFun(value)
}
execute((word)=>{
  console.log(word)
},"hello")