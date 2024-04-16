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


const questions = [

    {
        
      trivia: "Viikingit muistetaan keskuudessamme pohjoismaisina hurjina sotureina, ja useimmat aiheesta kertovat pelit, elokuvat ja tarinat keskittyvätkin suurimmaksi osaksi tähän heidän hurjaan puoleensa. Viikingit olivat kuitenkin ennen kaikkea menestyneitä kauppiaita ja liikkeenharjoittajia. He saivat elantonsa pitämällä maatiloja, kalastamalla, metsästämällä, kauppaamalla tekemiänsä tuotteita sekä valloittamalla uusia alueita. "  ,
      question: "Mille aikavälille Viikinkien aikakausi sijoittui?",
      choices: ["650-859", "793-1066", "823-1145"], 
      image: "./images/vikings0.jpg",
      answer: 1
    } ,


    {
        
        trivia: "Viikingit olivat pohjimmiltaan kuitenkin maalaisyhteisöjä, joissa perhe ja oman maapalstan omistaminen näyttelivät tärkeintä roolia. Maan omistaminen oli kaikkein tärkeintä, koska se määritteli ihmisen aseman yhteisössä. Iso perhe ja maatila olikin kaikista tavallisin näky viikinkiyhteisöissä. Naiset olivat kodin ylipäälliköitä, ja miehet hoitivat kaupankäynnin, pellonhoidon ja yhteiskunnalliset toiminnot."  ,
        question: "Mikä oli tunnetuin Viikinkikaupunki?",
        choices: ["Hedeby", "Oslo", "Uppsala"],
        image: "./images/vikings0.jpg",
        answer: 0
      }  ,

      {
        trivia: "Viikinkien pitämiin eläimiin kuuluivat esimerkiksi vuohet, lampaat, siat, lampaat ja ankat. Niitä vaalittiin suuresti, sillä ne tuottivat Viikingeille ruokaa ja erilaisia, hyötytarvikkeita. Heillä oli myös lemmikkieläimiä (koiria ja kissoja) kuten meilläkin. Viikinkien jumaltarustoon kuitenkin kuului eräs tärkeä susieläin.", 
        question: "Mikä on tämän kuuluisan suden nimi?",
        choices: ["Gullinbursti","Jörmundgandr","Fenrir"],
        image: "./images/vikings0.jpg",
        answer: 2
      } 

  ];
  
let currentQuestion = 0;
let points = 0;

  

  function showQuestion() {

    const triviaText = document.getElementById("triviabox");
    triviaText.textContent = questions[currentQuestion].trivia;

    const questionText = document.getElementById("feedbackbox");
    questionText.textContent = questions[currentQuestion].question;

    const showImage = document.getElementById("imagebox");
    showImage.src = "./images/vikings" + currentQuestion + ".jpg";
  
    const choices = document.querySelectorAll(".choice");
    const choiceLabels = document.querySelectorAll(".choice-label");

    choices.forEach((choice, index) => {
      choiceLabels[index].textContent = questions[currentQuestion].choices[index];
    });

}

showQuestion();

function answer(e){
    e.preventDefault();


    let formdata = new FormData(e.currentTarget);

    if( formdata.get('selection') ==  questions[currentQuestion].answer ){
        points++;

        console.log("Points: ", points);
}
  nextQuestion();
}

function nextQuestion ()  {
    if (currentQuestion <= questions.length)
      {currentQuestion++}
      showQuestion();
      
      
}
   
