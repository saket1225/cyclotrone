var type_of_password = document.querySelector(".passwordTaker")
var lock = document.querySelector(".lock_background")
var topPart = document.querySelector(".lock_top_part")
var lockOpen = true




lock.addEventListener("click", () => {
    if (lockOpen == false) {
        topPart.classList.add("lockIsOpen")
        lockOpen = true;
        type_of_password.type = "text"
    }

    else if (lockOpen == true) {
        topPart.classList.remove("lockIsOpen")
        lockOpen = false;
        type_of_password.type = "password"
    }
})




var next = document.querySelector(".nextBackground")

next.addEventListener("click", () => {
    type_of_password.type = "password"
})
