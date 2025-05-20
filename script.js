function rotateCard() {
    const card = document.getElementById('card-inner')

    if (card.style.transform === '') {
        card.style.transform = 'rotateY(180deg)'
    } else {
        card.style.transform = ''
    }
}
