var nama = ['Anwar','Juniansyah','Harahap','Ganteng'];
//join
// console.log(nama.join('  '));

//push
// nama.push('Ganteng');
// console.log(nama.join('  '));

//pop
// nama.pop();
// console.log(nama.join('  '));

// unshift
// nama.unshift('Ganteng');
// console.log(nama.join(' '));

// shift
// nama.shift();
// console.log(nama.join('  '));

// Splice
// Splice(indexKeberapa,mauDiHapusBerapa,ElemenBaru1,ElemenBaru2,ElemenBArun)
// nama.splice(2,0,'MArkonah');
// nama.splice(1,2,"Jarum","coklat");
// console.log(nama.join(' '));

// Slice
// Slice(indexawal,indexakhir)
// var arr = nama.slice(0,1);
// console.log(arr.join(' '));

// Foreach
// var angka = [1,2,3,4,5,6,7,8];
// angka.forEach(function(e) {
//     console.log(e);
// });
// var arr = ['Anwar','Juniansyah','Harahap'];
// arr.forEach(function(e,i){
//     console.log('Mahasiswa Ke- ' + i + 'Adalah : ' + e);
// })

// map
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e){
//     return e * 2;
// })
// console.log(angka2.join(' '));

// sort
// var angka = [1,2,3,4,6,5,8,9];
// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka);

// Filter
// var angka = [1,2,10,5,20,3,6,8,4];
// var angka2 = angka.filter(function(x){
//     return x > 5;
// });
// console.log(angka2.join(' '));

var angka = [1,2,3,4,5,6,7,8,9];
var angka2 = angka.find(function(x){
    return x > 5;
});
console.log(angka2);