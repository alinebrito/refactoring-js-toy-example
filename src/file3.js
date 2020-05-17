function sum(){
  return 20+20
}

function fn1(){
  var result1 = sum()
  console.log(result1)
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
    fn1()
    var result2 = this.sum()
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

class C4{
  sum2(){
    return 100 + 100
  }
}


class C5{
  fn(){
    var classC4 = new C4()
    var result = classC4.sum2()
    console.log(result)
  }
}

var classC1 = new C1()
classC1.fn()

var classC2 = new C2()
classC2.fn()

var classC3 = new C3()
classC3.fn()

var classC5 = new C5()
classC5.fn()