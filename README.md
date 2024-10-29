# tristanschulze.eu 

## Seitenaenderungen Vornehmen

Um eine Aenderung vorzunehmen muss das entsprechende Markdown file in [diesem Ordner](src/content/) angepasst werden.
Die Seiten sind in englische (en) und deutsche (de) unterteilt.

Mit dem "edit" (Stift Icon) button kommt man ins Bearbeitungsmenu:

![image](https://github.com/user-attachments/assets/30a08fb2-c22e-461d-bf47-97777a1c7c0e)

Mit dem gruenen "Commit Changes" button veroeffentlicht man die Aenderungen sofort.

![image](https://github.com/user-attachments/assets/40319601-c23c-44d3-8f3a-98a810f9607c)

Die Syntax des files ist eine erweiterte Markdown Syntax. Mehr info hier: https://content.nuxt.com/usage/markdown
Hier ist ein Markdown cheat-sheet, dass mit der unerweiterten Syntax hilft: https://github.com/adam-p/markdown-here/wiki/markdown-cheatsheet

### Spezielle Komponenten & HTML Elemente

Ein paar spezielle Elemente sind auf den Markdown Seiten verfuegbar. 

Z.b. die `sm-links` (social media links):

```mdc
::sm-links{.mt-4}
::
```
Oder der `youtube-player`:

```mdc
::youtube-player{video-id="MKp30C3MwVk"}
::
```

Bilder haben spezielle attribute wie `copyright` und `height`.

```mdc
![Alt Text](/img/image.jpg){height="500px" caption="© Copyright"}
```

Manche HTML elemente wie der "line-break" `<br>` koennen folgendermaßen verwendet werden:

```mdc
::br
::
```

## Neuigketeiten/Konzerte u. Kompositionen Hinzufuegen

Jede Sprachversion der Website hat einen Ordner namens `compositions` und einen namens `concerts`. 
Um neue Daten hinzuzufuegen muss man nur ein weiteres File in beiden Sprachversionen erstellen.

Template fuer ein Konzert: 

```yml
---
title: My Title
start_date: 2024-09-06
image_src: /img/image.png
url: https://google.com/
description: |
  Lorem ipsum dolor sit amed and so on
  and so forth.
---
```

Template fuer eine Komposition: 

```yml
---
title: My Title
category: My Category
instrumentation:
  - My First Instrument
  - My Second Instrument
links:
  - name: Link
    url: https://google.com/
  - name: Other Link
    url: https://google.com/
description: |
  Lorem ipsum dolor sit amed and so on
  and so forth.
---
```

## Deployment Status 

Sobald auf "Commit Changes" geclickt wurde und der resultierende Dialog abgearbeitet ist, startet auf Github der deployment Prozess.
Man kann den prozess auf dem Tab "Actions" beobachten: 

![image](https://github.com/user-attachments/assets/e67420fa-80b7-4caf-a30d-1cfdadaf52b2)

Wenn alles gruen ist: Gut! Wenn rot oder ewig gelb/orange: Max anrufen!

Gut:

![image](https://github.com/user-attachments/assets/e6c560e2-a299-4cad-af7e-2742b5888ffe)

Nicht gut: Rotes "X"
oder, wenn ewig so:

![image](https://github.com/user-attachments/assets/7eafb776-e8c1-4b0d-a65a-06b404f74a80)

Wenn du dich abenteurlich fuehlst kannst du die logs unter dem "Actions" reiter selbst ansehen:

![image](https://github.com/user-attachments/assets/c56b586a-d544-4d98-b965-d6a52f3cf559)
