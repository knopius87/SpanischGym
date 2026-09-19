# Spanish Gym

Fertige, offline-fähige Lernapp für GitHub Pages – ohne externe Abhängigkeiten und ohne Datenübertragung.

## Enthaltene Seiten

- `index.html`: Schüler*innen-App mit U1/U2, Training, Challenges, Final Boss, XP, Fitness Clash, 30 Avataren und eigenen Wortschatzlisten.
- `lehrkraft.html`: Lehrkraft-Version zum Erstellen, Mischen und Drucken von Tests samt Lösungsschlüssel sowie zum Anlegen eigener Wortschatzlisten.

## Ordnerstruktur – bitte so beibehalten

```text
Repository-Hauptordner
├── index.html
├── lehrkraft.html
├── manifest.webmanifest
├── sw.js
├── README.md
├── .nojekyll
└── assets
    ├── avatars
    ├── bosses
    ├── icons
    ├── sports
    └── content.js
```

Die Dateien in `assets` wirken beim Durchsehen teilweise „versteckt“, sind aber absichtlich in Unterordnern organisiert. **Nicht herausnehmen, umbenennen oder einzeln verschieben:** Die App erwartet genau diese Pfade. Bei GitHub muss neben `index.html` deshalb auch der komplette Ordner `assets` hochgeladen werden.

## Veröffentlichen

1. Auf GitHub ein neues Repository anlegen.
2. Den **Inhalt** des entpackten Ordners `Spanish-Gym` hochladen – also `index.html`, `lehrkraft.html`, die übrigen Dateien und den kompletten Ordner `assets`.
3. Kontrollieren, dass `index.html` direkt auf der ersten Ebene des Repositorys sichtbar ist. Es darf nicht erst in einem zusätzlichen Unterordner wie `Spanish-Gym/Spanish-Gym/index.html` liegen.
4. **Settings → Pages** öffnen.
5. Unter **Build and deployment** die Quelle **Deploy from a branch** wählen.
6. Branch **main** und Ordner **/(root)** auswählen, anschließend speichern.
7. Nach einigen Minuten die von GitHub angezeigte Pages-Adresse öffnen.

Die Schüler*innen-App startet automatisch über `index.html`. Die Lehrkraft-Version liegt an derselben Adresse mit `/lehrkraft.html` am Ende.

Beispiel: Läuft die Schüler*innen-App unter `https://name.github.io/spanish-gym/`, dann lautet die Lehrkraft-Adresse `https://name.github.io/spanish-gym/lehrkraft.html`.

## Wenn nur eine leere Seite oder 404 erscheint

- Prüfen, ob `index.html` wirklich im gewählten Hauptordner `/(root)` liegt.
- Prüfen, ob der Ordner `assets` vollständig hochgeladen wurde.
- Groß- und Kleinschreibung der Dateinamen nicht verändern.
- Nach Änderungen einige Minuten warten und die Seite anschließend neu laden.

## Handy und iPad

Die veröffentlichte App im Browser öffnen und über **Handy & iPad** die Installationshinweise anzeigen. Auf iPhone/iPad wird im Teilen-Menü **Zum Home-Bildschirm** gewählt; auf Android/Chrome erscheint je nach Gerät **App installieren** oder **Zum Startbildschirm hinzufügen**. Nach dem ersten vollständigen Laden kann die App auch offline genutzt werden.

## Speicherung und Sicherung

XP, Avatar, Fitness und Lernfortschritt werden doppelt im Browser gespeichert: in `localStorage` und zusätzlich in IndexedDB. Unter **Handy & iPad** kann die App dauerhafte Speicherung anfragen, eine Sicherungsdatei herunterladen und diese später wieder einlesen.

Wichtig: Privates Surfen, ein anderer Browser bzw. ein anderes Gerät und das manuelle Löschen von Website-Daten können lokale Spielstände weiterhin entfernen. Für dauerhaft wichtige Stände deshalb regelmäßig **Daten sichern** verwenden und die GitHub-Pages-Adresse statt einer direkt geöffneten HTML-Datei nutzen.

## Eigene Wortschatzlisten

In `lehrkraft.html` eine Liste mit Zeilen im Format `Spanisch; Deutsch` speichern. Auf demselben Gerät steht sie sofort in der Schüler*innen-App unter **Eigene Listen** bereit. Für andere Geräte **Lernpaket für SuS herunterladen** wählen und die JSON-Datei dort über **Eigene Listen → Lernpaket importieren** laden.

## Tests drucken

In `lehrkraft.html` Unidad, Themen, Aufgabenzahl, Übersetzungsrichtung und Sportdesign wählen. **Test neu erzeugen** mischt die Aufgaben; **Drucken / PDF** öffnet den Druckdialog. Der optionale Lösungsschlüssel wird als eigene Seite ausgegeben.
