let bgColor = document.getElementById('bg-color')
let txtColor = document.getElementById('text-color')
bgColor.addEventListener("change",(event) => {
    document.body.style.backgroundColor = bgColor.value
})
textColor.addEventListener("change",(event) => {
    document.body.style.color = txtColor.value
})