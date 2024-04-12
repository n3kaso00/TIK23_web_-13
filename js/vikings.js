/*Viikingit muistetaan keskuudessamme pohjoismaisina hurjina sotureina, ja useimmat
aiheesta kertovat pelit, elokuvat ja tarinat keskittyvätkin suurimmaksi osaksi tähän
heidän hurjaan puoleensa. Viikingit olivat kuitenkin ennen kaikkea menestyneitä kauppiaita 
ja liikkeenharjoittajia. He saivat elantonsa pitämällä maatiloja,
kalastamalla, metsästämällä, kauppaamalla tekemiänsä 
tuotteita sekä valloittamalla uusia alueita. 

"Mille aikavälille Viikinkien aikakausi sijoittui?"  "650-859 ,, 793-1066 ,, 823-1145"

Viikingit olivat pohjimmiltaan kuitenkin maalaisyhteisöjä, joissa perhe ja oman maapalstan
omistaminen näyttelivät tärkeintä roolia. Maan omistaminen oli kaikkein tärkeintä, koska 
se määritteli ihmisen aseman yhteisössä. Iso perhe ja maatila olikin kaikista tavallisin 
näky viikinkiyhteisöissä. Naiset olivat kodin ylipäälliköitä, ja miehet hoitivat 
kaupankäynnin, pellonhoidon ja yhteiskunnalliset toiminnot.

"kuuluisin viikinkikaupunki HEDEBY/Oslo/Uppsala, Hedeby suurin kauppakaupunki,
 Oslo ns. viikinkien pääkaupunki, Uppsala uskonnollinen keskus"
 
"mitkä esineet antoivat korkean paikan yhteiskunnassa? avain/miekka"


Viikinkien pitämiin eläimiin kuuluivat esimerkiksi vuohet, lampaat, siat, 
lampaat ja ankat. Niitä vaalittiin suuresti, sillä ne tuottivat Viikingeille ruokaa ja erilaisia, 
hyötytarvikkeita. Heillä oli myös lemmikkieläimiä (koiria ja kissoja) kuten meilläkin.
Viikinkien jumaltarustoon kuitenkin kuului eräs tärkeä susieläin. Mikä on tämän suden nimi?

"FENRIR/Jörmundgandr/Gullinbursti (selitykset puuttuu)"

Viikinkien yhteiskunnassa oli kolme erilaista luokkaa. Ihmiset jaoteltiin Jaarleihin, 
aatelisiin ja vapaisiin ihmisiin. Suurin erottava tekijä yhteiskunnassa oli, oliko
ihminen vapaa ihminen vai ei. Vapaalla ihmisellä oli oikeus kantaa asetta ja 
osallistua sekä vaikuttaa yhteiskunnan toimintoihin. Ei-vapaat ihmiset olivat yleensä 
maatiloilla työskenteleviä orjia.

"rannekorukysymys-vapaa ihminen?"
"kuuluisin Jaarli"

Viikinkien suurimmat Jumalat olivat nimeltään Odin, Thor ja Freija. Odin muistetaan 
erityisesti sodan jumalana. Vanha uskomus kuuluu, että Odin ratsasti kahdeksanjalkaisella
ratsulla ja Odinilla oli vain yksi silmä, koska hän vaihtoi toisen silmänsä yhteen 
kulaukseen juomaa viisauden lähteestä. 
Thor muistetaan oikeuden, voiman ja taistelukenttien jumalana. Thor puolusti ihmisiä 
jättiläisiltä. Thorilla oli myös kuuluisa vasara, ja hänen mukaansa on myös nimetty 
viikonpäivä torstai.
Freija muistetaan rauhan, hedelmällisyyden, sateen ja auringonpaisteen jumalana.

"mikä oli thorin vasaran nimi?"

Viikingit olivat kuuluisia myös tutkimusmatkoistaan. He löysivät muun muassa Islannin 
ja Grönlannin, sekä muodostivat näihin maihin asumuksia ja yhteiskuntia jotka 
kestivät vuosisatojen ajan. Viikinkien vaihtokauppareitit ulottuivat jopa 
Aasiaan saakka, ja he ovat käyneet kauppaa myös Venäjän sekä eräiden 
lähi-idän maiden kanssa. 






*/
document.getElementById('answerform').addEventListener('submit', answer);

let questions = ['Viikingit muistetaaan keskuudessamme pohjoismaisina hurjina sotureina, ja useimmat aiheesta kertovat pelit, elokuvat ja tarinat keskittyvätkin suurimmaksi osaksi tähän heidän hurjaan puoleensa. Viikingit olivat kuitenkin ennen kaikkea menestyneitä kauppiaita ja liikkeenharjoittajia. He saivat elantonsa pitämällä maatiloja, kalastamalla, metsästämällä, kauppaamalla tekemiänsä tuotteita sekä valloittamalla uusia alueita.']

let choicesA = ['A: 650-859']
let choicesB = ['B: 793-1066']
let choicesC = ['C: 823-1145']



let answers = ['b', '', '', ''];
let index = 0;
let points = 0;

let questionElement = document.getElementById('triviabox');
questionElement.textContent = questions[index];

let choiceElementA = document.getElementById('choice_a_label');
choiceElementA.textContent = choicesA[index];

let choiceElementB = document.getElementById('choice_b_label');
choiceElementB.textContent = choicesB[index];

let choiceElementC = document.getElementById('choice_c_label');
choiceElementC.textContent = choicesC[index];



