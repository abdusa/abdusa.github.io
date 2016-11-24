var foo = {
  bar: () => console.log(this.a)
}


let b = foo.bar;


var a = 3;
b();
