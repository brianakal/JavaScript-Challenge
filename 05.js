
function Prima( n ) {
    var max = Math.sqrt(n);
    for( var i = 2;  i <= max;  i++ ) {
        if( n % i == 0 )
            return false;
    }
    return true;
}

if(true){ 
function myFunction() {
  let nilai1 = 1;
  let nilai2 = 1000;
  for( let i = nilai1; i <=nilai2; i++){
    if(i%2==0 && i%5!=0 && i%100!=0) {
      console.log(i+". Bilangan Genap");
    }  
    if(i%2==1 && i%5!=0 && i%100!=0) {
      console.log(i+". Bilangan Ganjil");
    } 
    if(i%5==0 && i%100!=0) {
      console.log(i+". Bilangan Kelipatan 5");
    } 
    if(Prima(i)) {
      console.log(i+". Bilangan Prima");
    } 
    if(Prima(i) && i < 100) {
      console.log(i+". Bilangan Prima Kurang dari 100");

    }
  }
}

    myFunction();


}