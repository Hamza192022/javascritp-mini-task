const btn = document.querySelector(".btn_1")
const color = document.querySelector(".color")
const box = document.querySelector(".box")
const color_array =["red" ,"green","blue" , "orange" , "yellow","pink" ,"aqua"]

btn.addEventListener("click" ,function(){
    const rendomColor = getrandomcolor()
    // console.log(rendomColor);    in this line we display random color
    box.style.backgroundColor = color_array[rendomColor]
    color.textContent =color_array[rendomColor]

})

function getrandomcolor(){
    return Math.floor(Math.random() * color_array.length)
    // return Math.ceil(Math.random() * color_array.length)
}