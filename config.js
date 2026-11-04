// ===== Portale Clienti Dentag — configurazione =====
// URL /exec della web app "Portale Helpdesk DENTAG" (lo STESSO link che i clienti usano oggi con la sola email).
// Dopo aver aggiunto PortaleClienti.gs: Esegui il deployment > Gestisci deployment > modifica > "Nuova versione",
// così l'URL resta identico e il vecchio link continua a funzionare.
// Versione: v1.8 (4/11/2026)
window.PORTALE_CLIENTI = {
  VERSIONE: 'v1.8',

  API_URL: 'https://script.google.com/macros/s/AKfycbzpd7q2BZriZy9pDhlHmhMGgwbuJMN7H_ut9l0oSJHkAslGtETFOVy4GcDwa2oSl2LdBA/exec',

  // Contatti mostrati nel portale
  TELEFONO: '+39 0471 256 233',
  EMAIL: 'info@dentag-italia.com',
  WHATSAPP: 'https://wa.me/390471256233'
};
