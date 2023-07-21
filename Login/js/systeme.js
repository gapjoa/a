let emailInput = document.querySelector("#email")
let passwordInput = document.querySelector("#password")
let button = document.querySelector("#button")
let feedback = document.querySelector("#feedback")
button.addEventListener("click", () => {
    if (emailInput.value.length < 1 || passwordInput.value.length < 1) {
        feedback.innerText = "Remplissze tous les champs de text!!!"
        feedback.style.display = "block";
        setTimeout(() => {
            feedback.style.display = "none"
        }, 3000);
        return
    }
    let email = emailInput.value;
    let password = passwordInput.value;
    let user = { "email": email, "password": password };

    let xhr = new XMLHttpRequest();
    xhr.open("get", "/js/data.json");
    xhr.onload = function() {
        let data = JSON.parse(xhr.responseText);
        for (const obj of data) {
            if (obj.email == user.email && obj.password == user.password) {
                feedback.innerText = "Bonjour " + obj.nom
                feedback.style.backgroundColor = "lightgreen"
                feedback.style.display = "block"
                setTimeout(() => {
                    feedback.style.display = "none"
                }, 3000);
                return
            } else {
                feedback.innerText = "Utilisateur non reconnue! "
                feedback.style.backgroundColor = "red"
                feedback.style.display = "block"
                setTimeout(() => {
                    feedback.style.display = "none"
                }, 3000);

            }
        }
    }
    xhr.send()
})