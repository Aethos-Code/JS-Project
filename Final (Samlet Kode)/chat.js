// En liste af spørgsmål og svar, gemt i en array med objekter
const ofteStilledeSpørgsmål = [
    { spørgsmål: 'Hvor lang er ventetiden på maden?', svar: 'Vi bestræber os efter en ventetid på 10 min.' },
    { spørgsmål: 'Kan man reservere bord?', svar: 'Du kan desværre ikke reservere bord hos os. Vi har masser af spisepladser, både inde og ude, så der burde være plads.' },
    { spørgsmål: 'Tager I højde for allergener?', svar: 'Ja, vi tager højde for allergener. Kontakt os for detaljer.' },
    { spørgsmål: 'Leverer I TakeAway?', svar: 'Vi leverer desværre ikke TakeAway, men du kan bestille maden på Wolt og hente den her.' },
    { spørgsmål: 'Har I studierabat?', svar: 'Ja, vi tilbyder 10% studierabat med gyldigt studiekort.' }
];

// Funktion til at generere spørgsmålene dynamisk
function genererSpørgsmål() {
    const spørgsmålBokseContainer = document.querySelector('.spørgsmål-bokse');

    ofteStilledeSpørgsmål.forEach(spørgsmålOgSvar => {
        const spørgsmålBoks = document.createElement('div');
        spørgsmålBoks.className = 'spørgsmål-boks';
        spørgsmålBoks.textContent = spørgsmålOgSvar.spørgsmål;

        // Tilføjer en klik-hændelse for at vise svaret
        spørgsmålBoks.addEventListener('click', () => visSvar(spørgsmålOgSvar.svar));

        spørgsmålBokseContainer.appendChild(spørgsmålBoks);
    });
}

genererSpørgsmål();


// Funktion til at vise svaret på det valgte spørgsmål
function visSvar(svar) {
    document.querySelector('.spørgsmål-bokse').style.display = 'none';
    document.getElementById('svar-tekst').textContent = svar;
    document.getElementById('svar-boks').style.display = 'block';
}

// Funktion til at gå tilbage til spørgsmålene
function gåTilbageTilSpørgsmål() {
    document.getElementById('svar-boks').style.display = 'none';
    document.querySelector('.spørgsmål-bokse').style.display = 'block';
}

// Funktion til at håndtere brugerens input
function håndterBrugerSpørgsmål() {
    const brugerInput = document.getElementById('bruger-spørgsmål').value.trim();
    if (brugerInput) {
        visSvar("Dit spørgsmål: '" + brugerInput + "' er modtaget. Vi vender tilbage hurtigst muligt.");
        document.getElementById('bruger-spørgsmål').value = '';
    }
}

// Event listener for "Åbn Chatbot"-knappen
document.getElementById('åbnChatbot').addEventListener('click', function() {
    const chatbot = document.getElementById('chatbot');
    chatbot.classList.add('vis'); // Viser chatbotten
});

// Event listener for "Luk Chatbot"-krydset
document.getElementById('lukChatbot').addEventListener('click', function() {
    const chatbot = document.getElementById('chatbot');
    chatbot.classList.remove('vis'); // Skjuler chatbotten
});








