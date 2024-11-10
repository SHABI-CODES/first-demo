var input = document.getElementById("input")
var text = document.querySelector(".text")

function Add(){
    if(input.value == ""){
        alert("please enter task")
    }else{
        var newEle = document.createElement("ul")
        newEle.innerHTML = `${input.value} <i class="fa-solid fa-delete-left"></i>`
        text.appendChild(newEle)
        input.value = ""
        newEle.querySelector("i").addEventListener("click", remove)
        function remove(){
            newEle.remove()
        }
    }
}

//link actually-sun.surge.sh


// var input = document.getElementById("input");
// var text = document.querySelector(".text"); // Ek single element ke liye querySelector istemal karein

// function Add() {
//     if (input.value == "") {
//         alert("please enter task");
//     } else {
//         var newEle = document.createElement("ul");
//         newEle.innerHTML = `${input.value} <i class="fa-solid fa-delete-left"></i>`;
//         text.appendChild(newEle); // Ek single element me append karein
//         input.value = "";
//         newEle.querySelector("i").addEventListener("click", remove); // Typo correct kiya
//         function remove() {
//             newEle.remove();
//         }
//     }
// }
