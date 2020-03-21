# Formulieren en req.query

## Inleiding

Deze uitleg gaat er vanuit dat je al een keer eerder npm en node heb gebruikt.  
Al is er zeker een klein duwtje om deze goed op te starten.
We gaan door de stappen :

1. Controleren van je express server
2. Het maken van een formulier in EJS
3. Het gebruiken van req.query

Onder elk stuk staat er een "➤ handige links" met daarin verschillende links naar uitleg, termen die besproken zijn of andere dingen die mogelijk verwarrend waren.

Mocht je hulp nodig hebben staat er een afgemaakt voorbeeld klaar [hier](https://github.com/DanielvandeVelde/browser-technologies-1920/tree/master/tutorial) waar je kan spieken.  
Mocht je enkel informatie zoeken over `req.query` en de rest willen overslaan? Spring dan [hier heen](#query)

## Express server

Je heb je node-server opgezet.
In je package.json gebruik heb je als dependencies `ejs` en `express` die je heb geinstalleerd met `npm install`

<details>
<summary>Voorbeeld package.json</summary>

```json
{
  "name": "form-server",
  "version": "1.0.0",
  "description": "Simple example of res.query",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Daniel van de Velde",
  "license": "ISC",
  "dependencies": {
    "ejs": "^2.6.1",
    "express": "^4.16.4"
  }
}
```

</details>   
&ensp;

Je 'index.js' ziet zo uit:

```js
const express = require("express"); //Je gebruikt express
const app = express(); //Dit gebruik je als variabele app

app.get("/", function(req, res) {
  res.send("hello world");
}); //Wanneer je naar je website gaat sturen we: hello world

app.listen(3000, function() {
  console.log(`Form app listening on port 3000!`);
}); // Natuurlijk luistert je app op een port en we willen graag horen wanneer dat lukt.
```

Wanneer wij nu de server opstarten door bijvoorbeeld `node index.js` dan zal er 'hello world' te komen staan op de URL: localhost:3000.
Als dat het geval is, dan ben je al goed op weg.

<details>
  <summary>Handige links</summary>
  &ensp;

- [Express](https://expressjs.com/)
- [Setting up a Node development enviroment](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment)

</details>

## Template

Een 'templating engine' is een tool waardoor je HTML markup kan schrijven maar daar doorheen ook de syntax van de templating engine kan gebruiken.  
Express gebruikt van zichzelf al Jade. Maar wij gaan met EJS aan de slag.  
EJS is staat voor 'Embedded Javascript' en is een simpele templating engine die ons Javascript laat schrijven door onze HTML heen.

Maar nu loop ik al iets vooruit op wat we gaan doen. EJS hebben we al geinstalleerd via onze package.json en de `npm install` die we hebben uitgevoerd.

We voegen twee regels toe aan onze index.js:

```js
const express = require("express");
const app = express();

app.set("view engine", "ejs"); //Wij willen ejs gebruiken als onze view engine.
app.set("views", "views"); //Al onze templates kan je vinden in de map: views

app.get("/", function(req, res) {
  res.send("hello world");
});

app.listen(3000, function() {
  console.log(`Form app listening on port 3000!`);
});
```

De logische volgende stap is om een map 'views' aan te maken.
Hier zullen wij ons template-bestand instoppen wat wij 'index.ejs' noemen.

In index.ejs stoppen wij een standaard formulier.
Voor nu mag je dit hele kleine HTML formulier kopieren:

```HTML
<html>
  <body>
    <form>
    <label>
      Voornaam:
      <input type="text" name="voornaam" />
    </label>
    <label>
      Achternaam:
      <input type="text" name="achternaam" />
    </label>
    <button type="submit" value="verzend" />
  </form>
  </body>
</html>
```

Gebruik dit alsjeblieft enkel voor dit voorbeeld, want deze HTML pagina mist natuurlijk een heleboel belangrijks!

Nu moeten we alleen nog zorgen dat wij in plaats van 'hello world' dit formulier te zien krijgen.  
Dit doen we door onze eerdere app.get in index.js iets aan te passen:

```js
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", function(req, res) {
  res.render("index");
});
/*
In plaats van send om iets te sturen gebruiken wij hier res.render("index");.
Dit rendert onze index.ejs pagina!
*/

app.listen(3000, function() {
  console.log(`Form app listening on port 3000!`);
});
```

Dus nu hebben wij ons formulier, 🎉 hoera! 🎈

<details>

<summary>Handige links</summary>

- [EJS website](ejs.co)

</details>

## <a name="query"></a> Queries

Wanneer wij nu ons formulier invullen en verzenden wordt de pagina herladen en krijgen wij nu in de URL iets te zien zoals:
`localhost:3000?voornaam=Donald&achternaam=Duck`  
Of wat je dan ook heb ingevuld. Vul je niks in, dan zijn deze waardes natuurlijk leeg.  
Deze waardes komen rechtstreeks uit de HTML.  
Het `<input>` veld wat wij hebben ingevuld met `name="voornaam"` komt samen met de `value` wat de waarde is die wij vervolgens daar hebben ingevuld (bijvoorbeeld Donald) tot `?voornaam=Donald`.

Het formulier stuurt automatisch een 'get' request, vandaar dat je ook de verschillende 'queries' in de URL ziet staan. Bij een post request zul je dat niet zien staan.
In de server kan je deze routes benaderen met app.get en app.post.
Wij hebben al een app.get staan en kunnen dus makkelijk bij deze waardes komen door deze iets aan te passen.

In de index.js kunnen wij in onze app.get de volgende regel zetten:

```js
app.get("/", function(req, res) {
  console.log(req.query); //Wat zit er in req.query?
  res.render("index");
});
```

Wanneer je de server herstart en de waardes weer opnieuw invult/de pagina refresht zul je in je CLI een object zien staan bijvoorbeeld:

```json
{
  "voornaam": "Donald",
  "achternaam": "Duck"
}
```

Dit is dus de waarde die je in je formulier invult en ook in je URL balk kan wijzigen.
Deze informatie kunnen wij ook naar onze templating engine sturen om er vervolgens wat mee te doen.
Dit doen we door de render een parameter object mee te sturen:

```js
app.get("/", function(req, res) {
  res.render(
    "index", //De comma is voor het parameter object
    {
      query: req.query //Deze parameter noemen wij query met de req.query informatie.
    }
  );
});
```

Nu krijgen we de informatie in onze index.ejs waar wij iets mee kunnen doen!  
In onze index.js gaan we onder het afsluiten van het formulier verder:

```html
<!-- Hier staat alle HTML tot aan </form> -->

<% if (query.voornaam) { %>
<p>Jij heb een voornaam!</p>
<% } %>

<!-- Hieronder staat </body> en </html> -->
```

Dat komt je vast bekend voor, het is een simpel if-statement en daar tussenin staat HTML.  
Dit kijkt of er een voornaam is en zo ja, plaats dan de tekst.
De `<% %>` stukjes zijn template syntax van EJS.  
De `<%` betekend dat er een stuk script komt wat EJS kan uitvoeren. Met de `%>` sluiten we dit weer af.  
Dit doen we twee keer zodat we daartussen onze HTML die we in de pagina willen hebben kunnen stoppen.

We kunnen dit nog verder uitbreiden tot:

```HTML
<% if (query.voornaam) { %>
<p> Jouw voornaam is: <%= query.voornaam %> </p>
<% } %>
```

Let hierbij goed op de `<%=` wat de waarde plaatst in EJS.
Voor een uitgebreide lijst van wat er mogelijk is staat de documentatie en meer handigs natuurlijk hieronder bij de links:

<details>

<summary>Handige links</summary>
  &ensp;

Een aardige uitleg over wat `req` naast `req.query` nog meer te bieden heeft:

- [req object in Express](https://alligator.io/nodejs/req-object-in-expressjs/)

De EJS website, hier is vooral de 'tags'-sectie erg relevant:

- [EJS website](https://ejs.co/)

</details>

## Wat kunnen we nog meer?

Oh zo veel!

#### Waardes 'opslaan' en invullen

Laten we eerst kijken naar de `<input type="text">` die we nu gebruiken.
We kunnen naast de waarde er uit halen deze waarde ook invullen voor de gebruiker op dezelfde manier als we deze eerder onder het formulier plaatste:

```HTML
<input type="text" name="voornaam" value="<%= query.voornaam %>">
```

Op deze manier wanneer de gebruiker de pagina bezoekt met deze link komt de eerdere waarde alvast er in te staan en kan hij verder gaan waar hij was gebleven.
Wanneer er geen waarde als query is meegegeven krijgt de input een lege waarde.

#### Checkboxes & radiobuttons

Het is ook mogelijk om radiobuttons of checkboxes alvast te checken voor de gebruiker met de informatie in de URL.

```HTML
  <label>
    <input type="radio" name="geslacht" value="man"
      <% if (query.geslacht == "man") { %>
        checked <!-- Als het geslacht 'man' is word deze checkbox aangevinkt -->
      <% } %>
    >
    Man
  </label>
  <label>
    <input type="radio" name="geslacht" value="vrouw"
      <% if (query.geslacht == "vrouw") { %>
        checked <!-- Als het geslacht 'vrouw' is word deze checkbox aangevinkt -->
      <% } %>
    >
    Vrouw
  </label>
```

#### Color

Als laatste voorbeeld ook nog even color, al denk ik dat het principe inmiddels duidelijk is.

```HTML
<input type="color" name="color" value="<%= query.color %>">
```

Wat een hexidecimale waarde in de url zet en vervolgens ook weer plaatst.
Hierbij is de `<%=` heel belangrijk aangezien hij de unicode hier juist doet. De `<%-` zal de # hier de URL encoded: `%23` meegeven.
Dit zie je ook wel wanneer je karakter zoals & invult in tekstvelden en vervolgens in de URL kijkt.
Hier staat in het vorige kopje bij de 'handige links' meer over.

#### Andere pagina

Op dit moment blijven we op dezelfde pagina, dit hoeft natuurlijk niet.
Op dit moment hebben wij meer een 'opslaan' knop gemaakt wat er zo uitziet:

```HTML
<input type="submit" value="verzend">
```

Onze form heeft standaard de actie dat hij dezelfde pagina herlaad met deze informatie.
Je kan op het formulier de pagina wijzigen die je laad, maar misschien willen wij wel meerdere dingen doen met één formulier. Dit kunnen we met `formaction`.

```HTML
<input type="submit" value="opslaan" formaction="/">
<input type="submit" value="versturen" formaction="/overzicht">
```

De eerste knop houd de gebruiker op de huidige pagina met een URL vol met informatie. Je kan met de eerdere besproken templating manieren de pagina dus invullen.
De tweede knop stuurt de gebruiker naar een andere pagina genaamd 'overzicht'
Als wij hiervoor een route aanmaken genaamd `/overzicht` met een eigen template 'overzicht.ejs' in onze views-map kunnen we de informatie op dezelfde manier gebruiken maar iets anders/mooiers dan een formulier laten zien:

```js
app.get("/overzicht", function(req, res) {
  res.render("overzicht", {
    query: req.query
  });
});
```

Denk bijvoorbeeld aan het input type color waarmee je dingen op de pagina een kleur kan geven die de gebruiker zelf gekozen heeft.

## Hoera 🥳

Je heb nu:

- Een express-server opgezet
- Gebruik gemaakt van een templating engine: EJS.
- Hier een formulier in opgezet
- Je formulier urlencoded data naar de pagina laten versturen & mogelijk zelfs naar een andere pagina
- Template syntax gebruikt (zoals `<%=`)
- De ingevulde data gebruikt om toffe dingen mee te doen!

Issues zijn open op deze repo, dus als iets niet helemaal duidelijk was, er fouten waren of als je goede informatie heb die je met de wereld wilt delen dan hoor ik dat natuurlijk graag!

Om de dingen te zien die ik maak met formulieren kan je:

- [Hier heen gaan voor de demo](https://browsertech-1920.herokuapp.com)
- [Hier heen gaan voor de code](https://github.com/Danielvandevelde/browser-technologies1920/)
