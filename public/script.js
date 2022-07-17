const panels = document.querySelectorAll(".panel1");

panels.forEach((panel1) => {
    panel1.addEventListener("click", function () {
        removeActiveClasses();
        panel1.classList.add("active");
    });
});

const removeActiveClasses = () => {
    panels.forEach((panel1) => {
        panel1.classList.remove("active");
    });
}