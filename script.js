document.getElementById("logout-btn").onclick = (_event) => {
    window.location.href = "index.html"
}

const toggle = document.getElementById('toggle')
const navbar = document.getElementById('navbar')

function closeNavbar(e) {
    if (
        navbar.classList.contains('show-nav') &&
        e.target !== toggle &&
        !toggle.contains(e.target) &&
        e.target !== navbar &&
        !navbar.contains(e.target)
    ) {
        navbar.classList.toggle('show-nav')
        document.body.removeEventListener('click', closeNavbar)
    } else if (!navbar.classList.contains('show-nav')) {
        document.body.removeEventListener('click', closeNavbar)
    }
}

toggle.addEventListener('click', () => {
    navbar.classList.toggle('show-nav')
    document.body.addEventListener('click', closeNavbar)
})
