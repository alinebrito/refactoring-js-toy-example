function sum(){
  return 20 + 20
}

class C0{
  sum(){
    return 10 + 10;
  }
  fn(){
    var result = this.sum()
    console.log(result)//print 20
  }
}

class C1{
  fn(){
    var result = sum()
    console.log(result)//print 40
  }
}

class C2{
  fn(){
    var classC0 = new C0()
    var result = classC0.sum()
    console.log(result)//print 20
  }
}