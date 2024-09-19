let mahasiswa = {
    nama : 'Anwar Juniansyah Harahap',
    energy : 10,
    makan : function(porsi){
        this.energy = this.energy + porsi;
        // return 'Hallo ' + this.nama + ',Selamat Makann :)';
        return ` hallo nama saya ${this.nama}`;
    }
}
new mahasiswa.makan(2);