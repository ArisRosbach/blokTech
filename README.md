# Matching-application
Welkom bij mijn blokTech repository! :smiley:

## Over dit project
Dit project bevat een feature voor een matching applicatie. <br>
Let op: dit is dus geen gehele matching applicatie maar een onderdeel daarvan.

### Concept en Feature
Het concept wat ik heb bedacht is dieren uit het asiel koppelen aan toekomstige baasjes. 
Hierbij wil ik me focussen op het kunnen filteren van matches. <br>
Wanneer je bent ingelogd krijg je alle potentiële matches te zien. Aangezien je als gebruiker vaak iets specifieks zoekt kun je gaan filteren. In dit voorbeeld nemen we even aan dat het toekomstige baasje een hond zoekt. Hierbij geeft diegene dit aan bij de filters en drukt die op opslaan. Bij je potentiële matches krijg je dan alleen maar honden te zien. <br>
Daarnaast kun je in je eigen sessie een match verwijderen als je deze niet interessant vind. Bij elk dier vind je en verwijder knop. Wanneer je daar op drukt zal het dier verdwijnen uit jouw potentiële matches.


## Installatie 
### Aan de slag
Wil je aan de slag met mijn project? Voer dan de volgende stappen uit: <br>
1.	Open een terminal en navigeer naar een map waar jij mijn repository in wilt opslaan.
2.	Clone deze repository:
```
git clone https://github.com/ArisRosbach/blokTech
```
3.  Wanneer dit is gelukt heb je de repository op je eigen computer staan. Navigeer binnen deze repository in de terminal. Je wilt nu alle packages installeren die je nodig hebt voor deze feature. Om dit project vervolgens te laten werken voer je het volgende commando uit: <br>
```
npm install
```
4.	Als je het project wilt gebruiken tik dan het volgende in je terminal:
```
nodemon index.js
```
Ga naar een browser en navigeer naar: localhost:8000 <br>
Als alles goed is verlopen zie je de matches van de asieldieren en kun je filteren. <br>

### Node installeren
Heb je bij stap 3 problemen gehad dan kan dat zijn omdat je geen node hebt geïnstalleerd. 
1.  Open je terminal en installeer nvm met het volgende commando;
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```
2.  Sluit je terminal en start deze vervolgens opnieuw op. Tik het volgende in je terminal:
```
nvm install stable
```
3.  Nu heb je Node succesvol geïnstalleerd. Dit kun je met de volgende checken:
```
node -v # 
npm -v # 
```


## Documentatie
De gehele documentatie over hoe ik op mijn concept ben gekomen en hoe ik mijn feature heb uitgwerkt kun je terug vinden in de [Wiki](https://github.com/ArisRosbach/blokTech/wiki) van deze repository. 


## Lincense
ArisRosbach/blokTech is licensed under the [GNU General Public License v3.0](https://github.com/ArisRosbach/blokTech/blob/main/LICENSE)

## Contact
Naam -  Aris Rosbach <br>
Email - aris.rosbach@hva.nl <br>
Project - https://github.com/ArisRosbach/blokTech
