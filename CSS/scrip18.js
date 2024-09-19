const method = {
    makan: function(porsi){
        this.energy += porsi;
        console.log(`Selamat Makan ${this.nama}`);
    },
    main: function(jam){
        this.energy -= jam;
        console.log(`Selamat Main ${this.nama}`);
    },
    tidur: function(jam){
        this.energy += jam * 2;
        console.log(`Selamat Tidur ${this.nama}`);
    }
};

function Mahasiswa(nama,energy){
    let mahasiswa = Object.create(method);
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;
    return mahasiswa;
}
let Mhs = Mahasiswa('Anwar',10);