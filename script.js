const tombolMenuLain = document.querySelector("#tombol-menu-lain");
const menuTersembunyi = document.querySelectorAll(".sembunyi");
tombolMenuLain.addEventListener("click", function() {
menuTersembunyi.forEach(function(kartu) {
kartu.classList.remove("sembunyi");
});
tombolMenuLain.style.display = "none";
});