// let paragraf = document.getElementsByClassName("paragraf")
// // console.log(paragraf);
// paragraf[0].style.color = "red";
// paragraf[0].style.backgroundColor = "skyblue"
 let paragraf = document.getElementsByClassName('paragraf')
 setInterval(function(){
    paragraf[0].style.color = 'red'
    paragraf[1].style.color = 'green'
    paragraf[2].style.color = 'blue'

    setTimeout(function(){
    paragraf[0].style.color = 'maroon'
    paragraf[1].style.color = 'maroon'
    paragraf[2].style.color = 'maroon'
    },200)
 },2000)