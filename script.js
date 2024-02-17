document.querySelectorAll('.dropdown-menu a.dropdown-toggle').forEach(function (element) {
    element.addEventListener('click', function (e) {
        var parentDropdown = this.closest('.dropdown-submenu');
        if (parentDropdown) {
            e.preventDefault();
            parentDropdown.querySelector('.dropdown-menu').classList.toggle('show');
        }
    });
});

function myFunction() {
    var x = document.getElementById("key1");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
}
function myFunction2() {
    var x = document.getElementById("key2");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
}
function myFunction3() {
    var x = document.getElementById("key3");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
}