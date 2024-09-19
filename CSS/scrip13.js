var penumpang = ['Anwar',undefined,'Harahap'];
var tambahpenumpang = function(namapenumpang,penumpang){
    if(penumpang.length == 0){
        penumpang.push(namapenumpang);
        return penumpang;
    }
    else{
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == undefined){
                penumpang[i] = namapenumpang;
                return penumpang;
            }
            else if(penumpang.length -1 == i){
                penumpang.push(namapenumpang);
                return penumpang;
            }
        }
    }
}