function redirectToResume() {
    window.open("https://1drv.ms/b/s!AnYRTfeNhzaIfhGmOeJtu4JDMFY?e=n4Y81t");
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
