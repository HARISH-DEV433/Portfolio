const scriptURL = "https://script.google.com/macros/s/AKfycbxuqt9da65_O5L4sJ2P2tPOq8nhHW9LMYF49IRZEIiB5eZ8tJLlIZPkySNws4diw8ou/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
        alert("Thank you for visiting my site!");
        setTimeout(function () {
            msg.innerHTML = "";
        }, 1000);
        form.reset();
    })
        .catch((error) => console.error("Error!", error.message));
});
