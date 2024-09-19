var p = prompt('Pilih : Gajah,Semut,Orang');
var comp = Math.random();
var hasil = '';
if(comp < 0.34){
    comp = 'Gajah';
}
else if(comp < 0.67){
    comp = 'Semut';
}
else{
    comp = 'Orang';
}
if(p == comp){
    hasil = 'Seri'
}
else if(p == 'Semut'){
    if(comp == 'Gajah'){
        hasil = 'Menang';
    }
    else{
        hasil = 'Kalah';
    }
}
else if(p == 'Gajah'){
    if(comp == 'Orang'){
        hasil = 'Kalah';
    }
    else{
        hasil = 'Menang';
    }
}
else if(p == 'Orang'){
    if(comp == 'Semut'){
        hasil = 'Menang';
    }
    else{
        hasil = 'Kalah';
    }
}
else{
    hasil = 'pilihan Tidak Ada';
}
alert('Kamu Memilih ' + p + ' dan Komputer Memilih ' + comp + ' Hasilnya adalah ' + hasil);