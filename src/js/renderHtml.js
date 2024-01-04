// Load header via AJAX
function loadHeader() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("header-container").innerHTML = this.responseText;
            updateHeader()
        }
    };
    xhr.open("GET", "header.html", true);
    xhr.send();
}
document.addEventListener("DOMContentLoaded", loadHeader);
