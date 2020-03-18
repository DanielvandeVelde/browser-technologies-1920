# Browser Technologies

## Inleiding

Dit is de plek waar ik de uitwerkingen van de verscheidene opdrachten van Browser Technologies plaats.  
Alle testen die ik uitvoer vinden plaats op een Windows computer met Google Chrome.

## Inhoudsopgave

1. [Opdracht 1.1](#1-opdracht-11)
2. [Opdracht 1.2](#2-opdracht-12)

## 1. Opdracht 1.1

<details>
<summary>Uitwerking opdracht 1.1</summary>

### Afbeeldingen

Afbeeldingen kunnen om verschillende redenen niet werken.  
Zo kan het zijn dat de gebruiker slecht internet heeft en daarom de afbeeldingen niet snel of goed inladen.  
Tevens kan de gebruiker ook last hebben van een firewall die deze afbeeldingen blokeren.  
Soms staan afbeeldingen in de CSS en wanneer deze niet goed geladen worden falen de afbeeldingen ook.  
Er zijn verschillende plug-ins die afbeeldingen kunnen blokkeren.  
De gebruiker kan natuurlijk ook slechtziend of blind zijn en gebruik maken van een screenreader. In dit geval zijn afbeeldingen an sich niet genoeg.  
De server waar de plaatjes op staan kan soms ook niet bereikbaar zijn, of providers kunnen rommelen met het optimaliseren van afbeeldingen die binnenkomen.  
De gebruiker kan natuurlijk ook zelf de afbeeldingen uit zetten in zijn of haar browser.

Afbeeldingen zijn in verschillende browsers op andere manieren uit te zetten.

- Firefox: `about:config` > `permission.default.image` > All images
- Chrome: Settings > Advanced > Content Settings > Do not show any images
- Safari: Develop > Disable Images

#### Marktplaats

<kbd>![Marktplaats](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/IMG%20Marktplaats.png "Marktplaats")</kbd>

Marktplaats zonder afbeeldingen houdt aardig z’n vorm.  
Hier zouden makkelijk alt-texten kunnen staan met daarbij de titels of beschrijving.  
Advertenties laden echter wel gewoon.  
Natuurlijk zijn afbeeldingen erg belangrijk voor een website zoals Marktplaats, hier gaan ze naar mijn mening matig mee om.

#### NOS

<kbd>![NOS](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/IMG%20NOS.png "NOS")</kbd>

De NOS zonder afbeeldingen is absoluut niet storend.  
Zonder de afbeeldingen mis je amper functionaliteit.  
Bepaalde dingen zijn niet volledig netjes uitgelijnd, bepaalde tags zijn blanco, maar niets storends.

#### YouTube

<kbd>![YouTube](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/IMG%20YT.png "YouTube")</kbd>

YouTube heeft een goede oplossing gevonden.  
Hier maken zij namelijk gebruik van in-line .svg.  
Op deze manier laden alle/de meeste iconen zowel als hun logo uitstekend met de html mee.  
Ook al staan de afbeeldingen misschien uit.

### Javascript

Er zijn veel verschillende redenen waarom Javascript niet werkt.
Sommige gebruikers hebben javascript uitstaan, of blokkeren sommige javascript.  
Dit kan bijvoorbeeld door een ad-blocker of noscript browser plug-in.  
Ongeveer 0.2% van de gebruikers heeft Javascript uit staan.  
1% van de requests om Javascript op te halen falen.
En zelf giganten zoals Amazon webserver zijn wel eens niet bereikbaar en dan kan de Javascript niet geladen worden.  
Wat af en toe heel logisch en simpel lijkt, zoals de Wordpress WYSIWYG editor is zonder Javascript niet beschikbaar.

> “All your users are non-JS while they’re downloading your JS.”

     **- Jake Archibald**

#### 9292

<kbd>![9292](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/JS%209292.png "9292")</kbd>

Omdat er geen Javascript is, is het onmogelijk om een route te plannen via 9292.  
Ze laten je echter gewoon alles invullen (zonder autocomplete) en geven je (nadat je op ‘plan reis’ klikt) een 500 statuscode melding (Internal Server Error)

#### Bijenkorf

<kbd>![Bijenkorf](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/JS%20Bijenkorf.png "Bijenkorf")</kbd>

De Bijenkorf zonder Javascript zorgt er voor dat de gallerij onmogelijk te bedienen is.  
De afbeeldingen worden niet geladen en de knoppen werken niet.  
Dit kan natuurlijk makkelijk verholpen worden door alle afbeeldingen in te laden zowel als een scrollbalk.  
De gebruiker kan dan gewoon door de afbeeldingen heen scrollen.  
Deze kan je vervolgens met Javascript te verstoppen en te vervangen met deze wat nettere optie van knoppen en kleine afbeeldingen.

#### Blokker

<kbd>![Blokker](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/JS%20Blokker.png "Blokker")</kbd>

Wanneer er op het winkelmandje gedrukt word verschijnt er niets.  
Helemaal niets.  
Natuurlijk is het hebben van wat placeholder content wel zo handig.  
Dit zouden zij kunnen doen door alvast een container te hebben met hier informatie er in, zoals ‘geen artikelen’ of ‘winkelmandje kan niet worden opgehaald’ en vervolgens deze met Javascript vervangen wanneer dit kan.

#### Buienradar

<kbd>![Buienradar](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/JS%20Buienradar.png "Buienradar")</kbd>

Buienradar gaat aardig goed om met het niet hebben van Javascript.  
Er wordt enkel de eerste afbeelding ingeladen met de huidige tijd, deze hebben zij dus altijd klaar staan en wordt niet later met Javascript opgehaald.  
Hoewel de functionaliteit zoals de slider om het tijdstip te veranderen niet werkt, is het hebben van een indicatie door te zien wat de huidige weerssituatie is wel gewenst.  
Tevens heb je wel de mogelijkheid om de +3 en +24 uur situatie te zien.  
Het precieze scrubben naar een tijdstip of het hebben van een .gif animatie is er echter niet.

#### Google

<kbd>![Google](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/JS%20google.png "Google")</kbd>

Verassend genoeg is Google zonder Javascript de circa 2011 Google.  
Alle knoppen en opties zijn er, in mijn mening overzichtelijker door de zwarte balk aangezien ze niet achter een extra klik zitten.  
Tevens is het zij-menu ook erg overzichtelijk, wederom omdat het geen opties verstopt.  
Misschien geen gek idee om Javascript uit te hebben staan op Google.

#### HvA

<kbd>![HvA](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/JS%20HVA.png "HvA")</kbd>

De HvA is aardig goed met Progressive Enhancements.  
In plaats van bijvoorbeeld `<details>` te gebruiker (wat niet werkt op IE/Edge/Safari iOS trouwens) kiezen zij er voor om een <a> link te hebben waar je op moet klikken om de informatie te zien/uit te vouwen.  
Ik was dus erg geinteresseerd om te zien of deze informatie verborgen zou zijn als je Javascript uit heb staan.  
Tot mijn verassing is dit niet het geval, het verstoppen van de content wordt dus met Javascript gedaan zodat dit enkel gebeurd wanneer je ook Javascript heb om het weer te tonen.  
Dat is progressive Enhancement!

#### Thuisbezorgd

<kbd>![Thuisbezorgd](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/JS%20Thuisbezorgd.png "Thuisbezorgd")</kbd>

Thuisbezorgd is niets zonder Javascript.  
De achtergrond afbeelding laadt niet in en het zoeken word gewoon genegeerd.  
Het was te verwachten, maar het is toch zonde.

#### YouTube

<kbd>![YouTube](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/JS%20YT.png "YouTube")</kbd>

Een groot skelet.  
Waarschijnlijk omdat advertenties e.d. geleverd worden door middel van Javascript werkt heel YouTube niet zonder.  
Dit gaat dus niet meer om Progressive Enhancement maar meer over het leveren van een dienst, en dat je niet wilt dat mensen die dienst afnemen zonder te ‘betalen’  
HTML5 `<video>` is overigens uitstekend. Dit heeft ook een ingebouwde manier om een boodschap te leveren als iemand geen HMTL5 supporting browser heeft.  
Het `<video>` element kan zelfs door middel van Javascript gespeeld, gepauzeerd, groter (of kleiner, preload, muted, loop etc.) worden gemaakt.

</details>

## 2. Opdracht 1.2

<details>
<summary>Opdracht 1.2 uitwerking</summary>

### Inleiding

Voor deze applicatie heb ik mijn WAFS opdracht bekeken.  
Waar ik wijzigingen kon maken heb ik dat natuurlijk gedaan, wanneer dit niet mogelijk was staat dit nog in de Todo beschreven die aan het eind van deze 8 features te vinden is.
De nieuwe variant met de wijzigingen zal ik binnenkort doorvoeren in m'n progressive web app.

### Afbeeldingen

Afbeeldingen mogen iets kleiner zijn tom er voor te zorgen dat deze sneller laden.
Verder is het niet een heel groot probleem dat ik gebruik maak van een enkele achtergrond afbeelding.

### Custom Fonts

Ik maak gebruik van Roboto die ik inlaad door middel van de CSS.
Anders gaat deze over op een sans-serif of de default van de browser.
In principe dus niet een heel groot drama, gelukkig maar!

### Kleur

Ik dacht dat kleur mogelijk een probleem zou kunnen worden.  
De pagina zoals ik hem heb gemaakt is vrij donker.  
Hoewel ik dacht dat het in principe goed zichtbaar was zijn de zwarte teksten in het hoofdonderdeel van de homepagina, zowel als de groen en rode teksten volgende de Google Chrome Audit niet goed leesbaar.  
Ik zal dus even goed moeten kijken of ik de achtergrondkleur lichter kan maken en het contrast tussen deze twee kan verhogen.
Dit zal ook gelijk de leesbaarheid van de pagina verhogen.

### Muis/Trackpad

Ik had meerdere problemen met het navigeren door mijn applicatie met gebruik van een trackpad of de tab-functionaliteit.  
De `:focus`-state van het zoek/inputveld bovenaan de pagina is de enige die goed zichtbaar is op Firefox.
Chrome zet hier netjes een blauwe rand omheen, maar in standaard Firefox is dit iets waar ik aan kan werken.
Ik heb op de lijstitems wel een `:hover` op staan, wat maar eens bewijst dat ik absoluut niet heb nagedacht over accesibility en enkel over de muis.

### Breedband

De afbeeldingen zouden kleiner kunnen worden gemaakt.  
Niet alleen gebruik ik niet de volledige achtergrond afbeelding maar deze is ook nog eens veels te groot, en zou zeker kleiner kunnen worden gemaakt.
Ook kan ik alle Javascript-bestanden en CSS-bestanden minifyen, uglifyen en/of compressen. op deze manier maak ik de website een stuk sneller voor mensen met minder snel internet.

### Javascript

De applicatie features werken _niet_ zonder Javascript.
Natuurlijk is het mogelijk om alle Javascript serverside te houden maar zelfs dan loop ik tegen restricties.
Ik zou dus alles voor de hoofdpagina op de server kunnen ophalen en vervolgens serveren.
De grafieken die ik maak op de detailpagina zijn echter `<canvas>` elementen dus dit zou op een andere manier moeten.
De eerste oplossing die ik hier voor kan verzinnen is van de grafiek een `<svg>` te maken of om een andere manier een afbeelding te creeeren die ik kan plaatsen op de pagina.

### Cookies

Ik maak geen gebruik van cookies, misschien zou ik dit wel kunnen doen voor het wisselen van pagina's.

### Localstorage

Ik maak gebruik van localStorage maar meer omdat dit een requirement was van de Web-App-From-Scratch opdracht.
Persoonlijk zou ik deze het liefst aanpassen of volledig weghalen.

### Device Lab

Op mobiel is mijn website momenteel **veels** te klein.
Ik ben onder de indruk hoe moeilijk het is om op de verschillende knoppen te drukken van niet alleen de navigatiebalk boven aan de pagina, maar ook de verschillende items in de lijst zelf.
Dit is iets waar ik even goed naar moet kijken en desnoods moet oplossen met mediaqueries.

### Screenreader

Het testen met de screenreader ging niet super goed.
De verschillende lagen in de lijst met informatie er in die ik met een `<span>` gestijld staat maar gelukkig nog wel in de juiste volgorde word voorgelezen.

### Overige accessibility

Mijn form-elementen hebben geen labels. Dit is best een interessante fout van mij. Tevens als het feit dat er geen clickable button is om te zoeken.
De links om mijn list-items heen hebben geen naam. Dit is volgens de accesibility list ook iets wat aangepast moet worden.
Er zitten lijsten in mijn lijst objecten. Dit is blijkbaar ook iets wat niet correct is.

### Todo

- [ ] Labels & buttons voor searchbar
- [ ] Content voor de `<a>`-items
- [ ] Geen `<ul>` in de `<li>`'s
- [ ] afbeeldingen omgezet naar .svg voor sneller laden (ook lokaal hosten)
- [ ] Kleiner CSS-bestand zodat afbeeldingen e.d. sneller worden geladen
- [ ] Contrast verhoogt tussen achtergrond- en textkleuren
- [ ] Minified css
- [ ] Mobile-friendly
- [ ] :focus-state duidelijker maken (mogelijk hetzelfde als :hover)
- [ ] prebuilden van minify/uglify en compression van bestanden
- [ ] fallback voor geen javascript

</details>

## Opdracht 2

<details>
<summary>Opdracht 2 uitwerking </summary>

### Use case

2. Ik wil mijn eigen t-shirt-met-nerdy-tekst kunnen ontwerpen, printen, opslaan en een volgende keer dat ik de site bezoek kunnen gebruiken.

### HTML

<kbd>![Puur HTML](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/UC%201.png "Puur HTML")</kbd>

### CSS

### HTML / CSS / Javascript

<kbd>![CSS+Javascript](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/UC%203.png "CSS+Javascript")</kbd>

</details>
