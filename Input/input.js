

const ele = document.querySelector("#input");
ele.addEventListener("input", (event) => {
    console.log(event.target.value);
});