export function veranderTitel(nieuweTitel) {
    document.querySelector('#titel').textContent = nieuweTitel;
}

export function voegParagraafToe(tekst) {
    const p = document.createElement('p');
    p.textContent = tekst;
    document.querySelector('.inhoud').appendChild(p);
}

export function setupClickHandler() {
    document.querySelector('#knop').addEventListener('click', () => {
        console.log("Je klikte op de knop!");
    });
}
