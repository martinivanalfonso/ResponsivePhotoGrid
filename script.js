const cards = document.querySelector('.photo-grid')

cards.addEventListener('click', e => {

    if (e.target.classList.contains('card-tall') && e.target.classList.contains('card-wide')) {
        e.target.classList.toggle('card-wide')
        e.target.classList.toggle('card-tall')
    } else if (e.target.classList.contains('card-tall')) {
        e.target.classList.toggle('card-wide')
    } else {
    e.target.classList.toggle('card-tall')
    }
})