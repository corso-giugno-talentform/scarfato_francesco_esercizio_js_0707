const utenti = [
    { nome: 'Mario', cognome: 'Rossi', email: 'mario@email.com', citta: 'Roma' },
    { nome: 'Laura', cognome: 'Bianchi', email: 'laura@email.com', citta: 'Milano' },
    { nome: 'Giuseppe', cognome: 'Verdi', email: 'giuseppe@email.com', citta: 'Napoli' }
];

const table = document.getElementById('tabella-utenti');

const tbodyContent = utenti.map(utente =>
    `<tr>
        <td>${utente.nome}</td>
        <td>${utente.cognome}</td>
        <td>${utente.email}</td>
        <td>${utente.citta}</td>
    </tr>`
).join('')

table.innerHTML += tbodyContent;