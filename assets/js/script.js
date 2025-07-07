/**
 * Esercizio 5: Tabella utenti
 * Crea una tabella dinamica:
 * 
 * <table id="tabella-utenti">
 *     <thead>
 *         <tr>
 *             <th>Nome</th>
 *             <th>Cognome</th>
 *             <th>Email</th>
 *             <th>Città</th>
 *         </tr>
 *     </thead>
 *     <tbody id="corpo-tabella">
 *     </tbody>
 * </table>
 * 
 * const utenti = [
 *     { nome: 'Mario', cognome: 'Rossi', email: 'mario@email.com', citta: 'Roma' },
 *     { nome: 'Laura', cognome: 'Bianchi', email: 'laura@email.com', citta: 'Milano' },
 *     { nome: 'Giuseppe', cognome: 'Verdi', email: 'giuseppe@email.com', citta: 'Napoli' }
 * ];
 * 
 * Riempi il tbody con i dati degli utenti
**/
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