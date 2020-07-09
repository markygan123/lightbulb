const circle = document.querySelector(".wrapper");
const lightBulb = document.querySelector(".bulb");
const bulbSwitch = document.querySelector("button");

bulbSwitch.innerHTML = "Turn On";

bulbSwitch.onclick = function () {
    lightBulb.classList.toggle("on");
    bulbSwitch.classList.toggle("on");
    circle.classList.toggle("wrapper-on");

    if (bulbSwitch.innerHTML === "Turn On") {
        bulbSwitch.innerHTML = "Turn Off";
    } else {
        bulbSwitch.innerHTML = "Turn On";
    }
}