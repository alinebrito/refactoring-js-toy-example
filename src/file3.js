function sum(){
  return 20+20
}

class C0{
  sum(){
    return 10 + 10;
  }
  fn(){
    var result = this.sum()
    console.log(result)
  }
}

class C1{
  fn(){
    var result = sum()
    console.log(result)
  }
}

class C2{
  sum(){
    return 30 + 30;
  }
  fn(){
    var result1 = this.sum()
    var result2 = this.sum()
    console.log(result1)
    console.log(result2)
  }
}

class C3{
  fn(){
    var classC2 = new C2()
    var result = classC2.sum()
     console.log(result)
  }
}

var classC1 = new C1()
classC1.fn()

var classC2 = new C2()
classC2.fn()

var classC3 = new C3()
classC3.fn()