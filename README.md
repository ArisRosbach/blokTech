# PawFinder
<p align="center">
  <img width="70%" src="https://github.com/ArisRosbach/blokTech/blob/main/images/bannerPawFinder.png" />
</p>

## :paw_prints:Over dit project
Dit project bevat een feature voor een matching applicatie. <br>
Let op: dit is dus geen gehele matching applicatie maar een onderdeel daarvan.

### Concept en Feature
Het concept wat ik heb bedacht is dieren uit het asiel koppelen aan toekomstige baasjes. 
Hierbij wil ik me focussen op het kunnen filteren van matches. <br>
Wanneer je bent ingelogd krijg je alle potentiële matches te zien. Aangezien je als gebruiker vaak iets specifieks zoekt kun je gaan filteren. In dit voorbeeld nemen we even aan dat het toekomstige baasje een hond zoekt. Hierbij geeft diegene dit aan bij de filters en drukt die op opslaan. Bij je potentiële matches krijg je dan alleen maar honden te zien. <br>
Daarnaast kun je in je eigen sessie een match verwijderen als je deze niet interessant vind. Bij elk dier vind je en verwijder knop. Wanneer je daar op drukt zal het dier verdwijnen uit jouw potentiële matches.


## :zap:Installatie 
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

## :computer:Database
Binnen dit project is er gebruik van een MongoDB database. <br>
Wil je hier meer over begrijpen en lezen wat mijn database structuur is? Dan verwijs ik je graag door naar de pagina [Database Structure](https://github.com/ArisRosbach/blokTech/wiki/Database-Structure) binnen mijn wiki. <br>
Hier vind je een korte toelichting over een database en heb ik de structuur in een afbeelding weergegeven. 


## :memo:Documentatie
Dit project is tot stand gekomen dankzij veel ideeën maar vooral onderzoek. <br>
Mijn gehele documentatie hiervan kun je vinden in de [wiki](https://github.com/ArisRosbach/blokTech/wiki) van deze repository. <br>
Hier lees je over hoe ik tot mijn concept en feature ben gekomen. Daarnaast heb ik ook veel onderzoek gedaan naar de onderwerpen die kwamen kijken bij het maken van dit project.


## :heavy_exclamation_mark:Lincense
Deze repository is licensed onder de [GNU General Public License v3.0](https://github.com/ArisRosbach/blokTech/blob/main/LICENSE)
<p align="center">
  <img width="80%" src="https://github.com/ArisRosbach/blokTech/blob/main/images/bannerLicense.png" />
</p>

## :email:Contact
Naam -  Aris Rosbach <br>
Email - aris.rosbach@hva.nl <br>
Project - https://github.com/ArisRosbach/blokTech
