function popup() {
    let emailInput = document.querySelector('input[type="email"]');
    let mobileInput = document.querySelector('input[type="text"]');
    let nameInput = document.querySelector('input[type="text"]');
    let passwordInput = document.querySelector('input[type="password"]');

    if (emailInput.value.trim() !== "" &&
        mobileInput.value.trim() !== "" &&
        nameInput.value.trim() !== "" &&
        passwordInput.value.trim() !== "") {
        let pop = document.querySelector('.popup');
        let box = document.querySelector('.container');
        pop.style.visibility = "visible";
        box.style.visibility = "hidden";
    }
}

