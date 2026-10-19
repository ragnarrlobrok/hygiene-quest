/* ============================================================
   HYGIENE-QUEST – Spiel-Logik (Fantasy-Rollenspiel, Anrede "Sie")
   ============================================================ */
(function () {
  const CFG = window.HQ_CONFIG, MIS = window.HQ_MISSIONS, PAT = window.HQ_PATIENTS, CH = window.HQ_CHARS;
  const KEY = 'hygieneQuest.save.v1';
  const JSPDF_URL = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
  const app = document.getElementById('app');
  let S = load();
  let view = { screen: S.team ? 'map' : 'welcome' };
  let cleanup = [];
  let lastKey = '';

  /* ---------------- Speicher ---------------- */
  function fresh() {
    return { v: 1, team: null, missions: {}, patients: Object.fromEntries(PAT.map(p => [p.id, 100])),
      xp: 0, peer: {}, reflections: {}, finals: {}, certs: {}, sound: true, voice: false,
      tutorialSeen: false, created: Date.now(), time: {} };
  }
  function load() {
    try { const s = JSON.parse(localStorage.getItem(KEY)); if (s && s.v === 1) return Object.assign(fresh(), s); } catch (e) {}
    return fresh();
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); flashSaved(); } catch (e) {}
  }
  let savedT;
  function flashSaved() {
    const el = document.getElementById('saved'); if (!el) return;
    el.classList.add('show'); clearTimeout(savedT); savedT = setTimeout(() => el.classList.remove('show'), 1200);
  }
  function exportCode() { return btoa(unescape(encodeURIComponent(JSON.stringify(S)))); }
  function importCode(code) {
    const s = JSON.parse(decodeURIComponent(escape(atob(code.trim()))));
    if (!s || s.v !== 1) throw new Error('bad');
    S = Object.assign(fresh(), s); save();
  }

  /* ---------------- Hilfen ---------------- */
  const esc = (t) => String(t == null ? '' : t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const nameA = () => S.team ? S.team.a : 'A', nameB = () => S.team ? S.team.b : 'B';
  function roles(mi, si) {
    const aDrives = (mi + si) % 2 === 0;
    return aDrives ? { D: nameA(), C: nameB(), dKey: 'a' } : { D: nameB(), C: nameA(), dKey: 'b' };
  }
  function fill(txt, r) {
    r = r || { D: nameA(), C: nameB() };
    return String(txt).replace(/\{A\}/g, esc(nameA())).replace(/\{B\}/g, esc(nameB())).replace(/\{D\}/g, '<b class="nm">' + esc(r.D) + '</b>').replace(/\{C\}/g, '<b class="nm">' + esc(r.C) + '</b>');
  }
  function ms(id) {
    if (!S.missions[id]) S.missions[id] = { status: 'locked', step: 0, done: {}, harm: 0, quiz: {}, data: {} };
    return S.missions[id];
  }
  function missionOpen(idx) { return idx === 0 || ms(MIS[idx - 1].id).status === 'done'; }
  function allDone() { return MIS.every(m => ms(m.id).status === 'done'); }
  function safety() { const v = Object.values(S.patients); return Math.round(v.reduce((a, b) => a + b, 0) / v.length); }
  function progressPct() {
    let tot = 0, done = 0;
    MIS.forEach(m => { tot += m.steps.length; done += Object.keys(ms(m.id).done).length; });
    return Math.round(done / tot * 100);
  }
  function rank() {
    const x = S.xp;
    if (x >= 4500) return '👑 Hüter:in der Kristalle';
    if (x >= 3000) return '⚔️ Hygiene-Paladin';
    if (x >= 1600) return '🛡️ Pflege-Ritter:in';
    if (x >= 500) return '📜 Lehrling der Hygiene';
    return '🌱 Novize / Novizin';
  }
  function level() { return 1 + Math.floor(S.xp / 350); }
  function addXP(n) { S.xp += n; const el = document.getElementById('xpval'); if (el) el.textContent = S.xp; floatText('+' + n + ' EXP', 'xp'); }
  function floatText(txt, cls, anchor) {
    const d = document.createElement('div'); d.className = 'float ' + (cls || ''); d.textContent = txt;
    if (anchor) { const r = anchor.getBoundingClientRect(); d.style.left = (r.left + r.width / 2) + 'px'; d.style.top = (r.top + window.scrollY) + 'px'; d.style.position = 'absolute'; }
    document.body.appendChild(d); setTimeout(() => d.remove(), 1500);
  }
  function toast(msg, kind) {
    const d = document.createElement('div'); d.className = 'toast ' + (kind || ''); d.innerHTML = msg;
    document.body.appendChild(d); setTimeout(() => d.classList.add('out'), 2800); setTimeout(() => d.remove(), 3300);
  }
  let actx;
  function tones(list, type) {
    if (!S.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      list.forEach(([f, t, d]) => {
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = type || 'triangle'; o.frequency.value = f; g.gain.value = .07;
        o.connect(g); g.connect(actx.destination);
        const t0 = actx.currentTime + t; o.start(t0); g.gain.setValueAtTime(.07, t0); g.gain.exponentialRampToValueAtTime(.0001, t0 + d); o.stop(t0 + d + .02);
      });
    } catch (e) {}
  }
  const sfx = {
    ok: () => tones([[784, 0, .12], [1047, .1, .2]]),
    bad: () => tones([[196, 0, .18], [147, .15, .3]], 'square'),
    cursor: () => tones([[1200, 0, .04]], 'square'),
    win: () => tones([[523, 0, .15], [659, .15, .15], [784, .3, .15], [1047, .45, .5], [988, .75, .15], [1047, .9, .6]])
  };
  function speak(txt) {
    if (!window.speechSynthesis) return toast('Vorlesen wird von diesem Browser nicht unterstützt.');
    const plain = String(txt).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(plain); u.lang = 'de-DE'; u.rate = .95; speechSynthesis.speak(u); } catch (e) {}
  }
  function fmtMin(sec) { return Math.round((sec || 0) / 60) + ' Min.'; }
  function totalTime() { return Object.values(S.time).reduce((a, b) => a + b, 0); }

  // Bearbeitungszeit pro Kapitel messen (nur wenn das Fenster sichtbar ist)
  setInterval(() => {
    if (view.screen === 'mission' && document.visibilityState === 'visible') {
      S.time[view.mid] = (S.time[view.mid] || 0) + 15; save();
    }
  }, 15000);

  /* ---------------- Grundgerüst ---------------- */
  function hpClass(h) { return h >= 80 ? 'ok' : h >= 50 ? 'warn' : 'bad'; }
  function shell(inner) {
    const t = S.team;
    return `
    <div class="stars" aria-hidden="true"></div>
    <header class="top">
      <button class="brand" data-go="map" aria-label="Zur Weltkarte">
        <span class="logo">✚</span><span><b>Hygiene-Quest</b><small>Die Kristalle von St. Hygiea</small></span>
      </button>
      <nav class="nav">
        <button data-go="map" class="${view.screen === 'map' ? 'on' : ''}">🗺️ <span>Weltkarte</span></button>
        <button data-go="guide" class="${view.screen === 'guide' ? 'on' : ''}">📜 <span>Anleitung</span></button>
        <button data-go="glossary" class="${view.screen === 'glossary' ? 'on' : ''}">📖 <span>Wörterbuch</span></button>
        <button data-go="save" class="${view.screen === 'save' ? 'on' : ''}">💾 <span>Spielstand</span></button>
        ${allDone() ? `<button data-go="cert" class="${view.screen === 'cert' ? 'on' : ''}">🎓 <span>Bescheinigung</span></button>` : ''}
        <button data-act="sound" title="Ton an/aus">${S.sound ? '🔔' : '🔕'}</button>
      </nav>
    </header>
    ${t ? `<div class="hud win-box">
      <div class="party">
        <div class="pm"><span class="pm-ico">🧝</span><div><b>${esc(t.a)}</b><small>Lv ${level()}</small></div></div>
        <div class="pm"><span class="pm-ico">🧙</span><div><b>${esc(t.b)}</b><small>Lv ${level()}</small></div></div>
      </div>
      <div class="hud-stat"><small>Gruppe</small><b>${esc(t.name)}</b></div>
      <div class="hud-stat"><small>EXP</small><b id="xpval">${S.xp}</b></div>
      <div class="hud-stat"><small>Klasse</small><b>${rank()}</b></div>
      <div class="hud-stat"><small>Patientensicherheit</small><b class="hp-${hpClass(safety())}">${safety()} %</b></div>
      <div class="hud-prog"><div style="width:${progressPct()}%"></div><span>Fortschritt ${progressPct()} %</span></div>
      <div id="saved" class="saved">💾 gespeichert</div>
    </div>` : ''}
    <main class="main">${inner}</main>
    <footer class="foot">Modul ${esc(CFG.modulCode)} · ${esc(CFG.modulTitel)} · Ihr Fortschritt wird automatisch in diesem Browser gespeichert.</footer>`;
  }

  function render() {
    cleanup.forEach(f => { try { f(); } catch (e) {} }); cleanup = [];
    try { speechSynthesis.cancel(); } catch (e) {}
    const s = view.screen;
    let html;
    if (!S.team && s !== 'guide' && s !== 'save') html = welcome();
    else if (s === 'map') html = mapView();
    else if (s === 'guide') html = guideView();
    else if (s === 'glossary') html = glossaryView();
    else if (s === 'save') html = saveView();
    else if (s === 'cert') html = certView();
    else if (s === 'mission') html = missionView();
    else html = mapView();
    app.innerHTML = shell(html);
    bindCommon();
    if (s === 'mission') bindStep();
    if (s === 'map' && S.team && !S.tutorialSeen && !document.querySelector('.modal')) tutorial();
    const key = [s, view.mi, view.si, view.card].join('|');
    if (key !== lastKey) { window.scrollTo(0, 0); lastKey = key; }
  }
  function go(screen, extra) { view = Object.assign({ screen }, extra || {}); render(); }

  function bindCommon() {
    app.querySelectorAll('[data-go]').forEach(b => b.onclick = (e) => { e.preventDefault(); go(b.dataset.go); });
    const snd = app.querySelector('[data-act=sound]');
    if (snd) snd.onclick = () => { S.sound = !S.sound; save(); render(); };
    app.querySelectorAll('[data-speak]').forEach(b => b.onclick = () => speak(document.getElementById(b.dataset.speak).innerHTML));
  }
  // Menü-Cursor-Klang (wie in klassischen Rollenspielen)
  document.addEventListener('mouseover', (e) => {
    const b = e.target.closest('.opt:not(:disabled), .mcard.open, .mcard.done');
    if (b && b !== document._lastHover) { document._lastHover = b; sfx.cursor(); }
  });

  /* ---------------- Start ---------------- */
  function welcome() {
    setTimeout(() => {
      const f = document.getElementById('teamForm');
      if (!f) return;
      f.onsubmit = (e) => {
        e.preventDefault();
        const a = f.a.value.trim(), b = f.b.value.trim(), n = f.n.value.trim() || 'Gruppe ' + a.split(' ')[0] + ' & ' + b.split(' ')[0];
        if (a.length < 3 || b.length < 3) return toast('Bitte beide vollständigen Namen eingeben (Vor- und Nachname).', 'bad');
        if (a.toLowerCase() === b.toLowerCase()) return toast('Bitte zwei verschiedene Personen eintragen.', 'bad');
        S.team = { a, b, name: n, start: Date.now() };
        ms(MIS[0].id).status = 'open';
        sfx.win(); save(); go('map');
      };
    });
    return `
    <section class="hero">
      <div class="hero-art">${crystalArt()}</div>
      <div class="hero-txt">
        <span class="pill">Selbstlern-Rollenspiel · Tandem · remote</span>
        <h1>Hygiene-Quest</h1>
        <p class="subtitle">Die Kristalle von St. Hygiea</p>
        <div class="win-box story-box"><p>Im Klinikum St. Hygiea sind die acht <b>Hygiene-Kristalle</b> erloschen. Unsichtbare Gegner – Keime – bedrohen sechs Patientinnen und Patienten auf Station 3B.</p>
        <p>Sie und Ihre Tandem-Partnerin oder Ihr Tandem-Partner sind die neue Heldengruppe. Treffen Sie kluge Entscheidungen, meistern Sie die Video-Quests und bringen Sie alle Kristalle zum Leuchten!</p></div>
        <ul class="ticks"><li>8 Kapitel · ca. 8 × 45 Minuten</li><li>Immer zu zweit: Tandem per Videokonferenz</li><li>Video-Quests: ansehen, nachmachen, gegenseitig prüfen</li><li>Am Ende: Teilnahmebescheinigung für jede Person</li></ul>
      </div>
    </section>
    <section class="win-box narrow">
      <h2>⚔️ Heldengruppe bilden</h2>
      <p class="muted">Tragen Sie Ihre <b>vollständigen Namen</b> ein – so stehen sie später auf der Teilnahmebescheinigung.</p>
      <form id="teamForm" class="form">
        <label>Person A (Vor- und Nachname)<input name="a" required autocomplete="off" placeholder="z. B. Maria Santos"></label>
        <label>Person B (Vor- und Nachname)<input name="b" required autocomplete="off" placeholder="z. B. Ahmed Karimi"></label>
        <label>Name der Gruppe (freiwillig)<input name="n" autocomplete="off" placeholder="z. B. Die Keimjäger"></label>
        <button class="btn big">▶ Abenteuer beginnen</button>
      </form>
      <p class="muted small">Sie haben schon einen Spielstand-Code? <a href="#" data-go="save">Spielstand laden</a> · <a href="#" data-go="guide">Anleitung lesen</a></p>
    </section>`;
  }

  function crystalArt() {
    const colors = ['#5ad1ff', '#7dffb2', '#ffd76a', '#ff8a8a', '#c49bff', '#66e0d0', '#ffb36b', '#9fb7ff'];
    return `<svg viewBox="0 0 360 300" class="crystal-art" aria-hidden="true">
      <defs><radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#9fd8ff" stop-opacity=".55"/><stop offset="1" stop-color="#9fd8ff" stop-opacity="0"/></radialGradient>
      <linearGradient id="cr" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#e9f7ff"/><stop offset=".5" stop-color="#7cc8ff"/><stop offset="1" stop-color="#2f5bd1"/></linearGradient></defs>
      <circle cx="180" cy="140" r="130" fill="url(#glow)"/>
      <g class="float-y"><polygon points="180,20 225,110 180,250 135,110" fill="url(#cr)" stroke="#fff" stroke-width="2"/>
      <polygon points="180,20 225,110 180,130" fill="#fff" opacity=".35"/></g>
      ${colors.map((c, i) => { const a = i / 8 * Math.PI * 2; const x = 180 + Math.cos(a) * 140, y = 140 + Math.sin(a) * 105;
        return `<g class="orbit-c" style="animation-delay:${i * .3}s"><polygon points="${x},${y - 14} ${x + 8},${y} ${x},${y + 14} ${x - 8},${y}" fill="${c}" stroke="#fff" stroke-width="1.5"/></g>`; }).join('')}
      <text x="180" y="290" text-anchor="middle" font-size="12" fill="#cfe0ff" font-family="Cinzel, serif">KLINIKUM ST. HYGIEA</text>
    </svg>`;
  }

  /* ---------------- Weltkarte ---------------- */
  function mapView() {
    const next = MIS.findIndex((m, i) => missionOpen(i) && ms(m.id).status !== 'done');
    return `
    <div class="grid2">
      <section>
        <div class="sec-head"><h2>🗺️ Weltkarte – Station 3B</h2><span class="muted">${MIS.filter(m => ms(m.id).status === 'done').length} von ${MIS.length} Kristallen leuchten</span></div>
        <div class="missions">
          ${MIS.map((m, i) => {
            const st = ms(m.id), open = missionOpen(i), done = st.status === 'done';
            const pct = Math.round(Object.keys(st.done).length / m.steps.length * 100);
            return `<button class="mcard ${done ? 'done' : open ? 'open' : 'locked'} ${i === next ? 'next' : ''}" ${open ? `data-mission="${i}"` : 'disabled'}>
              <div class="mc-icon">${open ? m.icon : '🔒'}</div>
              <div class="mc-body">
                <small>Kapitel ${m.nr} · ${esc(m.place)} · ca. 45 Min.</small>
                <b>${esc(m.title)}</b>
                <span class="mc-goal">${open ? esc(m.goal) : 'Wird freigeschaltet, wenn Kapitel ' + (m.nr - 1) + ' abgeschlossen ist.'}</span>
                ${open ? `<span class="mc-boss">Gegner: ${m.boss.icon} ${esc(m.boss.name)}</span><div class="mini-bar"><div style="width:${pct}%"></div></div>` : ''}
              </div>
              <div class="mc-state">${done ? `<span class="badge-ico" title="${esc(m.badge.name)}">💎</span>` : open ? (pct ? '☞ Weiter' : '☞ Start') : ''}</div>
            </button>`;
          }).join('')}
        </div>
        ${allDone() ? `<div class="win-box win"><h2>✨ Alle Kristalle leuchten!</h2><p>Sie können jetzt Ihre Teilnahmebescheinigungen erstellen und an die Kursleitung senden.</p><button class="btn big" data-go="cert">🎓 Zur Teilnahmebescheinigung</button></div>` : ''}
      </section>
      <aside>
        <div class="win-box">
          <h3>🛏️ Ihre Patientinnen und Patienten</h3>
          <div class="patients">${PAT.map(patientRow).join('')}</div>
          <p class="muted small">Falsche Entscheidungen kosten HP. Wenn Sie ein Kapitel abschließen, werden die Fehler korrigiert und die Patienten erholen sich.</p>
        </div>
        <div class="win-box">
          <h3>💎 Hygiene-Kristalle</h3>
          <div class="badges">${MIS.map(m => `<div class="bdg ${ms(m.id).status === 'done' ? 'got' : ''}" title="${esc(m.badge.name)}"><span>💎</span><small>${esc(m.badge.name)}</small></div>`).join('')}</div>
        </div>
        <div class="win-box tip">
          <h3>💡 Tipp</h3>
          <p>Eine Person teilt den Bildschirm in der Videokonferenz (mit Ton). Beide haben die Kamera an. Die Rollen <b>„Am Steuer“</b> und <b>„Coach“</b> wechseln automatisch.</p>
          <button class="btn ghost sm" data-act="tut">Einführung noch einmal ansehen</button>
        </div>
      </aside>
    </div>`;
  }
  function patientRow(p) {
    const h = S.patients[p.id];
    const st = h >= 80 ? ['stabil', 'ok'] : h >= 50 ? ['gefährdet', 'warn'] : ['kritisch', 'bad'];
    return `<div class="pat ${st[1]}"><span class="pe">${p.emoji}</span><div><b>${esc(p.name)}</b> <small>Zi. ${p.room} · ${p.age} J.</small><small class="pi">${esc(p.info)}</small>
      <div class="hpline"><span>HP</span><div class="hbar"><div style="width:${h}%"></div></div><span>${h}</span></div></div><span class="pst">${st[0]}</span></div>`;
  }

  /* ---------------- Kapitel ---------------- */
  function missionView() {
    const mi = view.mi, m = MIS[mi], st = ms(m.id);
    if (st.status === 'locked') st.status = 'open';
    const si = view.si != null ? view.si : Math.min(st.step, m.steps.length - 1);
    view.si = si; view.mid = m.id;
    const step = m.steps[si], r = roles(mi, si);
    const totalMin = m.steps.reduce((a, s) => a + (s.min || 0), 0);
    return `
    <div class="mhead">
      <button class="btn ghost sm" data-go="map">← Weltkarte</button>
      <div><small>Kapitel ${m.nr} · ${esc(m.place)} · ca. ${totalMin} Min.</small><h2>${m.icon} ${esc(m.title)}</h2></div>
    </div>
    <ol class="stepper">${m.steps.map((s, k) => {
      const reach = k <= st.step || st.done[k];
      return `<li class="${k === si ? 'on' : ''} ${st.done[k] ? 'done' : ''}"><button ${reach ? `data-step="${k}"` : 'disabled'} title="${esc(s.title)}">${st.done[k] ? '✓' : stepIcon(s.type)}</button></li>`;
    }).join('')}</ol>
    <div class="rolebar">
      <span>🎮 Am Steuer: <b>${esc(r.D)}</b></span><span>👀 Coach: <b>${esc(r.C)}</b></span>
      <span class="muted">Schritt ${si + 1} von ${m.steps.length} · ca. ${step.min || 3} Min.</span>
    </div>
    <section class="win-box step" id="step">${stepHtml(m, mi, si, step, r)}</section>
    <div class="step-nav">
      <button class="btn ghost" ${si === 0 ? 'disabled' : ''} data-nav="-1">← Zurück</button>
      <button class="btn" id="nextBtn" data-nav="1" ${st.done[si] ? '' : 'disabled'}>${si === m.steps.length - 1 ? 'Kapitel abschließen ✓' : 'Weiter →'}</button>
    </div>`;
  }
  function stepIcon(t) {
    return { story: '💬', learn: '📚', order: '🧩', sort: '🗂️', partner: '🤝', scenario: '⚔️', quest: '🎬', quiz: '✅', reflect: '✍️', finaltest: '🎓' }[t] || '•';
  }
  const TYPE_LABEL = { story: 'Geschichte', learn: 'Wissensschriften', order: 'Rätsel', sort: 'Zuordnen', partner: 'Tandem-Aufgabe', scenario: 'Kampf: Entscheidungs-Fall', quest: 'Video-Quest', quiz: 'Kapitel-Prüfung', reflect: 'Reflexion', finaltest: 'Abschlusstest' };

  function stepHtml(m, mi, si, s, r) {
    const head = `<div class="step-type">${stepIcon(s.type)} ${TYPE_LABEL[s.type]}</div><h3>${esc(s.title)}</h3>`;
    const f = { story: storyHtml, learn: learnHtml, order: orderHtml, sort: sortHtml, partner: partnerHtml, scenario: scenarioHtml, quest: questHtml, quiz: quizHtml, reflect: reflectHtml, finaltest: finalHtml }[s.type];
    return head + f(m, mi, si, s, r);
  }
  function sdata(m, si) { const st = ms(m.id); st.data[si] = st.data[si] || {}; return st.data[si]; }
  function markDone(m, si, xp) {
    const st = ms(m.id);
    if (!st.done[si]) { st.done[si] = true; if (xp) addXP(xp); }
    st.step = Math.max(st.step, Math.min(si + 1, m.steps.length - 1));
    save();
    const nb = document.getElementById('nextBtn'); if (nb) { nb.disabled = false; nb.classList.add('pulse'); }
  }

  /* --- Geschichte --- */
  function storyHtml(m, mi, si, s) {
    setTimeout(() => markDone(m, si, 10));
    return `<div class="story" id="storyTxt">${s.lines.map((l, k) => {
      const c = CH[l.who] || CH.team;
      return `<div class="bubble" style="animation-delay:${k * .5}s"><div class="av">${c.emoji}</div><div><small>${esc(c.name)} · ${esc(c.role)}</small><p>${fill(l.text)}</p></div></div>`;
    }).join('')}</div>
    <button class="btn ghost sm" data-speak="storyTxt">🔊 Vorlesen</button>`;
  }

  /* --- Wissensschriften --- */
  function learnHtml(m, mi, si, s, r) {
    const d = sdata(m, si); d.seen = d.seen || [0]; const k = view.card || 0;
    const reader = k % 2 === 0 ? r.D : r.C;
    if (d.seen.length >= s.cards.length) setTimeout(() => markDone(m, si, 30));
    const c = s.cards[k];
    return `<p class="hint">📢 Lesen Sie abwechselnd laut vor. Diese Schriftrolle liest: <b>${esc(reader)}</b>. Die andere Person stellt danach eine Frage dazu.</p>
    <div class="lcard-tabs">${s.cards.map((cc, i) => `<button data-card="${i}" class="${i === k ? 'on' : ''} ${d.seen.includes(i) ? 'seen' : ''}">${cc.icon}</button>`).join('')}</div>
    <article class="lcard" id="lcard"><div class="lc-ico">${c.icon}</div><h4>${esc(c.title)}</h4>${c.html}</article>
    <div class="row"><button class="btn ghost sm" data-speak="lcard">🔊 Vorlesen</button>
    <span class="muted small">Schriftrolle ${k + 1} von ${s.cards.length}</span>
    ${k < s.cards.length - 1 ? `<button class="btn sm" data-card="${k + 1}">Nächste →</button>` : `<span class="ok-txt">${d.seen.length >= s.cards.length ? '✓ Alle gelesen' : 'Bitte alle Schriftrollen öffnen'}</span>`}</div>`;
  }

  /* --- Rätsel: Reihenfolge --- */
  function orderHtml(m, mi, si, s) {
    const d = sdata(m, si);
    if (!d.order) { let o; do { o = shuffle(s.items.map((_, i) => i)); } while (o.every((v, i) => s.items[v] === s.items[i])); d.order = o; d.tries = 0; }
    const solved = ms(m.id).done[si];
    return `<p>${fill(s.intro)}</p>
    <ol class="order">${d.order.map((v, i) => `<li class="${d.checked ? (s.items[v] === s.items[i] ? 'right' : 'wrong') : ''}"><span class="onum">${i + 1}</span><span class="ot">${esc(s.items[v])}</span>
      ${solved ? '' : `<span class="ob"><button data-mv="${i}:-1" ${i === 0 ? 'disabled' : ''} aria-label="nach oben">▲</button><button data-mv="${i}:1" ${i === d.order.length - 1 ? 'disabled' : ''} aria-label="nach unten">▼</button></span>`}</li>`).join('')}</ol>
    ${solved ? `<div class="fb ok">✅ Rätsel gelöst! Super Teamarbeit.</div>` : `
    <div class="row"><button class="btn" data-act="checkOrder">Prüfen</button>${d.tries >= 2 ? '<button class="btn ghost sm" data-act="hintOrder">💡 Tipp</button>' : ''}</div>
    ${d.checked ? `<div class="fb bad">🔁 Noch nicht ganz. Rote Schritte stehen falsch. Besprechen Sie die Reihenfolge und korrigieren Sie sie.</div>` : ''}`}`;
  }

  /* --- Zuordnen --- */
  function sortHtml(m, mi, si, s) {
    const d = sdata(m, si); d.ans = d.ans || {};
    if (!d.ord) d.ord = shuffle(s.items.map((_, i) => i));
    const solved = ms(m.id).done[si];
    return `<p>${fill(s.intro)}</p>
    <div class="sort">${d.ord.map(i => {
      const it = s.items[i], a = d.ans[i], st = d.checked && a != null ? (a === it.b ? 'right' : 'wrong') : '';
      return `<div class="sitem ${st}"><div class="st">${esc(it.t)}</div>
        <div class="sb">${s.buckets.map(b => `<button class="${a === b.id ? 'sel' : ''}" data-sort="${i}:${b.id}" ${solved ? 'disabled' : ''}>${esc(b.label)}</button>`).join('')}</div>
        ${d.checked && st ? `<div class="se">${st === 'right' ? '✓ ' : '✗ '}${esc(it.e)}</div>` : ''}</div>`;
    }).join('')}</div>
    ${solved ? `<div class="fb ok">✅ Alles richtig zugeordnet!</div>` : `<div class="row"><button class="btn" data-act="checkSort">Prüfen</button><span class="muted small">${Object.keys(d.ans).length} / ${s.items.length} zugeordnet</span></div>
    ${d.checked ? `<div class="fb bad">🔁 Einige Zuordnungen sind falsch (rot). Lesen Sie die Erklärung, besprechen Sie sie und korrigieren Sie.</div>` : ''}`}`;
  }

  /* --- Tandem-Aufgabe --- */
  function partnerHtml(m, mi, si, s) {
    const d = sdata(m, si); d.round = d.round || 0; d.checks = d.checks || {};
    const base = roles(mi, si);
    const rr = d.round % 2 === 0 ? base : { D: base.C, C: base.D };
    const round = s.rounds[Math.min(d.round, s.rounds.length - 1)];
    const solved = ms(m.id).done[si];
    const ck = d.checks[d.round] || [];
    return `<div class="partner">
      <div class="round-tabs">${s.rounds.map((_, k) => `<span class="${k === d.round && !solved ? 'on' : ''} ${k < d.round || solved ? 'done' : ''}">Runde ${k + 1}</span>`).join('')}</div>
      ${solved ? `<div class="fb ok">✅ Tandem-Aufgabe abgeschlossen. Stark!</div>` : `
      <div class="task"><p>${fill(round.task, rr)}</p><p class="coach">👀 ${fill(round.coach, rr)}</p></div>
      ${timerHtml(s.minutes * 60, 'pt')}
      <h4>✔️ Checkliste für ${esc(rr.C)}</h4>
      <div class="checks">${s.checklist.map((c, k) => `<label><input type="checkbox" data-pck="${k}" ${ck.includes(k) ? 'checked' : ''}> ${esc(c)}</label>`).join('')}</div>
      <label class="fbk">💬 Feedback von ${esc(rr.C)} (Was war gut? Was kann besser werden?)<textarea data-pfb rows="2">${esc((d.fb || {})[d.round] || '')}</textarea></label>`}
      <details class="sol"><summary>💡 Musterlösung / Hinweise anzeigen</summary>${s.solution}</details>
      ${solved ? '' : `<div class="row"><button class="btn" data-act="roundDone">Runde ${d.round + 1} abschließen ✓</button><span class="muted small">Mindestens ${Math.ceil(s.checklist.length * .6)} Punkte der Checkliste</span></div>`}
    </div>`;
  }
  function timerHtml(sec, id) {
    return `<div class="timer" data-timer="${sec}" id="${id}"><span class="tt">${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}</span>
      <button class="btn sm ghost" data-tm="start">▶ Timer starten</button><button class="btn sm ghost" data-tm="reset">⟲</button><div class="tbar"><div></div></div></div>`;
  }

  /* --- Kampf: Entscheidungs-Fall --- */
  function optOrder(d, it) {
    d.oo = d.oo || {};
    if (!d.oo[d.i] || d.oo[d.i].length !== it.options.length) d.oo[d.i] = shuffle(it.options.map((_, k) => k));
    return d.oo[d.i];
  }
  function scenarioHtml(m, mi, si, s) {
    const d = sdata(m, si); d.i = d.i || 0; d.wrong = d.wrong || {}; d.harm = d.harm || 0; d.log = d.log || [];
    if (d.finished) {
      const score = Math.max(0, 100 - d.harm);
      const pass = score >= CFG.scenarioPass;
      return `<div class="sc-sum ${pass ? 'ok' : 'bad'}">
        ${pass ? `<div class="victory">SIEG!</div><p>${m.boss.icon} <b>${esc(m.boss.name)}</b> wurde besiegt.</p>` : `<div class="victory lose">NIEDERLAGE</div><p>${m.boss.icon} <b>${esc(m.boss.name)}</b> war zu stark.</p>`}
        <div class="big-score">${score} %</div><p><b>Patientensicherheit in diesem Fall</b></p>
        ${d.log.length ? `<h4>📋 Fallbesprechung: Was ist passiert?</h4><ul class="harmlog">${d.log.map(l => `<li><span>${l.emoji}</span><div><b>${esc(l.name)}:</b> ${esc(l.text)}<br><small>✓ Richtig wäre: ${esc(l.right)}</small></div></li>`).join('')}</ul>` : '<p>🌟 Keine Fehler – alle Patienten sind sicher!</p>'}
        ${pass ? `<div class="fb ok">✅ Fall bestanden. Die Fehler wurden rechtzeitig erkannt und korrigiert.</div>`
          : `<div class="fb bad">🔁 <b>Verbesserungsschleife:</b> Die Patientensicherheit liegt unter ${CFG.scenarioPass} %. Lesen Sie die Fallbesprechung gemeinsam und spielen Sie den Fall noch einmal.</div>
             <button class="btn" data-act="scRetry">⟲ Erneut kämpfen</button>`}
      </div>`;
    }
    const it = s.items[d.i], p = PAT.find(x => x.id === it.patient), r = roles(mi, si + d.i);
    const wrongs = d.wrong[d.i] || [];
    const answered = d.answered === d.i;
    const discuss = !answered && !wrongs.length && !(d.discussed && d.discussed[d.i]);
    const hits = d.i + (answered ? 1 : 0), bossHp = Math.round((1 - hits / s.items.length) * 100);
    return `<p class="muted">${fill(s.intro)}</p>
    <div class="battle">
      <div class="boss ${d.hit ? 'hit' : ''} ${d.attack ? 'attack' : ''}"><div class="boss-ico">${m.boss.icon}</div><div class="boss-info"><b>${esc(m.boss.name)}</b>
        <div class="hpline"><span>HP</span><div class="hbar boss-hp"><div style="width:${bossHp}%"></div></div></div></div></div>
      <div class="sc-prog">${s.items.map((_, k) => `<span class="${k < hits ? 'done' : k === d.i ? 'on' : ''}"></span>`).join('')}</div>
    </div>
    <div class="situ">
      <div class="situ-p" id="situP"><span class="pe big">${p.emoji}</span><div><b>${esc(p.name)}</b><small>Zimmer ${p.room} · ${esc(p.info)}</small>
        <div class="hpline"><span>HP</span><div class="hbar"><div class="hp-${hpClass(S.patients[p.id])}" style="width:${S.patients[p.id]}%"></div></div><span>${S.patients[p.id]}</span></div></div></div>
      <p class="situ-t" id="situT">${fill(it.text)}</p>
      <button class="btn ghost sm" data-speak="situT">🔊 Vorlesen</button>
    </div>
    <p class="hint">💬 Besprechen Sie die Situation. Die Entscheidung trifft: <b>${esc(r.D)}</b> · ${esc(r.C)} muss zustimmen.</p>
    ${discuss ? `<div class="discuss"><p>⏳ Erst diskutieren, dann entscheiden!</p><button class="btn" data-act="discussed" id="discBtn" disabled>Wir haben diskutiert (<span id="discT">20</span>)</button></div>` : ''}
    <div class="opts menu ${discuss ? 'blur' : ''}">${optOrder(d, it).map(k => { const o = it.options[k];
      const isW = wrongs.includes(k), isR = answered && o.ok;
      return `<button class="opt ${isW ? 'wrong' : ''} ${isR ? 'right' : ''}" data-opt="${k}" ${isW || answered || discuss ? 'disabled' : ''}>${esc(o.t)}</button>`;
    }).join('')}</div>
    <div id="scfb">${d.lastFb || ''}</div>
    ${answered ? `<button class="btn" data-act="scNext">${d.i < s.items.length - 1 ? 'Nächste Situation →' : 'Kampf auswerten →'}</button>` : ''}`;
  }

  /* --- Video-Quest --- */
  function questHtml(m, mi, si, s, r) {
    const d = sdata(m, si); d.phase = d.phase || 'watch';
    const pq = S.peer[s.id] = S.peer[s.id] || { a: { passed: false, tries: 0 }, b: { passed: false, tries: 0 } };
    const order = r.dKey === 'a' ? ['a', 'b'] : ['b', 'a'];
    const who = order.find(k => !pq[k].passed);
    const nm = (k) => k === 'a' ? nameA() : nameB();
    let body = '';
    if (d.phase === 'watch') {
      body = `<p>${fill(s.intro)}</p>
      ${videoBlock(s.demo)}
      <h4>🎞️ Animation: alle Schritte zum Mitlesen</h4>
      <div id="demoBox"></div>
      <p class="hint">🎬 Sehen Sie sich die Animation gemeinsam bis zum Ende an (und gern auch die YouTube-Videos). ${d.watched ? '<b class="ok-txt">✓ Gesehen</b>' : ''}</p>
      <button class="btn" data-act="toPractice" ${d.watched ? '' : 'disabled'} id="toPractice">Weiter zur Übung →</button>`;
    } else if (who) {
      const coach = who === 'a' ? 'b' : 'a';
      const ck = d.ck || [];
      body = `<div class="peer-head"><div class="ph-who">🎥 <b>${esc(nm(who))}</b> zeigt vor der Kamera</div><div class="ph-who">👀 <b>${esc(nm(coach))}</b> prüft</div></div>
      <p class="hint">📦 ${esc(s.practice)}</p>
      ${s.timer ? timerHtml(s.timer, 'qt') : ''}
      ${d.missed ? `<div class="fb bad">🔁 <b>Verbesserungsschleife (Versuch ${pq[who].tries + 1}):</b> Diese Punkte haben beim letzten Mal gefehlt:<ul>${d.missed.map(x => `<li>${esc(x)}</li>`).join('')}</ul>Sehen Sie sich die Schritte im Video noch einmal an und versuchen Sie es erneut.</div>
        <button class="btn ghost sm" data-act="rewatch">🎬 Video noch einmal ansehen</button>` : ''}
      <h4>✔️ Checkliste für ${esc(nm(coach))} – alle Punkte müssen erfüllt sein</h4>
      <div class="checks">${s.checklist.map((c, k) => `<label><input type="checkbox" data-qck="${k}" ${ck.includes(k) ? 'checked' : ''}> ${esc(c)}</label>`).join('')}</div>
      <label class="fbk">💬 Feedback von ${esc(nm(coach))}<textarea data-qfb rows="2" placeholder="Was war gut? Was kann besser werden?"></textarea></label>
      <div class="row"><button class="btn" data-act="peerEval">Auswerten</button></div>`;
    } else {
      setTimeout(() => markDone(m, si, 80));
      body = `<div class="fb ok">🏅 Beide haben die Quest bestanden! ${esc(nameA())}: ${pq.a.tries} Versuch(e) · ${esc(nameB())}: ${pq.b.tries} Versuch(e)</div>
      <button class="btn ghost sm" data-act="rewatch">🎬 Videos noch einmal ansehen</button>`;
    }
    const chip = (k) => `<span class="chip ${pq[k].passed ? 'ok' : ''}">${pq[k].passed ? '✅' : '⏳'} ${esc(nm(k))}</span>`;
    return `<div class="chips">${chip('a')}${chip('b')}</div>${body}`;
  }
  function videoBlock(key) {
    const list = ((CFG.videos || {})[key] || []).filter(v => v && (v.id || v.url));
    if (!list.length) return '';
    const first = list[0];
    const ytUrl = (v) => v.id ? 'https://www.youtube.com/watch?v=' + v.id : v.url;
    const embed = first.id
      ? `<div class="vwrap"><iframe src="https://www.youtube-nocookie.com/embed/${esc(first.id)}" title="${esc(first.title)}" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`
      : `<video class="vwrap" src="${esc(first.url)}" controls preload="metadata"></video>`;
    return `<h4>📺 Lehrfilm (YouTube, deutsch)</h4>${embed}
      <ul class="vlinks">${list.map(v => `<li><a href="${esc(ytUrl(v))}" target="_blank" rel="noopener">▶ ${esc(v.title)}</a> <small>– ${esc(v.quelle || '')}</small></li>`).join('')}</ul>
      <p class="muted small">Wenn das Video hier nicht startet: Klicken Sie auf den Link – er öffnet YouTube in einem neuen Fenster.</p>`;
  }

  /* --- Kapitel-Prüfung --- */
  function quizHtml(m, mi, si, s) {
    const d = sdata(m, si);
    const solved = ms(m.id).done[si];
    if (!d.run) newQuizRun(d, s.questions);
    return quizBody(d, CFG.quizPass, 'Kapitel-Prüfung bestanden!',
      fill('💬 Beantworten Sie die Fragen gemeinsam: {D} schlägt eine Antwort vor, {C} stimmt zu oder widerspricht mit Begründung.', roles(mi, si)), solved);
  }
  function newQuizRun(d, pool, count) {
    const qs = shuffle(pool).slice(0, count || pool.length).map(q => {
      const idx = shuffle(q.o.map((_, i) => i));
      return { q: q.q, o: idx.map(i => q.o[i]), a: idx.indexOf(q.a), e: q.e };
    });
    d.run = { qs, i: 0, correct: 0, wrong: [], done: false, picked: null };
  }
  function quizBody(d, pass, okMsg, hint, solved) {
    const R = d.run;
    if (R.done) {
      const pct = R.correct / R.qs.length, ok = pct >= pass;
      return `<div class="sc-sum ${ok ? 'ok' : 'bad'}"><div class="big-score">${Math.round(pct * 100)} %</div><p>${R.correct} von ${R.qs.length} richtig · nötig: ${Math.round(pass * 100)} %</p>
        ${ok ? `<div class="fb ok">✅ ${okMsg}</div>` : `<div class="fb bad">🔁 <b>Verbesserungsschleife:</b> Noch nicht bestanden. Lesen Sie die Erklärungen zu den Fehlern. Schauen Sie bei Bedarf in die Wissensschriften. Dann folgt ein neuer Versuch mit gemischten Fragen.</div>`}
        ${R.wrong.length ? `<h4>Fehler – das ist richtig:</h4><ul class="review">${R.wrong.map(w => `<li><b>${esc(w.q)}</b><br>✓ ${esc(w.right)}<br><small>${esc(w.e)}</small></li>`).join('')}</ul>` : ''}
        ${ok || solved ? '' : `<button class="btn" data-act="quizRetry">⟲ Neuer Versuch</button>`}</div>`;
    }
    const q = R.qs[R.i];
    return `<p class="hint">${hint}</p>
    <div class="qhead"><span>Frage ${R.i + 1} / ${R.qs.length}</span><span>✓ ${R.correct}</span></div>
    <div class="qbar"><div style="width:${R.i / R.qs.length * 100}%"></div></div>
    <p class="qq">${esc(q.q)}</p>
    <div class="opts menu">${q.o.map((o, k) => {
      const cls = R.picked == null ? '' : k === q.a ? 'right' : k === R.picked ? 'wrong' : '';
      return `<button class="opt ${cls}" data-qa="${k}" ${R.picked != null ? 'disabled' : ''}>${esc(o)}</button>`;
    }).join('')}</div>
    ${R.picked != null ? `<div class="fb ${R.picked === q.a ? 'ok' : 'bad'}">${R.picked === q.a ? '✅ Richtig! ' : '❌ Leider falsch. '}${esc(q.e)}</div>
      <button class="btn" data-act="qNext">${R.i < R.qs.length - 1 ? 'Nächste Frage →' : 'Auswertung →'}</button>` : ''}`;
  }

  /* --- Abschlusstest (einzeln) --- */
  function finalPool() {
    const pool = []; MIS.forEach(m => m.steps.forEach(s => { if (s.type === 'quiz') pool.push(...s.questions); }));
    return pool.concat(window.HQ_FINAL_EXTRA || []);
  }
  function finalHtml(m, mi, si, s) {
    const d = sdata(m, si);
    const who = !(S.finals.a && S.finals.a.passed) ? 'a' : !(S.finals.b && S.finals.b.passed) ? 'b' : null;
    const nm = (k) => k === 'a' ? nameA() : nameB();
    const chips = `<div class="chips">${['a', 'b'].map(k => `<span class="chip ${S.finals[k] && S.finals[k].passed ? 'ok' : ''}">${S.finals[k] && S.finals[k].passed ? '✅ ' + Math.round(S.finals[k].score * 100) + ' %' : '⏳'} ${esc(nm(k))}</span>`).join('')}</div>`;
    if (!who) { setTimeout(() => markDone(m, si, 150)); return chips + `<div class="fb ok">🎓 Beide haben den Abschlusstest bestanden! Herzlichen Glückwunsch!</div>`; }
    if (d.who !== who || !d.run) { d.who = who; d.started = false; newQuizRun(d, finalPool(), s.count); }
    if (!d.started) {
      return chips + `<div class="exam-intro"><h4>🧑‍🎓 Einzelprüfung: ${esc(nm(who))}</h4>
      <p>${s.count} Fragen aus allen Kapiteln. Bestanden ab ${Math.round(CFG.finalPass * 100)} %.</p>
      <p class="hint">🙈 <b>${esc(nm(who === 'a' ? 'b' : 'a'))}</b> hilft jetzt nicht mit. Wenn Sie einen Bildschirm teilen: <b>${esc(nm(who))}</b> sagt die Antwort, die andere Person klickt nur.</p>
      <button class="btn big" data-act="finalStart">▶ Test starten</button></div>`;
    }
    const R = d.run;
    if (R.done && !R.recorded) {
      const pct = R.correct / R.qs.length;
      S.finals[who] = S.finals[who] || { tries: 0 };
      R.recorded = true; S.finals[who].tries = (S.finals[who].tries || 0) + 1; S.finals[who].score = Math.max(S.finals[who].score || 0, pct);
      if (pct >= CFG.finalPass) { S.finals[who].passed = true; S.finals[who].date = Date.now(); }
      save();
    }
    let body = quizBody(d, CFG.finalPass, `${esc(nm(who))} hat bestanden!`, `🧑‍🎓 Einzelprüfung: <b>${esc(nm(who))}</b>`, false);
    if (R.done && R.correct / R.qs.length >= CFG.finalPass) body += `<button class="btn" data-act="finalNext">Weiter →</button>`;
    return chips + body;
  }

  /* --- Reflexion --- */
  function reflectHtml(m, mi, si, s) {
    const rf = S.reflections[m.id] = S.reflections[m.id] || {};
    return `<p class="hint">✍️ Jede Person schreibt für sich (mindestens 2 Sätze). Lesen Sie sich Ihre Antworten danach gegenseitig vor und sprechen Sie kurz darüber.</p>
    ${s.prompts.map((p, k) => `<div class="refl"><p class="rq">${esc(p)}</p>
      ${['a', 'b'].map(w => `<label>${esc(w === 'a' ? nameA() : nameB())}<textarea data-rf="${k}:${w}" rows="3" placeholder="Ich …">${esc(rf[k + w] || '')}</textarea></label>`).join('')}</div>`).join('')}
    <div class="row"><button class="btn" data-act="reflSave">Speichern ✓</button><span class="muted small" id="rfInfo"></span></div>`;
  }

  /* ---------------- Ereignisse im Schritt ---------------- */
  function bindStep() {
    const mi = view.mi, m = MIS[mi], si = view.si, s = m.steps[si], st = ms(m.id), d = sdata(m, si);
    const $ = (q) => app.querySelector(q), $$ = (q) => app.querySelectorAll(q);
    const rerender = () => render();

    $$('[data-step]').forEach(b => b.onclick = () => { view.si = +b.dataset.step; view.card = 0; render(); });
    $$('[data-nav]').forEach(b => b.onclick = () => {
      const dir = +b.dataset.nav;
      if (dir > 0 && si === m.steps.length - 1) return finishMission(mi);
      view.si = si + dir; view.card = 0; render();
    });

    // Timer
    $$('.timer').forEach(tm => {
      const sec = +tm.dataset.timer; let left = sec, iv = null;
      const upd = () => { tm.querySelector('.tt').textContent = Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0'); tm.querySelector('.tbar div').style.width = (100 - left / sec * 100) + '%'; };
      tm.querySelector('[data-tm=start]').onclick = (e) => {
        if (iv) { clearInterval(iv); iv = null; e.target.textContent = '▶ Weiter'; return; }
        e.target.textContent = '⏸ Pause';
        iv = setInterval(() => { left--; upd(); if (left <= 0) { clearInterval(iv); iv = null; tm.classList.add('ring'); sfx.ok(); e.target.textContent = '✓ Zeit um'; } }, 1000);
      };
      tm.querySelector('[data-tm=reset]').onclick = () => { clearInterval(iv); iv = null; left = sec; tm.classList.remove('ring'); tm.querySelector('[data-tm=start]').textContent = '▶ Timer starten'; upd(); };
      cleanup.push(() => clearInterval(iv));
    });

    if (s.type === 'learn') {
      $$('[data-card]').forEach(b => b.onclick = () => { const k = +b.dataset.card; view.card = k; if (!d.seen.includes(k)) d.seen.push(k); save(); render(); });
    }
    if (s.type === 'order') {
      $$('[data-mv]').forEach(b => b.onclick = () => {
        const [i, dir] = b.dataset.mv.split(':').map(Number); const o = d.order; [o[i], o[i + dir]] = [o[i + dir], o[i]]; d.checked = false; save(); rerender();
      });
      const c = $('[data-act=checkOrder]');
      if (c) c.onclick = () => {
        d.tries++; d.checked = true;
        if (d.order.every((v, i) => s.items[v] === s.items[i])) { sfx.ok(); markDone(m, si, d.tries === 1 ? 50 : 30); } else sfx.bad();
        save(); rerender();
      };
      const h = $('[data-act=hintOrder]');
      if (h) h.onclick = () => { const i = d.order.findIndex((v, k) => s.items[v] !== s.items[k]); toast(`💡 Position ${i + 1}: „${esc(s.items[i])}“`); };
    }
    if (s.type === 'sort') {
      $$('[data-sort]').forEach(b => b.onclick = () => { const [i, bk] = b.dataset.sort.split(':'); d.ans[i] = bk; save(); rerender(); });
      const c = $('[data-act=checkSort]');
      if (c) c.onclick = () => {
        if (Object.keys(d.ans).length < s.items.length) return toast('Bitte zuerst alle Karten zuordnen.', 'bad');
        d.checked = true; d.tries = (d.tries || 0) + 1;
        const ok = s.items.every((it, i) => d.ans[i] === it.b);
        if (ok) { sfx.ok(); markDone(m, si, d.tries === 1 ? 50 : 30); } else sfx.bad();
        save(); rerender();
      };
    }
    if (s.type === 'partner') {
      $$('[data-pck]').forEach(c => c.onchange = () => {
        const arr = d.checks[d.round] = d.checks[d.round] || []; const k = +c.dataset.pck;
        if (c.checked && !arr.includes(k)) arr.push(k); if (!c.checked) d.checks[d.round] = arr.filter(x => x !== k); save();
      });
      const fb = $('[data-pfb]'); if (fb) fb.oninput = () => { d.fb = d.fb || {}; d.fb[d.round] = fb.value; save(); };
      const rd = $('[data-act=roundDone]');
      if (rd) rd.onclick = () => {
        const n = (d.checks[d.round] || []).length;
        if (n < Math.ceil(s.checklist.length * .6)) return toast('🔁 Noch zu wenige Punkte erfüllt. Besprechen Sie, was fehlt, und versuchen Sie es noch einmal. Tipp: Schauen Sie in die Musterlösung.', 'bad');
        sfx.ok();
        if (d.round < s.rounds.length - 1) { d.round++; addXP(20); save(); rerender(); }
        else { markDone(m, si, 60); rerender(); }
      };
    }
    if (s.type === 'scenario') {
      if (d.lastFb && view.scrollFb) {
        view.scrollFb = false;
        const f = $('#scfb'); if (f) f.scrollIntoView({ block: 'center', behavior: 'smooth' });
        if (d.lastDmg) { floatText(d.lastDmg, 'dmg', $('#situP .pe')); d.lastDmg = null; }
        if (d.lastHit) { floatText('Treffer!', 'hitTxt', $('.boss-ico')); d.lastHit = false; }
      }
      d.hit = false; d.attack = false;
      const dbtn = $('#discBtn');
      if (dbtn) {
        let n = 20; const iv = setInterval(() => { n--; const t = $('#discT'); if (t) t.textContent = n; if (n <= 0) { clearInterval(iv); dbtn.disabled = false; } }, 1000);
        cleanup.push(() => clearInterval(iv));
        dbtn.onclick = () => { d.discussed = d.discussed || {}; d.discussed[d.i] = true; save(); rerender(); };
      }
      $$('[data-opt]').forEach(b => b.onclick = () => {
        const it = s.items[d.i], o = it.options[+b.dataset.opt];
        if (o.ok) {
          sfx.ok(); d.answered = d.i; d.hit = true; d.lastHit = true;
          const first = !(d.wrong[d.i] || []).length;
          if (first) addXP(25);
          d.lastFb = `<div class="fb ok">⚔️ <b>Treffer!</b> ${esc(o.fb)}</div>`;
        } else {
          sfx.bad();
          (d.wrong[d.i] = d.wrong[d.i] || []).push(+b.dataset.opt);
          const h = it.harm, p = PAT.find(x => x.id === h.p);
          S.patients[h.p] = Math.max(5, S.patients[h.p] - h.dmg); d.harm += h.dmg; d.attack = true; d.lastDmg = '−' + h.dmg + ' HP';
          if (!d.log.find(l => l.i === d.i)) d.log.push({ i: d.i, emoji: p.emoji, name: p.name, text: h.text, right: it.options.find(x => x.ok).t });
          d.lastFb = `<div class="fb bad harm"><div class="harm-ico">${p.emoji}<span>⚠️</span></div><div><b>${esc(m.boss.name)} greift an!</b> ${esc(h.text)}<br><small>−${h.dmg} HP bei ${esc(p.name)}</small><br><br>❌ ${esc(o.fb)}<br><b>🔁 Besprechen Sie die Situation noch einmal und korrigieren Sie Ihre Entscheidung.</b></div></div>`;
          document.body.classList.add('shake'); setTimeout(() => document.body.classList.remove('shake'), 500);
        }
        view.scrollFb = true; save(); rerender();
      });
      const nx = $('[data-act=scNext]');
      if (nx) nx.onclick = () => {
        d.lastFb = ''; d.answered = null;
        if (d.i < s.items.length - 1) d.i++;
        else {
          d.finished = true;
          if (100 - d.harm >= CFG.scenarioPass) { markDone(m, si, 60); st.harm = d.harm; sfx.win(); } else sfx.bad();
        }
        save(); rerender();
      };
      const rt = $('[data-act=scRetry]');
      if (rt) rt.onclick = () => { st.data[si] = {}; save(); rerender(); };
    }
    if (s.type === 'quest') {
      if (d.phase === 'watch') {
        const p = window.HQ_DemoPlayer($('#demoBox'), s.demo, { voice: S.voice, onEnd: () => { d.watched = true; save(); const b = $('#toPractice'); if (b) b.disabled = false; toast('✓ Animation vollständig angesehen'); } });
        cleanup.push(() => p.destroy());
      }
      const tp = $('[data-act=toPractice]'); if (tp) tp.onclick = () => { d.phase = 'practice'; addXP(10); save(); rerender(); };
      const rw = $('[data-act=rewatch]'); if (rw) rw.onclick = () => { d.phase = 'watch'; d.watched = false; save(); rerender(); };
      $$('[data-qck]').forEach(c => c.onchange = () => {
        d.ck = d.ck || []; const k = +c.dataset.qck;
        if (c.checked && !d.ck.includes(k)) d.ck.push(k); if (!c.checked) d.ck = d.ck.filter(x => x !== k); save();
      });
      const ev = $('[data-act=peerEval]');
      if (ev) ev.onclick = () => {
        const pq = S.peer[s.id]; const order = roles(mi, si).dKey === 'a' ? ['a', 'b'] : ['b', 'a'];
        const who = order.find(k => !pq[k].passed); const ck = d.ck || [];
        pq[who].tries++;
        const fbt = ($('[data-qfb]') || {}).value || '';
        pq[who].feedback = (pq[who].feedback || []).concat(fbt ? [fbt] : []);
        if (ck.length === s.checklist.length) {
          pq[who].passed = true; d.missed = null; d.ck = []; sfx.win(); addXP(40);
          toast(`🏅 ${esc(who === 'a' ? nameA() : nameB())} hat die Quest bestanden!`, 'ok');
        } else {
          d.missed = s.checklist.filter((_, k) => !ck.includes(k)); d.ck = []; sfx.bad();
        }
        save(); rerender();
      };
    }
    if (s.type === 'quiz' || s.type === 'finaltest') {
      const fs = $('[data-act=finalStart]'); if (fs) fs.onclick = () => { d.started = true; save(); rerender(); };
      $$('[data-qa]').forEach(b => b.onclick = () => {
        const R = d.run, q = R.qs[R.i]; R.picked = +b.dataset.qa;
        if (R.picked === q.a) { R.correct++; sfx.ok(); } else { sfx.bad(); R.wrong.push({ q: q.q, right: q.o[q.a], e: q.e }); }
        save(); rerender();
        const f = app.querySelector('.step .fb'); if (f) f.scrollIntoView({ block: 'center', behavior: 'smooth' });
      });
      const qn = $('[data-act=qNext]');
      if (qn) qn.onclick = () => {
        const R = d.run; R.picked = null;
        if (R.i < R.qs.length - 1) R.i++;
        else {
          R.done = true;
          const pct = R.correct / R.qs.length;
          if (s.type === 'quiz') {
            st.quiz.tries = (st.quiz.tries || 0) + 1; st.quiz.best = Math.max(st.quiz.best || 0, pct);
            if (pct >= CFG.quizPass) { markDone(m, si, Math.round(pct * 100)); sfx.win(); }
          }
        }
        save(); rerender();
      };
      const qr = $('[data-act=quizRetry]');
      if (qr) qr.onclick = () => {
        if (s.type === 'quiz') newQuizRun(d, s.questions); else { d.run = null; d.started = false; }
        save(); rerender();
      };
      const fn = $('[data-act=finalNext]'); if (fn) fn.onclick = () => { d.run = null; d.started = false; save(); rerender(); };
    }
    if (s.type === 'reflect') {
      const rf = S.reflections[m.id];
      const check = () => {
        let ok = true;
        $$('[data-rf]').forEach(t => { const [k, w] = t.dataset.rf.split(':'); rf[k + w] = t.value; if (t.value.trim().length < 20) ok = false; });
        save(); return ok;
      };
      $$('[data-rf]').forEach(t => t.oninput = check);
      $('[data-act=reflSave]').onclick = () => {
        if (check()) { markDone(m, si, 30); $('#rfInfo').textContent = '✓ Gespeichert'; sfx.ok(); }
        else toast('Bitte schreiben Sie beide mindestens einen ganzen Satz (20 Zeichen).', 'bad');
      };
      if (st.done[si]) markDone(m, si);
    }
  }

  function finishMission(mi) {
    const m = MIS[mi], st = ms(m.id);
    const missing = m.steps.map((s, k) => st.done[k] ? null : k + 1).filter(Boolean);
    if (missing.length) return toast('Es fehlen noch Schritte: ' + missing.join(', '), 'bad');
    const first = st.status !== 'done';
    st.status = 'done'; st.finished = st.finished || Date.now();
    Object.keys(S.patients).forEach(k => S.patients[k] = Math.min(100, S.patients[k] + 35));
    if (first) S.xp += 100;
    if (MIS[mi + 1] && ms(MIS[mi + 1].id).status !== 'done') ms(MIS[mi + 1].id).status = 'open';
    save();
    sfx.win();
    modal(`<div class="celebrate"><div class="victory">SIEG!</div><div class="cel-badge">💎</div><h2>Kapitel ${m.nr} geschafft!</h2>
      <p>Sie erhalten: <b>${esc(m.badge.name)}</b></p><p>+100 EXP · Alle Patienten erhalten +35 HP.</p>
      ${MIS[mi + 1] ? `<p>🔓 Freigeschaltet: <b>Kapitel ${MIS[mi + 1].nr}: ${esc(MIS[mi + 1].title)}</b></p><p class="muted small">Tipp: Machen Sie eine kurze Pause, bevor Sie weiterspielen.</p>` : '<p>👑 Sie haben <b>alle Kapitel</b> abgeschlossen!</p>'}
      <button class="btn big" data-close>${MIS[mi + 1] ? 'Zur Weltkarte' : 'Zur Teilnahmebescheinigung'}</button></div>`, () => go(MIS[mi + 1] ? 'map' : 'cert'));
    confetti();
  }

  /* ---------------- Modal / Einführung ---------------- */
  function modal(html, onClose) {
    const w = document.createElement('div'); w.className = 'modal';
    w.innerHTML = `<div class="modal-box win-box" role="dialog" aria-modal="true">${html}</div>`;
    document.body.appendChild(w);
    const close = () => { w.remove(); if (onClose) onClose(); };
    w.querySelectorAll('[data-close]').forEach(b => b.onclick = close);
    return { el: w, close };
  }
  function tutorial() {
    const slides = [
      ['💎', 'Willkommen, ' + esc(nameA()) + ' und ' + esc(nameB()) + '!', 'Sie sind die neue Heldengruppe des Klinikums St. Hygiea. In 8 Kapiteln lernen Sie Schritt für Schritt die wichtigsten Hygieneregeln – und bringen die 8 Hygiene-Kristalle zum Leuchten.'],
      ['🎥', 'Immer zu zweit', 'Starten Sie eine Videokonferenz (z. B. Teams, Zoom). <b>Eine Person teilt den Bildschirm mit Ton</b>, beide haben die Kamera an. Oben steht immer, wer <b>am Steuer</b> ist (klickt und entscheidet) und wer <b>Coach</b> ist (prüft und gibt Feedback).'],
      ['⚔️', 'Kämpfe = Entscheidungen', 'In jedem Kapitel wartet ein Gegner. Richtige Entscheidungen treffen den Gegner. Eine falsche Entscheidung kostet einen Patienten HP. Dann besprechen Sie den Fehler und korrigieren ihn.'],
      ['🎬', 'Video-Quests', 'Sie sehen ein Lehrvideo. Danach macht jede Person die Technik vor der Kamera nach. Die andere Person prüft mit einer Checkliste. Fehlt etwas, üben Sie noch einmal.'],
      ['🔓', 'Freischalten & Speichern', 'Die Kapitel werden nacheinander freigeschaltet. Ihr Fortschritt wird automatisch gespeichert. Mit dem <b>Spielstand-Code</b> (💾) können Sie auf einem anderen Gerät weiterspielen.'],
      ['🎓', 'Die Bescheinigung', 'Am Ende macht jede Person den Abschlusstest. Danach erhält jede Person eine eigene Teilnahmebescheinigung – sie wird an die Kursleitung gesendet.']
    ];
    let i = 0;
    const md = modal('<div id="tut"></div>');
    const draw = () => {
      const s = slides[i];
      md.el.querySelector('#tut').innerHTML = `<div class="tut"><div class="tut-ico">${s[0]}</div><h2>${s[1]}</h2><p>${s[2]}</p>
        <div class="dots">${slides.map((_, k) => `<span class="${k === i ? 'on' : ''}"></span>`).join('')}</div>
        <div class="row center">${i > 0 ? '<button class="btn ghost" data-t="-1">← Zurück</button>' : ''}<button class="btn" data-t="1">${i < slides.length - 1 ? 'Weiter →' : '▶ Los geht es!'}</button></div></div>`;
      md.el.querySelectorAll('[data-t]').forEach(b => b.onclick = () => {
        i += +b.dataset.t;
        if (i >= slides.length) { S.tutorialSeen = true; save(); md.close(); return; }
        draw();
      });
    };
    draw();
  }
  document.addEventListener('click', (e) => { if (e.target.closest('[data-act=tut]')) tutorial(); });
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-mission]');
    if (b) { const mi = +b.dataset.mission; view = { screen: 'mission', mi, si: null }; render(); }
  });

  function confetti() {
    const c = document.createElement('div'); c.className = 'confetti';
    for (let i = 0; i < 60; i++) {
      const p = document.createElement('i');
      p.style.left = Math.random() * 100 + 'vw'; p.style.background = ['#7cc8ff', '#ffd76a', '#c49bff', '#7dffb2', '#ffffff'][i % 5];
      p.style.animationDelay = Math.random() * .6 + 's';
      c.appendChild(p);
    }
    document.body.appendChild(c); setTimeout(() => c.remove(), 3500);
  }

  /* ---------------- Anleitung ---------------- */
  function guideView() {
    return `<section class="win-box prose">
      <h2>📜 Anleitung: So funktioniert Hygiene-Quest</h2>
      <div class="guide-grid">
        <div class="g"><span>1</span><h4>Videokonferenz starten</h4><p>Treffen Sie sich zu zweit online (Teams, Zoom, …). Eine Person öffnet das Spiel und <b>teilt den Bildschirm mit Ton</b>. Beide schalten die <b>Kamera</b> ein.</p></div>
        <div class="g"><span>2</span><h4>Heldengruppe bilden</h4><p>Tragen Sie beide <b>vollständigen Namen</b> ein. Diese Namen stehen später auf der Bescheinigung.</p></div>
        <div class="g"><span>3</span><h4>Kapitel wählen</h4><p>Auf der Weltkarte sehen Sie 8 Kapitel. Ein Kapitel dauert ca. <b>45 Minuten</b>. Das nächste Kapitel wird erst freigeschaltet, wenn das vorherige fertig ist.</p></div>
        <div class="g"><span>4</span><h4>Rollen</h4><p><b>🎮 Am Steuer:</b> liest, klickt, entscheidet, macht vor.<br><b>👀 Coach:</b> hört zu, fragt nach, prüft mit Checklisten, gibt Feedback. Die Rollen wechseln automatisch.</p></div>
        <div class="g"><span>5</span><h4>Schritte</h4><p>📚 Wissensschriften · 🧩 Rätsel · 🗂️ Zuordnen · 🤝 Tandem-Aufgabe · ⚔️ Kampf (Entscheidungs-Fall) · 🎬 Video-Quest · ✅ Kapitel-Prüfung · ✍️ Reflexion. „Weiter“ geht erst, wenn ein Schritt geschafft ist.</p></div>
        <div class="g"><span>6</span><h4>Fehler & Korrektur</h4><p>Falsche Entscheidungen kosten Patienten HP. Sie müssen den Fehler besprechen und korrigieren. Bei unter ${CFG.scenarioPass} % Patientensicherheit oder unter ${Math.round(CFG.quizPass * 100)} % in der Kapitel-Prüfung wiederholen Sie den Teil – mit Erklärungen.</p></div>
        <div class="g"><span>7</span><h4>Video-Quests</h4><p>Sehen Sie sich das Lehrvideo (YouTube) und die Animation an. Dann macht jede Person die Technik <b>vor der Kamera</b> nach. Die andere Person hakt die Checkliste ab. <b>Alle Punkte</b> müssen stimmen – sonst folgt ein neuer Versuch.</p></div>
        <div class="g"><span>8</span><h4>Speichern</h4><p>Alles wird <b>automatisch</b> in diesem Browser gespeichert. Unter 💾 <b>Spielstand</b> erhalten Sie einen Code. Damit kann auch die andere Person auf ihrem Gerät weiterspielen.</p></div>
        <div class="g"><span>9</span><h4>Bescheinigung</h4><p>In Kapitel 8 macht jede Person allein den Abschlusstest. Danach erstellen Sie unter 🎓 für <b>jede Person</b> eine Teilnahmebescheinigung (PDF). Sie wird an die Kursleitung gesendet.</p></div>
      </div>
      <h3>🛠️ Hilfen im Spiel</h3>
      <ul><li><b>🔊 Vorlesen:</b> Texte werden vorgelesen (gut für die Aussprache).</li><li><b>📖 Wörterbuch:</b> Fachwörter einfach erklärt.</li><li><b>⏱️ Timer:</b> zeigt die Zeit für Tandem-Aufgaben.</li><li><b>Material für Video-Quests:</b> Desinfektionsmittel oder Handcreme, Einmal- oder Haushaltshandschuhe, ein Hemd/eine Jacke als Kittel, Maske, Brille, Tuch.</li></ul>
      <p class="muted small">Die Inhalte orientieren sich an den Empfehlungen der KRINKO beim Robert Koch-Institut und an der „Aktion Saubere Hände“. In der Praxis gilt immer der Hygieneplan Ihrer Einrichtung.</p>
      ${S.team ? '<button class="btn" data-go="map">Zur Weltkarte →</button>' : '<button class="btn" data-go="welcome">Zur Anmeldung →</button>'}
    </section>`;
  }

  /* ---------------- Wörterbuch ---------------- */
  function glossaryView() {
    setTimeout(() => {
      const i = document.getElementById('gq'); if (!i) return;
      i.oninput = () => { const q = i.value.toLowerCase(); app.querySelectorAll('.gl-item').forEach(el => el.hidden = !el.textContent.toLowerCase().includes(q)); };
    });
    return `<section class="win-box prose"><h2>📖 Wörterbuch der Hygiene</h2><input id="gq" class="search" placeholder="Suchen …">
      <div class="gloss">${window.HQ_GLOSSARY.map(([w, e], k) => `<div class="gl-item"><b>${esc(w)}</b><p id="gl${k}">${esc(e)}</p><button class="btn ghost sm" data-speak="gl${k}">🔊</button></div>`).join('')}</div></section>`;
  }

  /* ---------------- Spielstand ---------------- */
  function saveView() {
    setTimeout(() => {
      const cp = document.getElementById('cpBtn'), imp = document.getElementById('impBtn'), rs = document.getElementById('rstBtn'), dl = document.getElementById('dlBtn');
      if (cp) cp.onclick = () => { const t = document.getElementById('code'); t.select(); try { navigator.clipboard.writeText(t.value); } catch (e) { document.execCommand('copy'); } toast('✓ Code kopiert'); };
      if (dl) dl.onclick = () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([exportCode()], { type: 'text/plain' })); a.download = 'hygiene-quest-spielstand.txt'; a.click(); };
      if (imp) imp.onclick = () => { try { importCode(document.getElementById('icode').value); toast('✓ Spielstand geladen', 'ok'); go('map'); } catch (e) { toast('Der Code ist ungültig.', 'bad'); } };
      if (rs) rs.onclick = () => { if (confirm('Wirklich ALLES löschen und neu beginnen? Das kann nicht rückgängig gemacht werden.')) { S = fresh(); save(); go('welcome'); } };
    });
    return `<section class="win-box prose narrow"><h2>💾 Spielstand</h2>
      <p>Ihr Fortschritt wird <b>automatisch</b> in diesem Browser gespeichert. Wenn Sie den Browser oder das Gerät wechseln, nutzen Sie den Spielstand-Code.</p>
      ${S.team ? `<h3>Code exportieren</h3><p class="muted small">Kopieren Sie den Code und senden Sie ihn Ihrer Tandem-Person (z. B. im Chat der Videokonferenz). So kann sie auf ihrem Gerät weiterspielen und den Bildschirm teilen.</p>
      <textarea id="code" rows="4" readonly>${exportCode()}</textarea>
      <div class="row"><button class="btn" id="cpBtn">📋 Code kopieren</button><button class="btn ghost" id="dlBtn">⬇ Als Datei speichern</button></div>` : ''}
      <h3>Code laden</h3><textarea id="icode" rows="3" placeholder="Code hier einfügen …"></textarea><button class="btn" id="impBtn">Spielstand laden</button>
      ${S.team ? `<h3>Statistik</h3><ul><li>Bearbeitungszeit gesamt: <b>${fmtMin(totalTime())}</b></li>${MIS.map(m => `<li>Kapitel ${m.nr}: ${ms(m.id).status === 'done' ? '💎' : '⏳'} · ${fmtMin(S.time[m.id])}</li>`).join('')}</ul>
      <h3>Neu beginnen</h3><button class="btn danger" id="rstBtn">Alles löschen</button>` : ''}
    </section>`;
  }

  /* ---------------- Bescheinigung ---------------- */
  function certId(k) {
    const base = (S.team[k] + S.team.start + k).split('').reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
    return 'HQ-' + new Date(S.team.start).getFullYear() + '-' + base.toString(36).toUpperCase().padStart(7, '0');
  }
  function certView() {
    if (!allDone()) return `<section class="win-box"><h2>🎓 Teilnahmebescheinigung</h2><p>Die Bescheinigung wird freigeschaltet, wenn alle 8 Kapitel abgeschlossen sind.</p><button class="btn" data-go="map">Zur Weltkarte</button></section>`;
    setTimeout(bindCert);
    return `<section class="win-box prose"><h2>🎓 Teilnahmebescheinigungen</h2>
      <p>Herzlichen Glückwunsch! Sie haben alle Kapitel geschafft. <b>Jede Person</b> erstellt jetzt ihre eigene Bescheinigung und sendet sie an die Kursleitung.</p>
      <div class="certs">${['a', 'b'].map(k => {
        const c = S.certs[k] || {};
        return `<div class="cert-card">
          <div class="cc-top">📜</div><h3>${esc(S.team[k])}</h3>
          <p class="muted small">Abschlusstest: ${S.finals[k] ? Math.round(S.finals[k].score * 100) + ' %' : '–'} · ID ${certId(k)}</p>
          <label>Name auf der Bescheinigung prüfen<input data-cname="${k}" value="${esc(S.team[k])}"></label>
          <div class="row"><button class="btn ghost" data-pdf="${k}">⬇ PDF herunterladen</button>
          <button class="btn" data-send="${k}">${c.sent ? '✓ Gesendet – erneut senden' : '📨 An Kursleitung senden'}</button></div>
          ${c.sent ? `<p class="ok-txt small">Gesendet am ${new Date(c.sent).toLocaleString('de-DE')}</p>` : ''}
          <p class="small" data-status="${k}"></p>
        </div>`;
      }).join('')}</div>
      <p class="muted small">Die Bescheinigung wird über das Formular dieser Website an die Kursleitung übermittelt. Falls das nicht klappt, laden Sie die PDF herunter und senden Sie sie per E-Mail an <b>${esc(CFG.lecturerEmail)}</b>.</p>
    </section>`;
  }
  function bindCert() {
    app.querySelectorAll('[data-cname]').forEach(i => i.onchange = () => { const v = i.value.trim(); if (v.length >= 3) { S.team[i.dataset.cname] = v; save(); } });
    app.querySelectorAll('[data-pdf]').forEach(b => b.onclick = async () => { const doc = await makePdf(b.dataset.pdf); if (doc) doc.save(fileName(b.dataset.pdf)); });
    app.querySelectorAll('[data-send]').forEach(b => b.onclick = () => sendCert(b.dataset.send, b));
  }
  const fileName = (k) => 'Teilnahmebescheinigung_' + S.team[k].replace(/[^\wäöüÄÖÜß-]+/g, '_') + '.pdf';
  function summary(k) {
    const other = k === 'a' ? 'b' : 'a';
    return [
      'Teilnehmer/in: ' + S.team[k], 'Tandempartner/in: ' + S.team[other], 'Gruppe: ' + S.team.name,
      'Modul: ' + CFG.modulCode + ' ' + CFG.modulTitel, 'Umfang: ' + CFG.umfang,
      'Start: ' + new Date(S.team.start).toLocaleString('de-DE'),
      'Abschlusstest bestanden am: ' + (S.finals[k] && S.finals[k].date ? new Date(S.finals[k].date).toLocaleString('de-DE') : '-'),
      'Abschlusstest: ' + (S.finals[k] ? Math.round(S.finals[k].score * 100) + ' % (' + S.finals[k].tries + ' Versuch/e)' : '-'),
      'Gemessene Bearbeitungszeit (aktiv im Spiel): ' + fmtMin(totalTime()),
      'Patientensicherheit am Ende: ' + safety() + ' %', 'EXP: ' + S.xp,
      '', 'Kapitel:', ...MIS.map(m => ` - K${m.nr} ${m.title}: abgeschlossen ${ms(m.id).finished ? new Date(ms(m.id).finished).toLocaleDateString('de-DE') : ''}, Prüfung ${ms(m.id).quiz.best ? Math.round(ms(m.id).quiz.best * 100) + ' %' : '-'}, Zeit ${fmtMin(S.time[m.id])}`),
      '', 'Video-Quests (Peer-Check, Versuche):', ...Object.entries(S.peer).map(([q, v]) => ` - ${q}: ${v[k].passed ? 'bestanden' : 'offen'} (${v[k].tries})`),
      '', 'Lernvertrag:', ' ' + ((S.reflections.m8 || {})['0' + k] || '-'), ' ' + ((S.reflections.m8 || {})['1' + k] || '-'),
      '', 'Zertifikat-ID: ' + certId(k)
    ].join('\n');
  }
  function loadJsPdf() {
    if (window.jspdf) return Promise.resolve(true);
    return new Promise((res) => {
      const s = document.createElement('script'); s.src = JSPDF_URL; s.onload = () => res(!!window.jspdf); s.onerror = () => res(false);
      document.head.appendChild(s); setTimeout(() => res(!!window.jspdf), 15000);
    });
  }
  async function makePdf(k) {
    if (!(await loadJsPdf())) { toast('Die PDF-Funktion konnte nicht geladen werden (Internetverbindung prüfen).', 'bad'); return null; }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const W = 210, other = k === 'a' ? 'b' : 'a';
    const date = S.finals[k] && S.finals[k].date ? new Date(S.finals[k].date) : new Date();
    doc.setFillColor(22, 50, 79); doc.rect(0, 0, W, 38, 'F');
    doc.setFillColor(255, 255, 255); doc.roundedRect(18, 10, 18, 18, 3, 3, 'F');
    doc.setFillColor(43, 181, 168); doc.rect(25, 12, 4, 14, 'F'); doc.rect(20, 17, 14, 4, 'F');
    doc.setTextColor(255, 255, 255); doc.setFont('helvetica', 'bold'); doc.setFontSize(13);
    doc.text(CFG.organisation, 42, 19); doc.setFont('helvetica', 'normal'); doc.setFontSize(10);
    doc.text('Digitales Selbstlern-Rollenspiel "Hygiene-Quest"', 42, 26);
    doc.setTextColor(30, 50, 60); doc.setFont('helvetica', 'bold'); doc.setFontSize(28);
    doc.text('Teilnahmebescheinigung', W / 2, 62, { align: 'center' });
    doc.setFont('helvetica', 'normal'); doc.setFontSize(12);
    doc.text('Hiermit wird bescheinigt, dass', W / 2, 78, { align: 'center' });
    doc.setFont('helvetica', 'bold'); doc.setFontSize(22); doc.text(S.team[k], W / 2, 92, { align: 'center' });
    doc.setDrawColor(43, 181, 168); doc.setLineWidth(.6); doc.line(45, 96, W - 45, 96);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(12);
    doc.text('erfolgreich an der Lerneinheit teilgenommen hat:', W / 2, 106, { align: 'center' });
    doc.setFont('helvetica', 'bold'); doc.setFontSize(13);
    doc.text(doc.splitTextToSize(CFG.modulCode + ' – ' + CFG.modulTitel, 160), W / 2, 116, { align: 'center' });
    doc.setFont('helvetica', 'normal'); doc.setFontSize(11);
    const rows = [
      ['Umfang', CFG.umfang],
      ['Lernform', 'Remote-Selbstlernen in Tandemarbeit mit gegenseitiger Praxisüberprüfung (Peer-Check)'],
      ['Tandempartner/in', S.team[other]],
      ['Abschlusstest', (S.finals[k] ? Math.round(S.finals[k].score * 100) : '-') + ' % (bestanden ab ' + Math.round(CFG.finalPass * 100) + ' %)'],
      ['Abgeschlossen am', date.toLocaleDateString('de-DE')]
    ];
    let y = 134;
    rows.forEach(([a, b]) => { doc.setFont('helvetica', 'bold'); doc.text(a + ':', 30, y); doc.setFont('helvetica', 'normal'); const l = doc.splitTextToSize(b, 120); doc.text(l, 75, y); y += 7 * l.length; });
    y += 4; doc.setFont('helvetica', 'bold'); doc.text('Inhalte:', 30, y); y += 7; doc.setFont('helvetica', 'normal'); doc.setFontSize(10.5);
    const topics = ['Grundlagen der Hygiene, Infektionskette, nosokomiale Infektionen', 'Hygienische Händedesinfektion und die 5 Momente (praktisch geübt)', 'Einmalhandschuhe, Hautschutz und Hautpflege', 'Persönliche Schutzausrüstung: An- und Ablegen (praktisch geübt)', 'Multiresistente Erreger, Isolierung und Kommunikation mit Angehörigen', 'Hygiene bei Körperpflege, Kathetern, Verbandwechsel, Flächen, Wäsche, Abfall', 'Selbstschutz, Nadelstichverletzung, Hygiene unter Zeitdruck'];
    topics.forEach(t => { doc.text('•  ' + t, 34, y); y += 6; });
    doc.setFontSize(11); y = Math.max(y + 22, 255);
    doc.line(30, y, 95, y); doc.line(W - 95, y, W - 30, y);
    doc.setFontSize(9); doc.text('Ort, Datum', 30, y + 5); doc.text(CFG.kursleitung, W - 95, y + 5);
    doc.setTextColor(120, 130, 140); doc.setFontSize(8);
    doc.text('Zertifikat-ID: ' + certId(k) + '  ·  Erstellt am ' + new Date().toLocaleString('de-DE'), W / 2, 288, { align: 'center' });
    return doc;
  }
  async function sendCert(k, btn) {
    const status = app.querySelector(`[data-status="${k}"]`);
    btn.disabled = true; status.textContent = '⏳ Wird gesendet …';
    const doc = await makePdf(k);
    const fd = new FormData();
    fd.append('form-name', 'teilnahmebescheinigung');
    fd.append('teilnehmer', S.team[k]);
    fd.append('tandempartner', S.team[k === 'a' ? 'b' : 'a']);
    fd.append('team', S.team.name);
    fd.append('modul', CFG.modulCode + ' ' + CFG.modulTitel);
    fd.append('abschlusstest', S.finals[k] ? Math.round(S.finals[k].score * 100) + ' %' : '-');
    fd.append('bearbeitungszeit', fmtMin(totalTime()));
    fd.append('zertifikat_id', certId(k));
    fd.append('empfaenger', CFG.lecturerEmail);
    fd.append('zusammenfassung', summary(k));
    if (doc) fd.append('bescheinigung', doc.output('blob'), fileName(k));
    try {
      const res = await fetch('/', { method: 'POST', body: fd });
      if (!res.ok) throw new Error(res.status);
      S.certs[k] = { sent: Date.now() }; save();
      status.innerHTML = '✅ Erfolgreich an die Kursleitung gesendet!'; sfx.win(); confetti();
      btn.textContent = '✓ Gesendet – erneut senden';
    } catch (e) {
      const body = encodeURIComponent(summary(k) + '\n\n(Bitte die heruntergeladene PDF-Datei anhängen.)');
      const subj = encodeURIComponent('Teilnahmebescheinigung ' + CFG.modulCode + ' – ' + S.team[k]);
      status.innerHTML = `⚠️ Das automatische Senden hat nicht geklappt. So geht es trotzdem:<br>1. <a href="#" data-pdfx="${k}">PDF herunterladen</a><br>2. <a href="mailto:${CFG.lecturerEmail}?subject=${subj}&body=${body}">E-Mail an ${esc(CFG.lecturerEmail)} öffnen</a> und die PDF anhängen.`;
      status.querySelector('[data-pdfx]').onclick = (ev) => { ev.preventDefault(); if (doc) doc.save(fileName(k)); };
    }
    btn.disabled = false;
  }

  // Start
  if (S.team && ms(MIS[0].id).status === 'locked') ms(MIS[0].id).status = 'open';
  render();
})();
