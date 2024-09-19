// Object Literal
var mhs1 = {
    nama : 'Anwar Juniansyah Harahap',
    nrp : '043040023',
    email : 'AnwarJuniansyah136@gmail.com',
    jurusan : 'Teknik Informatika'
}
var mhs2 = {
    nama : 'Salim Hidayat',
    nrp : '033040007',
    email : 'SalimHidayat13@gmail.com',
    jurusan : 'Teknik Informatika'
}

// Functionn Declaration
function object(nama,nrp,email,jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
var mhs3 = object('Imron Sihaloho','023040123','imronsihaloho@gmail.com','D3 Manajemen Informatika');

// construktor
function Mahasiswa(nama,nrp,email,jurusan){
    // var this
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // Return this
}
var mhs4 = new Mahasiswa("Erik","01304032Teknik Sepeda Motor");