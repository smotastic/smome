# Einleitung
Tool um Zeiten, Urlaub und Fahrtkosten für Externe zu verwalten.

Es gibt 2 Seiten und Einstellungen.
Jede dieser Seiten stellt einen Kalendar dar.

In der ersten Version ist das eine reine Clientvariante. Die Synchronisation der Daten passiert über den Localstorage. In einer späteren Version wird es eine Anbindung über Rest an einen Server geben, um die Daten zentral ablegen zu können.

Über eine Serverkommunikation soll es später auch möglich sein, die eingetragenen Zeiten als entsprechendes für die Firma benötigtes Excel herunterzuladen.

# Zeiten
Die erste Seite verwaltet die allgemeinen zu buchenden **Zeiten**.
Die Seite zeigt einen Kalendar für den aktuellen Monat an.
Für jeden Tag kann eine Zeit gebucht werden. *Von/Bis*.
Eingetragener Urlaub wird farblich hervorgehoben.

# Urlaub
Die zweite Seite dient dem eintragen des Urlaubs. Eingetragener Urlaub unterliegt 3 Statis. *Eingetragen*, *Genehmigt*, *Genommen*.
Eingetragener Urlaub wird automatisch auf der **Zeiten** Seite farblich markiert.

# Einstellungen
In den Einstellungen können folgende Anpassungen vorgenommen werden.
* Früheste Startzeit eintragen
* Mindestzeit der Pause
* Maximal Zeit der erlaubten Stunden pro Tag

# Ideen
* Lokaler Export der Daten
* Download im Excel Format für Buchhaltung (beinhaltet eigenen Server)