

const ele = document.querySelector("#input");
ele.addEventListener("input", (event) => {
    console.log(event.target.value);
}); 

const btn = document.querySelector("#click");
btn.addEventListener("click", () => {
    alert("Hello Manoj How Are U")
})