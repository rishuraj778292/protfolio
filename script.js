nav_contact = document.querySelector(".nav-contact")
contact_logo = document.querySelector(".contact-logo");
nav_contact.addEventListener("mouseenter", () => {
    contact_logo.classList.add("fa-shake")
})
nav_contact.addEventListener("mouseleave", () => {
    contact_logo.classList.remove("fa-shake")
})