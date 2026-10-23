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

  // Arbeitsform, die beim Start vorgeschlagen wird: 'remote' (Videokonferenz) oder 'praesenz' (gemeinsam vor Ort)
  standardModus: 'remote',

  // ECHTE DEUTSCHSPRACHIGE LEHRVIDEOS (YouTube) – je Kapitel drei Stellen:
  //   intro  = Einstiegsvideo am Anfang des Kapitels
  //   action = Video zur Handlung, die in der Video-Quest nachgemacht wird (Mitte)
  //   outro  = Abschlussvideo am Ende des Kapitels
  // Alle Links wurden am 23.10.2026 auf Erreichbarkeit und Einbettbarkeit geprüft.
  // Bitte vor dem Kurs selbst ansehen – in der Praxis gilt immer der Hygieneplan der Einrichtung.
  // Das ERSTE Video jeder Liste wird eingebettet, weitere erscheinen als Links.
  // Eigene Videos: { url: 'videos/datei.mp4', title: '…', quelle: '…' }
  videos: {
    m1: {
      intro:  [{ id: 'bi9XyTVdfW4', title: 'Krankenhausinfektionen', quelle: 'BVMed' },
               { id: '5cQP-0FYzOA', title: 'Nosokomiale Infektion – verstehen und verhindern', quelle: 'Pflegerelevant' }],
      action: [{ id: 'hd1V04xcTds', title: 'Schütz Dich und andere: Richtig Händewaschen', quelle: 'Bundesinstitut für Öffentliche Gesundheit' },
               { id: 'U7RhILs1NN0', title: 'Hände, die sich gewaschen haben!', quelle: 'Bundesministerium für Gesundheit' }],
      outro:  [{ id: 'YwdCGZm7wh0', title: 'Basishygiene: Übertragungswege', quelle: 'smartAware' }]
    },
    m2: {
      intro:  [{ id: '6DXwbiFteas', title: 'Aktion Saubere Hände: 5 Indikationen', quelle: 'Dr. Weigert' },
               { id: 'iFUpNiVn_RI', title: 'Die 5 Momente der Händedesinfektion', quelle: 'HARTMANN Science Center' }],
      action: [{ id: '0uJQnrdAbQ4', title: 'Hygienische Händedesinfektion in 6 Schritten', quelle: 'Dr. Weigert' },
               { id: 'F2ytUiVCKnc', title: 'Standard-Einreibemethode gemäß EN 1500', quelle: 'proxomed' },
               { id: '6T-gyFnSzdY', title: 'Hygienische Händedesinfektion', quelle: 'Novaheal' }],
      outro:  [{ id: '2i4iVnZ3gMw', title: 'Händehygiene in der Pflege', quelle: 'Zentrum für Qualität in der Pflege (ZQP)' },
               { id: 'Cxi7cqGWYMs', title: '5 Momente der Händedesinfektion in Pflege & Krankenhaus', quelle: 'ARNOWA' }]
    },
    m3: {
      intro:  [{ id: 'ng_Lw85w5Vc', title: 'Hautschutz: Aufbau & Funktionen der Haut', quelle: 'smartAware' }],
      action: [{ id: '2ngCx3YrgPA', title: 'Unsterile Einmalhandschuhe an- und ausziehen', quelle: 'ambulant bloggt' },
               { id: 'qFUUYwoH6n0', title: 'Handschuhe richtig ausziehen', quelle: 'Blindeninstitutsstiftung Würzburg' },
               { id: 'dJrVrEsrVw0', title: 'An- und Ausziehen von Einweg-Handschuhen', quelle: 'Gustav Baehr GmbH' }],
      outro:  [{ id: 'd0y8d5cqGls', title: 'Haut & Hygiene: Hautschutz verständlich anleiten', quelle: 'BGW forum' }]
    },
    m4: {
      intro:  [{ id: 'Sdu4W4vfUDc', title: 'Schulungsfilm An- und Ablegen von PSA', quelle: 'Uniklinikum Erlangen' }],
      action: [{ id: '8LfmiZwJQzI', title: 'Schutzkleidung richtig an- und ablegen', quelle: 'Klinikum Itzehoe' },
               { id: 'ci8iIQgEGPI', title: 'An- und Ablegen von persönlicher Schutzausrüstung', quelle: 'WiBU Gruppe' }],
      outro:  [{ id: 'N1lCOA9D-SE', title: 'Schutzkleidung An-/Ablegen – Tutorial', quelle: 'Bezirkskliniken Schwaben' }]
    },
    m5: {
      intro:  [{ id: 'KPRQkGmiyXg', title: 'MRSA – Ein Krankenhauskeim', quelle: 'Die Techniker' },
               { id: 'vCL69PKGy1k', title: 'Multiresistente Erreger – was hilft dagegen?', quelle: 'Keine Keime' }],
      action: [{ id: '-S8usgbhkuw', title: 'FFP2-Maske richtig aufsetzen', quelle: 'Blindeninstitutsstiftung Würzburg' }],
      outro:  [{ id: 'XcsLJdWFSPo', title: 'MRSA: Übertragung von MRSA', quelle: 'smartAware' },
               { id: 'HKpPfdjbE5g', title: 'Multiresistente Erreger in der stationären Pflege: MRSA', quelle: 'smartAware' }]
    },
    m6: {
      intro:  [{ id: 'PC9J0A6G3oM', title: 'Schulungsfilm „Harnwegskatheter“', quelle: 'BioConValley' },
               { id: 'ifiQRemmwFI', title: 'Urinbeutel hygienisch entleeren', quelle: 'Pflegewegweiser Schweiz' }],
      action: [{ id: '8GDWAjHZnzE', title: 'Flächendesinfektion mit Wipes', quelle: 'VAH – Verbund für Angewandte Hygiene' }],
      outro:  [{ id: 'U5IlViG1x00', title: 'Häusliche Pflege: So schützt richtige Umfeldhygiene vor Infektionen', quelle: 'Pflegebox' }]
    },
    m7: {
      intro:  [{ id: 'lzFbjWtK_NM', title: 'Was tun bei Nadelstichverletzungen?', quelle: 'smartAware' }],
      action: [{ id: 'DldfNIKKS1M', title: 'Nadelstichverletzung – Sofortmaßnahmen (60 Sekunden)', quelle: 'ambulant bloggt' }],
      outro:  [{ id: 'qElu_UCDIfY', title: 'Basishygiene: Händedesinfektion und Händewaschen', quelle: 'smartAware' }]
    },
    m8: {
      intro:  [{ id: '9jWNZU8Dras', title: 'Der Pflegedozent: Die mündliche Prüfung', quelle: 'Kevin Fuchs' }],
      action: [{ id: 'qJjEXLE_V00', title: 'Verbandswechsel: So wird er korrekt gemacht', quelle: 'Universitätsmedizin Mannheim' }],
      outro:  [{ id: 'fa05pJDCRT4', title: 'Kenntnisprüfung Pflege: Diese deutschen Sätze musst du können!', quelle: 'einfach Deutsch mit Flora' },
               { id: 'HyZC_c6t1Vc', title: 'ASH-Film (Aktion Saubere Hände)', quelle: 'Krankenhaus Nettetal' }]
    }
  }
};
