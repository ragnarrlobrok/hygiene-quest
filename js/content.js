/* ============================================================
   HYGIENE-QUEST – Inhalte (Kapitel, Fälle, Fragen)
   Anrede: durchgehend "Sie".
   Platzhalter in Texten:
   {A} / {B}  = Namen der Tandem-Partner
   {D}        = Person "am Steuer" (bedient das Spiel, handelt)
   {C}        = Coach (beobachtet, prüft, gibt Feedback)
   ============================================================ */

window.HQ_CHARS = {
  demir:  { name: 'Frau Demir',  role: 'Stationsleitung',   emoji: '👩🏽‍⚕️' },
  brandt: { name: 'Herr Brandt', role: 'Hygienefachkraft · Hüter der Kristalle', emoji: '🧙🏻‍♂️' },
  okafor: { name: 'Dr. Okafor',  role: 'Stationsärztin',    emoji: '👩🏿‍⚕️' },
  tom:    { name: 'Tom',         role: 'Kollege',           emoji: '🧑🏼‍⚕️' },
  team:   { name: 'Ihr Tandem',  role: 'Heldengruppe',      emoji: '🛡️' }
};

window.HQ_PATIENTS = [
  { id: 'p1', name: 'Herr Becker',   age: 78, room: 1, emoji: '👴🏻', info: 'Lungenentzündung (Pneumonie), hustet stark' },
  { id: 'p2', name: 'Frau Yilmaz',   age: 64, room: 2, emoji: '👵🏽', info: 'Blasenkatheter nach Hüft-OP' },
  { id: 'p3', name: 'Herr Wagner',   age: 45, room: 3, emoji: '👨🏼', info: 'Diabetes, Venenverweilkanüle mit Infusion' },
  { id: 'p4', name: 'Frau Schulz',   age: 82, room: 4, emoji: '👵🏻', info: 'MRSA-Trägerin, Kontaktisolierung' },
  { id: 'p5', name: 'Herr Nowak',    age: 70, room: 5, emoji: '👨🏻‍🦳', info: 'Durchfall und Erbrechen – Verdacht auf Norovirus' },
  { id: 'p6', name: 'Frau Hoffmann', age: 29, room: 6, emoji: '👩🏻', info: 'OP-Wunde nach Blinddarm-OP' }
];

window.HQ_GLOSSARY = [
  ['Aerogen', 'Übertragung über die Luft. Sehr kleine Teilchen (Aerosole) schweben lange in der Luft, z. B. bei Tuberkulose oder Masern.'],
  ['Aseptisch', 'Ohne Keime. Aseptische Tätigkeiten sind z. B. Verbandwechsel, Injektion, Umgang mit Kathetern.'],
  ['Basishygiene', 'Hygieneregeln, die bei JEDEM Patienten gelten – z. B. Händedesinfektion, Handschuhe bei Kontakt mit Körperflüssigkeiten.'],
  ['Besiedlung (Kolonisation)', 'Keime sind auf der Haut oder Schleimhaut, aber der Mensch ist nicht krank.'],
  ['Clostridioides difficile', 'Bakterium, das schweren Durchfall verursacht. Bildet Sporen – Alkohol tötet Sporen nicht.'],
  ['Desinfektion', 'Keime werden so stark reduziert, dass sie nicht mehr infizieren können.'],
  ['Einwirkzeit', 'Die Zeit, die ein Desinfektionsmittel braucht, um zu wirken (z. B. 30 Sekunden bei der Händedesinfektion).'],
  ['Endogene Infektion', 'Infektion durch eigene Keime des Patienten (z. B. Darmkeime gelangen in die Blase).'],
  ['Exogene Infektion', 'Infektion durch Keime von außen (z. B. von den Händen des Personals).'],
  ['FFP2-Maske', 'Atemschutzmaske. Schützt die tragende Person vor Aerosolen. Muss dicht sitzen.'],
  ['Hautschutzplan', 'Plan der Einrichtung: wann und womit man die Haut schützt, reinigt und pflegt.'],
  ['Hygienefachkraft', 'Pflegefachperson mit Weiterbildung in Hygiene. Berät und kontrolliert die Hygiene im Krankenhaus.'],
  ['Hygieneplan', 'Pflicht-Dokument jeder Einrichtung (Infektionsschutzgesetz). Beschreibt alle Hygienemaßnahmen.'],
  ['Infektion', 'Keime dringen in den Körper ein, vermehren sich und machen krank.'],
  ['Infektionskette', 'Erreger – Quelle – Austrittspforte – Übertragungsweg – Eintrittspforte – empfänglicher Mensch.'],
  ['Isolierung', 'Besondere Schutzmaßnahmen, damit Erreger nicht auf andere Menschen übertragen werden.'],
  ['KRINKO', 'Kommission für Krankenhaushygiene und Infektionsprävention am Robert Koch-Institut. Schreibt die wichtigsten Hygiene-Empfehlungen.'],
  ['MNS', 'Mund-Nasen-Schutz (OP-Maske). Schützt vor Tröpfchen und schützt andere vor eigenen Tröpfchen.'],
  ['MRE', 'Multiresistente Erreger: Keime, gegen die viele Antibiotika nicht mehr wirken (z. B. MRSA, VRE, MRGN).'],
  ['MRGN', 'Multiresistente gramnegative Stäbchen (z. B. E. coli, Klebsiellen). 3MRGN / 4MRGN = resistent gegen 3 bzw. 4 Antibiotikagruppen.'],
  ['MRSA', 'Methicillin-resistenter Staphylococcus aureus. Lebt oft in der Nase und auf der Haut.'],
  ['Nosokomiale Infektion', 'Infektion, die im Zusammenhang mit einer medizinischen Behandlung entsteht (z. B. im Krankenhaus).'],
  ['Norovirus', 'Sehr ansteckendes Virus. Verursacht plötzliches Erbrechen und Durchfall. Wenige Viren reichen für eine Infektion.'],
  ['Patientennahe Flächen', 'Flächen, die der Patient oft berührt: Nachttisch, Bettgitter, Klingel, Tischplatte.'],
  ['PSA', 'Persönliche Schutzausrüstung: Schutzkittel, Handschuhe, Maske, Schutzbrille.'],
  ['Recapping', 'Schutzkappe wieder auf eine benutzte Kanüle stecken. VERBOTEN – hohe Verletzungsgefahr.'],
  ['Sporen', 'Sehr widerstandsfähige Dauerform von Bakterien. Werden durch Händewaschen mechanisch entfernt.'],
  ['Tröpfchen', 'Größere Teilchen beim Husten, Niesen, Sprechen. Fliegen ca. 1–2 Meter weit.'],
  ['Viruzid', 'Wirkt gegen Viren, auch gegen unbehüllte Viren wie das Norovirus.'],
  ['VRE', 'Vancomycin-resistente Enterokokken. Darmbakterien, gegen die das Antibiotikum Vancomycin nicht wirkt.']
];

/* ------------------------------------------------------------
   KAPITEL (1 Kapitel ≈ 1 UE à 45 Minuten)
   boss = Gegner-Monster im Entscheidungs-Fall
   ------------------------------------------------------------ */
window.HQ_MISSIONS = [
/* ================= KAPITEL 1 ================= */
{
  id: 'm1', nr: 1, icon: '🚪', title: 'Dienstbeginn: Keime verstehen',
  place: 'Umkleide & Stationszimmer', badge: { icon: '🦠', name: 'Kristall des Wissens' },
  boss: { icon: '🦠', name: 'Schleim der Infektionskette' },
  goal: 'Sie erklären die Infektionskette, nosokomiale Infektionen und die Regeln für Dienstkleidung.',
  steps: [
    { type: 'story', title: 'Willkommen im Kristall-Klinikum', min: 3, lines: [
      { who: 'demir', text: 'Guten Morgen, {A} und {B}! Willkommen im Klinikum St. Hygiea, Station 3B – Innere Medizin. Sie arbeiten heute als Tandem.' },
      { who: 'demir', text: 'Auf unserer Station liegen sechs Patientinnen und Patienten. Jede Entscheidung, die Sie treffen, hat Folgen für diese Menschen.' },
      { who: 'brandt', text: 'Ich bin Herr Brandt, die Hygienefachkraft. Man nennt mich auch den Hüter der Kristalle. Für jedes Kapitel, das Sie schaffen, erhalten Sie einen Hygiene-Kristall.' },
      { who: 'brandt', text: 'Unsichtbare Gegner – Keime – lauern überall. Fehler sind erlaubt, aber Sie müssen sie korrigieren. Zuerst müssen Sie verstehen, wie Keime wandern. Los geht es!' }
    ]},
    { type: 'learn', title: 'Wissen: Grundlagen der Hygiene', min: 10, cards: [
      { icon: '🧼', title: 'Was ist Hygiene?', html: `
        <p>Hygiene bedeutet: <b>Gesundheit schützen und Krankheiten verhindern</b>.</p>
        <p>In der Pflege heißt das vor allem: <b>Infektionen verhindern</b> – bei Patienten, bei Kollegen und bei uns selbst.</p>
        <ul><li><b>Fremdschutz:</b> Ich schütze den Patienten.</li><li><b>Selbstschutz:</b> Ich schütze mich.</li></ul>
        <div class="merke">Die <b>Basishygiene</b> gilt immer und bei jedem Patienten – auch wenn keine Infektion bekannt ist.</div>` },
      { icon: '🏥', title: 'Nosokomiale Infektionen', html: `
        <p>Eine <b>nosokomiale Infektion</b> entsteht im Zusammenhang mit einer medizinischen Behandlung, z. B. im Krankenhaus. Sie war bei der Aufnahme noch nicht vorhanden.</p>
        <p>In Deutschland gibt es jedes Jahr ca. <b>400.000 bis 600.000</b> solcher Infektionen, mehrere tausend Menschen sterben daran. Ein großer Teil ist <b>vermeidbar</b>.</p>
        <p>Die häufigsten sind:</p>
        <ul><li>Wundinfektionen nach Operationen</li><li>Harnwegsinfektionen (oft durch Blasenkatheter)</li><li>Lungenentzündungen (Pneumonien)</li><li>Durchfall durch <i>Clostridioides difficile</i></li><li>Blutvergiftung (Sepsis), z. B. durch Gefäßkatheter</li></ul>` },
      { icon: '🔗', title: 'Die Infektionskette', html: `
        <p>Eine Infektion entsteht nur, wenn <b>alle Glieder</b> der Kette verbunden sind:</p>
        <ol><li><b>Erreger</b> (z. B. Bakterium, Virus)</li><li><b>Infektionsquelle</b> (z. B. infizierter Mensch, Fläche)</li><li><b>Austrittspforte</b> (z. B. Mund, Wunde, Darm)</li><li><b>Übertragungsweg</b> (z. B. Hände)</li><li><b>Eintrittspforte</b> (z. B. Katheter, Wunde, Schleimhaut)</li><li><b>Empfänglicher Mensch</b> (z. B. alt, geschwächt, operiert)</li></ol>
        <div class="merke">Hygiene <b>unterbricht die Kette</b>. Am einfachsten gelingt das beim Übertragungsweg – zum Beispiel mit Händedesinfektion.</div>` },
      { icon: '➡️', title: 'Übertragungswege', html: `
        <ul>
        <li><b>Kontakt direkt:</b> Hand – Haut (z. B. MRSA).</li>
        <li><b>Kontakt indirekt:</b> über Gegenstände und Flächen (z. B. Stethoskop, Bettgitter).</li>
        <li><b>Tröpfchen:</b> Husten, Niesen, Sprechen – ca. 1–2 Meter (z. B. Grippe).</li>
        <li><b>Aerogen (Luft):</b> sehr kleine Teilchen schweben lange (z. B. Tuberkulose, Masern).</li></ul>
        <div class="merke"><b>Die Hände des Personals</b> sind der wichtigste Übertragungsweg im Krankenhaus!</div>
        <p><b>Endogen</b> = Infektion mit eigenen Keimen. <b>Exogen</b> = Infektion mit Keimen von außen.</p>` },
      { icon: '📘', title: 'Regeln & Zuständigkeiten', html: `
        <ul>
        <li>Das <b>Infektionsschutzgesetz (IfSG)</b> verpflichtet Krankenhäuser zur Hygiene.</li>
        <li>Die <b>KRINKO</b> am Robert Koch-Institut schreibt Empfehlungen (z. B. zur Händehygiene).</li>
        <li>Jede Einrichtung hat einen <b>Hygieneplan</b>. Dort steht, was Sie tun müssen.</li>
        <li><b>Hygienefachkräfte</b> und <b>hygienebeauftragte Pflegekräfte</b> beraten Sie.</li></ul>
        <div class="merke">Wenn Sie unsicher sind: Schauen Sie in den Hygieneplan oder fragen Sie die Hygienefachkraft.</div>` },
      { icon: '👕', title: 'Dienstkleidung & Hände', html: `
        <ul>
        <li>Dienstkleidung: <b>kurze Ärmel</b>, täglich frisch, bei Verschmutzung sofort wechseln.</li>
        <li>Dienstkleidung wird <b>nicht zu Hause</b> gewaschen und nicht auf dem Weg zur Arbeit getragen.</li>
        <li><b>Kein Schmuck</b> an Händen und Unterarmen: keine Ringe (auch kein Ehering), keine Uhr, keine Armbänder, kein Fitness-Tracker.</li>
        <li>Fingernägel <b>kurz und rund</b>, kein Nagellack, keine künstlichen Nägel (Gel, Acryl).</li>
        <li>Lange Haare <b>zusammenbinden</b>.</li></ul>
        <div class="merke">Unter Ringen und langen Nägeln überleben viele Keime – dort wirkt das Desinfektionsmittel nicht richtig.</div>` }
    ]},
    { type: 'order', title: 'Rätsel: Die Infektionskette', min: 4,
      intro: 'Bringen Sie die Glieder der Infektionskette in die richtige Reihenfolge. {D} schiebt, {C} kontrolliert.',
      items: ['Erreger', 'Infektionsquelle', 'Austrittspforte', 'Übertragungsweg', 'Eintrittspforte', 'Empfänglicher Mensch'] },
    { type: 'partner', title: 'Tandem-Aufgabe: Erklären Sie die Kette', min: 8, minutes: 3, rounds: [
      { task: '{D} erklärt mit eigenen Worten: Wie kann Herr Becker (Zimmer 1, Lungenentzündung) Keime an Frau Hoffmann (Zimmer 6, OP-Wunde) weitergeben? Nennen Sie alle 6 Glieder der Infektionskette und sagen Sie, wo man die Kette unterbrechen kann.',
        coach: '{C} hört zu, stellt Fragen und hakt die Checkliste ab.' },
      { task: 'Jetzt tauschen Sie. {D} erklärt: Wie kann Frau Yilmaz (Zimmer 2, Blasenkatheter) eine Harnwegsinfektion bekommen? Ist das eine endogene oder eine exogene Infektion?',
        coach: '{C} hört zu und hakt die Checkliste ab.' }
    ],
      checklist: ['Alle 6 Glieder wurden genannt', 'Der Übertragungsweg wurde richtig benannt', 'Mindestens eine Hygienemaßnahme wurde genannt', 'Die Erklärung war verständlich'],
      solution: `<p><b>Beispiel 1:</b> Erreger aus der Lunge von Herrn Becker (Quelle) → Austritt beim Husten (Mund) → Übertragung über Hände/Flächen des Personals → Eintritt über die OP-Wunde → Frau Hoffmann ist durch die OP geschwächt. <b>Unterbrechen:</b> Händedesinfektion, Hustenetikette, Flächendesinfektion, aseptischer Verbandwechsel.</p>
      <p><b>Beispiel 2:</b> Eigene Darmkeime wandern am Katheter entlang in die Blase = <b>endogen</b>. Keime von den Händen des Personals beim Leeren des Beutels = <b>exogen</b>. <b>Unterbrechen:</b> Händedesinfektion, geschlossenes System, Beutel unter Blasenniveau, Katheter nur so lange wie nötig.</p>` },
    { type: 'sort', title: 'Ausrüstungs-Check: Was ist im Dienst erlaubt?', min: 5,
      intro: 'Sie ziehen sich für den Dienst um. Entscheiden Sie gemeinsam: Erlaubt oder nicht erlaubt?',
      buckets: [{ id: 'ja', label: '✅ Erlaubt' }, { id: 'nein', label: '⛔ Nicht erlaubt' }],
      items: [
        { t: 'Ehering am Finger', b: 'nein', e: 'Auch der Ehering ist verboten. Unter Ringen sammeln sich Keime.' },
        { t: 'Kurze, runde Fingernägel ohne Lack', b: 'ja', e: 'Richtig – so kann das Desinfektionsmittel überall wirken.' },
        { t: 'Gelnägel / künstliche Nägel', b: 'nein', e: 'Künstliche Nägel sind ein Keimreservoir und verboten.' },
        { t: 'Armbanduhr oder Fitness-Tracker', b: 'nein', e: 'Kein Schmuck und keine Uhren an Händen und Unterarmen.' },
        { t: 'Lange Haare zu einem Zopf gebunden', b: 'ja', e: 'Richtig – offene lange Haare können Patienten und Material berühren.' },
        { t: 'Kurzärmelige Dienstkleidung', b: 'ja', e: 'Richtig – die Unterarme müssen frei sein.' },
        { t: 'Strickjacke über der Dienstkleidung bei der Pflege', b: 'nein', e: 'Lange Ärmel werden bei der Pflege kontaminiert und behindern die Händedesinfektion.' },
        { t: 'Dienstkleidung zu Hause waschen', b: 'nein', e: 'Dienstkleidung wird in der Wäscherei desinfizierend gewaschen.' },
        { t: 'Uhr am Kasack (Pulsuhr an der Brust)', b: 'ja', e: 'Richtig – so können Sie den Puls zählen, ohne eine Armbanduhr zu tragen.' },
        { t: 'Mit Dienstkleidung im Bus zur Arbeit fahren', b: 'nein', e: 'Dienstkleidung zieht man erst in der Klinik an.' }
      ]},
    { type: 'scenario', title: 'Erster Rundgang auf Station', min: 8,
      intro: 'Sie machen den ersten Rundgang. Besprechen Sie jede Situation gemeinsam, bevor Sie entscheiden.',
      items: [
        { patient: 'p1', text: 'Herr Becker hustet stark. Er hält beim Husten nicht die Hand vor den Mund und spricht dabei mit seinem Bettnachbarn. Was tun Sie?',
          options: [
            { t: 'Wir erklären ihm freundlich die Hustenetikette: in ein Taschentuch oder in die Armbeuge husten, danach Händehygiene. Wir geben ihm Taschentücher und einen Abwurf.', ok: true, fb: 'Sehr gut! So unterbrechen Sie den Übertragungsweg über Tröpfchen.' },
            { t: 'Wir sagen nichts. Er ist krank und alt.', fb: 'Tröpfchen fliegen 1–2 Meter weit. Der Bettnachbar kann sich anstecken.' },
            { t: 'Wir sagen, er soll in die Hand husten.', fb: 'In die Hand husten ist ungünstig: Die Keime kommen so auf alle Flächen, die er danach berührt.' }
          ], harm: { p: 'p1', dmg: 12, text: 'Der Bettnachbar von Herrn Becker bekommt Fieber und Husten. Die Tröpfchen haben ihn erreicht.' } },
        { patient: 'p4', text: 'Tom hat mit seinem Stethoskop gerade Frau Schulz (MRSA) abgehört. Jetzt will er damit direkt zu Herrn Wagner (Zimmer 3). Was sagen Sie?',
          options: [
            { t: '„Kein Problem, das Stethoskop berührt ja nur die Haut.“', fb: 'Indirekter Kontakt! Über Gegenstände werden Keime wie MRSA übertragen.' },
            { t: '„Stopp, Tom! Bei Frau Schulz bleibt ein eigenes Stethoskop im Zimmer. Sonst muss man es vor dem nächsten Patienten wischdesinfizieren.“', ok: true, fb: 'Richtig! Bei Isolierung gibt es patientenbezogene Geräte. Sonst gilt: Medizinprodukte vor dem nächsten Patienten desinfizieren.' },
            { t: '„Händedesinfektion reicht, das Stethoskop ist egal.“', fb: 'Händedesinfektion ist wichtig – aber das Stethoskop kann die Keime trotzdem weitertragen.' }
          ], harm: { p: 'p3', dmg: 15, text: 'MRSA wurde mit dem Stethoskop auf Herrn Wagner übertragen. Er ist jetzt besiedelt und muss isoliert werden.' } },
        { patient: 'p6', text: 'Eine Kollegin aus der Nachtschicht kommt mit Ring und langen, lackierten Nägeln zur Übergabe. Sie will gleich bei Frau Hoffmann den Verband anschauen.',
          options: [
            { t: 'Wir sagen nichts – sie ist erfahrener als wir.', fb: 'Hygiene gilt für alle. Sie dürfen und sollen Fehler freundlich ansprechen.' },
            { t: 'Wir sprechen sie freundlich an: „Darf ich Sie kurz auf den Ring hinweisen? Unter Ringen bleiben Keime, und Frau Hoffmann hat eine frische Wunde.“', ok: true, fb: 'Super! Respektvoll ansprechen ist professionell und schützt die Patientin.' },
            { t: 'Wir melden sie sofort der Pflegedirektion.', fb: 'Zuerst das direkte, freundliche Gespräch. Wenn sich nichts ändert, informiert man die Stationsleitung.' }
          ], harm: { p: 'p6', dmg: 15, text: 'Die OP-Wunde von Frau Hoffmann ist gerötet und eitrig – eine Wundinfektion.' } },
        { patient: 'p2', text: 'Frau Yilmaz fragt: „Warum bekomme ich hier eine Infektion? Ich war doch nur wegen der Hüfte hier!“ Was antworten Sie?',
          options: [
            { t: '„Das ist Pech. Im Krankenhaus gibt es eben Keime.“', fb: 'Diese Antwort macht Angst und erklärt nichts. Viele Infektionen sind vermeidbar.' },
            { t: '„Sie haben keine Infektion. Aber der Blasenkatheter ist eine Eintrittspforte für Keime. Darum arbeiten wir sehr sauber und prüfen jeden Tag, ob der Katheter noch nötig ist.“', ok: true, fb: 'Genau! Einfach erklärt, ehrlich und mit Blick auf die Vorbeugung.' },
            { t: '„Darüber dürfen wir nicht sprechen, fragen Sie den Arzt.“', fb: 'Allgemeine Hygienefragen dürfen Sie gut verständlich beantworten.' }
          ], harm: { p: 'p2', dmg: 8, text: 'Frau Yilmaz ist verunsichert und hat Angst. Sie zieht selbst am Katheter, um ihn zu „kontrollieren“.' } }
      ]},
    { type: 'quiz', title: 'Kapitel-Prüfung 1', min: 5, questions: [
      { q: 'Was ist eine nosokomiale Infektion?', o: ['Eine Infektion, die man im Urlaub bekommt', 'Eine Infektion im Zusammenhang mit einer medizinischen Behandlung', 'Eine Infektion, die nur Kinder bekommen', 'Eine Infektion durch Lebensmittel'], a: 1, e: 'Nosokomial = im Zusammenhang mit medizinischer Versorgung, z. B. im Krankenhaus.' },
      { q: 'Was ist der wichtigste Übertragungsweg im Krankenhaus?', o: ['Die Luft', 'Das Trinkwasser', 'Die Hände des Personals', 'Das Essen'], a: 2, e: 'Die meisten Erreger werden über die Hände übertragen.' },
      { q: 'Welches Glied der Infektionskette kommt direkt nach der Austrittspforte?', o: ['Übertragungsweg', 'Erreger', 'Empfänglicher Mensch', 'Eintrittspforte'], a: 0, e: 'Erreger → Quelle → Austrittspforte → Übertragungsweg → Eintrittspforte → empfänglicher Mensch.' },
      { q: 'Welche Aussage ist richtig?', o: ['Ein Ehering ist im Dienst erlaubt.', 'Nagellack ist erlaubt, wenn er frisch ist.', 'Schmuck an Händen und Unterarmen ist nicht erlaubt.', 'Eine Uhr darf man tragen, wenn man sie desinfiziert.'], a: 2, e: 'Kein Schmuck, keine Uhr, kein Ring – auch kein Ehering.' },
      { q: 'Eine Patientin bekommt eine Harnwegsinfektion durch ihre eigenen Darmkeime. Das ist eine …', o: ['exogene Infektion', 'endogene Infektion', 'aerogene Infektion', 'Tröpfcheninfektion'], a: 1, e: 'Endogen = durch eigene Keime.' },
      { q: 'Wo finden Sie die Hygieneregeln Ihrer Einrichtung?', o: ['Im Hygieneplan', 'Im Dienstplan', 'Im Speiseplan', 'In einem Internet-Forum'], a: 0, e: 'Jede Einrichtung muss einen Hygieneplan haben.' }
    ]},
    { type: 'reflect', title: 'Reflexion', min: 2, prompts: [
      'Welche Hygieneregel war für Sie neu oder anders als in Ihrem Herkunftsland bzw. an Ihrem bisherigen Arbeitsplatz?'
    ]}
  ]
},

/* ================= KAPITEL 2 ================= */
{
  id: 'm2', nr: 2, icon: '🖐️', title: 'Händehygiene: Die 5 Momente',
  place: 'Zimmer 1–3', badge: { icon: '🖐️', name: 'Kristall der reinen Hände' },
  boss: { icon: '👻', name: 'Handgeist' },
  goal: 'Sie kennen die 5 Momente der Händedesinfektion und führen die Händedesinfektion korrekt durch.',
  steps: [
    { type: 'story', title: 'Saubere Hände retten Leben', min: 2, lines: [
      { who: 'brandt', text: 'Heute geht es um das wichtigste Werkzeug in der Pflege: Ihre Hände.' },
      { who: 'brandt', text: 'Bei einer Kontrolle hat die Station nur 58 % richtige Händedesinfektionen geschafft. Der Handgeist hat leichtes Spiel!' },
      { who: 'demir', text: 'Herr Becker, Frau Yilmaz und Herr Wagner brauchen heute viel Pflege. Zeigen Sie, dass Sie es besser können!' }
    ]},
    { type: 'learn', title: 'Wissen: Händedesinfektion', min: 8, cards: [
      { icon: '✋', title: 'Voraussetzungen', html: `
        <ul><li>Kein Schmuck, keine Uhr an Händen und Unterarmen</li><li>Kurze Fingernägel, kein Lack, keine künstlichen Nägel</li><li>Unterarme frei (kurze Ärmel)</li><li>Gepflegte, intakte Haut</li></ul>
        <div class="merke">Die <b>hygienische Händedesinfektion</b> ist die wichtigste Maßnahme gegen nosokomiale Infektionen.</div>` },
      { icon: '5️⃣', title: 'Die 5 Momente (Indikationen)', html: `
        <ol>
        <li><b>VOR</b> dem Patientenkontakt</li>
        <li><b>VOR</b> einer aseptischen Tätigkeit (z. B. Verbandwechsel, Injektion, Katheter)</li>
        <li><b>NACH</b> Kontakt mit potenziell infektiösem Material (Blut, Urin, Stuhl, Sekret) – auch nach dem Ausziehen der Handschuhe</li>
        <li><b>NACH</b> dem Patientenkontakt</li>
        <li><b>NACH</b> Kontakt mit der direkten Patientenumgebung (z. B. Bettgitter, Nachttisch)</li></ol>
        <div class="merke">Moment 1 und 2 schützen den <b>Patienten</b>. Moment 3, 4 und 5 schützen <b>Sie selbst</b> und die <b>Umgebung</b>.</div>` },
      { icon: '⏱️', title: 'So geht es richtig', html: `
        <ul>
        <li>Die Hände müssen <b>trocken</b> sein.</li>
        <li>Spender mit dem <b>Ellenbogen</b> bedienen.</li>
        <li>Genug Mittel nehmen: <b>eine hohle Hand voll</b> (ca. 3–5 ml).</li>
        <li><b>30 Sekunden</b> einreiben (oder nach Herstellerangabe). Die Hände müssen die ganze Zeit <b>feucht</b> sein.</li>
        <li>Besonders wichtig: <b>Fingerkuppen</b> und <b>Daumen</b> – diese Stellen werden oft vergessen.</li>
        <li>Hände an der Luft <b>trocknen lassen</b> – nicht abwischen.</li></ul>` },
      { icon: '🚰', title: 'Waschen oder desinfizieren?', html: `
        <p><b>Desinfizieren</b> ist die Regel. Es wirkt besser und schont die Haut mehr als Waschen.</p>
        <p><b>Hände waschen</b> nur:</p>
        <ul><li>bei <b>sichtbarer Verschmutzung</b> (danach desinfizieren, wenn nötig)</li><li>vor Dienstbeginn und nach dem Toilettengang</li><li>bei Erregern mit <b>Sporen</b> (z. B. <i>Clostridioides difficile</i>): erst desinfizieren, dann waschen</li></ul>
        <div class="merke">Niemals Desinfektionsmittel auf <b>nasse Hände</b> – es wird verdünnt und wirkt nicht richtig.</div>` }
    ]},
    { type: 'sort', title: 'Zuordnen: Welcher Moment ist das?', min: 6,
      intro: 'Ordnen Sie jede Situation einem der 5 Momente zu. {D} schlägt vor, {C} muss zustimmen.',
      buckets: [{ id: '1', label: '1 · Vor Patientenkontakt' }, { id: '2', label: '2 · Vor aseptischer Tätigkeit' }, { id: '3', label: '3 · Nach infektiösem Material' }, { id: '4', label: '4 · Nach Patientenkontakt' }, { id: '5', label: '5 · Nach Patientenumgebung' }],
      items: [
        { t: 'Bevor Sie Herrn Becker beim Aufsetzen helfen', b: '1', e: 'Vor dem direkten Kontakt mit dem Patienten.' },
        { t: 'Bevor Sie die Infusion an Herrn Wagners Venenverweilkanüle anschließen', b: '2', e: 'Arbeit an einem Gefäßzugang ist eine aseptische Tätigkeit.' },
        { t: 'Nachdem Sie den Urinbeutel von Frau Yilmaz geleert und die Handschuhe ausgezogen haben', b: '3', e: 'Kontakt mit Urin = potenziell infektiöses Material.' },
        { t: 'Nachdem Sie bei Herrn Becker den Blutdruck gemessen haben', b: '4', e: 'Nach dem Patientenkontakt.' },
        { t: 'Nachdem Sie nur den Nachttisch von Frau Yilmaz aufgeräumt haben', b: '5', e: 'Sie hatten nur Kontakt zur Umgebung, nicht zur Patientin.' },
        { t: 'Bevor Sie Herrn Becker absaugen', b: '2', e: 'Absaugen ist eine aseptische Tätigkeit (Schleimhaut).' },
        { t: 'Nachdem Sie Erbrochenes aufgewischt haben', b: '3', e: 'Erbrochenes ist infektiöses Material.' }
      ]},
    { type: 'quest', id: 'q_hand', title: 'Video-Quest: Hygienische Händedesinfektion', min: 12, demo: 'handrub',
      intro: 'Sehen Sie sich das Video genau an. Danach zeigt jede Person die Händedesinfektion vor der Kamera. Die andere Person prüft mit der Checkliste.',
      practice: 'Material: Wenn Sie kein Desinfektionsmittel haben, nehmen Sie Wasser oder Handcreme zum Üben. Halten Sie die Hände gut sichtbar vor die Kamera.',
      timer: 30,
      checklist: ['Kein Schmuck, keine Uhr, Unterarme frei', 'Hände trocken, Spender mit dem Ellenbogen bedient', 'Genug Mittel: eine hohle Hand voll', 'Handfläche auf Handfläche', 'Rechte Handfläche über linkem Handrücken und umgekehrt', 'Handfläche auf Handfläche mit verschränkten Fingern', 'Außenseite der Finger in die andere Handfläche (Finger verhakt)', 'Daumen kreisend in der geschlossenen Hand', 'Fingerkuppen kreisend in der Handfläche', 'Mindestens 30 Sekunden, Hände die ganze Zeit feucht', 'Hände an der Luft trocknen lassen, nicht abwischen'] },
    { type: 'scenario', title: 'Die Morgenrunde', min: 8,
      intro: 'Sie pflegen Zimmer 1 bis 3. Diskutieren Sie jede Situation, dann entscheidet {D}.',
      items: [
        { patient: 'p1', text: 'Sie kommen in Zimmer 1, um bei Herrn Becker den Puls zu messen. Vorher haben Sie im Stationszimmer am Computer gearbeitet.',
          options: [
            { t: 'Direkt den Puls messen – wir haben ja nichts Schmutziges angefasst.', fb: 'Tastatur und Telefon sind voller Keime. Moment 1: vor dem Patientenkontakt desinfizieren!' },
            { t: 'Vor dem Kontakt die Hände desinfizieren (Moment 1).', ok: true, fb: 'Richtig! Moment 1 schützt den Patienten vor Keimen von außen.' },
            { t: 'Handschuhe anziehen, dann ist es sicher.', fb: 'Handschuhe sind beim Pulsmessen an intakter Haut nicht nötig – und ersetzen keine Händedesinfektion.' }
          ], harm: { p: 'p1', dmg: 10, text: 'Keime von der Tastatur kommen auf Herrn Becker. Seine Abwehr ist schwach – er bekommt höheres Fieber.' } },
        { patient: 'p3', text: 'Nach dem Pulsmessen bei Herrn Becker gehen Sie zu Herrn Wagner. Die Infusion an seiner Venenverweilkanüle soll gewechselt werden.',
          options: [
            { t: 'Hände nach Herrn Becker desinfizieren (Moment 4) und direkt vor dem Anschließen der Infusion noch einmal (Moment 2).', ok: true, fb: 'Perfekt! Zwei Momente – zwei Desinfektionen.' },
            { t: 'Einmal desinfizieren reicht – wir gehen ja direkt hin.', fb: 'Auf dem Weg berührt man Türgriffe, Wagen usw. Vor der aseptischen Tätigkeit muss man noch einmal desinfizieren.' },
            { t: 'Hände waschen, dann die Infusion anschließen.', fb: 'Waschen reduziert Keime viel weniger als Desinfektion – und nasse Hände sind ungünstig.' }
          ], harm: { p: 'p3', dmg: 18, text: 'Bakterien gelangen über die Kanüle ins Blut. Herr Wagner bekommt Schüttelfrost – Verdacht auf Sepsis!' } },
        { patient: 'p2', text: 'Sie haben sich die Hände gewaschen, weil sie sichtbar schmutzig waren. Sie sind noch nass. Jetzt wollen Sie bei Frau Yilmaz den Katheter versorgen.',
          options: [
            { t: 'Desinfektionsmittel direkt auf die nassen Hände geben.', fb: 'Das Mittel wird verdünnt und wirkt nicht sicher.' },
            { t: 'Hände gründlich abtrocknen, dann desinfizieren.', ok: true, fb: 'Richtig! Desinfektion nur auf trockenen Händen.' },
            { t: 'Ohne Desinfektion arbeiten – die Hände sind ja frisch gewaschen.', fb: 'Waschen ersetzt die Desinfektion vor aseptischen Tätigkeiten nicht.' }
          ], harm: { p: 'p2', dmg: 15, text: 'Frau Yilmaz bekommt Brennen beim Wasserlassen und Fieber – eine Harnwegsinfektion.' } },
        { patient: 'p1', text: 'Sie bringen Herrn Becker ein Glas Wasser. Sie berühren nur den Nachttisch, nicht den Patienten. Dann gehen Sie zum Medikamentenwagen.',
          options: [
            { t: 'Keine Desinfektion – wir haben Herrn Becker ja nicht berührt.', fb: 'Moment 5! Die Patientenumgebung ist mit seinen Keimen besiedelt.' },
            { t: 'Hände desinfizieren – Moment 5: nach Kontakt mit der Patientenumgebung.', ok: true, fb: 'Genau! Der Nachttisch gehört zur direkten Patientenumgebung.' }
          ], harm: { p: 'p3', dmg: 10, text: 'Keime vom Nachttisch kommen über den Medikamentenwagen zu Herrn Wagner.' } },
        { patient: 'p3', text: 'Tom desinfiziert seine Hände nur ca. 10 Sekunden und sagt: „Das reicht, es riecht ja schon nach Alkohol.“',
          options: [
            { t: 'Tom hat recht – wenn es riecht, wirkt es.', fb: 'Der Geruch sagt nichts über die Wirkung. Die Einwirkzeit ist wichtig.' },
            { t: 'Wir sagen freundlich: „Tom, das Mittel braucht 30 Sekunden Einwirkzeit, und die Hände müssen die ganze Zeit feucht sein.“', ok: true, fb: 'Richtig und kollegial. 30 Sekunden sind Pflicht.' }
          ], harm: { p: 'p3', dmg: 10, text: 'Tom überträgt Keime. Herr Wagners Einstichstelle wird rot und dick.' } }
      ]},
    { type: 'quiz', title: 'Kapitel-Prüfung 2', min: 5, questions: [
      { q: 'Wie lange dauert die hygienische Händedesinfektion in der Regel?', o: ['5 Sekunden', '10 Sekunden', '30 Sekunden', '3 Minuten'], a: 2, e: '30 Sekunden (oder nach Angabe des Herstellers).' },
      { q: 'Welche Stellen werden bei der Händedesinfektion am häufigsten vergessen?', o: ['Handflächen', 'Fingerkuppen und Daumen', 'Handrücken', 'Handgelenke'], a: 1, e: 'Fingerkuppen und Daumen haben den meisten Patientenkontakt und werden oft vergessen.' },
      { q: 'Sie haben nur das Bettgitter berührt. Müssen Sie die Hände desinfizieren?', o: ['Nein, nur nach Patientenkontakt', 'Ja – Moment 5: nach Kontakt mit der Patientenumgebung', 'Nur wenn es schmutzig aussieht', 'Nur bei isolierten Patienten'], a: 1, e: 'Die direkte Patientenumgebung ist mit Keimen des Patienten besiedelt.' },
      { q: 'Welcher Moment schützt vor allem den Patienten?', o: ['Nach Kontakt mit Urin', 'Vor einer aseptischen Tätigkeit', 'Nach Patientenkontakt', 'Nach dem Bettenmachen'], a: 1, e: 'Moment 1 und 2 (VOR) schützen den Patienten.' },
      { q: 'Wann wäscht man die Hände, statt sie nur zu desinfizieren?', o: ['Immer vor dem Patientenkontakt', 'Bei sichtbarer Verschmutzung', 'Vor einer Injektion', 'Nach dem Pulsmessen'], a: 1, e: 'Bei sichtbarer Verschmutzung waschen. Sonst ist Desinfektion besser.' },
      { q: 'Welche Menge Desinfektionsmittel nimmt man?', o: ['Einen Tropfen', 'Eine hohle Hand voll (ca. 3–5 ml)', 'Einen Becher voll', 'So viel, dass es tropft'], a: 1, e: 'Eine hohle Hand voll – alle Stellen müssen 30 Sekunden feucht bleiben.' },
      { q: 'Warum soll man die Hände nach der Desinfektion nicht abtrocknen?', o: ['Weil das Handtuch teuer ist', 'Weil das Mittel bis zum Ende einwirken muss', 'Weil die Haut sonst rot wird', 'Das ist egal'], a: 1, e: 'Das Mittel muss vollständig einwirken und verdunsten.' }
    ]},
    { type: 'reflect', title: 'Reflexion', min: 2, prompts: [
      'In welcher Situation im Arbeitsalltag vergisst man die Händedesinfektion leicht? Was hilft Ihnen, daran zu denken?'
    ]}
  ]
},

/* ================= KAPITEL 3 ================= */
{
  id: 'm3', nr: 3, icon: '🧤', title: 'Handschuhe & Hautschutz',
  place: 'Pflegearbeitsraum', badge: { icon: '🧤', name: 'Kristall der Schutzhaut' },
  boss: { icon: '🧟', name: 'Handschuh-Ghul' },
  goal: 'Sie wissen, wann Handschuhe nötig sind, ziehen sie korrekt aus und schützen Ihre Haut.',
  steps: [
    { type: 'story', title: 'Rote, rissige Hände', min: 2, lines: [
      { who: 'tom', text: 'Meine Hände sind total rot und rissig. Ich trage einfach den ganzen Tag Handschuhe, dann muss ich nicht so oft desinfizieren.' },
      { who: 'brandt', text: 'Oh nein, Tom! Das ist gleich doppelt falsch. Handschuhe ersetzen keine Händedesinfektion – und rissige Haut ist ein Paradies für Keime.' },
      { who: 'brandt', text: '{A} und {B}, bitte helfen Sie Tom. Lernen Sie, wann Handschuhe richtig sind und wie man die Haut schützt.' }
    ]},
    { type: 'learn', title: 'Wissen: Handschuhe & Haut', min: 9, cards: [
      { icon: '🧤', title: 'Wann Einmalhandschuhe?', html: `
        <p>Medizinische Einmalhandschuhe tragen Sie bei möglichem Kontakt mit:</p>
        <ul><li>Blut, Urin, Stuhl, Erbrochenem, Sekreten</li><li>Schleimhäuten und nicht intakter Haut (Wunden)</li><li>kontaminierten Gegenständen und Flächen</li><li>Desinfektionsmitteln (Flächendesinfektion)</li></ul>
        <p><b>Nicht nötig</b> z. B. beim Pulsmessen, Blutdruckmessen an intakter Haut, Essen anreichen, Betten mit sauberer Wäsche beziehen.</p>` },
      { icon: '🔁', title: 'Regeln für Handschuhe', html: `
        <ul>
        <li>Handschuhe <b>ersetzen keine</b> Händedesinfektion.</li>
        <li><b>Nach dem Ausziehen</b> immer Hände desinfizieren – Handschuhe haben oft winzige Löcher, und beim Ausziehen kommen Keime auf die Hand.</li>
        <li>Handschuhe <b>wechseln</b>: zwischen zwei Patienten und beim Wechsel von „unrein“ zu „rein“ am selben Patienten.</li>
        <li>Mit Handschuhen <b>nicht</b> Türgriffe, Telefon oder Dokumentation anfassen.</li>
        <li><b>Sterile</b> Handschuhe für sterile Tätigkeiten (z. B. Blasenkatheter legen).</li></ul>` },
      { icon: '🦠', title: 'Besondere Erreger', html: `
        <ul>
        <li><b>Norovirus:</b> Händedesinfektionsmittel mit <b>viruzider</b> Wirkung (bzw. „begrenzt viruzid PLUS“) nehmen – laut Hygieneplan.</li>
        <li><b>Clostridioides difficile:</b> bildet <b>Sporen</b>. Alkohol tötet sie nicht. Darum: Handschuhe tragen, danach Hände desinfizieren <b>und waschen</b>.</li></ul>
        <div class="merke">Welches Mittel wirkt, steht im Hygieneplan und auf der Flasche.</div>` },
      { icon: '🧴', title: 'Hautschutz & Hautpflege', html: `
        <ul>
        <li>Gesunde Haut ist eine wichtige <b>Barriere</b>. Rissige Haut wird schneller mit Keimen besiedelt.</li>
        <li>Langes Tragen von Handschuhen ist <b>Feuchtarbeit</b> – die Haut weicht auf.</li>
        <li><b>Hautschutz</b> vor der Arbeit und nach Pausen, <b>Hautpflege</b> in Pausen und nach dem Dienst (siehe Hautschutzplan).</li>
        <li>Pflegeprodukte aus <b>Spendern oder persönlichen Tuben</b> – keine offenen Dosen.</li>
        <li>Desinfizieren ist hautschonender als häufiges Waschen.</li>
        <li>Hautprobleme dem <b>Betriebsarzt</b> melden.</li></ul>` }
    ]},
    { type: 'sort', title: 'Handschuhe: ja oder nein?', min: 5,
      intro: 'Brauchen Sie hier Einmalhandschuhe? {D} entscheidet, {C} begründet.',
      buckets: [{ id: 'ja', label: '🧤 Handschuhe nötig' }, { id: 'nein', label: '✋ Keine Handschuhe nötig' }],
      items: [
        { t: 'Urinbeutel leeren', b: 'ja', e: 'Kontakt mit Urin möglich.' },
        { t: 'Blutdruck an intakter Haut messen', b: 'nein', e: 'Kein Kontakt mit Körperflüssigkeiten. Aber: Händedesinfektion!' },
        { t: 'Inkontinenzversorgung (Stuhl)', b: 'ja', e: 'Kontakt mit Stuhl.' },
        { t: 'Essen anreichen', b: 'nein', e: 'Handschuhe sind hier nicht nötig und wirken distanziert.' },
        { t: 'Alten Wundverband entfernen', b: 'ja', e: 'Kontakt mit Wundsekret.' },
        { t: 'Patient beim Gehen begleiten', b: 'nein', e: 'Intakte Haut, kein infektiöses Material.' },
        { t: 'Flächendesinfektion am Nachttisch', b: 'ja', e: 'Handschuhe schützen die Haut vor dem Desinfektionsmittel.' },
        { t: 'Mundpflege', b: 'ja', e: 'Kontakt mit Schleimhaut und Speichel.' }
      ]},
    { type: 'order', title: 'Rätsel: Handschuhe richtig ausziehen', min: 4,
      intro: 'Bringen Sie die Schritte in die richtige Reihenfolge. Ziel: Die Hände berühren nie die schmutzige Außenseite.',
      items: ['Ersten Handschuh außen am Handgelenk greifen', 'Ersten Handschuh abziehen und dabei umstülpen', 'Ausgezogenen Handschuh in der anderen (behandschuhten) Hand halten', 'Mit dem bloßen Finger innen unter den zweiten Handschuh fahren', 'Zweiten Handschuh umstülpen – über den ersten', 'Beide Handschuhe in den Abfall', 'Hände desinfizieren'] },
    { type: 'quest', id: 'q_gloves', title: 'Video-Quest: Handschuhe an- und ausziehen', min: 10, demo: 'gloves',
      intro: 'Sehen Sie sich das Video an. Dann zeigt jede Person vor der Kamera: Hände desinfizieren, Handschuhe anziehen, Handschuhe korrekt ausziehen, Hände desinfizieren.',
      practice: 'Material: Einmalhandschuhe, Haushaltshandschuhe oder Gefrierbeutel als Ersatz.',
      checklist: ['Vor dem Anziehen: Hände desinfiziert und trocken', 'Handschuhe in passender Größe, nur am Bund angefasst', 'Ersten Handschuh außen am Handgelenk gegriffen', 'Ersten Handschuh umgestülpt ausgezogen', 'Mit bloßem Finger INNEN unter den zweiten Handschuh', 'Außenseite wurde mit bloßer Haut nicht berührt', 'Handschuhe direkt entsorgt', 'Danach Händedesinfektion (30 Sekunden)'] },
    { type: 'scenario', title: 'Ein langer Vormittag', min: 8,
      intro: 'Sie arbeiten mit Tom zusammen. Diskutieren Sie gemeinsam und entscheiden Sie.',
      items: [
        { patient: 'p5', text: 'Herr Nowak hat erbrochen. Sie haben mit Handschuhen und Schürze sauber gemacht. Tom sagt: „Einfach etwas Desinfektionsmittel auf die Handschuhe sprühen und direkt weiter zu Frau Hoffmann.“',
          options: [
            { t: 'Gute Idee, das spart Zeit.', fb: 'Handschuhe werden nicht routinemäßig desinfiziert. Keime können übertragen werden – Noroviren sind extrem ansteckend!' },
            { t: 'Nein: Handschuhe und Schürze im Zimmer ausziehen und entsorgen, dann Hände mit einem viruziden Mittel desinfizieren.', ok: true, fb: 'Richtig! Neue Patientin = neue Handschuhe. Bei Noroviren: viruzid wirksames Mittel.' },
            { t: 'Handschuhe anlassen, aber Hände danach waschen.', fb: 'Mit benutzten Handschuhen zur nächsten Patientin zu gehen, ist gefährlich.' }
          ], harm: { p: 'p6', dmg: 18, text: 'Frau Hoffmann bekommt plötzlich Erbrechen und Durchfall – Noroviren wurden übertragen!' } },
        { patient: 'p2', text: 'Sie haben bei Frau Yilmaz mit Handschuhen den Intimbereich gewaschen. Jetzt möchten Sie ihr Gesicht eincremen.',
          options: [
            { t: 'Mit denselben Handschuhen weitermachen – es ist ja dieselbe Patientin.', fb: 'Von unrein zu rein: Handschuhe wechseln! Sonst kommen Darmkeime ins Gesicht.' },
            { t: 'Handschuhe ausziehen, Hände desinfizieren, eincremen (bei Bedarf neue Handschuhe).', ok: true, fb: 'Genau – Wechsel von unrein zu rein.' }
          ], harm: { p: 'p2', dmg: 12, text: 'Frau Yilmaz bekommt eine Augenentzündung mit Darmkeimen.' } },
        { patient: 'p1', text: 'Tom will Herrn Becker das Mittagessen anreichen und zieht dafür Handschuhe an.',
          options: [
            { t: 'Richtig so – Handschuhe sind immer sicherer.', fb: 'Handschuhe sind hier nicht nötig. Sie erzeugen Distanz und werden oft zu lange getragen.' },
            { t: 'Wir erklären: Fürs Essenanreichen reicht die Händedesinfektion. Handschuhe nur bei Kontakt mit Körperflüssigkeiten.', ok: true, fb: 'Richtig! Handschuhe nur, wenn sie nötig sind.' }
          ], harm: { p: 'p1', dmg: 5, text: 'Herr Becker fühlt sich „wie ein Aussätziger“ und isst kaum etwas.' } },
        { patient: 'p5', text: 'Bei Herrn Nowak wurde inzwischen auch Clostridioides difficile nachgewiesen. Sie haben ihn gewaschen. Was tun Sie nach dem Ausziehen der Handschuhe?',
          options: [
            { t: 'Nur Hände desinfizieren.', fb: 'Alkohol tötet die Sporen von C. difficile nicht.' },
            { t: 'Hände desinfizieren und danach gründlich waschen.', ok: true, fb: 'Richtig! Das Waschen entfernt die Sporen mechanisch.' },
            { t: 'Gar nichts – wir hatten ja Handschuhe an.', fb: 'Nach dem Ausziehen der Handschuhe ist immer Händehygiene nötig.' }
          ], harm: { p: 'p3', dmg: 15, text: 'Sporen von C. difficile kommen zu Herrn Wagner. Er bekommt schweren Durchfall.' } },
        { patient: 'p3', text: 'Toms Hände sind rissig. Er sagt: „Ich lasse die Desinfektion jetzt einfach weg, sonst wird es schlimmer.“',
          options: [
            { t: 'Wir stimmen zu – Gesundheit geht vor.', fb: 'Ohne Desinfektion gefährdet Tom alle Patienten.' },
            { t: 'Wir raten Tom: Hautschutzplan beachten, regelmäßig eincremen, weniger waschen und zum Betriebsarzt gehen. Desinfizieren muss er trotzdem.', ok: true, fb: 'Sehr gut! Desinfektion ist hautschonender als Waschen. Hautpflege hilft.' }
          ], harm: { p: 'p4', dmg: 12, text: 'Tom überträgt MRSA aus seinen rissigen Händen. Mehr Keime, mehr Gefahr.' } }
      ]},
    { type: 'quiz', title: 'Kapitel-Prüfung 3', min: 5, questions: [
      { q: 'Was müssen Sie nach dem Ausziehen der Handschuhe tun?', o: ['Nichts', 'Hände desinfizieren', 'Hände eincremen', 'Neue Handschuhe anziehen'], a: 1, e: 'Handschuhe sind nicht 100 % dicht, und beim Ausziehen kommen Keime auf die Hände.' },
      { q: 'Wann tragen Sie keine Einmalhandschuhe?', o: ['Beim Leeren des Urinbeutels', 'Bei der Mundpflege', 'Beim Blutdruckmessen an intakter Haut', 'Beim Verbandwechsel'], a: 2, e: 'An intakter Haut ohne Körperflüssigkeiten sind keine Handschuhe nötig.' },
      { q: 'Bei Clostridioides difficile müssen Sie die Hände …', o: ['nur desinfizieren', 'nur eincremen', 'desinfizieren und waschen', 'gar nicht behandeln'], a: 2, e: 'Sporen werden durch Alkohol nicht abgetötet, durch Waschen aber entfernt.' },
      { q: 'Was hilft gegen rissige Hände?', o: ['Weniger desinfizieren', 'Hautschutz und Hautpflege nach Hautschutzplan', 'Die Hände öfter mit Seife waschen', 'Nur Handschuhe tragen'], a: 1, e: 'Hautschutzplan, regelmäßige Pflege, unnötiges Waschen vermeiden.' },
      { q: 'Sie wechseln bei derselben Patientin von der Intimpflege zur Gesichtspflege. Was tun Sie?', o: ['Handschuhe anlassen', 'Handschuhe wechseln und Hände desinfizieren', 'Handschuhe abspülen', 'Nur die Hände waschen'], a: 1, e: 'Von unrein zu rein = Handschuhwechsel + Händedesinfektion.' },
      { q: 'Welches Händedesinfektionsmittel brauchen Sie bei Noroviren?', o: ['Eins mit viruzider Wirkung (laut Hygieneplan)', 'Seife reicht', 'Jedes Mittel', 'Handcreme'], a: 0, e: 'Noroviren sind unbehüllte Viren. Das Mittel muss gegen sie wirken.' }
    ]},
    { type: 'reflect', title: 'Reflexion', min: 2, prompts: [
      'Wie schützen und pflegen Sie Ihre Haut im Dienst? Was möchten Sie ab jetzt anders machen?'
    ]}
  ]
},

/* ================= KAPITEL 4 ================= */
{
  id: 'm4', nr: 4, icon: '🥼', title: 'Schutzkleidung (PSA)',
  place: 'Vorraum Zimmer 4', badge: { icon: '🥽', name: 'Kristall der Rüstung' },
  boss: { icon: '🐉', name: 'Spritz-Drache' },
  goal: 'Sie wählen die richtige Schutzkleidung aus und legen sie in der richtigen Reihenfolge an und ab.',
  steps: [
    { type: 'story', title: 'Vor der Tür von Zimmer 4', min: 2, lines: [
      { who: 'demir', text: 'Frau Schulz in Zimmer 4 ist MRSA-Trägerin. Sie braucht heute Körperpflege und einen frischen Verband.' },
      { who: 'brandt', text: 'Im Vorraum liegt Ihre Rüstung: Kittel, Handschuhe, Masken und Schutzbrillen. Aber was brauchen Sie wirklich – und in welcher Reihenfolge?' },
      { who: 'brandt', text: 'Der gefährlichste Moment ist das AUSziehen. Dabei kontaminieren sich viele Pflegekräfte selbst.' }
    ]},
    { type: 'learn', title: 'Wissen: Schutzkleidung', min: 9, cards: [
      { icon: '👕', title: 'Kleidung im Überblick', html: `
        <ul>
        <li><b>Dienstkleidung:</b> Kasack und Hose, kein Schutz vor Keimen.</li>
        <li><b>Bereichskleidung:</b> z. B. im OP oder auf der Intensivstation.</li>
        <li><b>Schutzkleidung (PSA):</b> schützt Sie und verhindert, dass Keime weitergetragen werden.</li></ul>
        <div class="merke">PSA stellt der Arbeitgeber. Sie müssen sie richtig benutzen.</div>` },
      { icon: '🥼', title: 'Kittel und Schürze', html: `
        <ul>
        <li><b>Einmalschürze:</b> bei Gefahr von Durchfeuchtung, z. B. beim Waschen.</li>
        <li><b>Schutzkittel (langärmlig):</b> bei engem Kontakt mit isolierten Patienten (z. B. MRSA) oder viel Kontakt mit Körperflüssigkeiten.</li>
        <li>Der Kittel bedeckt die Kleidung vollständig, die Bündchen liegen <b>unter</b> den Handschuhen.</li>
        <li>Der Kittel wird <b>nur im Zimmer</b> getragen und dort entsorgt.</li></ul>` },
      { icon: '😷', title: 'Masken und Brille', html: `
        <ul>
        <li><b>Mund-Nasen-Schutz (MNS):</b> gegen Tröpfchen, z. B. bei Influenza, beim Absaugen, bei Erbrechen (Noroviren).</li>
        <li><b>FFP2-Maske:</b> gegen Aerosole, z. B. bei offener Lungentuberkulose, Masern, Windpocken. Sie muss <b>dicht sitzen</b> (Dichtsitz prüfen).</li>
        <li><b>Schutzbrille / Visier:</b> wenn Spritzer ins Gesicht möglich sind.</li></ul>` },
      { icon: '➕', title: 'Anlegen – Reihenfolge', html: `
        <ol><li>Hände desinfizieren</li><li>Schutzkittel</li><li>Maske (MNS oder FFP2)</li><li>Schutzbrille</li><li>Hände desinfizieren</li><li>Handschuhe (über die Kittelbündchen)</li></ol>` },
      { icon: '➖', title: 'Ablegen – Reihenfolge', html: `
        <ol><li>Handschuhe ausziehen</li><li>Hände desinfizieren</li><li>Kittel öffnen, nach innen rollen, entsorgen</li><li>Hände desinfizieren</li><li>Schutzbrille an den Bügeln abnehmen</li><li>Maske an den Bändern abnehmen</li><li>Hände desinfizieren</li></ol>
        <div class="merke">Die Außenseite der PSA ist schmutzig – nur Bänder, Bügel und Innenseite berühren. Achtung: Kliniken können eine leicht andere Reihenfolge haben – dann gilt der <b>Hygieneplan</b>.</div>` }
    ]},
    { type: 'order', title: 'Rätsel: PSA anlegen', min: 3,
      intro: 'Bringen Sie die Schritte zum Anlegen in die richtige Reihenfolge.',
      items: ['Hände desinfizieren', 'Schutzkittel anziehen und hinten schließen', 'Maske aufsetzen', 'Schutzbrille aufsetzen', 'Hände erneut desinfizieren', 'Handschuhe über die Kittelbündchen ziehen'] },
    { type: 'order', title: 'Rätsel: PSA ablegen', min: 3,
      intro: 'Jetzt das Ablegen – der gefährlichste Teil!',
      items: ['Handschuhe ausziehen', 'Hände desinfizieren', 'Kittel öffnen, nach innen rollen und entsorgen', 'Hände desinfizieren', 'Schutzbrille an den Bügeln abnehmen', 'Maske an den Bändern abnehmen', 'Hände desinfizieren'] },
    { type: 'quest', id: 'q_psa', title: 'Video-Quest: PSA an- und ablegen', min: 12, demo: 'psa',
      intro: 'Sehen Sie sich das Video an. Dann legt jede Person vor der Kamera die Schutzkleidung an und wieder ab. Die andere Person prüft genau.',
      practice: 'Material (Ersatz erlaubt): Hemd oder Jacke verkehrt herum als Kittel, Maske, Brille, Handschuhe. Stellen Sie die Kamera so, dass der Oberkörper zu sehen ist.',
      checklist: ['Anlegen: zuerst Hände desinfiziert', 'Kittel bedeckt die Kleidung und ist geschlossen', 'Maske über Mund und Nase, Nasenbügel angepasst', 'Schutzbrille aufgesetzt', 'Vor den Handschuhen Hände desinfiziert', 'Handschuhe über den Bündchen', 'Ablegen: zuerst Handschuhe aus, dann Hände desinfiziert', 'Kittel nach innen gerollt, Außenseite nicht berührt', 'Brille und Maske nur an Bügeln und Bändern angefasst', 'Zum Schluss Hände desinfiziert'] },
    { type: 'scenario', title: 'Pflege bei Frau Schulz (MRSA)', min: 8,
      intro: 'Frau Schulz ist MRSA-Trägerin (Kontaktisolierung). Besprechen Sie und entscheiden Sie.',
      items: [
        { patient: 'p4', text: 'Sie wollen Frau Schulz waschen und das Bett machen. Welche Schutzkleidung ziehen Sie an?',
          options: [
            { t: 'Gar keine – MRSA macht nur kranke Menschen krank.', fb: 'Sie können MRSA an andere Patienten weitertragen. Kontaktisolierung = Schutzkittel und Handschuhe.' },
            { t: 'Schutzkittel und Handschuhe, vorher Händedesinfektion. Maske nur bei Tätigkeiten mit Tröpfchen/Aerosolen nach Hygieneplan.', ok: true, fb: 'Richtig! MRSA wird vor allem über Kontakt übertragen.' },
            { t: 'Nur eine FFP2-Maske.', fb: 'MRSA wird vor allem über Kontakt übertragen. Die Kleidung muss geschützt werden.' }
          ], harm: { p: 'p6', dmg: 15, text: 'MRSA wurde über Ihre Kleidung zu Frau Hoffmann getragen. Ihre Wunde ist jetzt mit MRSA besiedelt.' } },
        { patient: 'p4', text: 'Tom trägt den Kittel hinten offen. Die Ärmel sind hochgeschoben, die Handschuhe liegen unter den Bündchen.',
          options: [
            { t: 'Das ist okay – Hauptsache, er trägt einen Kittel.', fb: 'Ein offener Kittel schützt nicht. Bündchen gehören unter die Handschuhe, die Arme müssen bedeckt sein.' },
            { t: 'Wir helfen ihm: Kittel hinten schließen, Ärmel runter, Handschuhe über die Bündchen ziehen.', ok: true, fb: 'Super! Gegenseitige Kontrolle ist echte Teamarbeit.' }
          ], harm: { p: 'p4', dmg: 8, text: 'Toms Unterarme und Rücken sind kontaminiert. Er trägt die Keime über den Flur.' } },
        { patient: 'p6', text: 'Mitten in der Pflege fehlt Ihnen ein Handtuch. Sie möchten kurz ins Lager auf dem Flur gehen.',
          options: [
            { t: 'Schnell mit Kittel und Handschuhen raus – es dauert nur eine Minute.', fb: 'Die PSA darf das Zimmer nicht verlassen. Sonst wird MRSA auf dem Flur verteilt.' },
            { t: 'Klingeln oder rufen – eine Kollegin bringt das Handtuch. Wir bleiben im Zimmer.', ok: true, fb: 'Richtig! Gute Vorbereitung und Hilfe von außen.' },
            { t: 'Nur die Handschuhe ausziehen und mit dem Kittel ins Lager.', fb: 'Auch der Kittel ist kontaminiert und darf nicht auf den Flur.' }
          ], harm: { p: 'p6', dmg: 15, text: 'MRSA wurde im Lager verteilt. Ein Handtuch für Frau Hoffmann ist jetzt kontaminiert.' } },
        { patient: 'p4', text: 'Sie sind fertig. Wie beginnen Sie mit dem Ablegen der PSA?',
          options: [
            { t: 'Zuerst die Maske abnehmen – darunter schwitzt man so.', fb: 'Mit den schmutzigen Handschuhen an die Maske = Keime ins Gesicht!' },
            { t: 'Zuerst die Handschuhe ausziehen, dann Hände desinfizieren, dann den Kittel.', ok: true, fb: 'Richtig! Von „am schmutzigsten“ zu „am saubersten“.' },
            { t: 'Alles gleichzeitig schnell ausziehen.', fb: 'Hektik führt zur Selbstkontamination. Ruhig und in der richtigen Reihenfolge.' }
          ], harm: { p: 'p4', dmg: 10, text: 'Sie haben sich selbst im Gesicht kontaminiert und sind jetzt MRSA-besiedelt.' } },
        { patient: 'p1', text: 'Ein neuer Patient mit Verdacht auf offene Lungentuberkulose kommt auf Station. Welche Maske tragen Sie im Zimmer?',
          options: [
            { t: 'Mund-Nasen-Schutz (OP-Maske).', fb: 'Tuberkulose wird über Aerosole übertragen. Ein MNS schützt Sie nicht ausreichend.' },
            { t: 'FFP2-Maske mit Dichtsitz.', ok: true, fb: 'Richtig! Bei aerogener Übertragung schützt die FFP2-Maske.' },
            { t: 'Keine – Tuberkulose gibt es in Deutschland nicht mehr.', fb: 'Tuberkulose gibt es auch in Deutschland. Selbstschutz ist Pflicht.' }
          ], harm: { p: 'p1', dmg: 10, text: 'Ohne Atemschutz haben Sie Erreger eingeatmet und später an Herrn Becker weitergegeben.' } }
      ]},
    { type: 'quiz', title: 'Kapitel-Prüfung 4', min: 5, questions: [
      { q: 'Was ziehen Sie beim Anlegen der PSA zuletzt an?', o: ['Kittel', 'Maske', 'Handschuhe', 'Schutzbrille'], a: 2, e: 'Handschuhe kommen zuletzt – über die Kittelbündchen.' },
      { q: 'Was ziehen Sie beim Ablegen der PSA zuerst aus?', o: ['Maske', 'Handschuhe', 'Brille', 'Kittel'], a: 1, e: 'Handschuhe sind am stärksten kontaminiert und kommen zuerst weg.' },
      { q: 'Welche Maske schützt Sie bei offener Lungentuberkulose?', o: ['Stoffmaske', 'MNS', 'FFP2-Maske', 'Keine Maske nötig'], a: 2, e: 'Aerogene Übertragung → FFP2.' },
      { q: 'Wo legen Sie den benutzten Schutzkittel eines isolierten Patienten ab?', o: ['Im Patientenzimmer bzw. in der Schleuse', 'Im Stationszimmer', 'Im Flur auf dem Wagen', 'Im Pausenraum'], a: 0, e: 'PSA bleibt im Zimmer und wird dort entsorgt.' },
      { q: 'Wie fassen Sie eine benutzte Maske beim Abnehmen an?', o: ['Vorne in der Mitte', 'Nur an den Bändern', 'Mit beiden Händen vorne', 'Egal'], a: 1, e: 'Die Vorderseite ist kontaminiert.' },
      { q: 'Wann ist eine Schutzbrille sinnvoll?', o: ['Immer bei jedem Patienten', 'Wenn Spritzer ins Gesicht möglich sind', 'Nur bei Sonne', 'Nur im OP'], a: 1, e: 'z. B. beim Absaugen oder bei Erbrechen.' }
    ]},
    { type: 'reflect', title: 'Reflexion', min: 2, prompts: [
      'Wie haben Sie sich beim Üben mit Schutzkleidung gefühlt? Was war schwierig?'
    ]}
  ]
},

/* ================= KAPITEL 5 ================= */
{
  id: 'm5', nr: 5, icon: '🚧', title: 'Isolierung & multiresistente Erreger',
  place: 'Zimmer 4 & 5', badge: { icon: '🛡️', name: 'Kristall des Schildes' },
  boss: { icon: '🦂', name: 'Multiresistenter Skorpion' },
  goal: 'Sie erkennen wichtige Erreger, wählen die passende Isolierung und erklären sie Patienten und Angehörigen.',
  steps: [
    { type: 'story', title: 'Alarm in Zimmer 5', min: 2, lines: [
      { who: 'okafor', text: 'Herr Nowak in Zimmer 5 hat seit einer Stunde heftiges Erbrechen und Durchfall. Ich vermute Noroviren.' },
      { who: 'demir', text: 'Und die Tochter von Frau Schulz steht am Empfang. Sie ist wütend, weil ihre Mutter „eingesperrt“ ist.' },
      { who: 'brandt', text: 'Jetzt müssen Sie schnell und richtig handeln – und gut kommunizieren.' }
    ]},
    { type: 'learn', title: 'Wissen: Erreger & Isolierung', min: 10, cards: [
      { icon: '💊', title: 'Multiresistente Erreger (MRE)', html: `
        <p>Gegen MRE wirken viele Antibiotika nicht mehr.</p>
        <ul><li><b>MRSA</b> – lebt oft in Nase und auf Haut</li><li><b>VRE</b> – Darmbakterien (Enterokokken)</li><li><b>3MRGN / 4MRGN</b> – gramnegative Darmbakterien</li></ul>
        <p><b>Besiedlung</b> = Keime sind da, der Mensch ist gesund. <b>Infektion</b> = der Mensch ist krank.</p>
        <div class="merke">Auch besiedelte Menschen können MRE weitergeben. Basishygiene schützt immer.</div>` },
      { icon: '🤢', title: 'Norovirus & C. difficile', html: `
        <ul>
        <li><b>Norovirus:</b> sehr ansteckend, schon wenige Viren reichen. Übertragung über Kontakt (Hände, Flächen) und Tröpfchen beim Erbrechen.</li>
        <li>→ Einzelzimmer mit eigener Toilette, Kittel, Handschuhe, MNS bei Erbrechen, viruzide Desinfektionsmittel.</li>
        <li><b>Clostridioides difficile:</b> Durchfall, oft nach Antibiotika. Sporen! → Einzelzimmer, eigene Toilette, Hände desinfizieren <b>und</b> waschen, sporozides Flächendesinfektionsmittel.</li></ul>` },
      { icon: '🚪', title: 'Arten der Isolierung', html: `
        <table class="tbl"><tr><th>Art</th><th>Beispiele</th><th>Schutz</th></tr>
        <tr><td>Kontakt</td><td>MRSA, VRE, 4MRGN, Noro, C. difficile</td><td>Kittel, Handschuhe</td></tr>
        <tr><td>Tröpfchen</td><td>Influenza, Keuchhusten, Meningokokken</td><td>MNS, Abstand</td></tr>
        <tr><td>Aerogen</td><td>offene Lungen-TB, Masern, Windpocken</td><td>FFP2, Tür zu</td></tr></table>
        <div class="merke">Isolieren schon beim <b>Verdacht</b> – nicht erst auf das Laborergebnis warten!</div>` },
      { icon: '📋', title: 'Maßnahmen bei Isolierung', html: `
        <ul>
        <li>Einzelzimmer (oder Kohorte mit gleichem Erreger), Tür geschlossen</li>
        <li>Hinweisschild an der Tür – <b>ohne Diagnose</b> (Datenschutz): „Bitte vor Betreten beim Personal melden“</li>
        <li>PSA im Vorraum oder vor dem Zimmer; Abwurf im Zimmer</li>
        <li><b>Patientenbezogene</b> Geräte: Stethoskop, Blutdruckgerät, Thermometer</li>
        <li>Tägliche Flächendesinfektion, am Ende Schlussdesinfektion</li>
        <li>Bei Transport: Zielbereich vorher informieren</li></ul>` },
      { icon: '💬', title: 'Isolierung erleben', html: `
        <p>Isolierte Menschen fühlen sich oft <b>einsam, ängstlich oder schuldig</b>. Manche haben weniger Kontakt mit dem Personal.</p>
        <ul><li>Erklären Sie in <b>einfacher Sprache</b>, warum die Isolierung nötig ist.</li><li>Besuch ist meistens <b>erlaubt</b>. Besucher lernen die Händedesinfektion.</li><li>Nehmen Sie sich Zeit für Gespräche. Klingel in Reichweite!</li></ul>
        <div class="merke">Isolierung schützt andere – sie ist keine Strafe.</div>` }
    ]},
    { type: 'sort', title: 'Welche Isolierung passt?', min: 5,
      intro: 'Ordnen Sie jeden Erreger der wichtigsten Isolierungsart zu.',
      buckets: [{ id: 'k', label: '🤝 Kontakt' }, { id: 't', label: '💦 Tröpfchen' }, { id: 'a', label: '🌬️ Aerogen (Luft)' }],
      items: [
        { t: 'MRSA', b: 'k', e: 'Übertragung vor allem über Hände und Flächen.' },
        { t: 'Influenza (Grippe)', b: 't', e: 'Tröpfchen beim Husten und Niesen.' },
        { t: 'Offene Lungentuberkulose', b: 'a', e: 'Aerosole → FFP2-Maske.' },
        { t: 'Norovirus', b: 'k', e: 'Vor allem Kontakt (plus MNS bei Erbrechen).' },
        { t: 'Masern', b: 'a', e: 'Masern sind extrem ansteckend über die Luft.' },
        { t: 'Clostridioides difficile', b: 'k', e: 'Kontakt – Sporen auf Händen und Flächen.' },
        { t: 'Keuchhusten (Pertussis)', b: 't', e: 'Tröpfchen.' },
        { t: '4MRGN', b: 'k', e: 'Kontakt – Hände und Flächen.' },
        { t: 'Windpocken', b: 'a', e: 'Über die Luft (und Kontakt).' }
      ]},
    { type: 'scenario', title: 'Verdacht auf Noroviren', min: 8,
      intro: 'Herr Nowak (Zimmer 5) hat plötzlich Erbrechen und Durchfall. Handeln Sie schnell und richtig!',
      items: [
        { patient: 'p5', text: 'Herr Nowak liegt in einem Zweibettzimmer. Das Laborergebnis kommt erst morgen. Was tun Sie?',
          options: [
            { t: 'Wir warten auf das Ergebnis, dann entscheiden wir.', fb: 'Bei Verdacht sofort isolieren! Noroviren verbreiten sich extrem schnell.' },
            { t: 'Sofort in ein Einzelzimmer mit eigener Toilette verlegen und Kontaktisolierung beginnen.', ok: true, fb: 'Richtig! Isolieren schon beim Verdacht.' },
            { t: 'Wir stellen einen Vorhang zwischen die Betten.', fb: 'Ein Vorhang stoppt keine Noroviren.' }
          ], harm: { p: 'p1', dmg: 18, text: 'Der Bettnachbar und Herr Becker erkranken an Noroviren. Ein Ausbruch beginnt!' } },
        { patient: 'p5', text: 'Welches Händedesinfektionsmittel nehmen Sie bei Herrn Nowak?',
          options: [
            { t: 'Das normale Mittel – alle Mittel wirken gleich.', fb: 'Nicht jedes Mittel wirkt gegen unbehüllte Viren wie Noroviren.' },
            { t: 'Ein Mittel mit viruzider Wirkung laut Hygieneplan.', ok: true, fb: 'Richtig! Ein Blick auf die Flasche und in den Hygieneplan hilft.' }
          ], harm: { p: 'p6', dmg: 12, text: 'Noroviren bleiben auf Ihren Händen. Frau Hoffmann erkrankt.' } },
        { patient: 'p5', text: 'Herr Nowak muss zum Röntgen. Was ist richtig?',
          options: [
            { t: 'Wir bringen ihn hin und sagen nichts – Datenschutz.', fb: 'Die Röntgenabteilung muss Bescheid wissen, damit sie sich schützt und desinfiziert.' },
            { t: 'Wir informieren die Röntgenabteilung vorher. Herr Nowak bekommt frische Kleidung, desinfiziert die Hände, das Bett wird desinfiziert.', ok: true, fb: 'Perfekt! So bleibt der Transport sicher.' },
            { t: 'Er darf erst nach der Entisolierung zum Röntgen.', fb: 'Nötige Untersuchungen finden statt – mit Schutzmaßnahmen.' }
          ], harm: { p: 'p3', dmg: 10, text: 'Im Röntgen-Warteraum steckt sich Herr Wagner an.' } },
        { patient: 'p5', text: 'Was schreiben Sie auf das Schild an der Zimmertür?',
          options: [
            { t: '„Achtung! NOROVIRUS! Nicht eintreten!“', fb: 'Diagnosen gehören nicht an die Tür (Datenschutz, Stigmatisierung).' },
            { t: '„Bitte melden Sie sich vor dem Betreten beim Pflegepersonal.“ (mit Symbol nach Hausstandard)', ok: true, fb: 'Richtig! Information ohne Diagnose.' }
          ], harm: { p: 'p5', dmg: 8, text: 'Herr Nowak schämt sich. Andere Patienten zeigen auf seine Tür.' } },
        { patient: 'p5', text: 'Sie brauchen ein Blutdruckgerät für Herrn Nowak.',
          options: [
            { t: 'Wir nehmen das Gerät vom Stationswagen und bringen es danach zurück.', fb: 'So wandern Noroviren durch die ganze Station.' },
            { t: 'Ein eigenes Gerät bleibt im Zimmer, bis die Isolierung endet. Danach wird es aufbereitet.', ok: true, fb: 'Richtig! Patientenbezogene Geräte.' }
          ], harm: { p: 'p2', dmg: 12, text: 'Über das Blutdruckgerät erkrankt auch Frau Yilmaz.' } }
      ]},
    { type: 'partner', title: 'Rollenspiel: Gespräch mit Angehörigen', min: 10, minutes: 4, rounds: [
      { task: '{D} spielt die Pflegekraft. {C} spielt die Tochter von Frau Schulz (MRSA).<br><br><b>Rollenkarte Tochter:</b> „Warum ist meine Mutter eingesperrt? Ist sie gefährlich? Darf ich sie nicht mehr umarmen? Das ist doch unmenschlich!“',
        coach: 'Nach dem Gespräch gibt {C} Feedback mit der Checkliste.' },
      { task: 'Rollentausch! {D} spielt die Pflegekraft. {C} spielt Herrn Nowak (Noroviren).<br><br><b>Rollenkarte Herr Nowak:</b> „Mir geht es schon besser. Ich will in die Cafeteria und einen Kaffee trinken. Warum darf ich nicht raus?“',
        coach: 'Nach dem Gespräch gibt {C} Feedback mit der Checkliste.' }
    ],
      checklist: ['Freundlich und ruhig gesprochen, Gefühle ernst genommen', 'Einfache Sprache ohne viele Fachwörter', 'Den Grund der Isolierung erklärt (Schutz für andere)', 'Erklärt, was erlaubt ist (z. B. Besuch, Umarmen mit Händehygiene)', 'Händedesinfektion gezeigt oder erklärt', 'Nachgefragt, ob alles verstanden wurde'],
      solution: `<p><b>Beispiel Tochter:</b> „Ich verstehe, dass Sie sich Sorgen machen. Ihre Mutter trägt einen Keim auf der Haut, gegen den viele Antibiotika nicht wirken. Für Sie als gesunde Person ist er meistens nicht gefährlich. Wir wollen aber andere, schwer kranke Patienten schützen. Sie dürfen Ihre Mutter besuchen und auch umarmen. Bitte desinfizieren Sie danach Ihre Hände – ich zeige es Ihnen. Haben Sie noch Fragen?“</p>
      <p><b>Beispiel Herr Nowak:</b> „Schön, dass es Ihnen besser geht! Die Viren können Sie aber noch einige Zeit ausscheiden, auch wenn Sie keine Beschwerden mehr haben. In der Cafeteria könnten sich andere Menschen anstecken. Ich bringe Ihnen gern einen Kaffee ins Zimmer. Die Ärztin entscheidet, wann die Isolierung endet.“</p>` },
    { type: 'quiz', title: 'Kapitel-Prüfung 5', min: 5, questions: [
      { q: 'Wann beginnt man mit der Isolierung?', o: ['Erst wenn das Labor den Erreger bestätigt', 'Schon beim begründeten Verdacht', 'Nach drei Tagen', 'Wenn der Patient es möchte'], a: 1, e: 'Isolieren beim Verdacht, nicht erst nach dem Laborergebnis.' },
      { q: 'Was bedeutet „MRSA-Besiedlung“?', o: ['Der Patient hat eine schwere Infektion', 'MRSA ist auf der Haut/Schleimhaut, aber der Patient ist nicht krank', 'Der Patient ist geheilt', 'Der Patient hat Grippe'], a: 1, e: 'Besiedlung = Keime vorhanden, keine Krankheitszeichen.' },
      { q: 'Welche Isolierung braucht ein Patient mit Influenza?', o: ['Kontaktisolierung', 'Tröpfchenisolierung', 'Keine', 'Umkehrisolierung'], a: 1, e: 'Grippe wird über Tröpfchen übertragen → MNS, Abstand.' },
      { q: 'Was steht auf dem Türschild bei einer Isolierung?', o: ['Die Diagnose', 'Der Name des Erregers', 'Ein Hinweis, sich beim Personal zu melden', 'Gar nichts'], a: 2, e: 'Datenschutz: keine Diagnose an der Tür.' },
      { q: 'Dürfen Angehörige einen MRSA-Patienten besuchen?', o: ['Nein, nie', 'Ja, mit Händedesinfektion und Anleitung', 'Nur mit FFP3-Maske', 'Nur Kinder'], a: 1, e: 'Besuch ist erlaubt. Händedesinfektion beim Verlassen ist wichtig.' },
      { q: 'Wie fühlen sich isolierte Patienten oft?', o: ['Immer sehr wohl', 'Einsam und ängstlich', 'Gelangweilt, aber nie ängstlich', 'Das ist nicht wichtig'], a: 1, e: 'Isolierung belastet. Gute Kommunikation hilft.' }
    ]},
    { type: 'reflect', title: 'Reflexion', min: 2, prompts: [
      'Stellen Sie sich vor, Sie sind selbst isoliert. Was würden Sie sich von den Pflegekräften wünschen?'
    ]}
  ]
},

/* ================= KAPITEL 6 ================= */
{
  id: 'm6', nr: 6, icon: '🛏️', title: 'Hygiene in der pflegerischen Unterstützung',
  place: 'Zimmer 2, 3 & 6', badge: { icon: '✨', name: 'Kristall der reinen Pflege' },
  boss: { icon: '🕷️', name: 'Katheter-Spinne' },
  goal: 'Sie arbeiten hygienisch bei Körperpflege, Katheter, Verband, Flächen, Wäsche und Abfall.',
  steps: [
    { type: 'story', title: 'Pflege mit System', min: 2, lines: [
      { who: 'demir', text: 'Heute ist viel zu tun: Körperpflege, Katheter, Verband, Betten. Bitte planen Sie Ihre Arbeit gut!' },
      { who: 'brandt', text: 'Merken Sie sich zwei Regeln: Von REIN nach UNREIN arbeiten. Und: Material gehört zu EINEM Patienten.' }
    ]},
    { type: 'learn', title: 'Wissen: Hygienisch pflegen', min: 10, cards: [
      { icon: '🧽', title: 'Körperpflege', html: `
        <ul>
        <li>Arbeiten Sie <b>von rein nach unrein</b>: Gesicht → Oberkörper → Beine → Intimbereich zuletzt.</li>
        <li>Die Waschschüssel ist <b>patientenbezogen</b>, nach Gebrauch desinfizieren und trocken lagern.</li>
        <li>Einmal-Waschlappen oder täglich frische Waschlappen und Handtücher.</li>
        <li>Steckbecken und Urinflaschen im <b>Steckbeckenspülautomaten</b> aufbereiten.</li></ul>` },
      { icon: '💧', title: 'Blasenkatheter', html: `
        <ul>
        <li><b>Geschlossenes System</b> – Katheter und Beutel nicht trennen.</li>
        <li>Beutel immer <b>unter Blasenniveau</b>, aber <b>ohne Bodenkontakt</b>.</li>
        <li>Beutel leeren: Handschuhe, eigenes Gefäß, Ablasshahn nicht berühren, danach Händedesinfektion.</li>
        <li>Urinproben nur an der <b>Probeentnahmestelle</b> nach Desinfektion.</li>
        <li>Jeden Tag prüfen: Ist der Katheter <b>noch nötig</b>?</li></ul>` },
      { icon: '💉', title: 'Venenverweilkanüle & Verband', html: `
        <ul>
        <li>Vor jeder Manipulation: <b>Händedesinfektion</b>.</li>
        <li>Zuspritzstellen vor Benutzung <b>desinfizieren</b>.</li>
        <li>Einstichstelle täglich kontrollieren: Rötung, Schwellung, Schmerz → Arzt informieren.</li>
        <li><b>Verbandwechsel:</b> Händedesinfektion → Handschuhe → alten Verband entfernen → Handschuhe aus, Händedesinfektion → Wunde versorgen in <b>Non-Touch-Technik</b> (steriles Material, sterile Pinzette oder sterile Handschuhe).</li></ul>` },
      { icon: '🧴', title: 'Flächendesinfektion', html: `
        <ul>
        <li><b>Wischdesinfektion</b> statt Sprühen – Sprühen erreicht nicht alles und reizt die Atemwege.</li>
        <li>Richtige <b>Konzentration</b> (Dosierung) und Handschuhe tragen.</li>
        <li>Von <b>sauber nach schmutzig</b> und von <b>oben nach unten</b> wischen.</li>
        <li>Patientennahe Flächen (Nachttisch, Bettgitter, Klingel) <b>täglich</b> desinfizieren.</li>
        <li>Fläche nicht nachtrocknen – das Mittel muss <b>einwirken</b>.</li></ul>` },
      { icon: '🗑️', title: 'Wäsche und Abfall', html: `
        <ul>
        <li>Schmutzwäsche <b>direkt</b> in den Wäschesack – nicht auf den Boden, nicht schütteln, nicht an die eigene Kleidung halten.</li>
        <li>Nasse Wäsche in <b>flüssigkeitsdichte</b> Säcke.</li>
        <li>Spitze und scharfe Gegenstände sofort in den <b>durchstichsicheren Abwurfbehälter</b> (nur bis zur Füllmarke).</li>
        <li>Benutzte Handschuhe, Verbände, Inkontinenzmaterial: in der Regel <b>Restabfall</b> der Station (nach Hausstandard).</li></ul>` }
    ]},
    { type: 'sort', title: 'Abfall & Wäsche sortieren', min: 5,
      intro: 'Wohin gehört das? {D} sortiert, {C} kontrolliert.',
      buckets: [{ id: 'abwurf', label: '🟨 Abwurfbehälter (spitz/scharf)' }, { id: 'rest', label: '🗑️ Restabfall Station' }, { id: 'waesche', label: '🧺 Wäschesack' }],
      items: [
        { t: 'Benutzte Kanüle', b: 'abwurf', e: 'Sofort in den Abwurfbehälter, ohne Schutzkappe!' },
        { t: 'Benutzte Einmalhandschuhe', b: 'rest', e: 'Restabfall.' },
        { t: 'Leere Glasampulle', b: 'abwurf', e: 'Glas kann schneiden → Abwurfbehälter.' },
        { t: 'Verband mit etwas Blut', b: 'rest', e: 'Kleine Mengen Blut → Restabfall der Station.' },
        { t: 'Benutztes Bettlaken', b: 'waesche', e: 'Ohne Schütteln direkt in den Wäschesack.' },
        { t: 'Skalpell / Einmal-Klinge', b: 'abwurf', e: 'Scharf → Abwurfbehälter.' },
        { t: 'Inkontinenzvorlage', b: 'rest', e: 'Restabfall (gut verschlossen).' },
        { t: 'Handtuch des Patienten', b: 'waesche', e: 'Wäschesack.' }
      ]},
    { type: 'quest', id: 'q_wipe', title: 'Video-Quest: Wischdesinfektion am Nachttisch', min: 10, demo: 'wipe',
      intro: 'Sehen Sie sich das Video an. Dann zeigt jede Person an einem Tisch zu Hause die Wischdesinfektion. Die andere Person prüft.',
      practice: 'Material: Tuch, Schüssel mit Wasser (als Ersatz für Desinfektionslösung), Handschuhe. Richten Sie die Kamera auf den Tisch.',
      checklist: ['Händedesinfektion und Handschuhe', 'Gegenstände vom Tisch geräumt', 'Tuch gut getränkt (richtige Lösung/Tuch)', 'Wischen statt Sprühen', 'Von sauber nach schmutzig, von oben nach unten', 'In Bahnen ohne Hin- und Herwischen über bereits gewischte Flächen', 'Griffe und Kanten nicht vergessen', 'Fläche nicht trockengerieben (Einwirkzeit)', 'Handschuhe aus, Hände desinfiziert'] },
    { type: 'scenario', title: 'Pflegerunde Zimmer 2, 3 und 6', min: 8,
      intro: 'Diskutieren Sie jede Situation. Achten Sie auf rein/unrein!',
      items: [
        { patient: 'p2', text: 'Der Urinbeutel von Frau Yilmaz liegt auf dem Boden, weil das Bett tief gestellt ist.',
          options: [
            { t: 'Liegen lassen – Hauptsache, er ist unter Blasenniveau.', fb: 'Vom Boden kommen Keime an den Ablasshahn. Kein Bodenkontakt!' },
            { t: 'Beutel an die Halterung am Bett hängen: unter Blasenniveau, ohne Bodenkontakt.', ok: true, fb: 'Richtig!' },
            { t: 'Beutel aufs Bett legen.', fb: 'Über Blasenniveau fließt Urin zurück in die Blase – Infektionsgefahr!' }
          ], harm: { p: 'p2', dmg: 15, text: 'Frau Yilmaz bekommt eine katheterassoziierte Harnwegsinfektion.' } },
        { patient: 'p2', text: 'Die Ärztin möchte eine Urinprobe von Frau Yilmaz.',
          options: [
            { t: 'Katheter und Beutel trennen und Urin direkt aus dem Katheter nehmen.', fb: 'Das geschlossene System darf nicht geöffnet werden.' },
            { t: 'Urin aus dem Beutel nehmen.', fb: 'Urin im Beutel ist alt und nicht aussagekräftig.' },
            { t: 'Probeentnahmestelle desinfizieren, Einwirkzeit abwarten, Urin dort steril entnehmen.', ok: true, fb: 'Richtig! Das System bleibt geschlossen.' }
          ], harm: { p: 'p2', dmg: 12, text: 'Durch das Öffnen kommen Keime in das System. Fieber!' } },
        { patient: 'p3', text: 'Bei Herrn Wagner ist die Einstichstelle der Venenverweilkanüle gerötet, geschwollen und tut weh.',
          options: [
            { t: 'Etwas Salbe drauf und weiter beobachten.', fb: 'Das sind Entzündungszeichen (Phlebitis). Die Ärztin muss entscheiden – meist wird die Kanüle entfernt.' },
            { t: 'Infusion stoppen, Ärztin informieren und dokumentieren.', ok: true, fb: 'Richtig! Frühes Handeln verhindert eine Sepsis.' }
          ], harm: { p: 'p3', dmg: 18, text: 'Die Entzündung breitet sich aus. Herr Wagner bekommt hohes Fieber – Verdacht auf Sepsis.' } },
        { patient: 'p6', text: 'Verbandwechsel bei Frau Hoffmann. Sie haben den alten Verband mit Handschuhen abgenommen. Was kommt jetzt?',
          options: [
            { t: 'Mit denselben Handschuhen die Wunde reinigen.', fb: 'Die Handschuhe sind kontaminiert. Die Wunde ist eine Eintrittspforte!' },
            { t: 'Handschuhe ausziehen, Hände desinfizieren, Wunde mit sterilem Material in Non-Touch-Technik versorgen.', ok: true, fb: 'Perfekt! So bleibt die Wunde geschützt.' }
          ], harm: { p: 'p6', dmg: 18, text: 'Die OP-Wunde von Frau Hoffmann ist infiziert. Sie muss länger bleiben.' } },
        { patient: 'p3', text: 'Sie möchten den Nachttisch von Herrn Wagner desinfizieren. Tom hat eine Sprühflasche.',
          options: [
            { t: 'Großzügig einsprühen und mit Papier trocken reiben.', fb: 'Sprühen erreicht nicht alle Stellen, und Trockenreiben stoppt die Einwirkung.' },
            { t: 'Mit getränktem Tuch wischen, von sauber nach schmutzig, nicht trockenreiben.', ok: true, fb: 'Richtig – Wischdesinfektion.' }
          ], harm: { p: 'p3', dmg: 8, text: 'Keime bleiben auf dem Nachttisch. Herr Wagner berührt ihn ständig.' } },
        { patient: 'p1', text: 'Beim Bettenmachen bei Herrn Becker möchten Sie das schmutzige Laken schnell loswerden.',
          options: [
            { t: 'Laken ausschütteln und auf den Boden legen, später einsammeln.', fb: 'Schütteln verteilt Keime in der Luft, der Boden ist kontaminiert.' },
            { t: 'Laken vorsichtig einrollen, nicht schütteln, direkt in den Wäschesack.', ok: true, fb: 'Genau richtig!' }
          ], harm: { p: 'p1', dmg: 8, text: 'Keime aus dem Laken verteilen sich im Zimmer.' } }
      ]},
    { type: 'quiz', title: 'Kapitel-Prüfung 6', min: 5, questions: [
      { q: 'Wo hängt der Urinbeutel eines Blasenkatheters?', o: ['Auf dem Bett', 'Unter Blasenniveau ohne Bodenkontakt', 'Auf dem Boden', 'Über dem Kopf'], a: 1, e: 'Unter Blasenniveau, aber nicht auf dem Boden.' },
      { q: 'In welcher Reihenfolge waschen Sie einen Patienten?', o: ['Intimbereich zuerst', 'Von rein nach unrein, Intimbereich zuletzt', 'Egal', 'Füße zuerst'], a: 1, e: 'Von rein nach unrein.' },
      { q: 'Wie desinfiziert man Flächen richtig?', o: ['Sprühen und trockenreiben', 'Wischdesinfektion, nicht trockenreiben', 'Mit heißem Wasser', 'Nur einmal pro Woche'], a: 1, e: 'Wischen ist sicherer als Sprühen. Einwirkzeit beachten.' },
      { q: 'Wohin kommt eine benutzte Kanüle?', o: ['Restabfall', 'Mit Schutzkappe in den Restabfall', 'Sofort in den durchstichsicheren Abwurfbehälter', 'Wäschesack'], a: 2, e: 'Kein Recapping! Direkt in den Abwurfbehälter.' },
      { q: 'Die Einstichstelle der Venenverweilkanüle ist rot und geschwollen. Was tun Sie?', o: ['Nichts', 'Ärztin informieren und dokumentieren', 'Kühlen und weitermachen', 'Pflaster drauf'], a: 1, e: 'Zeichen einer Entzündung → ärztliche Entscheidung.' },
      { q: 'Wie gehen Sie mit schmutziger Wäsche um?', o: ['Ausschütteln', 'Auf den Boden legen', 'Direkt in den Wäschesack, nicht schütteln', 'Am Körper tragen'], a: 2, e: 'Keine Keimverteilung durch Schütteln.' }
    ]},
    { type: 'reflect', title: 'Reflexion', min: 2, prompts: [
      'Welche Hygieneregel bei der Körperpflege oder beim Katheter wollen Sie in Ihrem nächsten Praxiseinsatz besonders beachten?'
    ]}
  ]
},

/* ================= KAPITEL 7 ================= */
{
  id: 'm7', nr: 7, icon: '🦺', title: 'Selbstschutz & Hygiene unter Zeitdruck',
  place: 'Stationszimmer – Nachtdienst', badge: { icon: '💪', name: 'Kristall der Selbstfürsorge' },
  boss: { icon: '🗡️', name: 'Nadel-Phantom' },
  goal: 'Sie schützen sich selbst, handeln richtig bei einer Nadelstichverletzung und sprechen Hygienefehler im Team an.',
  steps: [
    { type: 'story', title: 'Nachtdienst – zu wenig Zeit', min: 2, lines: [
      { who: 'tom', text: 'Heute Nacht sind wir nur zu zweit für 28 Patienten. Für Hygiene haben wir keine Zeit!' },
      { who: 'demir', text: 'Ich weiß, die Situation ist schwer. Aber Hygiene ist nicht verhandelbar. Gemeinsam finden wir Lösungen.' },
      { who: 'brandt', text: 'Und vergessen Sie nicht: Sie müssen auch SICH schützen. Sie sind wichtig!' }
    ]},
    { type: 'learn', title: 'Wissen: Selbstschutz', min: 9, cards: [
      { icon: '🩸', title: 'Nadelstichverletzung (NSV)', html: `
        <p>Über Blut können <b>Hepatitis B, Hepatitis C und HIV</b> übertragen werden.</p>
        <ol><li><b>Blutung fördern:</b> Wunde ausbluten lassen (Druck auf das umliegende Gewebe, nicht direkt auf den Stich), ca. 1 Minute</li><li><b>Desinfizieren:</b> großzügig mit Hautantiseptikum</li><li><b>Melden:</b> sofort Vorgesetzte informieren, zum Durchgangsarzt / Betriebsarzt (Arbeitsunfall)</li><li><b>Dokumentieren:</b> Verbandbuch / Unfallanzeige; Blutuntersuchung beim Indexpatienten (mit Einwilligung)</li></ol>
        <div class="merke">Schnell sein! Eine HIV-Prophylaxe wirkt am besten in den ersten 2 Stunden.</div>` },
      { icon: '🛡️', title: 'Sicher arbeiten', html: `
        <ul>
        <li><b>Kein Recapping</b> – nie die Kappe wieder auf die Kanüle stecken.</li>
        <li><b>Sicherheitsprodukte</b> benutzen (Kanülen mit Schutzmechanismus).</li>
        <li><b>Abwurfbehälter</b> mitnehmen und nur bis zur Füllmarke füllen.</li>
        <li>Essen und Trinken nur im <b>Pausenraum</b>, nicht im Arbeitsbereich.</li>
        <li>Grundlage ist u. a. die <b>TRBA 250</b> (Technische Regel für biologische Arbeitsstoffe im Gesundheitswesen).</li></ul>` },
      { icon: '💉', title: 'Impfungen für Pflegende', html: `
        <ul><li><b>Hepatitis B</b></li><li><b>Masern</b> (Nachweis ist gesetzlich vorgeschrieben)</li><li><b>Influenza</b> – jedes Jahr</li><li>Keuchhusten, Windpocken (bei fehlendem Schutz), Tetanus/Diphtherie</li></ul>
        <p>Die <b>Betriebsärztin</b> berät Sie und prüft Ihren Impfschutz.</p>
        <div class="merke">Wer krank ist (z. B. Durchfall, Fieber), soll keine Patienten versorgen und meldet sich krank.</div>` },
      { icon: '⚖️', title: 'Ideal vs. Wirklichkeit', html: `
        <p>Oft gibt es <b>zu wenig Zeit oder Personal</b>. Trotzdem gilt: Hygiene schützt Leben.</p>
        <ul>
        <li><b>Planen:</b> Material vorher richten, Arbeitsabläufe bündeln.</li>
        <li><b>Ansprechen:</b> Fehler freundlich in Ich-Botschaften ansprechen: „Ich habe gesehen … Ich mache mir Sorgen, weil …“</li>
        <li><b>Melden:</b> Personalmangel und fehlendes Material der Leitung melden (Überlastungsanzeige, Fehlermeldesystem / CIRS).</li>
        <li><b>Selbstfürsorge:</b> Pausen machen, Unterstützung annehmen.</li></ul>` }
    ]},
    { type: 'order', title: 'Rätsel: Sofortmaßnahmen bei Nadelstich', min: 3,
      intro: 'Bringen Sie die Schritte nach einer Nadelstichverletzung in die richtige Reihenfolge.',
      items: ['Blutung fördern (ca. 1 Minute)', 'Großzügig desinfizieren (Hautantiseptikum)', 'Vorgesetzte informieren', 'Sofort zum Durchgangsarzt / Betriebsarzt', 'Unfall dokumentieren (Verbandbuch / Unfallanzeige)'] },
    { type: 'quest', id: 'q_nsv', title: 'Video-Quest: Notfallplan Nadelstich', min: 8, demo: 'nsv',
      intro: 'Sehen Sie sich das Video an. Danach spielt jede Person die Situation vor: „Ich habe mich gerade gestochen!“ – und zeigt und erklärt alle Schritte laut.',
      practice: 'Material: Kugelschreiber als „Kanüle“, ein Becher als Abwurfbehälter.',
      checklist: ['Kanüle sofort in den Abwurfbehälter (kein Recapping)', 'Blutung gefördert (Druck auf das Gewebe um die Wunde)', 'Desinfektion mit Hautantiseptikum genannt', 'Vorgesetzte informiert', 'Durchgangsarzt / Betriebsarzt genannt – schnell (wegen HIV-Prophylaxe)', 'Dokumentation genannt', 'Ruhig und strukturiert gehandelt'] },
    { type: 'scenario', title: 'Eine anstrengende Nacht', min: 7,
      intro: 'Es ist 2 Uhr nachts. Besprechen Sie jede Situation gut.',
      items: [
        { patient: 'p3', text: 'Sie haben Herrn Wagner Insulin gespritzt. Der Abwurfbehälter steht im Stationszimmer. Tom sagt: „Einfach die Kappe wieder draufstecken, dann ist es sicher.“',
          options: [
            { t: 'Kappe vorsichtig mit zwei Händen aufstecken.', fb: 'Recapping ist eine der häufigsten Ursachen für Stichverletzungen!' },
            { t: 'Kein Recapping: Den Sicherheitsmechanismus der Kanüle auslösen und sofort entsorgen. Beim nächsten Mal den Abwurfbehälter mitnehmen.', ok: true, fb: 'Richtig! Sicherheitsprodukte nutzen, Abwurfbehälter immer dabei.' }
          ], harm: { p: 'p3', dmg: 10, text: 'Sie haben sich gestochen. Während Sie versorgt werden, wartet Herr Wagner auf seine Infusion.' } },
        { patient: 'p1', text: 'Tom isst sein Brötchen am Arbeitsplatz neben den Medikamenten und Blutproben.',
          options: [
            { t: 'Wir sagen nichts, er hatte keine Pause.', fb: 'Essen im Arbeitsbereich ist eine Infektionsgefahr für Tom selbst.' },
            { t: 'Wir sagen: „Tom, machen Sie bitte eine kurze Pause im Pausenraum – ich übernehme die Klingel.“', ok: true, fb: 'Super! Kollegial und mit Lösung.' }
          ], harm: { p: 'p1', dmg: 5, text: 'Tom bekommt Durchfall und fällt morgen aus – der Dienst wird noch enger.' } },
        { patient: 'p6', text: 'Tom geht von Zimmer zu Zimmer, ohne die Hände zu desinfizieren. Er sagt: „Keine Zeit!“',
          options: [
            { t: 'Wir machen es wie Tom, damit wir schneller sind.', fb: 'Weniger Hygiene = mehr Infektionen = noch mehr Arbeit.' },
            { t: 'Wir sprechen ihn mit einer Ich-Botschaft an und schlagen eine Kitteltaschen-Flasche mit Desinfektionsmittel vor.', ok: true, fb: 'Perfekt! Ansprechen und praktische Lösungen finden.' },
            { t: 'Wir sagen es morgen heimlich der Leitung.', fb: 'Zuerst direkt und kollegial ansprechen. Die Leitung informieren, wenn es nicht besser wird.' }
          ], harm: { p: 'p6', dmg: 15, text: 'Frau Hoffmanns Wunde wird infiziert.' } },
        { patient: 'p4', text: 'Der Abwurfbehälter in Zimmer 4 ist bis oben voll. Tom drückt noch eine Kanüle hinein.',
          options: [
            { t: 'Wir drücken mit, damit noch mehr hineinpasst.', fb: 'Lebensgefahr! Volle Behälter verursachen Stichverletzungen.' },
            { t: 'Stopp! Behälter ab der Füllmarke verschließen und einen neuen holen.', ok: true, fb: 'Richtig – nur bis zur Füllmarke füllen.' }
          ], harm: { p: 'p4', dmg: 8, text: 'Eine Kanüle sticht heraus. Ein Kollege verletzt sich.' } },
        { patient: 'p5', text: 'Am nächsten Morgen haben Sie selbst Durchfall und Bauchkrämpfe. Sie möchten trotzdem arbeiten, weil das Team so klein ist.',
          options: [
            { t: 'Ich arbeite – mit Handschuhen geht das schon.', fb: 'Mit Durchfall können Pflegende Noroviren auf viele Patienten übertragen.' },
            { t: 'Ich melde mich krank und informiere die Station. Bei Verdacht auf Noroviren auch den Betriebsarzt.', ok: true, fb: 'Richtig! Selbstfürsorge schützt auch die Patienten.' }
          ], harm: { p: 'p2', dmg: 15, text: 'Noroviren wurden eingeschleppt. Frau Yilmaz und zwei weitere Patienten erkranken.' } }
      ]},
    { type: 'partner', title: 'Dilemma-Diskussion: Hygiene vs. Zeitdruck', min: 8, minutes: 5, rounds: [
      { task: 'Diskutieren Sie zusammen: Sie sind im Nachtdienst zu zweit für 28 Patienten. Eine Kollegin sagt: „Händedesinfektion bei jedem Patienten? Das schafft keiner!“<br><br>1. Was fühlen Sie in dieser Situation?<br>2. Welche Folgen hat weniger Hygiene für die Patienten – und für Sie?<br>3. Finden Sie 3 konkrete Lösungen.<br><br>{D} schreibt Ihre Lösungen auf.',
        coach: '{C} achtet darauf, dass beide Meinungen gehört werden.' },
      { task: 'Rollenspiel: {D} spricht die Kollegin mit einer Ich-Botschaft an. {C} spielt die gestresste Kollegin.',
        coach: '{C} gibt danach Feedback: War es respektvoll? Gab es eine Lösung?' }
    ],
      checklist: ['Beide Partner haben ihre Meinung gesagt', 'Folgen für Patienten genannt (z. B. Infektionen, Sepsis)', 'Folgen für Pflegende genannt (z. B. Eigeninfektion, mehr Arbeit)', 'Mindestens 3 Lösungen gefunden', 'Ich-Botschaft benutzt, respektvoll angesprochen'],
      solution: `<p><b>Mögliche Lösungen:</b> Desinfektionsmittel in der Kitteltasche; Arbeitsabläufe bündeln (Material vorher richten); Händedesinfektion dauert nur 30 Sekunden – eine Infektion kostet Wochen; Überlastungsanzeige an die Leitung; Hilfe von anderen Stationen anfordern; Fehler im CIRS melden; Pausen einhalten.</p>
      <p><b>Ich-Botschaft:</b> „Ich habe gesehen, dass Sie sich zwischen den Zimmern nicht die Hände desinfiziert haben. Ich mache mir Sorgen um Frau Hoffmann, sie hat eine frische Wunde. Wollen wir uns kleine Flaschen für die Kitteltasche holen?“</p>` },
    { type: 'quiz', title: 'Kapitel-Prüfung 7', min: 4, questions: [
      { q: 'Was tun Sie nach einer Nadelstichverletzung zuerst?', o: ['Wunde zukleben', 'Blutung fördern und desinfizieren', 'Weiterarbeiten', 'Bis zum Dienstende warten'], a: 1, e: 'Sofortmaßnahmen: Blutung fördern, desinfizieren, dann melden und zum Arzt.' },
      { q: 'Was ist „Recapping“?', o: ['Neue Handschuhe anziehen', 'Schutzkappe zurück auf die benutzte Kanüle stecken', 'Hände eincremen', 'Abfall trennen'], a: 1, e: 'Recapping ist verboten – hohes Verletzungsrisiko.' },
      { q: 'Welche Impfung ist für Pflegende wegen Blutkontakt besonders wichtig?', o: ['Gelbfieber', 'Hepatitis B', 'Tollwut', 'Cholera'], a: 1, e: 'Hepatitis B wird über Blut übertragen.' },
      { q: 'Wo dürfen Sie im Dienst essen?', o: ['Im Stationszimmer am Medikamententisch', 'Im Patientenzimmer', 'Im Pausenraum', 'Überall'], a: 2, e: 'Essen und Trinken nur in Pausenräumen.' },
      { q: 'Eine Kollegin desinfiziert ihre Hände nicht. Was ist professionell?', o: ['Nichts sagen', 'Sie laut vor Patienten kritisieren', 'Freundlich mit einer Ich-Botschaft ansprechen', 'Ihr die Hände festhalten'], a: 2, e: 'Respektvoll und direkt ansprechen.' }
    ]},
    { type: 'reflect', title: 'Reflexion', min: 2, prompts: [
      'Was tun Sie, wenn Sie im Praxiseinsatz zu wenig Zeit für Hygiene haben? Wer kann Sie unterstützen?'
    ]}
  ]
},

/* ================= KAPITEL 8 ================= */
{
  id: 'm8', nr: 8, icon: '🏆', title: 'Finale: Die große Hygiene-Begehung',
  place: 'Gesamte Station 3B', badge: { icon: '👑', name: 'Krone der Hygiene' },
  boss: { icon: '👑', name: 'Der Keim-König (Endgegner)' },
  goal: 'Sie zeigen Ihr Wissen in einem großen Gesamtfall, simulieren die Kenntnisprüfung und bestehen den Abschlusstest – jede Person für sich.',
  steps: [
    { type: 'story', title: 'Der Endgegner erwacht', min: 2, lines: [
      { who: 'brandt', text: 'Heute ist die jährliche Hygiene-Begehung auf Station 3B. Und der Keim-König persönlich greift an – auf allen Zimmern gleichzeitig!' },
      { who: 'demir', text: 'Sie haben so viel gelernt, {A} und {B}. Zeigen Sie jetzt, dass Sie echte Hygiene-Profis sind!' },
      { who: 'brandt', text: 'Am Ende schreibt jede Person allein den Abschlusstest. Wer besteht, erhält die Teilnahmebescheinigung.' }
    ]},
    { type: 'scenario', title: 'Endkampf: Ein Tag auf Station 3B', min: 12,
      intro: 'Alle Patienten brauchen Sie. Nutzen Sie Ihr ganzes Wissen. Wechseln Sie sich beim Entscheiden ab.',
      items: [
        { patient: 'p1', text: '7:00 Uhr. Sie betreten Zimmer 1 zur Morgenpflege. Herr Becker hustet und hat Fieber. Influenza-Schnelltest: positiv. Was tun Sie zuerst?',
          options: [
            { t: 'Händedesinfektion, MNS aufsetzen, Ärztin informieren, Tröpfchenisolierung nach Hygieneplan einleiten.', ok: true, fb: 'Sehr gut! Selbstschutz und Schutz der anderen.' },
            { t: 'Weiter wie bisher – Grippe ist harmlos.', fb: 'Influenza kann für alte Menschen lebensgefährlich sein und verbreitet sich über Tröpfchen.' },
            { t: 'FFP2-Maske, Schutzanzug, Tür abschließen.', fb: 'Übertrieben und angsteinflößend. Für Influenza reicht in der Regel der MNS plus Basishygiene.' }
          ], harm: { p: 'p1', dmg: 12, text: 'Die Grippe verbreitet sich. Zwei Patienten im Nachbarzimmer erkranken.' } },
        { patient: 'p2', text: '8:30 Uhr. Frau Yilmaz hat seit 6 Tagen einen Blasenkatheter. Sie kann wieder gut zur Toilette gehen.',
          options: [
            { t: 'Der Katheter bleibt – das ist bequemer.', fb: 'Jeder Tag mit Katheter erhöht das Infektionsrisiko.' },
            { t: 'Wir sprechen mit der Ärztin: Ist der Katheter noch nötig? Möglichst früh entfernen.', ok: true, fb: 'Genau! Täglich prüfen, ob der Katheter noch nötig ist.' }
          ], harm: { p: 'p2', dmg: 12, text: 'Frau Yilmaz bekommt eine Harnwegsinfektion.' } },
        { patient: 'p3', text: '9:15 Uhr. Herr Wagner braucht ein Antibiotikum über die Venenverweilkanüle. Was ist richtig?',
          options: [
            { t: 'Händedesinfektion, Zuspritzstelle desinfizieren, Einwirkzeit abwarten, dann anschließen.', ok: true, fb: 'Perfekt aseptisch!' },
            { t: 'Zuspritzstelle mit dem Handschuh abwischen und anschließen.', fb: 'Abwischen ist keine Desinfektion.' },
            { t: 'Direkt anschließen – das Antibiotikum tötet ja Keime.', fb: 'Antibiotika ersetzen keine Hygiene. Keime gelangen sonst ins Blut.' }
          ], harm: { p: 'p3', dmg: 15, text: 'Herr Wagner bekommt eine Katheter-Sepsis.' } },
        { patient: 'p4', text: '10:00 Uhr. Frau Schulz (MRSA) soll zur Physiotherapie.',
          options: [
            { t: 'Physiotherapie informieren, Hygieneplan beachten, Frau Schulz desinfiziert die Hände und trägt frische Kleidung.', ok: true, fb: 'Richtig! Information und Basishygiene. Die Teilnahme ist mit Schutzmaßnahmen möglich – je nach Hygieneplan.' },
            { t: 'Wir sagen nichts – sonst darf sie vielleicht nicht teilnehmen.', fb: 'Die Physiotherapie muss informiert werden, um alle zu schützen.' }
          ], harm: { p: 'p4', dmg: 10, text: 'Im Therapiebereich werden zwei Patienten mit MRSA besiedelt.' } },
        { patient: 'p5', text: '11:30 Uhr. Herr Nowak (Noroviren) wird entisoliert und verlegt. Was passiert mit seinem Zimmer?',
          options: [
            { t: 'Bett frisch beziehen, fertig.', fb: 'Noroviren überleben lange auf Flächen.' },
            { t: 'Schlussdesinfektion mit einem viruziden Mittel – Flächen, Geräte, Sanitärbereich. Material entsorgen oder aufbereiten.', ok: true, fb: 'Richtig! Erst danach kommt ein neuer Patient.' }
          ], harm: { p: 'p6', dmg: 15, text: 'Die nächste Patientin in diesem Zimmer erkrankt an Noroviren.' } },
        { patient: 'p6', text: '12:00 Uhr. Frau Hoffmann soll entlassen werden. Sie fragt: „Wie soll ich zu Hause mit der Wunde umgehen?“',
          options: [
            { t: '„Einfach waschen wie immer.“', fb: 'Zu ungenau. Die Patientin anzuleiten ist Teil der Pflege.' },
            { t: 'Wir erklären einfach: vor dem Berühren Hände waschen, Pflaster trocken halten, bei Rötung, Schmerz oder Fieber zum Arzt.', ok: true, fb: 'Prima! Klar und in einfacher Sprache.' }
          ], harm: { p: 'p6', dmg: 10, text: 'Zu Hause infiziert sich die Wunde von Frau Hoffmann.' } },
        { patient: 'p3', text: '13:30 Uhr. Herr Brandt fragt Sie: „Warum desinfizieren Sie die Hände, statt sie zu waschen?“',
          options: [
            { t: '„Desinfektion wirkt schneller und besser gegen Keime und schont die Haut mehr als häufiges Waschen.“', ok: true, fb: 'Richtig! Herr Brandt nickt zufrieden.' },
            { t: '„Weil Waschen zu lange dauert.“', fb: 'Das ist nur ein kleiner Teil der Wahrheit.' }
          ], harm: { p: 'p3', dmg: 5, text: 'Herr Brandt notiert eine Wissenslücke.' } }
      ]},
    { type: 'partner', title: 'Prüfungssimulation: Mündliche Kenntnisprüfung', min: 12, minutes: 5, rounds: [
      { task: '{C} ist Prüfer:in und stellt diese Fragen. {D} antwortet frei, ohne Notizen:<br><br>1. Was ist eine nosokomiale Infektion? Nennen Sie Beispiele.<br>2. Nennen Sie die 5 Momente der Händedesinfektion.<br>3. Wie gehen Sie mit einem MRSA-Patienten um?<br>4. Was tun Sie nach einer Nadelstichverletzung?',
        coach: '{C} bewertet mit der Checkliste und gibt danach Feedback.' },
      { task: 'Rollentausch. {C} ist Prüfer:in und fragt:<br><br>1. Erklären Sie die Infektionskette.<br>2. In welcher Reihenfolge legen Sie Schutzkleidung ab?<br>3. Was ist bei einem Blasenkatheter hygienisch wichtig?<br>4. Wie erklären Sie einem Angehörigen die Isolierung?',
        coach: '{C} bewertet mit der Checkliste und gibt danach Feedback.' }
    ],
      checklist: ['Fachlich richtige Antworten', 'Begründungen gegeben („weil …“)', 'Fachwörter richtig verwendet', 'Verständlich und strukturiert gesprochen', 'Bei Unsicherheit nachgefragt oder ehrlich gesagt'],
      solution: `<p><b>Tipps für die Kenntnisprüfung:</b> Antworten Sie in ganzen Sätzen. Begründen Sie immer: „Ich mache das, weil …“. Nennen Sie Beispiele aus der Praxis. Wenn Sie eine Frage nicht verstehen, fragen Sie nach: „Können Sie die Frage bitte wiederholen?“</p>
      <p>Alle Antworten finden Sie in den Wissenskarten der Kapitel 1–7. Lesen Sie Unsicheres dort noch einmal nach.</p>` },
    { type: 'finaltest', title: 'Abschlusstest (Einzelprüfung)', min: 12, count: 15 },
    { type: 'reflect', title: 'Mein Lernvertrag für die Praxis', min: 3, prompts: [
      'Diese 3 Hygieneregeln setze ich im nächsten Praxiseinsatz sicher um:',
      'Darüber spreche ich mit meiner Praxisanleitung (z. B. bei der Praxislernaufgabe Händedesinfektion):'
    ]}
  ]
}
];

/* Zusätzliche Fragen für den Abschlusstest (werden mit allen Kapitelfragen gemischt) */
window.HQ_FINAL_EXTRA = [
  { q: 'Welche Aussage zur Basishygiene ist richtig?', o: ['Sie gilt nur bei bekannten Infektionen.', 'Sie gilt bei jedem Patienten.', 'Sie gilt nur auf der Intensivstation.', 'Sie gilt nur für Ärzte.'], a: 1, e: 'Basishygiene gilt immer und bei allen.' },
  { q: 'Welche Einrichtung gibt in Deutschland Empfehlungen zur Krankenhaushygiene heraus?', o: ['KRINKO am Robert Koch-Institut', 'Die Krankenkasse', 'Der Pflegedienst', 'Die Polizei'], a: 0, e: 'Die KRINKO am RKI.' },
  { q: 'Sie haben Desinfektionsmittel auf die Hände gegeben. Nach 15 Sekunden sind sie trocken. Was tun Sie?', o: ['Fertig', 'Noch einmal Mittel nehmen und weiter einreiben, bis 30 Sekunden erreicht sind', 'Hände waschen', 'Handschuhe anziehen'], a: 1, e: 'Die Hände müssen die ganze Einwirkzeit feucht sein.' },
  { q: 'Warum sind künstliche Fingernägel verboten?', o: ['Sie sehen unprofessionell aus', 'Unter ihnen sammeln sich viele Keime', 'Sie sind zu teuer', 'Sie sind nicht verboten'], a: 1, e: 'Künstliche Nägel sind ein Keimreservoir.' },
  { q: 'Was gehört NICHT zur persönlichen Schutzausrüstung?', o: ['Schutzkittel', 'Einmalhandschuhe', 'FFP2-Maske', 'Armbanduhr'], a: 3, e: 'Eine Uhr ist Schmuck und im Dienst nicht erlaubt.' },
  { q: 'Ein Patient hat Masern. Welche Isolierung ist nötig?', o: ['Keine', 'Kontakt', 'Aerogen mit FFP2-Maske', 'Nur Händewaschen'], a: 2, e: 'Masern werden über die Luft übertragen.' },
  { q: 'Wie oft desinfiziert man patientennahe Flächen?', o: ['Einmal im Monat', 'Täglich (und bei Verschmutzung)', 'Nur bei Entlassung', 'Nie'], a: 1, e: 'Patientennahe Flächen täglich und bei Kontamination.' },
  { q: 'Was ist das Ziel der Hautpflege bei Pflegenden?', o: ['Schöne Hände', 'Die Haut als Barriere gegen Keime gesund halten', 'Desinfektion ersetzen', 'Handschuhe ersetzen'], a: 1, e: 'Intakte Haut schützt vor Keimen und vor Hauterkrankungen.' }
];
