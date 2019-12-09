var lagu = 'Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali';

var count1 = 0;
var count2 = 0;
var count3 = 0;

var pos1 = lagu.indexOf('Aku');
var pos2 = lagu.indexOf('ingin');
var pos3 = lagu.indexOf('Dapat');

while (pos1 !== -1) {
  count1++;
  pos1 = lagu.indexOf('Aku', pos1 + 1);
}

while (pos2 !== -1) {
  count2++;
  pos2 = lagu.indexOf('ingin', pos2 + 1);
}

while (pos3 !== -1) {
  count3++;
  pos3 = lagu.indexOf('Dapat', pos3 + 1);
}

console.log('Jumlah kata Aku pada lagu Doraemon adalah sebanyak = '+count1); 
console.log('Jumlah kata ingin pada lagu Doraemon adalah sebanyak = '+count2);
console.log('Jumlah kata Dapat pada lagu Doraemon adalah sebanyak = '+count3);