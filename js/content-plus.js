/* ============================================================
   HYGIENE-QUEST – Ergänzungen zu content.js
   - Video-Schritte am Anfang und Ende jedes Kapitels
   - Neue Mitmach-Quests (Kapitel 1, 5, 8)
   - Expertenrunden (anspruchsvolle Tandem-Diskussionen)
   - Vertiefungsfragen zu jeder Entscheidung im Kampf
   Die YouTube-Links stehen in js/config.js (videos).
   Platzhalter: {D} = am Steuer, {C} = Coach, {VOR} = "vor der Kamera" bzw. "vor Ihrer Tandem-Person"
   ============================================================ */
(function () {
  const M = Object.fromEntries(window.HQ_MISSIONS.map(m => [m.id, m]));

  /* ---------- Video am Anfang (Beobachtungsauftrag) und am Ende (Transfer) ---------- */
  const VIDEO_STEPS = {
    m1: {
      intro: ['Wie entstehen Krankenhausinfektionen laut Video?', 'Welche Rolle spielen die Hände des Personals?', 'Notieren Sie ein Wort, das Sie nicht kennen – und klären Sie es im Wörterbuch.'],
      outro: ['Welche Übertragungswege aus dem Video haben Sie heute auf Station 3B wiedererkannt? Nennen Sie für jeden Weg ein Beispiel aus den Fällen.', 'An welchem Glied der Infektionskette können Pflegende am meisten bewirken – und an welchem am wenigsten? Begründen Sie.']
    },
    m2: {
      intro: ['Welche 5 Momente nennt das Video? Schreiben Sie sie in eigenen Worten auf.', 'Welcher Moment wird im Alltag am häufigsten vergessen – was vermuten Sie?'],
      outro: ['Das Video spricht über Händehygiene in der Pflege allgemein. Was ist in der ambulanten oder häuslichen Pflege schwieriger als im Krankenhaus?', 'Vergleichen Sie: Welche Regel aus dem Video wird in Ihrem Herkunftsland anders umgesetzt?']
    },
    m3: {
      intro: ['Welche Aufgaben hat die Haut laut Video?', 'Was passiert, wenn die Hautbarriere gestört ist – für Sie und für die Patienten?'],
      outro: ['Was ist nach dem Video der Unterschied zwischen Hautschutz, Hautreinigung und Hautpflege?', 'Erstellen Sie gemeinsam einen persönlichen Hautschutzplan für einen Frühdienst (wann – womit).']
    },
    m4: {
      intro: ['Welche Teile der Schutzausrüstung werden gezeigt? In welcher Reihenfolge?', 'Achten Sie genau auf das Ablegen: Wo könnten Fehler passieren?'],
      outro: ['Vergleichen Sie die Reihenfolge im Video mit der Reihenfolge in der App. Gibt es Unterschiede? Was bedeutet das für Ihre Praxis?', 'Warum ist PSA bei MRSA anders als bei Tuberkulose? Erklären Sie es mit den Übertragungswegen.']
    },
    m5: {
      intro: ['Woher kommt MRSA laut Video, und warum ist er schwer zu bekämpfen?', 'Was ist der Unterschied zwischen Besiedlung und Infektion?'],
      outro: ['Wie wird MRSA laut Video übertragen? Welche drei Maßnahmen unterbrechen diese Wege am wirksamsten?', 'Ein MRSA-Patient soll in ein Pflegeheim entlassen werden. Welche Informationen braucht das Heim – und welche Ängste könnten dort bestehen?']
    },
    m6: {
      intro: ['Welche hygienischen Fehler beim Harnwegskatheter werden im Video genannt?', 'Warum ist der Blasenkatheter eine besonders gefährliche Eintrittspforte?'],
      outro: ['Das Video zeigt Umfeldhygiene in der häuslichen Pflege. Was ist dort anders als im Krankenhaus (Material, Abfall, Wäsche)?', 'Welche drei Regeln aus diesem Kapitel würden Sie pflegenden Angehörigen zuerst beibringen? Begründen Sie die Auswahl.']
    },
    m7: {
      intro: ['Welche Situationen führen laut Video besonders oft zu Nadelstichverletzungen?', 'Welche Krankheiten können übertragen werden?'],
      outro: ['Nach dem Video: Welche Schritte der Händehygiene schützen nicht nur Patienten, sondern auch Sie selbst?', 'Was können Sie tun, wenn Ihnen im Praxiseinsatz Schutzmaterial (z. B. Sicherheitskanülen) fehlt? Wer ist zuständig?']
    },
    m8: {
      intro: ['Worauf achten Prüferinnen und Prüfer in der mündlichen Prüfung laut Video?', 'Was davon wollen Sie heute in der Prüfungssimulation üben?'],
      outro: ['Welche Sätze aus dem Video passen gut, um Hygienemaßnahmen in der Kenntnisprüfung zu begründen? Bilden Sie zwei eigene Beispielsätze.', 'Wenn Sie nur eine Hygieneregel in die Praxis mitnehmen dürften – welche wäre es, und warum?']
    }
  };

  /* ---------- Neue Mitmach-Quests ---------- */
  const NEW_QUESTS = {
    m1: { before: 'scenario', step: { type: 'quest', id: 'q_wash', title: 'Video-Quest: Hände richtig waschen', min: 8,
      intro: 'Sehen Sie sich das Video an. Danach zeigt jede Person {VOR} das richtige Händewaschen (zum Beispiel am Waschbecken). Die andere Person prüft.',
      practice: 'Material: Waschbecken, Seife, Papier- oder Handtuch. Wenn kein Waschbecken in der Nähe ist: Bewegungen trocken zeigen und laut erklären.',
      timer: 30,
      checklist: ['Schmuck und Uhr abgelegt', 'Hände unter fließendem Wasser nass gemacht', 'Seife aus dem Spender (kein Stück Seife auf Station)', 'Alle Stellen eingeseift: Handflächen, Handrücken, Fingerzwischenräume, Daumen, Fingerkuppen', '20–30 Sekunden eingeseift', 'Gründlich abgespült', 'Mit Einmalhandtuch gut abgetrocknet, auch zwischen den Fingern', 'Wasserhahn mit dem Handtuch oder Ellenbogen geschlossen', 'Erklärt, WANN man wäscht (sichtbare Verschmutzung, Dienstbeginn, Toilette, Sporen)'] } },
    m5: { before: 'scenario', step: { type: 'quest', id: 'q_ffp2', title: 'Video-Quest: FFP2-Maske aufsetzen und Dichtsitz prüfen', min: 8,
      intro: 'Sehen Sie sich das Video an. Danach setzt jede Person {VOR} eine Maske auf, prüft den Dichtsitz und nimmt die Maske korrekt wieder ab.',
      practice: 'Material: FFP2-Maske (oder als Ersatz ein Mund-Nasen-Schutz). Erklären Sie jeden Schritt laut.',
      checklist: ['Vorher Hände desinfiziert', 'Maske nur an den Bändern bzw. außen am Rand angefasst', 'Nasenbügel oben, Kinn ist umschlossen', 'Bänder korrekt angelegt (je nach Modell über Ohren oder Kopf)', 'Nasenbügel mit beiden Händen an die Nase angepasst', 'Dichtsitzprüfung: kräftig ausatmen – keine Luft am Rand', 'Erklärt: Bart im Dichtbereich verhindert den Dichtsitz', 'Abnehmen nur an den Bändern, danach Händedesinfektion'] } },
    m8: { before: 'partner', step: { type: 'quest', id: 'q_vw', title: 'Video-Quest: Verbandwechsel in Non-Touch-Technik', min: 9,
      intro: 'Sehen Sie sich das Video an. Danach zeigt jede Person {VOR} einen Verbandwechsel an einer „Wunde“ (z. B. am eigenen Unterarm oder an einer Puppe) und erklärt jeden Schritt.',
      practice: 'Material (Ersatz erlaubt): Pflaster, Wattepads als Tupfer, Küchenpinzette, Handschuhe, ein Tuch als Arbeitsfläche, ein Beutel als Abwurf.',
      checklist: ['Material vorbereitet, Arbeitsfläche desinfiziert', 'Händedesinfektion, dann unsterile Handschuhe', 'Alten Verband von außen nach innen gelöst und mit dem Handschuh umstülpend entsorgt', 'Handschuhe aus, Händedesinfektion', 'Wunde beurteilt (Rötung, Schwellung, Sekret, Geruch, Schmerz)', 'Steriles Material ohne Berühren der Wundauflage benutzt (Non-Touch)', 'Saubere Wunde von innen nach außen gereinigt', 'Neuen Verband angelegt, ohne die Wundauflage zu berühren', 'Abwurf, Händedesinfektion, Dokumentation genannt'] } }
  };

  /* ---------- Expertenrunden (schwierige Tandem-Diskussionen) ---------- */
  const EXPERT = {
    m2: { type: 'partner', title: 'Expertenrunde: Händehygiene unter der Lupe', min: 6, minutes: 3, rounds: [
      { task: '{D} geht in Gedanken einen Arbeitsablauf durch: Grundpflege bei Herrn Becker (waschen, Bett machen), danach Blutzucker messen bei Herrn Wagner. Nennen Sie <b>jede</b> Händedesinfektion mit dem passenden Moment (1–5) – in der richtigen Reihenfolge.', coach: '{C} zählt mit und fragt bei jeder Desinfektion: „Warum genau hier?“' },
      { task: 'Rollentausch. {D} ist hygienebeauftragte Pflegekraft. Die Händehygiene-Compliance auf Station liegt bei 58 %. Entwickeln Sie einen Plan mit <b>drei Maßnahmen</b> und begründen Sie, warum jede Maßnahme wirkt. Was messen Sie nach 3 Monaten?', coach: '{C} spielt die skeptische Stationsleitung („Dafür haben wir keine Zeit!“) und stellt kritische Fragen.' }],
      checklist: ['Alle nötigen Momente erkannt und richtig benannt', 'Jede Desinfektion begründet (Schutz für wen?)', 'Maßnahmen sind konkret und umsetzbar', 'Auf kritische Einwände sachlich reagiert', 'Fachwörter korrekt verwendet'],
      solution: `<p><b>Ablauf:</b> M1 vor Becker → (nach Kontakt mit Ausscheidungen: Handschuhe aus, M3) → M4 nach Becker → ggf. M5 nach Bett/Umgebung → M1/M2 vor dem Blutzuckermessen bei Wagner (Stich = aseptisch) → Handschuhe aus, M3 → M4 nach Wagner.</p><p><b>Compliance-Plan:</b> Spender direkt am Bett/Kitteltasche; Schulung mit Feedback (Beobachtung, Rückmeldung der Quote); Vorbildfunktion der Leitung; Hautpflegeprodukte; Messung: erneute Beobachtung oder Verbrauch an Händedesinfektionsmittel pro Patiententag.</p>` },
    m3: { type: 'partner', title: 'Expertenrunde: Haut und Handschuhe', min: 6, minutes: 3, rounds: [
      { task: 'Fall: Eine Kollegin hat seit Wochen rissige Hände mit juckenden Bläschen. {D} erklärt: mögliche Ursachen, Risiken für Patienten und für die Kollegin, die nächsten Schritte (Hautschutzplan, Betriebsarzt, Hautarztverfahren der Berufsgenossenschaft).', coach: '{C} fragt nach: „Warum ist das auch ein Problem für die Patienten?“' },
      { task: 'Rollentausch. {D} erklärt, warum Handschuhe ein <b>falsches Sicherheitsgefühl</b> erzeugen können. Nennen Sie drei typische Handschuhfehler auf Station und wie man sie vermeidet.', coach: '{C} ergänzt einen eigenen Fehler, den sie/er in der Praxis gesehen hat.' }],
      checklist: ['Feuchtarbeit und häufiges Waschen als Ursachen genannt', 'Risiko: rissige Haut = mehr Keime, schlechtere Desinfektion', 'Betriebsarzt / Hautarztverfahren genannt', 'Drei konkrete Handschuhfehler genannt', 'Lösungen begründet'],
      solution: `<p><b>Ursachen:</b> Feuchtarbeit (Handschuhe), häufiges Waschen, Allergie (z. B. gegen Inhaltsstoffe), fehlender Hautschutz. <b>Risiko:</b> geschädigte Haut wird stärker besiedelt, Desinfektion wirkt schlechter, Schmerzen → weniger Desinfektion. <b>Schritte:</b> Hautschutzplan konsequent, Betriebsarzt, ggf. Hautarztbericht (BG-Verfahren), Produkte prüfen.</p><p><b>Handschuhfehler:</b> mit denselben Handschuhen mehrere Tätigkeiten/Patienten; Türklinken/Dokumentation mit Handschuhen; keine Händedesinfektion nach dem Ausziehen; Handschuhe in der Kitteltasche aufbewahren.</p>` },
    m4: { type: 'partner', title: 'Expertenrunde: PSA anleiten und Pannen lösen', min: 6, minutes: 3, rounds: [
      { task: '{D} leitet einen neuen Kollegen an: Erklären Sie das <b>An- und Ablegen</b> der PSA ohne Notizen – und begründen Sie <b>jeden</b> Schritt.', coach: '{C} spielt den neuen Kollegen und fragt mindestens zweimal „Warum?“.' },
      { task: 'Rollentausch. Fall: Beim Ablegen bemerken Sie, dass Ihr Handschuh gerissen ist. Ihre Hand hatte Kontakt mit Wundsekret von Frau Schulz (MRSA). {D} erklärt: Was tun Sie sofort? Was, wenn Ihre Haut an der Stelle verletzt ist? Wen informieren Sie?', coach: '{C} prüft die Antwort mit der Musterlösung.' }],
      checklist: ['Reihenfolge vollständig und richtig', 'Jeder Schritt begründet', 'Sofortmaßnahme: Handschuhe aus, Hände desinfizieren', 'Unterschied intakte / verletzte Haut erklärt', 'Meldung an Leitung bzw. Betriebsarzt bei Bedarf genannt'],
      solution: `<p><b>Riss bei intakter Haut:</b> Handschuhe korrekt ausziehen, gründliche Händedesinfektion, neue Handschuhe. MRSA auf intakter Haut wird durch Desinfektion entfernt. <b>Bei verletzter Haut:</b> Wunde desinfizieren, Vorgesetzte informieren, Betriebsarzt (Arbeitsunfall dokumentieren). Material und Handschuhqualität prüfen (Größe, Material).</p>` },
    m6: { type: 'partner', title: 'Expertenrunde: Pflege planen und Fehler finden', min: 6, minutes: 3, rounds: [
      { task: '{D} plant die Morgenpflege nacheinander bei Frau Hoffmann (frische OP-Wunde), Herrn Wagner (Venenkanüle) und Frau Yilmaz (Blasenkatheter). In welcher Reihenfolge gehen Sie vor? Begründen Sie mit „von rein nach unrein“.', coach: '{C} prüft: Wurde an Händedesinfektion und Materialwechsel gedacht?' },
      { task: 'Rollentausch. Fehlersuche: {C} beschreibt einen Verbandwechsel mit <b>drei</b> selbst ausgedachten Hygienefehlern. {D} findet alle Fehler und erklärt die richtige Vorgehensweise.', coach: '{C} bestätigt oder gibt Hinweise.' }],
      checklist: ['Reihenfolge nach Infektionsrisiko begründet', 'Aseptische Tätigkeiten vor unreinen geplant', 'Händedesinfektion und Materialwechsel genannt', 'Alle drei Fehler gefunden', 'Richtige Vorgehensweise erklärt'],
      solution: `<p><b>Sinnvoll:</b> zuerst aseptische Tätigkeiten bei Patienten ohne bekannte Keime (Verbandwechsel Frau Hoffmann, Kanüle Herr Wagner), unreine Tätigkeiten (Katheterpflege, Intimpflege, Urinbeutel) zum Schluss; isolierte Patienten immer zuletzt. Zwischen allen Patienten: Händedesinfektion, patientenbezogenes Material.</p>` }
  };

  /* ---------- Vertiefungsfragen zu jeder Entscheidung ---------- */
  const DEEP = {
    m1: [
      { q: 'Herr Becker hat Atemnot und kann kein Taschentuch halten. Wie schützen Sie trotzdem den Bettnachbarn? Nennen Sie mindestens zwei Maßnahmen und begründen Sie sie.', a: 'Abstand vergrößern bzw. Einzelzimmer mit der Ärztin klären; Taschentücher und Abwurf in Reichweite, beim Husten unterstützen; Mund-Nasen-Schutz für Herrn Becker, wenn er ihn verträgt; Händehygiene anbieten; regelmäßig lüften; Erregerdiagnostik veranlassen lassen.' },
      { q: 'Warum reicht die Händedesinfektion hier nicht? Welches Glied der Infektionskette ist das Stethoskop – und welche Gegenstände auf Station spielen die gleiche Rolle?', a: 'Das Stethoskop ist ein Übertragungsweg (indirekter Kontakt). Ebenso: Blutdruckmanschette, Thermometer, Pulsoxymeter, Kugelschreiber, Handy, Tablet, Pflegewagen, Kühlakku. Diese Medizinprodukte werden zwischen Patienten wischdesinfiziert oder bleiben patientenbezogen.' },
      { q: 'Die Kollegin antwortet: „Ich desinfiziere doch über den Ring drüber.“ Was antworten Sie fachlich? Und was tun Sie, wenn sie nichts ändert?', a: 'Unter dem Ring entsteht eine feuchte Kammer, das Mittel erreicht die Haut nicht vollständig, dort sind mehr Keime; Handschuhe reißen leichter. Die KRINKO empfiehlt: kein Schmuck. Wenn sich nichts ändert: Stationsleitung oder Hygienefachkraft einbeziehen – zum Schutz der Patienten, nicht als „Petzen“.' },
      { q: 'Ist eine Harnwegsinfektion bei Frau Yilmaz eher endogen oder exogen? Welche Maßnahmen gibt es gegen beide Wege?', a: 'Meist endogen (eigene Darm- und Hautkeime wandern am Katheter entlang), aber auch exogen (Hände, Material). Gegen beide: Katheter so kurz wie möglich, geschlossenes System, Beutel unter Blasenniveau, Intimpflege, Händedesinfektion, aseptisches Arbeiten.' }
    ],
    m2: [
      { q: 'Welche Flächen im Stationszimmer sind besonders stark mit Keimen belastet? Warum reicht es nicht, diese Flächen nur einmal am Tag zu desinfizieren?', a: 'Tastaturen, Telefone, Türklinken, Kurven, Medikamentenwagen. Sie werden ständig von vielen Händen berührt und sind schnell wieder kontaminiert. Deshalb ist die Händedesinfektion vor dem Patientenkontakt entscheidend.' },
      { q: 'Zählen Sie: Wie viele Händedesinfektionen sind nötig – vom Betreten des Zimmers von Herrn Becker bis zur angeschlossenen Infusion bei Herrn Wagner? Begründen Sie jeden Moment.', a: 'Mindestens drei: M1 vor Herrn Becker, M4 nach Herrn Becker, M2 direkt vor dem Anschließen bei Herrn Wagner. Wer Herrn Wagner vorher noch anders berührt, braucht zusätzlich M1 und danach erneut M2.' },
      { q: 'Warum schadet häufiges Händewaschen der Haut mehr als Desinfektion? Was bedeutet das für Ihren Arbeitsalltag?', a: 'Wasser und Seife entfetten die Haut und lassen die Hornschicht aufquellen – die Hautbarriere wird gestört. Desinfektionsmittel enthalten rückfettende Stoffe. Also: nur bei Verschmutzung waschen, sonst desinfizieren und regelmäßig pflegen.' },
      { q: 'Wo genau endet die „Patientenumgebung“? Gehört der Infusionsständer dazu? Der Vorhang am Bett? Der Medikamentenwagen auf dem Flur?', a: 'Zur Patientenumgebung gehören Patient und alle Flächen, die er berührt oder die direkt bei ihm sind: Bett, Nachttisch, Infusionsständer, Klingel, Vorhang. Der Medikamentenwagen auf dem Flur gehört zur Stationsumgebung – beim Wechsel zwischen beiden Zonen: Händedesinfektion.' },
      { q: 'Viele Pflegende desinfizieren nur 10–15 Sekunden. Welche Gründe könnte das haben? Nennen Sie drei Maßnahmen, die das auf einer Station verbessern.', a: 'Gründe: Zeitdruck, Hautprobleme, Gewohnheit, Spender zu weit weg, fehlendes Wissen. Maßnahmen: Spender am Bett und in der Kitteltasche, Schulung mit Rückmeldung (Beobachtung), Vorbilder in der Leitung, gute Hautpflegeprodukte.' }
    ],
    m3: [
      { q: 'In seltenen Ausnahmen dürfen Handschuhe desinfiziert werden. Welche Bedingungen gelten dafür – und warum gilt das hier auf keinen Fall?', a: 'Nur wenn der Hygieneplan es erlaubt, die Handschuhe chemikalienbeständig und unbeschädigt sind, kein Kontakt mit Blut, Sekreten oder Ausscheidungen bestand und man beim selben Patienten bleibt. Hier: Kontakt mit Erbrochenem und Wechsel zu einer anderen Patientin – also niemals.' },
      { q: 'Planen Sie eine Ganzkörperwaschung so, dass Sie möglichst wenige Handschuhwechsel brauchen, aber trotzdem hygienisch arbeiten.', a: 'Gesicht, Hals, Arme, Oberkörper, Rücken, Beine zuerst (sauber) → dann Handschuhe für Intim- und Gesäßbereich → Handschuhe aus, Händedesinfektion → eincremen, anziehen, Bett machen. Unreine Tätigkeiten am Ende bündeln.' },
      { q: 'Herr Becker fragt: „Ohne Handschuhe – ekeln Sie sich nicht vor mir?“ Wie erklären Sie Ihre Entscheidung? Wann würden Sie doch Handschuhe tragen?', a: 'Hautkontakt ist Teil der Zuwendung; Handschuhe sind nur bei Kontakt mit Körperflüssigkeiten nötig; die Händedesinfektion schützt beide. Handschuhe z. B. bei Mundpflege, Absaugen, Wundkontakt, Inkontinenzversorgung.' },
      { q: 'Warum wirkt Alkohol gegen MRSA, aber nicht gegen die Sporen von C. difficile? Was folgt daraus für Hände und Flächen?', a: 'Sporen haben eine sehr widerstandsfähige Hülle – Alkohol wirkt nicht sporozid. Hände: desinfizieren UND waschen (mechanisch entfernen). Flächen: sporozides Flächendesinfektionsmittel laut Hygieneplan.' },
      { q: 'Ab wann gilt Arbeit mit Handschuhen als Feuchtarbeit? Was muss der Arbeitgeber dann tun?', a: 'Wenn regelmäßig mehr als etwa 2 Stunden am Tag flüssigkeitsdichte Handschuhe getragen werden oder die Hände feucht sind (TRGS 401). Arbeitgeber: Gefährdungsbeurteilung, Hautschutzplan, Hautschutzmittel, Unterweisung, arbeitsmedizinische Vorsorge anbieten.' }
    ],
    m4: [
      { q: 'Wann tragen Sie bei Frau Schulz zusätzlich einen Mund-Nasen-Schutz? Nennen Sie zwei Tätigkeiten und begründen Sie.', a: 'Bei Tätigkeiten mit Tröpfchen oder Aerosolen und nahe an Nase und Mund: Absaugen, Mundpflege, Verbandwechsel einer großen besiedelten Wunde (nach Hausstandard). MRSA lebt oft im Nasenvorhof – der MNS schützt vor eigener Besiedlung.' },
      { q: 'Warum müssen die Handschuhe ÜBER den Kittelbündchen liegen? Was passiert sonst?', a: 'Sonst bleibt am Handgelenk eine Lücke: Haut oder Ärmel werden kontaminiert, Flüssigkeit kann hineinlaufen, und beim Ausziehen verteilt man Keime.' },
      { q: 'Planen Sie: Was legen Sie VOR dem Betreten des Isolierzimmers bereit, damit Sie es während der Pflege nicht verlassen müssen?', a: 'Waschutensilien, Handtücher, frische Wäsche, Abwurfsack, Verbandmaterial, Reserve-Handschuhe, Inkontinenzmaterial, Medikamente; eine Kollegin informieren, die notfalls etwas bringt.' },
      { q: 'Welche Teile der PSA sind am stärksten kontaminiert – und warum ist die Reihenfolge beim Ablegen deshalb so wichtig?', a: 'Handschuhe > Vorderseite und Ärmel des Kittels > Außenseite von Brille und Maske > Bänder und Innenseite. Wer zuerst die schmutzigsten Teile entfernt, berührt die sauberen nicht mehr mit kontaminierten Händen.' },
      { q: 'MNS oder FFP2 – wen schützt welche Maske? Warum muss die FFP2-Maske dicht sitzen, der MNS aber nicht?', a: 'MNS: vor allem Fremdschutz und Schutz vor Spritzern. FFP2: Atemschutz für die tragende Person, filtert Aerosole – aber nur, wenn die Luft durch den Filter geht und nicht am Rand vorbei. Deshalb Dichtsitz; ein Bart verhindert ihn.' }
    ],
    m5: [
      { q: 'Es gibt kein freies Einzelzimmer. Welche Möglichkeiten haben Sie? Diskutieren Sie Vor- und Nachteile einer Kohortenisolierung.', a: 'Kohorte = Patienten mit demselben Erreger zusammen; andere Patienten verlegen; Hygienefachkraft fragen. Vorteil: weniger Zimmer nötig. Nachteil: nur bei gesichert gleichem Erreger sinnvoll, Risiko weiterer Übertragungen.' },
      { q: 'Was bedeuten „begrenzt viruzid“, „begrenzt viruzid PLUS“ und „viruzid“? Welche Stufe brauchen Sie bei Noroviren?', a: 'Begrenzt viruzid: behüllte Viren (z. B. Influenza, Coronaviren, HIV, Hepatitis B). Begrenzt viruzid PLUS: zusätzlich Noro-, Adeno- und Rotaviren. Viruzid: alle Viren. Bei Noroviren: mindestens begrenzt viruzid PLUS.' },
      { q: 'Wie lange scheiden Norovirus-Patienten nach den Beschwerden noch Viren aus? Was bedeutet das für die Entisolierung und für erkranktes Personal?', a: 'Oft noch 1–2 Wochen, manchmal länger. Entisolierung frühestens 48 Stunden nach Ende der Beschwerden (Hausstandard). Erkranktes Personal arbeitet frühestens 48 Stunden nach Ende der Beschwerden wieder – mit besonders sorgfältiger Händehygiene.' },
      { q: 'Datenschutz gegen Schutz der Mitarbeitenden: Wer darf welche Information bekommen? Wie handelt z. B. die Reinigungskraft trotzdem richtig?', a: 'Behandlungsteam, Transport, Zielabteilung und Reinigungsdienst erhalten die Informationen, die sie für ihre Schutzmaßnahmen brauchen. Besucher und Mitpatienten nicht. Hilfen: Hinweisschild, Maßnahmenkarte, Übergabe, Hygieneplan.' },
      { q: 'Welche Gegenstände bleiben im Zimmer, und was passiert nach der Isolierung mit ihnen? Was wird entsorgt?', a: 'Blutdruckgerät, Stethoskop, Thermometer, Waschschüssel bleiben im Zimmer und werden danach desinfizierend aufbereitet. Offene Verbrauchsmaterialien (z. B. Handschuhboxen, Tupfer) werden entsorgt. Danach Schlussdesinfektion.' }
    ],
    m6: [
      { q: 'Der Beutel muss unter Blasenniveau bleiben – auch beim Mobilisieren oder beim Transport im Bett. Wie gehen Sie vor?', a: 'Beutel unten am Bett oder Rollstuhl befestigen bzw. tief halten, vor dem Lagewechsel bei Bedarf leeren, nicht abklemmen und nicht diskonnektieren (Ausnahmen nur nach Hausstandard).' },
      { q: 'Warum ist Urin aus dem Beutel „nicht aussagekräftig“? Was passiert dort mit den Keimen?', a: 'Der Urin steht länger bei Raumtemperatur, Bakterien vermehren sich. Das Ergebnis wäre falsch – es droht eine unnötige oder falsche Antibiotikatherapie.' },
      { q: 'Erklären Sie den Unterschied: Rötung – Phlebitis – Blutstrominfektion (Sepsis). Welche Zeichen sehen Sie jeweils?', a: 'Phlebitis: lokale Entzündung (Rötung, Schwellung, Schmerz, Wärme, Verhärtung). Lokale Infektion: zusätzlich Eiter. Sepsis: Fieber, Schüttelfrost, schneller Puls, niedriger Blutdruck, Verwirrtheit – Notfall!' },
      { q: 'An welcher Stelle passieren beim Verbandwechsel die meisten Fehler? Wie können Sie sich im Team gegenseitig kontrollieren?', a: 'Beim Übergang vom Entfernen des alten Verbandes zur Versorgung (Handschuhwechsel/Händedesinfektion vergessen), beim Berühren der sterilen Wundauflage, bei schlechter Vorbereitung. Hilfe: Vier-Augen-Prinzip, Checkliste, Material vorher richten.' },
      { q: 'Wie lange ist die Einwirkzeit Ihres Flächendesinfektionsmittels, und wann darf die Fläche wieder benutzt werden? Wo finden Sie die Angabe?', a: 'Im Desinfektionsplan und auf dem Produkt (VAH-Liste). Bei der routinemäßigen Flächendesinfektion darf die Fläche nach dem Abtrocknen wieder benutzt werden; bei gezielter Desinfektion bzw. Schlussdesinfektion die volle Einwirkzeit abwarten.' },
      { q: 'Warum schüttelt man Wäsche nicht aus? Wohin kommt stark durchfeuchtete Wäsche eines Norovirus-Patienten?', a: 'Schütteln wirbelt Hautschuppen, Keime und Aerosole auf. Nasse oder infektiöse Wäsche direkt am Bett in einen flüssigkeitsdichten (ggf. gekennzeichneten) Wäschesack.' }
    ],
    m7: [
      { q: 'Warum passieren die meisten Nadelstichverletzungen nicht bei der Injektion, sondern danach? Welche Organisationsfehler stecken dahinter?', a: 'Danach kommt es zu Recapping, langen Wegen zum Abwurfbehälter, überfüllten Behältern, Kanülen im Bett oder Müll, Zeitdruck. Lösungen: Abwurfbehälter am Bett, Sicherheitsprodukte, Unterweisung.' },
      { q: 'Tom sagt: „Der Pausenraum ist zu weit, ich habe nur 5 Minuten.“ Wie finden Sie im Team eine Lösung, die Pausen und Hygiene möglich macht?', a: 'Pausen im Dienstplan festlegen, Klingel gegenseitig übernehmen, Pausen sind ein Recht (Arbeitszeitgesetz), Getränke im Pausenraum, Leitung einbeziehen.' },
      { q: 'Formulieren Sie eine Ich-Botschaft für Tom – und eine zweite, falls er gereizt reagiert („Dann machen Sie es doch selbst!“).', a: '1) „Ich habe gesehen, dass Sie sich zwischen den Zimmern nicht die Hände desinfiziert haben. Ich mache mir Sorgen um Frau Hoffmanns Wunde.“ 2) „Ich verstehe, dass Sie unter Druck stehen – mir geht es genauso. Trotzdem ist mir das wichtig. Lassen Sie uns kurz überlegen, wie wir uns gegenseitig entlasten können.“' },
      { q: 'Was ist eine Überlastungsanzeige? Wann schreiben Sie eine, und was soll sie bewirken?', a: 'Eine schriftliche Meldung an die Vorgesetzten, dass die Arbeit wegen Personal- oder Materialmangel nicht sicher erledigt werden kann. Sie dokumentiert die Gefährdung, schützt Sie rechtlich und soll Abhilfe auslösen.' },
      { q: 'Wann dürfen Sie nach einer Norovirus-Erkrankung wieder arbeiten? Warum kommen Pflegende trotzdem oft krank zur Arbeit?', a: 'Frühestens 48 Stunden nach Ende der Beschwerden (Hausstandard, Betriebsarzt). Gründe für „Präsentismus“: Pflichtgefühl, Personalmangel, schlechtes Gewissen, Angst vor Nachteilen. Folge: Ausbrüche auf Station.' }
    ],
    m8: [
      { q: 'Welche Patienten auf Station 3B sind bei Influenza besonders gefährdet? Welche zusätzlichen Schutzmaßnahmen gibt es?', a: 'Ältere Menschen (Herr Becker, Frau Schulz), Menschen mit Diabetes (Herr Wagner), frisch Operierte. Schutz: jährliche Impfung des Personals, Isolierung/Kohorte, Besuchsregeln, antivirale Medikamente nach ärztlicher Entscheidung.' },
      { q: 'Wer entscheidet über das Entfernen eines Blasenkatheters? Was können Pflegende tun, damit Katheter nicht „vergessen“ werden?', a: 'Die Ärztin oder der Arzt ordnet an. Pflegende sprechen die Indikation täglich an (z. B. in der Visite), dokumentieren die Liegedauer und nutzen Checklisten oder Erinnerungen.' },
      { q: '„Scrub the hub“: Wie und wie lange wird die Zuspritzstelle desinfiziert? Warum ist Wischen besser als Sprühen?', a: 'Mit einem alkoholischen Desinfektionstupfer kräftig abreiben (nach Herstellerangabe, oft ca. 15 Sekunden) und trocknen lassen. Die Reibung entfernt den Biofilm; Sprühen erreicht nicht alle Ritzen.' },
      { q: 'Die Physiotherapie sagt: „MRSA-Patienten nehmen wir nicht.“ Wie argumentieren Sie? Welche Rolle spielt der Hygieneplan?', a: 'Therapie gehört zur Behandlung und darf nicht wegen MRSA ausfallen. Mit Basishygiene, abgedeckten Wunden, Händedesinfektion des Patienten und Flächendesinfektion danach ist sie möglich. Der Hygieneplan regelt die Details; die Hygienefachkraft hilft.' },
      { q: 'Was unterscheidet die laufende Desinfektion von der Schlussdesinfektion? Wer ist jeweils zuständig?', a: 'Laufend: während des Aufenthalts, täglich patientennahe Flächen (Pflege und Reinigungsdienst nach Plan). Schluss: nach Entlassung/Entisolierung alle Flächen, Geräte, Sanitärbereich, Vorhänge (Reinigungsdienst; Medizinprodukte durch die Pflege).' },
      { q: 'Formulieren Sie die Erklärung für Frau Hoffmann in sehr einfacher Sprache. Prüfen Sie mit der „Teach-back“-Methode, ob alles verstanden wurde.', a: '„Waschen Sie Ihre Hände, bevor Sie das Pflaster anfassen. Das Pflaster muss trocken bleiben. Wenn die Haut rot wird, wehtut, Eiter kommt oder Sie Fieber haben: Gehen Sie sofort zum Arzt.“ Teach-back: „Können Sie mir mit Ihren Worten sagen, worauf Sie achten?“' },
      { q: 'Herr Brandt fragt weiter: „Wann ist Händewaschen trotzdem Pflicht?“ Nennen Sie drei Situationen.', a: 'Bei sichtbarer Verschmutzung, nach Kontakt mit Sporenbildnern (C. difficile, nach der Desinfektion), vor Dienstbeginn und nach dem Toilettengang.' }
    ]
  };

  /* ---------- Einbauen ---------- */
  const insertBefore = (steps, type, step) => {
    const i = steps.findIndex(s => s.type === type);
    steps.splice(i < 0 ? steps.length - 1 : i, 0, step);
  };
  Object.entries(NEW_QUESTS).forEach(([id, q]) => insertBefore(M[id].steps, q.before, q.step));
  Object.entries(EXPERT).forEach(([id, step]) => insertBefore(M[id].steps, 'quiz', step));
  Object.entries(DEEP).forEach(([id, list]) => {
    M[id].steps.filter(s => s.type === 'scenario').forEach(sc => sc.items.forEach((it, i) => { if (list[i]) it.deep = list[i]; }));
  });
  Object.entries(VIDEO_STEPS).forEach(([id, v]) => {
    const st = M[id].steps;
    st.splice(1, 0, { type: 'video', slot: 'intro', title: 'Einstiegsvideo', min: 5, prompts: v.intro });
    const r = st.map(s => s.type).lastIndexOf('reflect');
    st.splice(r < 0 ? st.length : r, 0, { type: 'video', slot: 'outro', title: 'Abschlussvideo', min: 5, prompts: v.outro });
  });
  // Mitmach-Quest jedes Kapitels nutzt die "action"-Videos des Kapitels
  window.HQ_MISSIONS.forEach(m => m.steps.forEach(s => { if (s.type === 'quest') s.videoSlot = 'action'; }));
})();
