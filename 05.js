function myFunction() {
  let nilai1 = 1;
  let nilai2 = 1000;
  for( let i = nilai1; i <=nilai2; i++){
    if(i%2==0 && i%5!=0 && i%100!=0) {
      console.log(i+". Genap ");
    } else if(i%2==1 && i%5!=0 && i%100!=0) {
      console.log(i+". Ganjil ");
    } else if(i%5==0 && i%100!=0) {
      console.log(i+". Kelipatan Lima");
    } else if(i%100==0) {
      console.log(i+". Kelipatan Seratus");
    } else if(nilai2%i==0) {
      console.log(i+". Bilangan Prima");
    }
  }
}
(function() {
    myFunction();
})();