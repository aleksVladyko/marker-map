const pointers = document.querySelectorAll(".pointer")

pointers.forEach(function (pointer) {
    pointer.addEventListener("click", function () {
        const tool = this.querySelector(".tool");
        tool.classList.toggle("active");
    })
})
