document.querySelector('#grandParent').addEventListener("click", (e) => {
    console.log("Grand Parent Clicked!");
})

document.querySelector('#parent').addEventListener("click", (e) => {
    console.log("Parent Clicked!");
    // e.stopPropagation();
},) 

document.querySelector('#child').addEventListener("click", (e) => {
    console.log("Child Clicked!");
})