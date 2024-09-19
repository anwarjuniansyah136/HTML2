function clickme(){
    fetch('https://api.npoint.io/99c279bb173a6e28359c/data')
      .then(response => response.json()) 
      .then(data => {
        // Data berhasil diambil, lakukan tindakan yang diinginkan di sini
        console.log(data);
        const body = document.getElementById('body');
    
        // Iterasi melalui setiap item data menggunakan forEach
        data.forEach(item => {
          // Buat elemen label baru untuk setiap item data
          const div = document.createElement('div');
          const paragraf1 = document.createElement('p');
          const paragraf2 = document.createElement('p');
    
    
          // Atur teks dalam elemen label sesuai dengan data yang diinginkan
          paragraf1.innerText = item.nama;
          paragraf2.innerText = item.arti; // Misalnya, jika ada properti 'nama' dalam objek data
          div.appendChild(paragraf1);
          div.appendChild(paragraf2);
          div.setAttribute('class','anwar')
          body.appendChild(div);
    
    
          // Tambahkan elemen label ke elemen label utama di HTML
        });
      })
      .catch(error => {
        // Terjadi kesalahan saat mengambil data
        console.log('Terjadi kesalahan:', error);
      });
    
    // const div = document.createElement('div');
    // const body = document.getElementById('body');
    // div.innerText = "Anwar"
    // body.appendChild(div);
}
