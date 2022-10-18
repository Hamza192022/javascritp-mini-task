let btn = document.getElementById("btn")
const color_array =["red" ,"green"]

btn.addEventListener("click" ,function(){
    // btn.MouseEvent(style.color = "green")
    // let color = color_array.length;

    btn.style.backgroundColor = color_array[getrandomcolor()] // calling function


    // if()

// let h1 =this.click()
    // if ()
    // {

    //     btn.style.color = "green";
    // }
    // console.log();
 
    // console.log(btn.style.backgroundColor = "red"?btn.style.backgroundColor = "green":btn.style.backgroundColor = "green");
// if(btn.style.backgroundColor = "red"){

//     btn.style.backgroundColor = "green";
//     if(btn.style.backgroundColor = "green"){
//         btn.style.backgroundColor = "red";
//     }
//   if(btn.style.backgroundColor != "green"){btn.style.backgroundColor = "red"; }
// let a= btn.style.backgroundColor = "green";
// if(btn.style.backgroundColor = "green"){
//     btn.style.backgroundColor = "red";
// }


// else if(btn.style.backgroundColor = "green"){
//     btn.style.backgroundColor = "red";  
// }
//         // tn.style.backgroundColor = "green";

//         // if(btn=="click"){
//         //     btn.style.backgroundColor = "green"
//         // }

})
function getrandomcolor(){
    return Math.floor(Math.random() * color_array.length)
    // return Math.ceil(Math.random() * color_array.length)
}

// function show(){

//     document.style.backgroundColor="green";
//     return false
//     console.log("hello");
    
// }