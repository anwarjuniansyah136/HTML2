var mahasiswa = {
    nama : 'Anwar Juniansyah Harahap',
    lulus : true,
    ipsemester : [2.90,3.10,3.25,2.88,3.05],
    ipkomutatif : function(){
        var total = 0;
        var ips = this.ipsemester;
        for(var i = 0; i < ips.length; i++){
            total += ips[i];
        }
        return total/ips.length;
    }
}