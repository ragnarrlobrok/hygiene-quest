# Hygiene-Quest – Die Kristalle von St. Hygiea

Selbstlern-Rollenspiel für den **Vorbereitungslehrgang zur Kenntnisprüfung Pflege**
Modul **T1_CE_02_M_03 – Hygienische Grundsätze für das Praxisfeld Pflege anwenden**
Umfang: **8 UE à 45 Minuten** · Zielgruppe: Sprachniveau bis **B2** · Lernform: **Tandems (Partnerarbeit) – remote per Videokonferenz oder face to face**

## Was die App kann

| Funktion | Umsetzung |
|---|---|
| Rollenspiel im Krankenhaus | Station 3B im „Klinikum St. Hygiea“, 6 Patientinnen und Patienten mit HP-Balken, Fantasy-Rollenspiel-Design |
| Entscheidungen mit Folgen | 8 „Kämpfe“ (Entscheidungs-Fälle, 42 Situationen). Jede falsche Entscheidung schadet einem bestimmten Patienten; danach muss die Entscheidung korrigiert werden |
| Remote oder face to face | Beim Start wählbar, jederzeit unter „Spielstand“ änderbar; Texte passen sich an |
| Maximale Partnerarbeit | Feste Rollen **„Am Steuer“** und **„Coach“**, die automatisch wechseln; 20 Sekunden Diskussionspflicht vor jeder Entscheidung; Tandem-Aufgaben mit Timer und Checkliste; Rollenspiele; Prüfungssimulation |
| Drei deutsche Videos pro Kapitel | **Einstiegsvideo** mit Beobachtungsauftrag · **Video zum Nachmachen** in der Video-Quest · **Abschlussvideo** mit Transfer-Diskussion (24 geprüfte YouTube-Links, eingebettet + als Links) |
| Video-Quests mit Peer-Check | 8 Quests (Händewaschen, Händedesinfektion, Handschuhe, PSA, FFP2-Maske, Wischdesinfektion, Nadelstich, Verbandwechsel): Video (teils + Animation) → jede Person macht nach → Partner prüft mit Checkliste |
| Anspruchsvolle Diskussionen | Zu **jeder** Entscheidung im Kampf eine Vertiefungsfrage mit Musterantwort; zusätzliche Expertenrunden in Kapitel 2, 3, 4 und 6 |
| Korrektur- und Verbesserungsschleifen | Fall < 60 % Patientensicherheit → Fallbesprechung + Wiederholung · Kapitel-Prüfung < 80 % → Fehlererklärung + neuer Versuch · Peer-Check unvollständig → fehlende Punkte + Video erneut + neuer Versuch · Abschlusstest < 80 % → neuer Versuch |
| Schrittweise Freischaltung | Kapitel und Schritte werden nacheinander freigeschaltet |
| Speichern | Automatisch im Browser (localStorage) + **Spielstand-Code** zum Wechseln des Geräts |
| Anleitung | Einführung beim ersten Start, Seite „Anleitung“, Wörterbuch, Vorlesefunktion (liest keine Emojis/Hautfarben vor, zweiter Klick stoppt) |
| Teilnahmebescheinigung | Nach Abschluss erstellt **jede Person** ihre eigene PDF-Bescheinigung und sendet sie an die Kursleitung |
| Anrede | durchgehend „Sie“ |

## Inhalte (nach Curriculum)

1. Dienstbeginn: Keime verstehen (Infektionskette, nosokomiale Infektionen, Dienstkleidung)
2. Händehygiene: Die 5 Momente (Video-Quest Händedesinfektion)
3. Handschuhe & Hautschutz (Video-Quest Handschuhe)
4. Schutzkleidung / PSA (Video-Quest An- und Ablegen)
5. Isolierung & multiresistente Erreger (Rollenspiel Angehörigengespräch)
6. Hygiene in der pflegerischen Unterstützung (Video-Quest Wischdesinfektion)
7. Selbstschutz & Hygiene unter Zeitdruck (Video-Quest Nadelstich, Dilemma-Diskussion)
8. Finale: Gesamtfall, Simulation der mündlichen Kenntnisprüfung, Abschlusstest (einzeln), Lernvertrag

Grundlage: KRINKO-Empfehlungen (RKI) zur Händehygiene, Aktion Saubere Hände, TRBA 250.

## Dateien

```
index.html        Startseite + verstecktes Netlify-Formular
css/style.css     Design
js/config.js      >>> EINSTELLUNGEN (E-Mail, Bestehensgrenzen, YouTube-Videos) <<<
js/content.js     Alle Lerninhalte, Fälle und Fragen (hier anpassen)
js/content-plus.js  Video-Schritte, neue Quests, Expertenrunden, Vertiefungsfragen
js/demos.js       Animierte Lehrvideos
js/app.js         Spiel-Logik
netlify.toml      Netlify-Einstellungen
```

## Veröffentlichen auf Netlify (über GitHub)

1. Auf GitHub ein neues Repository anlegen (z. B. `hygiene-quest`) und diesen Ordner hochladen
   (oder: `git remote add origin https://github.com/IHR-NAME/hygiene-quest.git` und `git push -u origin main`).
2. Auf [app.netlify.com](https://app.netlify.com) → **Add new project → Import an existing project → GitHub** → Repository wählen.
   Build command: *leer lassen* · Publish directory: `.` → **Deploy**.
3. **Formulare aktivieren:** Im Netlify-Projekt → **Forms** → *Enable form detection* → danach einmal neu deployen
   (Deploys → Trigger deploy). Das Formular `teilnahmebescheinigung` erscheint dann unter *Forms*.
4. **E-Mail-Benachrichtigung einrichten (wichtig!):** Project configuration → **Notifications → Emails and webhooks →
   Form submission notifications → Add notification → Email notification**
   → Formular `teilnahmebescheinigung` → E-Mail: **T100285@outlook.de** → Speichern.
   Ab jetzt erhalten Sie bei jeder abgeschickten Bescheinigung eine E-Mail mit allen Angaben
   (Name, Partner/in, Testergebnis, Bearbeitungszeit, Lernvertrag) und einem Link zur PDF-Datei.
   Alle Einsendungen sehen Sie außerdem im Netlify-Bereich **Forms**.

> Hinweis: Wenn der Versand einmal nicht klappt (z. B. lokal geöffnet), zeigt die App automatisch einen
> Ersatzweg an: PDF herunterladen + vorbereitete E-Mail an die Kursleitung.

## Anpassen

- **E-Mail / Lehrgangsname / Bestehensgrenzen:** `js/config.js`
- **YouTube-Videos austauschen:** `js/config.js` → `videos` → Kapitel (`m1` … `m8`) → `intro` / `action` / `outro`. Das erste Video je Liste wird eingebettet, die anderen als Links gezeigt.
  Eigene MP4-Dateien: in einen Ordner `videos/` legen und `{ url: 'videos/datei.mp4', title: '…', quelle: '…' }` eintragen.
- **Texte, Fälle, Fragen:** `js/content.js`

Die verlinkten YouTube-Videos wurden am 23.10.2026 auf Erreichbarkeit und Einbettbarkeit geprüft (Inhalt nur anhand von Titel und Anbieter). Bitte sehen Sie sie vor dem Kurs selbst an –
in der Praxis gilt immer der Hygieneplan der jeweiligen Einrichtung (z. B. kann die Reihenfolge beim PSA-Ablegen abweichen).

## Datenschutz

Spielstände bleiben im Browser der Teilnehmenden. An die Kursleitung (Netlify Forms) werden nur beim Klick auf
„An Kursleitung senden“ Name, Tandempartner/in, Ergebnisse, Bearbeitungszeit, Lernvertrag und die PDF übertragen.
Eingebettete YouTube-Videos werden über `youtube-nocookie.com` geladen.
