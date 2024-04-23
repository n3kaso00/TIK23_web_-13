
const questions = [

    {
        
      trivia: "Viikingit muistetaan keskuudessamme pohjoismaisina hurjina sotureina, ja useimmat aiheesta kertovat pelit, elokuvat ja tarinat keskittyvätkin suurimmaksi osaksi tähän heidän hurjaan puoleensa. Viikingit olivat kuitenkin ennen kaikkea menestyneitä kauppiaita ja liikkeenharjoittajia. He saivat elantonsa pitämällä maatiloja, kalastamalla, metsästämällä, kauppaamalla tekemiänsä tuotteita sekä valloittamalla uusia alueita. KYSYMYS: Mille aikavälille Viikinkien aikakausi sijoittui? "  ,
      choices: ["650-859", "793-1066", "823-1145"], 
      image: "",
      answer: 1,
      feedback: "Vastauksesi oli oikein! Viikinkien aikakauden katsotaan alkaneen Lindisfarnen luostariin kohdistuneesta hyökkäyksestä vuonna 793. Viikinkiajan katsotaan loppuneen vuonna 1066, kun Norjan Kuningas Harald III Sigurdsson kukistettiin Stamfordin sillan taistelussa."
    } ,


    {
        
        trivia: "Viikingit olivat pohjimmiltaan kuitenkin maalaisyhteisöjä, joissa perhe ja oman maapalstan omistaminen näyttelivät tärkeintä roolia. Maan omistaminen oli kaikkein tärkeintä, koska se määritteli ihmisen aseman yhteisössä. Iso perhe ja maatila olikin kaikista tavallisin näky viikinkiyhteisöissä. Naiset olivat kodin ylipäälliköitä, ja miehet hoitivat kaupankäynnin, pellonhoidon ja yhteiskunnalliset toiminnot. KYSYMYS: Mikä oli tunnetuin Viikinkikaupunki?"  ,
        choices: ["Hedeby", "Oslo", "Uppsala"],
        image: "",
        answer: 0,
        feedback: "Vastauksesi oli oikein! Hedeby tunnettiin Viikinkien isoimpana kauppakaupunkina. Oslo oli viikinkien niinsanottu pääkaupunki, ja Uppsala tunnettiin heidän uskonnollisena keskuksena."
      }  ,

      {
        trivia: "Viikinkien pitämiin eläimiin kuuluivat esimerkiksi vuohet, lampaat, siat, lampaat ja ankat. Niitä vaalittiin suuresti, sillä ne tuottivat Viikingeille ruokaa ja erilaisia, hyötytarvikkeita. Heillä oli myös lemmikkieläimiä (koiria ja kissoja) kuten meilläkin. Viikinkien jumaltarustoon kuitenkin kuului eräs tärkeä susieläin. KYSYMYS: Mikä on tämän kuuluisan suden nimi?", 
        choices: ["Gullinbursti","Jörmundgandr","Fenrir"],
        image: "",
        answer: 2,
        feedback: "Vastauksesi oli oikein! Fenrir oli yksi kolmesta jumalten hirviömäisestä lapsesta, joka oli kahlittu sen hirmuisuuden takia. Jörmundgandrin taas uskottiin kietovan viikinkien maailman ympärilleen, ja nielaisevan sen vielä jonakin päivänä. Gullinbursti taas tunnettiin Jumalatar Freyan rakastettuna possuna."
      } ,

      {
        trivia: "Viikinkien yhteiskunnassa oli kolme erilaista luokkaa kansalaisille. Ihmiset jaoteltiin aatelisiin (Jarl), vapaisiin ihmisiin (Karl) sekä orjiin ja maaorjiin. Jaarlit hallitsivat erikokoisia maa-alueita, ja vasta myöhemmässä vaiheessa viikinkien aikakaudella luokkiin tulivat mukaan kuninkaat ja kuningattaret. Viikinkimytologiassa ja historiassa ylipäätänsä on välillä vaikeata erottaa; kuka on ollut oikea ja merkittävä henkilö, ja kenen maine on kasvanut tarujen ja saagojen myötävaikutuksesta todellista suuremmaksi. Historiaa tutkineet akateemikot ovat kuitenkin yhtä mieltä siitä, että tietyt henkilöt ovat olleet suuria johtajia, sekä erittäin arvostettuja henkilöitä viikinkien keskuudessa. KYSYMYS: Kuka oli kaikista kuuluisin viikinki? ", 
        choices: ["Björn Rautakylki","Erik Punainen","Ragnar Lothbrok"],
        image: "",
        answer: 2,
        feedback: "Ragnar Lothbrokin olemassaolosta ei ole täyttä historiallista varmuutta, mutta hänestä on puhuttu paljon, sekä hänet on yhdistetty viikinkien tarustoissa moniin eri tapahtumiin ja paikkoihin. Hänet tunnettiin tarustojen ja legendojen perusteella Tanskan ja Ruotsin kuninkaana. Ragnar Lothbrok esiintyi myös Viikingit-nimisessä sarjassa, ja sarjan ensimmäiset osat keskittyivät hänen ympärille."
      } ,

      {
        trivia: "Viikinkien suurimmat Jumalat olivat nimeltään Odin, Thor ja Freija. Odin muistetaan erityisesti sodan jumalana. Vanha uskomus kuuluu, että Odin ratsasti kahdeksanjalkaisella ratsulla ja Odinilla oli vain yksi silmä, koska hän vaihtoi toisen silmänsä yhteen kulaukseen juomaa viisauden lähteestä. Thor muistetaan oikeuden, voiman ja taistelukenttien jumalana. Thor puolusti ihmisiä jättiläisiltä. Thorilla oli myös kuuluisa vasara, ja hänen mukaansa on myös nimetty viikonpäivä torstai. Freija muistetaan rauhan, hedelmällisyyden, sateen ja auringonpaisteen jumalana. mikä oli thorin vasaran nimi?",
        choices: ["Skofnung","Mjölnir","Gungnir"],
        image: "",
        answer: 1,
        feedback: "Mjölnir tunnetaan Thorin vasarana. Skofnung oli legendaarien Tanskan kuninkaan Hrolf Krakin miekka. Gungnir tunnettiin Odinin keihäänä."
      } ,

      {
        trivia: "Kristinuskossa eräs olennainen osa on kuolemanjälkeinen elämä taivaassa. Viikingit uskoivat myös tämänkaltaiseen kuolemanjälkeiseen elämään, mutta heidän uskomuksensa eroavat kristinuskosta merkittävästi. Viikingit nimittäin uskoivat, että he menevät kuoleman jälkeen Odinin luokse hänen suureen saliin nauttimaan nauttimaan loputtomista pöydistä täynnä ruokaa ja juomaa. Salin toimintaan kuului myös päivittäin käytävät taistelut, jonka jälkeen illat nautittiin ruoasta ja juomasta. KYSYMYS: Mikä oli tämän Odinin suuren salin nimi? ",
        choices: ["Valhalla","Helheim","Jotunheim"],
        image: "",
        answer: 0,
        feedback: "Vastauksesi on oikein! Valhalla oli kaikkien viikinkien lopullinen päämäärä, jossa heidän ajateltiin odottavan viikinien mytologian viimeistä taistelua, Ragnarökiä aikojen lopussa. Helheim taas oli kuolleiden valtakunta, johon menivät kaikki ne, jotka eivät päässeet Valhallaan. Jotunheim taas tunnettiin jääjättiläisten valtakuntana."
      } ,

      {
        trivia: "",
        choices: ["", "", ""],
        image: "",
        answer: 1,
        feedback: "",
      }
  ];
  
let currentQuestion = 0;
let points = 0;

/*Displays pre-defined media to elements on loading the page, and defines index
 number to each radiobutton*/

  function showQuestion() {

    const triviaText = document.getElementById("triviabox");
    triviaText.textContent = questions[currentQuestion].trivia;

    const hideFeedback = document.getElementById("feedbackbox");
    hideFeedback.textContent = "";

    const showImage = document.getElementById("imagebox");
    showImage.src = "./images/vikings" + currentQuestion + ".jpg";
  
    const choices = document.querySelectorAll(".choice");
    const choiceLabels = document.querySelectorAll(".choice-label");

    choices.forEach((choice, index) => {
      choiceLabels[index].textContent = questions[currentQuestion].choices[index];
    });

}
showQuestion();

/*Adds submit functionality to function answer*/

document.getElementById('answerform').addEventListener('submit', answer);

/* Defines function answer, prevents default page refresh from button, makes data acquirable from form,
checks if answer is correct, gives points for correct answer and sets pre-defined feedback to be displayed
if the answer is correct/wrong, also displays next question with 10 sec delay*/

function answer(e){
    e.preventDefault();


    let formdata = new FormData(e.currentTarget);

    if( formdata.get('selection') ==  questions[currentQuestion].answer ){
        points++;
        const correctAnswer = document.getElementById("feedbackbox");
        correctAnswer.textContent = questions[currentQuestion].feedback;
        console.log("Points: ", points);
}

    else {
      const wrongAnswer = document.getElementById("feedbackbox");
      wrongAnswer.textContent = "Vastauksesi oli väärin";
    }
setTimeout(nextQuestion, 10000);
}


/*nextQuestion checks if there are any questions left in the pool and displays next Q*/

function nextQuestion ()  {
    if (currentQuestion <= questions.length)
      {currentQuestion++}
      showQuestion();   
}
   
