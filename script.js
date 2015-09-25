function buttonPressed() {
    var message = document.getElementById("message").value;
    if (message) {
        document.getElementById("background").style.background = message;
    }
}
