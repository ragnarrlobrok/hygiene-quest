/* ============================================================
   HYGIENE-QUEST – Animierte Lehrvideos (ohne externe Dateien)
   ============================================================ */
(function () {
  const SKIN = '#f1c7a5', SKIN2 = '#e3ad86', GLOVE = '#5aa9ff', GLOVE2 = '#3b8be8';

  // Eine rechte Hand (Finger nach oben), ca. 100 x 170
  function hand(fill, stroke, opts) {
    opts = opts || {};
    const nails = opts.back ? `
      <rect x="22.5" y="24" width="8" height="7" rx="3" fill="#fbe3d4" opacity=".9"/>
      <rect x="37.5" y="12" width="8" height="7" rx="3" fill="#fbe3d4" opacity=".9"/>
      <rect x="52.5" y="18" width="8" height="7" rx="3" fill="#fbe3d4" opacity=".9"/>
      <rect x="66" y="34" width="8" height="6" rx="3" fill="#fbe3d4" opacity=".9"/>` : '';
    const wet = opts.wet ? `<g class="glisten">
      <circle cx="40" cy="100" r="3" fill="#fff"/><circle cx="58" cy="115" r="2" fill="#fff"/>
      <circle cx="42" cy="40" r="2" fill="#fff"/><circle cx="62" cy="60" r="2.5" fill="#fff"/></g>` : '';
    return `<g fill="${fill}" stroke="${stroke}" stroke-width="2">
      <rect x="30" y="140" width="40" height="32" rx="8"/>
      <rect x="20" y="22" width="13" height="64" rx="6.5"/>
      <rect x="35" y="10" width="13" height="74" rx="6.5"/>
      <rect x="50" y="16" width="13" height="68" rx="6.5"/>
      <rect x="64" y="32" width="12" height="54" rx="6"/>
      <rect x="18" y="70" width="62" height="80" rx="22"/>
      <rect x="76" y="80" width="14" height="46" rx="7" transform="rotate(-36 83 122)"/>
    </g>${nails}${wet}`;
  }
  const H = (f, s, o) => hand(f || SKIN, s || SKIN2, o);
  const G = (o) => hand(GLOVE, GLOVE2, o);
  const mirror = (inner, x, y, s) => `<g transform="translate(${x},${y}) scale(${-(s || 1)},${s || 1})">${inner}</g>`;
  const place = (inner, x, y, s, r) => `<g transform="translate(${x},${y}) scale(${s || 1}) rotate(${r || 0})">${inner}</g>`;
  const svg = (inner) => `<svg viewBox="0 0 320 230" class="demo-svg" aria-hidden="true">
    <defs><radialGradient id="bgG" cx="50%" cy="45%" r="70%"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dff3f1"/></radialGradient></defs>
    <rect width="320" height="230" fill="url(#bgG)"/>${inner}</svg>`;

  const scenes = {
    dispense: () => svg(`
      <rect x="125" y="8" width="70" height="70" rx="10" fill="#fff" stroke="#7aa" stroke-width="2"/>
      <rect x="140" y="20" width="40" height="30" rx="4" fill="#cdeee9"/><text x="160" y="40" font-size="11" text-anchor="middle" fill="#277">DESI</text>
      <rect x="150" y="78" width="20" height="10" rx="2" fill="#7aa"/>
      <rect x="190" y="40" width="40" height="10" rx="5" fill="#7aa" class="a-push"/>
      <circle cx="160" cy="100" r="5" fill="#8fd3ff" class="a-drop"/>
      ${place(H(), 105, 210, .8, -90)}
      <text x="250" y="60" font-size="26" class="a-pulse">💪</text>
      <text x="236" y="88" font-size="10" fill="#355">Ellenbogen</text>`),
    palms: () => svg(`${place(H(), 108, 25, 1)}<g class="a-rubx">${mirror(H(SKIN, '#c98d66', { wet: true }), 212, 35, 1)}</g>`),
    backs: () => svg(`${place(H('#eab896', SKIN2, { back: true }), 110, 25)}<g class="a-ruby">${mirror(H(SKIN, '#c98d66', { wet: true }), 205, 45, .95)}</g>
      <text x="16" y="210" font-size="12" fill="#355">… dann Hände wechseln</text>`),
    interlace: () => svg(`${place(H(), 110, 25)}<g class="a-ruby-s">${mirror(H(SKIN, '#c98d66', { wet: true }), 216, 30, 1)}</g>`),
    fingerbacks: () => svg(`<g class="a-wobble" style="transform-origin:160px 115px">${place(H(), 60, 170, .85, -90)}${place(mirror(H(SKIN, '#c98d66', { back: true }), 0, 0, .85), 262, 60, 1, 90)}</g>`),
    thumb: () => svg(`${place(H(), 105, 25)}
      <g class="a-orbit" style="transform-origin:190px 128px"><rect x="168" y="98" width="52" height="62" rx="24" fill="${SKIN}" stroke="#c98d66" stroke-width="2"/>
      <rect x="172" y="104" width="44" height="12" rx="6" fill="none" stroke="#c98d66" stroke-width="1.5"/></g>
      <text x="230" y="60" font-size="12" fill="#355">Daumen</text><path d="M228 64 L198 100" stroke="#355" stroke-width="1.5" marker-end="url(#)"/>`),
    tips: () => svg(`${place(H(), 108, 25)}
      <g class="a-circle" style="transform-origin:157px 110px"><g transform="translate(130,85)">
      <rect x="0" y="0" width="12" height="34" rx="6" fill="${SKIN}" stroke="#c98d66" stroke-width="2"/>
      <rect x="13" y="-4" width="12" height="38" rx="6" fill="${SKIN}" stroke="#c98d66" stroke-width="2"/>
      <rect x="26" y="-2" width="12" height="36" rx="6" fill="${SKIN}" stroke="#c98d66" stroke-width="2"/>
      <rect x="39" y="4" width="11" height="30" rx="5.5" fill="${SKIN}" stroke="#c98d66" stroke-width="2"/></g></g>
      <text x="215" y="210" font-size="12" fill="#355">Fingerkuppen kreisen</text>`),
    dry: () => svg(`${place(H(SKIN, SKIN2), 40, 30)}${mirror(H(SKIN, SKIN2), 280, 30, 1)}
      <text x="140" y="60" font-size="26" class="a-twinkle">✨</text><text x="160" y="200" font-size="34" text-anchor="middle" class="a-pop">✅</text>
      <text x="160" y="125" font-size="12" text-anchor="middle" fill="#355">an der Luft trocknen</text>`),
    // --- Handschuhe
    gloveOn: () => svg(`${place(H(), 110, 25)}<g class="a-grow" style="transform-origin:160px 197px">${place(G(), 110, 25)}</g>
      <text x="245" y="200" font-size="12" fill="#355">nur am Bund</text>`),
    glovePinch: () => svg(`${place(G(), 70, 25)}${mirror(G(), 260, 40, .9)}
      <circle cx="120" cy="175" r="12" fill="none" stroke="#e44" stroke-width="3" class="a-pulse"/>
      <text x="150" y="215" font-size="12" fill="#355">außen am Handgelenk greifen</text>`),
    glovePeel: () => svg(`${place(H(), 110, 25)}<g class="a-shrink" style="transform-origin:160px 0px">${place(G(), 110, 25)}</g>
      <text x="40" y="30" font-size="12" fill="#355">umstülpen ↓</text>`),
    gloveHold: () => svg(`${place(G(), 70, 25)}<circle cx="125" cy="120" r="22" fill="${GLOVE}" stroke="${GLOVE2}" stroke-width="2"/>${mirror(H(), 270, 40, .9)}
      <text x="160" y="215" font-size="12" fill="#355">in der Faust halten</text>`),
    gloveUnder: () => svg(`${place(G(), 70, 25)}<circle cx="125" cy="120" r="20" fill="${GLOVE}" stroke="${GLOVE2}" stroke-width="2"/>
      <g class="a-slide">${place(`<rect x="0" y="0" width="13" height="60" rx="6.5" fill="${SKIN}" stroke="#c98d66" stroke-width="2"/>`, 175, 150, 1, 60)}</g>
      <text x="170" y="40" font-size="12" fill="#355">bloßer Finger INNEN</text><text x="170" y="56" font-size="12" fill="#355">unter den Bund</text>`),
    bin: () => svg(`<rect x="120" y="120" width="80" height="90" rx="8" fill="#9aa8b5"/><rect x="112" y="110" width="96" height="14" rx="5" fill="#6d7d8c"/>
      <circle cx="160" cy="40" r="16" fill="${GLOVE}" class="a-fall"/><text x="160" y="175" font-size="13" text-anchor="middle" fill="#fff">Abfall</text>`),
    hdSmall: () => svg(`${place(H(), 108, 25)}<g class="a-rubx">${mirror(H(SKIN, '#c98d66', { wet: true }), 212, 35, 1)}</g>
      <text x="16" y="215" font-size="13" fill="#355">Händedesinfektion 30 s</text>`),
    // --- Wischdesinfektion
    wipePrep: () => svg(`<text x="70" y="130" font-size="60">🧤</text><text x="170" y="130" font-size="60" class="a-pulse">🧴</text><text x="110" y="200" font-size="13" fill="#355">Handschuhe + Lösung</text>`),
    wipeClear: () => svg(tableBase() + `<text x="120" y="95" font-size="30" class="a-away">🥤</text><text x="170" y="100" font-size="26" class="a-away2">📱</text>`),
    wipeSoak: () => svg(`<ellipse cx="160" cy="170" rx="70" ry="20" fill="#9fd8f0"/><path d="M90 170 L105 215 L215 215 L230 170" fill="#c8e9f7" stroke="#7ab"/>
      <rect x="135" y="60" width="50" height="34" rx="8" fill="#f6f3a8" stroke="#bb9" class="a-dip"/>`),
    wipeS: () => svg(tableBase() + `<path d="M75 92 L245 92 M245 112 L75 112 M75 132 L245 132 M245 152 L75 152" stroke="#8fd3ff" stroke-width="16" stroke-linecap="round" fill="none" class="a-trail" opacity=".6"/>
      <rect x="0" y="0" width="34" height="24" rx="6" fill="#f6f3a8" stroke="#bb9" class="a-cloth"/>
      <text x="22" y="40" font-size="11" fill="#355">sauber → schmutzig</text>`),
    wipeEdges: () => svg(tableBase() + `<rect x="58" y="78" width="204" height="88" rx="6" fill="none" stroke="#8fd3ff" stroke-width="8" class="a-trail2"/>
      <circle cx="160" cy="178" r="8" fill="#888" class="a-pulse"/><text x="175" y="200" font-size="11" fill="#355">Griff & Kanten!</text>`),
    wipeWait: () => svg(tableBase() + `<g class="a-twinkle"><circle cx="110" cy="110" r="3" fill="#fff"/><circle cx="190" cy="130" r="3" fill="#fff"/><circle cx="150" cy="100" r="2" fill="#fff"/></g>
      <text x="230" y="60" font-size="34">⏱️</text><text x="40" y="215" font-size="12" fill="#355">Nicht trockenreiben – Einwirkzeit!</text>`),
    // --- Nadelstich
    nsvStich: () => emoji('💉', '😣', 'a-shake', 'Stich mit benutzter Kanüle'),
    nsvBox: () => svg(`<rect x="130" y="110" width="70" height="90" rx="8" fill="#ffd400" stroke="#c9a400" stroke-width="3"/><rect x="140" y="100" width="50" height="14" rx="3" fill="#e63"/>
      <text x="140" y="70" font-size="34" class="a-fall2">💉</text><text x="208" y="70" font-size="12" fill="#c33">kein Recapping!</text>`),
    nsvBleed: () => svg(`<text x="120" y="120" font-size="70">☝️</text><g class="a-drip"><circle cx="160" cy="135" r="5" fill="#c00"/></g>
      <text x="40" y="210" font-size="12" fill="#355">Blutung fördern – ca. 1 Minute</text>`),
    nsvDis: () => emoji('🧴', '✨', 'a-pulse', 'großzügig desinfizieren'),
    nsvCall: () => emoji('📞', '👩🏽‍⚕️', 'a-ring', 'Vorgesetzte informieren'),
    nsvDoc: () => emoji('🏥', '⏱️', 'a-pulse', 'sofort D-Arzt / Betriebsarzt'),
    nsvWrite: () => emoji('📝', '✅', 'a-pop', 'Unfall dokumentieren')
  };

  function tableBase() {
    return `<polygon points="50,70 270,70 290,175 30,175" fill="#e9d7bf" stroke="#b49a77" stroke-width="2"/>
      <rect x="40" y="175" width="10" height="45" fill="#b49a77"/><rect x="270" y="175" width="10" height="45" fill="#b49a77"/>`;
  }
  function emoji(a, b, cls, label) {
    return svg(`<text x="90" y="130" font-size="64" class="${cls}">${a}</text><text x="185" y="130" font-size="54">${b}</text>
      <text x="160" y="200" font-size="14" text-anchor="middle" fill="#355">${label}</text>`);
  }

  // --- Schutzkleidung (Figur mit Ebenen)
  function nurse(st, hl) {
    const L = (k, html) => st[k] ? `<g class="${hl === k ? 'a-pop-in' : ''}">${html}</g>` : (hl === '-' + k ? `<g class="a-fade-out">${html}</g>` : '');
    return svg(`
      <g transform="translate(110,5)">
        <rect x="18" y="80" width="64" height="95" rx="18" fill="#2bb5a8"/>
        <rect x="2" y="86" width="18" height="70" rx="9" fill="#2bb5a8"/><rect x="80" y="86" width="18" height="70" rx="9" fill="#2bb5a8"/>
        <rect x="6" y="150" width="12" height="18" rx="6" fill="${SKIN}"/><rect x="82" y="150" width="12" height="18" rx="6" fill="${SKIN}"/>
        <rect x="24" y="170" width="22" height="50" rx="8" fill="#1f8f85"/><rect x="54" y="170" width="22" height="50" rx="8" fill="#1f8f85"/>
        <circle cx="50" cy="45" r="30" fill="${SKIN}"/><path d="M20 42 Q22 12 50 12 Q78 12 80 42 Q70 26 50 26 Q30 26 20 42" fill="#5a3b2a"/>
        <circle cx="40" cy="44" r="3" fill="#333"/><circle cx="60" cy="44" r="3" fill="#333"/><path d="M42 60 Q50 66 58 60" stroke="#a55" stroke-width="2" fill="none"/>
        ${L('gown', `<path d="M14 78 L86 78 L100 160 L92 205 L8 205 L0 160 Z" fill="#ffd966" opacity=".93" stroke="#d4b23f" stroke-width="2"/><rect x="-2" y="86" width="20" height="72" rx="9" fill="#ffd966" stroke="#d4b23f"/><rect x="82" y="86" width="20" height="72" rx="9" fill="#ffd966" stroke="#d4b23f"/>`)}
        ${L('mask', `<rect x="28" y="50" width="44" height="22" rx="6" fill="#e8f4ff" stroke="#8ab" stroke-width="2"/><line x1="28" y1="56" x2="18" y2="46" stroke="#8ab" stroke-width="2"/><line x1="72" y1="56" x2="82" y2="46" stroke="#8ab" stroke-width="2"/>`)}
        ${L('goggles', `<rect x="26" y="34" width="48" height="18" rx="8" fill="#bfe3ff" opacity=".75" stroke="#4a7" stroke-width="2"/>`)}
        ${L('gloves', `<rect x="2" y="144" width="18" height="26" rx="8" fill="${GLOVE}" stroke="${GLOVE2}"/><rect x="80" y="144" width="18" height="26" rx="8" fill="${GLOVE}" stroke="${GLOVE2}"/>`)}
        ${st.hd ? `<text x="-30" y="170" font-size="22" class="a-twinkle">✨</text><text x="96" y="170" font-size="22" class="a-twinkle">✨</text>` : ''}
      </g>`);
  }
  const N = (gown, mask, goggles, gloves, hd, hl) => () => nurse({ gown, mask, goggles, gloves, hd }, hl);

  window.HQ_DEMOS = {
    handrub: { title: 'Hygienische Händedesinfektion', timer: true, steps: [
      { scene: 'dispense', dur: 5, t: 'Vorbereitung', txt: 'Hände trocken. Kein Schmuck. Spender mit dem Ellenbogen bedienen. Eine hohle Hand voll Mittel nehmen.' },
      { scene: 'palms', dur: 5, t: '1 · Handfläche auf Handfläche', txt: 'Handfläche auf Handfläche reiben. Auch die Handgelenke.' },
      { scene: 'backs', dur: 5, t: '2 · Handrücken', txt: 'Rechte Handfläche über den linken Handrücken – dann wechseln.' },
      { scene: 'interlace', dur: 5, t: '3 · Fingerzwischenräume', txt: 'Handfläche auf Handfläche mit verschränkten, gespreizten Fingern.' },
      { scene: 'fingerbacks', dur: 5, t: '4 · Fingerrücken', txt: 'Außenseite der Finger in die andere Handfläche legen. Finger verhaken und reiben.' },
      { scene: 'thumb', dur: 5, t: '5 · Daumen', txt: 'Den Daumen in der geschlossenen Hand kreisend reiben – beide Daumen.' },
      { scene: 'tips', dur: 5, t: '6 · Fingerkuppen', txt: 'Fingerkuppen kreisend in der anderen Handfläche reiben – beide Seiten.' },
      { scene: 'dry', dur: 4, t: 'Fertig!', txt: 'Mindestens 30 Sekunden. Die Hände waren die ganze Zeit feucht. An der Luft trocknen lassen – nicht abwischen.' }
    ]},
    gloves: { title: 'Einmalhandschuhe an- und ausziehen', steps: [
      { scene: 'hdSmall', dur: 5, t: 'Händedesinfektion', txt: 'Vor dem Anziehen: Hände desinfizieren und trocknen lassen.' },
      { scene: 'gloveOn', dur: 5, t: 'Anziehen', txt: 'Handschuh nur am Bund anfassen und über die Hand ziehen. Passende Größe wählen.' },
      { scene: 'glovePinch', dur: 5, t: 'Ausziehen: Greifen', txt: 'Den ersten Handschuh außen am Handgelenk greifen. Haut berührt Haut, Handschuh berührt Handschuh.' },
      { scene: 'glovePeel', dur: 5, t: 'Umstülpen', txt: 'Den Handschuh nach vorne abziehen und dabei umstülpen.' },
      { scene: 'gloveHold', dur: 4, t: 'Festhalten', txt: 'Den ausgezogenen Handschuh in der behandschuhten Hand halten.' },
      { scene: 'gloveUnder', dur: 5, t: 'Zweiter Handschuh', txt: 'Mit dem bloßen Finger INNEN unter den Bund des zweiten Handschuhs fahren. Umstülpen – über den ersten.' },
      { scene: 'bin', dur: 4, t: 'Entsorgen', txt: 'Beide Handschuhe direkt in den Abfall.' },
      { scene: 'hdSmall', dur: 5, t: 'Händedesinfektion', txt: 'Zum Schluss immer: Hände desinfizieren!' }
    ]},
    psa: { title: 'Schutzkleidung an- und ablegen', steps: [
      { scene: 'p0', dur: 4, t: 'Start', txt: 'Dienstkleidung, kein Schmuck, Haare zusammengebunden.' },
      { scene: 'p1', dur: 4, t: 'Anlegen 1 · Händedesinfektion', txt: 'Zuerst die Hände desinfizieren.' },
      { scene: 'p2', dur: 5, t: 'Anlegen 2 · Schutzkittel', txt: 'Kittel anziehen, im Nacken und an der Taille schließen. Die Kleidung ist ganz bedeckt.' },
      { scene: 'p3', dur: 5, t: 'Anlegen 3 · Maske', txt: 'Maske über Mund und Nase, Nasenbügel andrücken. Bei FFP2: Dichtsitz prüfen.' },
      { scene: 'p4', dur: 4, t: 'Anlegen 4 · Schutzbrille', txt: 'Schutzbrille aufsetzen, wenn Spritzer möglich sind.' },
      { scene: 'p5', dur: 5, t: 'Anlegen 5 · Hände + Handschuhe', txt: 'Hände desinfizieren. Handschuhe ÜBER die Kittelbündchen ziehen.' },
      { scene: 'p6', dur: 5, t: 'Ablegen 1 · Handschuhe', txt: 'Handschuhe korrekt ausziehen und entsorgen.' },
      { scene: 'p7', dur: 4, t: 'Ablegen 2 · Händedesinfektion', txt: 'Hände desinfizieren.' },
      { scene: 'p8', dur: 5, t: 'Ablegen 3 · Kittel', txt: 'Kittel öffnen, von innen nach außen abstreifen, nach innen rollen und entsorgen. Hände desinfizieren.' },
      { scene: 'p9', dur: 4, t: 'Ablegen 4 · Brille', txt: 'Schutzbrille nur an den Bügeln abnehmen.' },
      { scene: 'p10', dur: 4, t: 'Ablegen 5 · Maske', txt: 'Maske nur an den Bändern abnehmen – die Vorderseite nicht berühren.' },
      { scene: 'p11', dur: 4, t: 'Ablegen 6 · Händedesinfektion', txt: 'Zum Schluss: Hände desinfizieren. Geschafft!' }
    ]},
    wipe: { title: 'Wischdesinfektion am Nachttisch', steps: [
      { scene: 'wipePrep', dur: 5, t: 'Vorbereiten', txt: 'Hände desinfizieren, Handschuhe anziehen. Desinfektionsmittel in der richtigen Konzentration oder fertige Tücher bereitstellen.' },
      { scene: 'wipeClear', dur: 4, t: 'Abräumen', txt: 'Gegenstände vom Nachttisch nehmen (und selbst desinfizieren).' },
      { scene: 'wipeSoak', dur: 4, t: 'Tuch tränken', txt: 'Das Tuch gut mit Lösung tränken. Nicht sprühen!' },
      { scene: 'wipeS', dur: 6, t: 'Wischen in Bahnen', txt: 'Von sauber nach schmutzig und von oben nach unten wischen. In Bahnen, nicht wild hin und her.' },
      { scene: 'wipeEdges', dur: 5, t: 'Kanten und Griffe', txt: 'Kanten, Griffe und Schubladen nicht vergessen – dort fassen alle hin.' },
      { scene: 'wipeWait', dur: 5, t: 'Einwirken lassen', txt: 'Nicht trockenreiben. Die Fläche ist wieder benutzbar, wenn sie trocken ist (Hygieneplan beachten).' },
      { scene: 'hdSmall', dur: 4, t: 'Abschluss', txt: 'Handschuhe ausziehen, Hände desinfizieren.' }
    ]},
    nsv: { title: 'Sofortmaßnahmen bei Nadelstichverletzung', steps: [
      { scene: 'nsvStich', dur: 4, t: 'Es ist passiert', txt: 'Ruhe bewahren! Jetzt zählt jede Minute.' },
      { scene: 'nsvBox', dur: 4, t: 'Kanüle sichern', txt: 'Kanüle sofort in den Abwurfbehälter. Kein Recapping!' },
      { scene: 'nsvBleed', dur: 5, t: '1 · Blutung fördern', txt: 'Druck auf das umliegende Gewebe geben, damit es blutet – etwa 1 Minute. Nicht direkt auf den Stich drücken.' },
      { scene: 'nsvDis', dur: 4, t: '2 · Desinfizieren', txt: 'Großzügig mit einem Hautantiseptikum desinfizieren.' },
      { scene: 'nsvCall', dur: 4, t: '3 · Melden', txt: 'Vorgesetzte sofort informieren. Ist der Indexpatient bekannt?' },
      { scene: 'nsvDoc', dur: 5, t: '4 · Zum Arzt', txt: 'Sofort zum Durchgangsarzt oder Betriebsarzt. Eine HIV-Prophylaxe wirkt am besten in den ersten 2 Stunden.' },
      { scene: 'nsvWrite', dur: 4, t: '5 · Dokumentieren', txt: 'Arbeitsunfall dokumentieren (Verbandbuch, Unfallanzeige). Kontrolluntersuchungen wahrnehmen.' }
    ]}
  };
  Object.assign(scenes, {
    p0: N(0, 0, 0, 0, 0), p1: N(0, 0, 0, 0, 1), p2: N(1, 0, 0, 0, 0, 'gown'), p3: N(1, 1, 0, 0, 0, 'mask'),
    p4: N(1, 1, 1, 0, 0, 'goggles'), p5: N(1, 1, 1, 1, 1, 'gloves'), p6: N(1, 1, 1, 0, 0, '-gloves'),
    p7: N(1, 1, 1, 0, 1), p8: N(0, 1, 1, 0, 1, '-gown'), p9: N(0, 1, 0, 0, 0, '-goggles'), p10: N(0, 0, 0, 0, 0, '-mask'), p11: N(0, 0, 0, 0, 1)
  });

  /* ---------- Player ---------- */
  window.HQ_DemoPlayer = function (el, key, opts) {
    const demo = window.HQ_DEMOS[key];
    opts = opts || {};
    const total = demo.steps.reduce((s, x) => s + x.dur, 0);
    let i = 0, t = 0, playing = false, timer = null, ended = false;
    el.innerHTML = `
      <div class="demo">
        <div class="demo-screen">
          <div class="demo-stage"></div>
          <div class="demo-badge">🎬 Lehrvideo</div>
          <div class="demo-clock" ${demo.timer ? '' : 'hidden'}>⏱️ <span>0</span> s</div>
          <button class="demo-big" aria-label="Abspielen">▶</button>
        </div>
        <div class="demo-cap"><b class="demo-t"></b><span class="demo-txt"></span></div>
        <div class="demo-bar"><div></div></div>
        <div class="demo-ctrl">
          <button class="btn sm ghost" data-d="prev">⏮</button>
          <button class="btn sm" data-d="play">▶ Abspielen</button>
          <button class="btn sm ghost" data-d="next">⏭</button>
          <button class="btn sm ghost" data-d="restart">⟲ Von vorne</button>
          <label class="demo-voice"><input type="checkbox" ${opts.voice ? 'checked' : ''}> 🔊 Vorlesen</label>
        </div>
        <ol class="demo-steps">${demo.steps.map((s, k) => `<li data-k="${k}">${s.t}</li>`).join('')}</ol>
      </div>`;
    const $ = (s) => el.querySelector(s);
    const voice = $('.demo-voice input');
    function speak(txt) {
      if (!voice.checked || !window.speechSynthesis) return;
      const clean = window.HQ_cleanSpeech ? window.HQ_cleanSpeech(txt) : txt;
      try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(clean); u.lang = 'de-DE'; u.rate = .95; speechSynthesis.speak(u); } catch (e) {}
    }
    voice.addEventListener('change', () => { if (!voice.checked) { try { speechSynthesis.cancel(); } catch (e) {} } });
    function show(k, say) {
      i = Math.max(0, Math.min(demo.steps.length - 1, k));
      const s = demo.steps[i];
      $('.demo-stage').innerHTML = scenes[s.scene]();
      $('.demo-t').textContent = s.t;
      $('.demo-txt').textContent = ' ' + s.txt;
      el.querySelectorAll('.demo-steps li').forEach((li, n) => { li.classList.toggle('on', n === i); li.classList.toggle('done', n < i); });
      if (say) speak(s.t + '. ' + s.txt);
    }
    function elapsedBefore(k) { return demo.steps.slice(0, k).reduce((s, x) => s + x.dur, 0); }
    function tick() {
      t += .1;
      const s = demo.steps[i];
      if (t - elapsedBefore(i) >= s.dur) {
        if (i < demo.steps.length - 1) show(i + 1, true);
        else { stop(); ended = true; t = total; if (opts.onEnd) opts.onEnd(); }
      }
      render();
    }
    function render() {
      $('.demo-bar div').style.width = Math.min(100, t / total * 100) + '%';
      if (demo.timer) {
        const rubStart = demo.steps[0].dur, rubEnd = total - demo.steps[demo.steps.length - 1].dur;
        $('.demo-clock span').textContent = Math.max(0, Math.min(rubEnd - rubStart, Math.floor(t - rubStart)));
      }
      $('[data-d=play]').textContent = playing ? '⏸ Pause' : (ended ? '⟲ Nochmal' : '▶ Abspielen');
      $('.demo-big').hidden = playing;
      $('.demo-screen').classList.toggle('paused', !playing);
    }
    function play() { if (ended) { ended = false; t = 0; show(0); } playing = true; if (t === 0 || Math.abs(t - elapsedBefore(i)) < .05) speak(demo.steps[i].t + '. ' + demo.steps[i].txt); timer = setInterval(tick, 100); render(); }
    function stop() { playing = false; clearInterval(timer); render(); }
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-d], .demo-big, .demo-steps li');
      if (!b) return;
      if (b.classList.contains('demo-big')) return play();
      if (b.dataset.k !== undefined) { t = elapsedBefore(+b.dataset.k); show(+b.dataset.k, playing); return render(); }
      const d = b.dataset.d;
      if (d === 'play') playing ? stop() : play();
      if (d === 'prev') { t = elapsedBefore(Math.max(0, i - 1)); show(i - 1, playing); render(); }
      if (d === 'next') { if (i === demo.steps.length - 1) { t = total; stop(); ended = true; if (opts.onEnd) opts.onEnd(); } else { t = elapsedBefore(i + 1); show(i + 1, playing); } render(); }
      if (d === 'restart') { stop(); ended = false; t = 0; show(0); render(); }
    });
    show(0); render();
    return { destroy() { stop(); try { speechSynthesis.cancel(); } catch (e) {} } };
  };
})();
