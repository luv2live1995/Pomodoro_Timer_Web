// script.js
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".toggle-btn");
    const content = document.querySelector(".content");

    toggleBtn.addEventListener("click", function () {
        if (sidebar.style.left === "0px" || sidebar.style.left === "") {
            sidebar.style.left = "-250px";
            content.style.marginLeft = "0";
        } else {
            sidebar.style.left = "0";
            content.style.marginLeft = "250px";
        }
    });
});
