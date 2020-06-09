let calculate ={
 read() {
   this.a = +prompt('input number',0)
   this.b = +prompt('input number',0)
 },
 sum(){
    return this.a + this.b
 },
 multiply(){
    return this.a * this.b
 }
}

calculator.read();
alert('Sum of a and b is:' + calculator.sum());
alert('Product of a and b is:' + claculator.multiply());
