var xhr = new XMLHttpRequest();
var url = "http//api.github.com/users/petanikode"
xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById("hasil").innerHTML = this.responseText
    }
}
xhr.open("GET",url,true);
xhr.send();