import { describe, it, expect, beforeEach, vi } from 'vitest';
import { veranderTitel, voegParagraafToe, setupClickHandler } from './dom.js';

describe('DOM manipulatie', () => {
    beforeEach(() => {
        // Maak een schone DOM voor elke test
        document.body.innerHTML = `
      <h1 id="titel">Oude titel</h1>
      <div class="inhoud"></div>
      <button id="knop">Klik</button>
    `;
    });

    it('verandert de titel', () => {
        veranderTitel("Nieuwe titel");
        expect(document.querySelector('#titel').textContent).toBe("Nieuwe titel");
    });

    it('voegt een paragraaf toe aan .inhoud', () => {
        voegParagraafToe("Welkom!");
        expect(document.querySelector('.inhoud').innerHTML).toContain("<p>Welkom!</p>");
    });

    it('reageert op een klik', () => {
        const spy = vi.spyOn(console, 'log');
        setupClickHandler();

        document.querySelector('#knop').click();

        expect(spy).toHaveBeenCalledWith("Je klikte op de knop!");
        spy.mockRestore();
    });
});
