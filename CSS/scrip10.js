var a = 10;

function tes(){
    var a = 2;
    console.log(a);//ini adalah variabel yg di dalam function
    console.log(window.a);//jika begini maka yg dimasukkan ke console kita adalah variabel global 
}
tes();