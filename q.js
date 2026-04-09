/**
 * fil: q.js
 * formål: stil mere eller mindre tilfældige spørgsmål
 */

spoergsmaal = [
  'Softwarearkitektur: hvordan er den tekniske løsning konstrueret? Tema? Plugins? Hvorfor disse valg?',
  'Responsivt design - hvordan kan man arbejde med det i det tema du har valgt?',
  'Kom med eksempler på kode (CSS, HTML, JavaScript, PHP, etc.) som du har tilføjet. Gennemgå koden. Vis effekten på dit site.',
  'Tema - hvorfor netop dette tema? Hvad har I bearbejdet temaet, så det æstetiske udtryk I ønsker kommer frem?',
  'Blokgrupper: Header - hvordan har du redigeret samtlige headere på dit site?',
  'Blokgrupper: Footer - hvordan kan du redigere samtlige footeere på dit site?',
  'Skabelonen: Hvordan henter skabelonen indholdet til en side?',
  'Skabelonen: Hvordan henter skabelonen indlæg fra din blog?',
  'Blog og sider - hvordan har I brugt dem?',
  'Hvad er forskellen på et indlæg og en side i WordPress?',
  'Hvad er en skabelon i et blokbaseret tema?',
  'SEO: hvordan har du arbejdet med det? Hvilke produkter? Vis det? Bilag?',
  'Woo: shop og filter - hvordan viser man en bestemt gruppering af varer i jeres produktion?',
  'Woo: forklar hvordan du har brugt tags, kategorier og lignende taksonomier.',
  'Forespørgselsloopet: hvordan fungerer det? Filtre, taxonomier, kategorier, tags',
  'Jacobs Law: hvordan har du brugt den på denne side/indlæg?',
  'Tone of Voice, vis hvordan I har brugt det?',
  'Persona: hvad ville personaen klikke på nu?',
  'Fonte - hvilke fonte har I brugt? Hvorfor dem? Hvordan implementerer men dem i temaet?',
  'Farver: hvordan sætter man de globale farver i temaet? Hvorfor er det praktisk at gøre sådan?',
  'Woo: hvordan laver du en side, der viser en bestemt kategori, tag eller lignende taksonomier?',
  'Hvordan laver du et produktkort i Woo?',
  "Vis hvordan du har brugt Fitt's Law på websiden.",
  'Hvordan kan du vide, at din side faktisk er brugervenlig?',
  'Hvilke kategorier har du i dit varekatalog? Vis en af disse kategorier i et blogindlæg.',
  'Kan man have en dropdownmenu i et minimalistisk design?',
  'Hvordan viser du udvalgte produkter i et blogindlæg eller på en side?',
  'Hvordan kan du linke til en Woo-kategori ved hjælp af en knap?',
  'Hvordan kan du linke til en kategori eller et udvalgt tag ved hjælp af en knap i WordPress?',
  'Hvordan overfører du en tegnet wireframe fra dit skitse til WordPress (Gutenberg, Elementor, etc.)?',
  'Hvad betyder "Full Site Editing" (FSE)?',
  'Hvad er Gutenberg?',
  'Er det tema du har valgt blokbaseret?'
]

/** Vælg tilfældigt spørgsmål */
rnd = Math.floor(Math.random() * spoergsmaal.length) // tilfældigt tal
sp.innerHTML += '<p>' + spoergsmaal[rnd] + '</p>' // skriver spørgsmålet i #sp

/* Nyt spørgsmål */
sp.addEventListener('click', function () {
  window.location = 'index.html'
})
