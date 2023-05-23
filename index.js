function redirectToResume() {
    window.open("https://1drv.ms/b/s!AnYRTfeNhzaIfUj_eR9pRgvRlLo?e=bZv8EN");
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
