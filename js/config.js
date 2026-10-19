/* ============================================================
   HYGIENE-QUEST – Einstellungen für die Kursleitung
   Diese Datei können Sie anpassen, ohne Programmierkenntnisse.
   ============================================================ */
window.HQ_CONFIG = {
  // E-Mail-Adresse der Kursleitung (Empfänger der Teilnahmebescheinigungen).
  // WICHTIG: Der Versand läuft über "Netlify Forms". Tragen Sie diese Adresse
  // zusätzlich in Netlify unter Project configuration > Notifications >
  // "Form submission notifications" ein (siehe README.md).
  lecturerEmail: 'T100285@outlook.de',

  // Name des Bildungsträgers / Lehrgangs (erscheint auf der Bescheinigung)
  organisation: 'Vorbereitungslehrgang zur Kenntnisprüfung Pflege',
  kursleitung: 'Kursleitung',

  // Modul laut Curriculum
  modulCode: 'T1_CE_02_M_03',
  modulTitel: 'Hygienische Grundsätze für das Praxisfeld Pflege anwenden',
  umfang: '8 Unterrichtseinheiten à 45 Minuten (360 Minuten)',

  // Bestehensgrenzen
  quizPass: 0.8,          // Kapitel-Prüfung: 80 % richtig
  finalPass: 0.8,         // Abschlusstest: 80 % richtig
  scenarioPass: 60,       // Patientensicherheit im Fall mindestens 60 %

  // Echte deutschsprachige Lehrvideos (YouTube). Geprüft am 19.10.2026:
  // Alle Links waren erreichbar. Bitte vor dem Kurs selbst ansehen –
  // in der Praxis gilt immer der Hygieneplan der Einrichtung.
  // Das ERSTE Video jeder Liste wird in der App eingebettet, alle
  // weiteren erscheinen als Links. Eigene Videos: { url: 'videos/datei.mp4', title: '…', quelle: '…' }
  videos: {
    handrub: [
      { id: '0uJQnrdAbQ4', title: 'Hygienische Händedesinfektion in 6 Schritten', quelle: 'Dr. Weigert' },
      { id: 'F2ytUiVCKnc', title: 'Standard-Einreibemethode für die hygienische Händedesinfektion gemäß EN 1500', quelle: 'proxomed' },
      { id: '6T-gyFnSzdY', title: 'Hygienische Händedesinfektion', quelle: 'Novaheal' }
    ],
    gloves: [
      { id: '2ngCx3YrgPA', title: 'Unsterile Einmalhandschuhe an- und ausziehen', quelle: 'ambulant bloggt' },
      { id: 'qFUUYwoH6n0', title: 'Handschuhe richtig ausziehen', quelle: 'Blindeninstitutsstiftung Würzburg' }
    ],
    psa: [
      { id: '8LfmiZwJQzI', title: 'Schutzkleidung richtig an- und ablegen', quelle: 'Klinikum Itzehoe' },
      { id: 'N1lCOA9D-SE', title: 'Schutzkleidung An-/Ablegen – Tutorial', quelle: 'Bezirkskliniken Schwaben' },
      { id: 'Sdu4W4vfUDc', title: 'Schulungsfilm An- und Ablegen von PSA bei COVID-19', quelle: 'Uniklinikum Erlangen' }
    ],
    wipe: [
      { id: '8GDWAjHZnzE', title: 'Flächendesinfektion mit Wipes', quelle: 'VAH – Verbund für Angewandte Hygiene' }
    ],
    nsv: [
      { id: 'DldfNIKKS1M', title: 'Nadelstichverletzung – Sofortmaßnahmen (60 Sekunden)', quelle: 'ambulant bloggt' },
      { id: 'lzFbjWtK_NM', title: 'Was tun bei Nadelstichverletzungen?', quelle: 'smartAware' }
    ]
  }
};
