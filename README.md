# Browser Technologies

**Ik heb een [demo](https://browsertech-1920.herokuapp.com)!**

En voor dit college ook een [artikel/uitleg/tutorial](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/tutorial/tutorial.md) geschreven over hoe men data uit een formulier op kan halen, op kan slaan, en gebruiken met behulp van Node, Express en EJS.

## 1. Opdracht 1.1

<details>
<summary>Uitwerking opdracht 1.1</summary>

Alle testen die ik uitvoer vinden plaats op een Windows computer met Google Chrome.

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

Voor deze applicatie heb ik mijn [WAFS opdracht](https://github.com/danielvandevelde/web-app-from-scratch-1920) bekeken.  
Waar ik wijzigingen kon maken heb ik dat natuurlijk gedaan, wanneer dit niet mogelijk was staat dit nog in de Todo beschreven die aan het eind van deze 8 features te vinden is.
De nieuwe variant met de wijzigingen zal ik binnenkort doorvoeren in m'n progressive web app.
Alle testen die ik uitvoer vinden plaats op een Windows computer met Google Chrome.

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

Ik heb dit allemaal getest op [Browserstack](https://www.browserstack.com).  
Aangezien ik niet al deze interessante devices heb.  
Ook laat ik natuurlijk mijn falen zien ipv de devices en browsers waar het allemaal op werkt.
Ik kon daardoor niet makkelijk een inspector/console openen om te zien waar het precies fout ging, maar heb m'n best gedaan om te kijken wat er fout ging en de waarom te onderzoeken

<kbd>![IE11](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/DL%20IE11.png "IE11")</kbd>

Op IE11 kom je een error tegen van back- & forward caching. Dit gebeurde alleen op de niet Windows 10 versie van IE11 (want blijkbaar zijn die verschillend).  
Dit heeft te maken met bepaalde browserinstellingen (compatability) en de gebruikte Javascript in de pagina.

Het is mij niet gelukt precies vast te stellen waar het aan ligt maar waarschijnlijk is het de localStorage die dingen probeert de cachen, Google en StackOverflow geven hier namelijk hele interessante antwoorden op zoals bepaalde `window.onload`, `caching images` en andere dingen die er voor zorgen dat ik het niet direct kan oplossen zonder er een (paar) uur over te zweten.
Al zou sowieso alles vastlopen door de arrow-functions die ik gebruik 😊

<kbd>![iPad Safari](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/DL%20iPad%20Safari.png "iPad Safari")</kbd>

Op Safari loop ik ook tegen iets aan. Hier laadt namelijk alles goed, maar voert hij verder niets uit.  
Ik denk dat dit komt omdat ik een pre-2016 iPad gebruik (1-4, air, mini 1-4 en/of pro) die een iOS versie gebruikt van Chrome en Safari die geen arrow-functions ondersteund.

<kbd>![iPhone Safari](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/DL%20iPhone%20Safari.png "iPhone Safari")</kbd>

Op elk klein scherm maar hier getest op een iPhone met Safari, is mijn website momenteel **veels** te klein.  
Ik ben onder de indruk hoe moeilijk het is om op de verschillende knoppen te drukken van niet alleen de navigatiebalk boven aan de pagina, maar ook de verschillende items in de lijst zelf.  
Dit is iets wat opgelost kan worden door in eerste instantie te werken met viewport relative heights, maar wat ik ook met mediaqueries zou kunnen oplossen.

<kbd>![WindowsPhone](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/DL%20WindowsPhone.png "WindowsPhone")</kbd>

Op de allereerste Windows Phone waar ik op kon testen, de Nokia Lumia 520, is er ook van alles aan de hand.  
Hier zien we niet alleen dat de arrow-functions niet laden, de SVG wel beschikbaar is. Maar de CSS achtergrond-afbeelding + gradient die ik heb aangegeven niet werken.
Dit is dus ook een gevalletje van speciale CSS instellen (fallbacks werken niet want hij herkend de CSS dus wel) voor dit soort devices en natuurlijk; arrow-functions.

### Screenreader

Het testen met de screenreader ging niet super goed.
De verschillende lagen in de lijst met informatie er in die ik met een `<span>` gestijld staat maar gelukkig nog wel in de juiste volgorde word voorgelezen.
Daar zeg ik gelukkig bij, want het gaat in een snelheid waar ik misselijk van werd. Hoe snel de 'narrator' alles afraffelde van uur naar dag naar week door eerst het euro-teken uit te spreken, de volledige nummers en vervolgens de comma en alles wat daar achter kwam overweldigde mij wel.  
Hopelijk is dit iets wat je zelf kan instellen of iets waar je goed ik kan worden terwijl je het gebruikt, want ik weet helaas niet hoe je dit 'beter' kan maken.

Ik was ook niet in staat mijn `<h1>` te selecteren, wat iets was wat ik wel had verwacht wat voorgelezen werd terwijl je de pagina benaderde. Dat is iets wat ik op de detailpagina dus bijvoorbeeld wel in de titel moet zetten om duidelijk te maken op welke pagina je je bevind.

De detailpagina's zelf waren leeg.  
Omdat ik een canvas element gebruik om data te laten zien kon de screenreader dit niet voorlezen.  
Ik vraag me ook sowieso af hoe een screenreader een grafiek zou kunnen voorlezen en in mijn zoektocht op het internet heb ik helaas geen grafieken gevonden die voorleesbaar waren met een screenreader.  
De fallback echter zou een tabel zijn, die zijn zeker beschikbaar voor een screenreader en iets wat ook handig is voor mensen die geen Javascript aan hebben staan. [Wat het meerendeel van de screenreader gebruikers overigens wel heeft](https://a11yproject.com/posts/people-who-use-screen-readers-dont-use-javascript/)  
Ik kom er dus niet zo makelijk van af 😊

In de navigatiebalk heb ik op de detailpagina een pijl staan. Dit wordt natuurlijk niet voorgelezen door de screenreader. Maar wat mij verbaasde is dat de placeholder tekst van mijn input ook niet werd voorgelezen door de screenreader. Dit is dus de reden waarom wij labels hebben en waarom ik deze absoluut had moeten toevoegen.

### Overige accessibility

Mijn form-elementen hebben geen labels. Dit is best een interessante fout van mij. Tevens als het feit dat er geen clickable button is om te zoeken.
De links om mijn list-items heen hebben geen naam. Dit is volgens de accesibility list ook iets wat aangepast moet worden.
Er zitten lijsten in mijn lijst objecten. Dit is blijkbaar ook iets wat niet correct is.

### Todo

- [x] Labels & buttons voor searchbar
- [x] Content voor de `<a>`-items
- [x] Geen `<ul>` in de `<li>`'s
- [x] lokaal hosten en afbeeldingen kleiner gemaakt
- [x] Kleiner CSS-bestand zodat afbeeldingen e.d. sneller worden geladen
- [x] Contrast verhoogt tussen achtergrond- en textkleuren
- [x] Minified css
- [ ] Mobile-friendly
- [x] :focus-state duidelijker maken (mogelijk hetzelfde als :hover)
- [x] prebuilden van minify/uglify en compression van bestanden
- [ ] Geen arrow functions
- [x] fallback voor geen javascript

</details>

## Opdracht 2

<details>
<summary>Opdracht 2 uitwerking </summary>

### Use case

2. Ik wil mijn eigen t-shirt-met-nerdy-tekst kunnen ontwerpen, printen, opslaan en een volgende keer dat ik de site bezoek kunnen gebruiken.

De gebruiker kan verschillende dingen selecteren waaronder:

- Shirt kleur
- Hals
- Text
- Text kleur
- Patroon
- Patroon kleur

Vervolgens kan de gebruiker dit 'opslaan' waardoor dit allemaal in de URL komt te staan en de URL bewaard kan worden door deze bijvoorbeeld ergens op te slaan of toe te voegen aan de bladwijzer.
De gebruiker kan dit ook verzenden.
Op deze manier worden de ingevulde waardes gebruikt om een (afbeelding van een) t-shirt te genereren.

### HTML

<details>
<summary>Wireflow</summary>

<kbd>![Puur HTML](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/UC%201.png "Puur HTML")</kbd>

</details>

#### Functies

- Formulier invullen en opslaan (via URL)
- Formulier opsturen naar server
- Vanuit de server genereren van t-shirt
- Opslaan van t-shirt-creator pagina om shirt te herladen
- Veranderen van data in URL om shirt te veranderen

En dat alles in puur HTML!

#### Semantiek

HTML is nu aardig semantisch en bovendien werkt de pure HTML versie uitstekend, waar ik best trots op ben.
Hier en daar gebruik ik wat `<br>`-etjes om de html leesbaar te maken in plaats van een lange horizontale rij aan radiobuttons en input vakken.

#### Input types

De hals & patroon-type zijn radio-buttons en worden dus gelukkig volledig ondersteund door alle browsers.

De verschillende kleuren die geselecteerd worden gebruiken `type="color"`.  
`<input type="color"` [wordt niet door alle browsers ondersteund](https://caniuse.com/#feat=mdn-html_elements_input_input-color).
Als dit het geval is dan wordt dit een `input type="text"`.
Color levert een kleur aan als hexidecimaal maar de `<svg>` accepteert ook html-kleuren.
Wanneer iemand dus het text inputveld ziet en daar 'blue' of 'goldenrod' intypt werkt het dus nog allemaal prima.
Als het echt niet word begrepen is de fallback zwart.

Momenteel is de `input type="text"` prima.
Wanneer er een te lange tekst wordt ingevuld dan loopt dit over het t-shirt heen.
Dit is iets wat ik mogelijk op de server nog kan veranderen voor pure HTML en wat ik anders met CSS&Javascript mogelijk kan oplossen door een maximum breedte mee te geven.

### CSS

De CSS styled de pagina zodat het makkelijker te zien is wat er allemaal aan de hand is.  
De header wordt vergroot en makkelijker leesbaar. Daarnaast worden de knoppen groter en krijgen een gele kleur.  
Met behulp van een aantal :hover elementen zit er ook een leuke interactie verstopt in de 'submit'-knop voor de browsers die dit ondersteunen.

In de creator zorgt de CSS voor een overzichtelijk geheel door de uitgekozen kleuren nog eens te laten zien in tekst en door gebruik van de desbetreffende kleur zelf.  
Tevens voegt de CSS print-stylesheet een extra laag toe aan het printen van de pagina door hier een aantal web onderdelen weg te halen en enkel het shirt in het midden te houden.  
Daarnaast is er ook een optie voor de gebruiker om na het printen zijn naam in te vullen en deze dus extra persoonlijk te maken.

Ik heb de CSS-geprefixt zodat deze beter werkt op oudere browsers.  
Dit was niet volledig nodig aangezien wanneer flex, box-shadow, background & animation niet werken er enkel wat styling wegvalt.  
Echter voor de enhancement van de pagina is het wel zo prettig.

### HTML / CSS / Javascript

<details>
<summary>Wireflow CSS+Javascript</summary>

<kbd>![CSS+Javascript](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/UC%203.png "CSS+Javascript")</kbd>

</details>

Met behulp van Javascript voeg ik een aantal dingen toe die het leven wat makkelijker maken.  
Ik heb een preview toegevoegd zodat het t-shirt alvast zichtbaar is voor de gebruiker. Op deze manier hoeft deze niet de pagina niet meer te verzenden om te zien wat voor een shirt deze heeft gemaakt.
Tevens heb ik een listener op het formulier gezet die wanneer er iets veranderd gelijk de preview update.

Voor wat gemak en inspiratie heb ik ook een 'created by others' onderdeel gemaakt.  
Angezien dit niet relevant is voor de main-feature van de pagina voeg ik deze later toe met Javascript.  
Deze 'created by others' is een samenstelling van 5 verschillende shirts die gemaakt worden met willekeurige kleuren en patroonkeuzes.
Deze `<svg>`'s zijn ook volledig accesible door het toe te voegen van `<title>`-elementen zowel als tekst binnenin de `<a>`.

### Research

Browser-research
<kbd>![Mac Safari](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/BT%20Mac%20Safari.png "Mac Safari")</kbd>

<kbd>![iPad Safari](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/BT%20iPad%20Safari.png "iPad Safari")</kbd>

<kbd>![iPhone Safari](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/BT%20iPhone%20Safari.png "iPhone Safari")</kbd>

<kbd>![iPhone Safari2](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/BT%20iPhone%20Safari2.png "iPhone Safari2")</kbd>

<kbd>![Pixel Firefox](https://github.com/DanielvandeVelde/browser-technologies-1920/blob/master/images/BT%20Pixel%20FireFox.png "Pixel FireFox")</kbd>

### To-do / Wishlist opdracht 2

- [x] Pure HTML core-features
- [x] CSS enhancement
- [x] JS enhancement
- [x] Onderzoek feature detection
- [x] Implementatie van feature detection onderzoek
- [x] Browser testing
- [x] Verbetering a.d.h.v. browser testing
  </details>
