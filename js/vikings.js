/* questions for trivia*/

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
        feedback: "Vastauksesi oli oikein! Ragnar Lothbrokin olemassaolosta ei ole täyttä historiallista varmuutta, mutta hänestä on puhuttu paljon, sekä hänet on yhdistetty viikinkien tarustoissa moniin eri tapahtumiin ja paikkoihin. Hänet tunnettiin tarustojen ja legendojen perusteella Tanskan ja Ruotsin kuninkaana. Ragnar Lothbrok esiintyi myös Viikingit-nimisessä sarjassa, ja sarjan ensimmäiset osat keskittyivät hänen ympärille."
      } ,

      {
        trivia: "Viikinkien suurimmat Jumalat olivat nimeltään Odin, Thor ja Freija. Odin muistetaan erityisesti sodan jumalana. Vanha uskomus kuuluu, että Odin ratsasti kahdeksanjalkaisella ratsulla ja Odinilla oli vain yksi silmä, koska hän vaihtoi toisen silmänsä yhteen kulaukseen juomaa viisauden lähteestä. Thor muistetaan oikeuden, voiman ja taistelukenttien jumalana. Thor puolusti ihmisiä jättiläisiltä. Thorilla oli myös kuuluisa vasara, ja hänen mukaansa on myös nimetty viikonpäivä torstai. Freija muistetaan rauhan, hedelmällisyyden, sateen ja auringonpaisteen jumalana. mikä oli thorin vasaran nimi?",
        choices: ["Skofnung","Mjölnir","Gungnir"],
        image: "",
        answer: 1,
        feedback: "Vastauksesi oli oikein! Mjölnir tunnetaan Thorin vasarana. Skofnung oli legendaarien Tanskan kuninkaan Hrolf Krakin miekka. Gungnir tunnettiin Odinin keihäänä."
      } ,

      {
        trivia: "Kristinuskossa eräs olennainen osa on kuolemanjälkeinen elämä taivaassa. Viikingit uskoivat myös tämänkaltaiseen kuolemanjälkeiseen elämään, mutta heidän uskomuksensa eroavat kristinuskosta merkittävästi. Viikingit nimittäin uskoivat, että he menevät kuoleman jälkeen Odinin luokse hänen suureen saliin nauttimaan nauttimaan loputtomista pöydistä täynnä ruokaa ja juomaa. Salin toimintaan kuului myös päivittäin käytävät taistelut, jonka jälkeen illat nautittiin ruoasta ja juomasta. KYSYMYS: Mikä oli tämän Odinin suuren salin nimi? ",
        choices: ["Valhalla","Helheim","Jotunheim"],
        image: "",
        answer: 0,
        feedback: "Vastauksesi on oikein! Valhalla oli kaikkien viikinkien lopullinen päämäärä, jossa heidän ajateltiin odottavan viikinien mytologian viimeistä taistelua, Ragnarökiä aikojen lopussa. Helheim taas oli kuolleiden valtakunta, johon menivät kaikki ne, jotka eivät päässeet Valhallaan. Jotunheim taas tunnettiin jääjättiläisten valtakuntana."
      } ,

      {
        trivia: "Viikinkien pääelinalueesta käytetään nimitystä Skandinavia. Siellä sijaitsee suurehko Skandinavian vuoristo, joka kulkee Ruotsin, Norjan ja Suomen alueella. KYSYMYS: Mitkä kolme maata olivat Viikinkien pääelinaluetta? ",
        choices: ["Suomi, Ruotsi, Norja", " Ruotsi, Tanska, Norja", "Tanska, Ruotsi, Suomi"],
        image: "",
        answer: 1,
        feedback: "Vastauksesi oli oikein! Skandien vuoristo kulkee keskeltä Ruotsia, Norjaa ja Suomea, mutta virallisesti Skandinavian käsittää Ruotsin, Norjan ja Tanskan alueen.",
      },

      {
        trivia: "Viikingit omasivat myös rakkautta taidetta ja kauneutta kohtaan, ja heidän jäämistöistään on löydetty paljon erilaisia taitavasti tehtyjä koristeita, koruja ja taideteoksia. Eräs eläin esiintyi varsinkiin sotimiseen liittyvissä esineissä; kilvissä, veneissä sekä kypärissä. KYSYMYS: Mikä tämä eläin oli?",
        choices: ["Korppi","Susi","Käärme"],
        image: "",
        answer: 0,
        feedback: "Vastauksesi oli oikein! Käärme sekä susi olivat suosittuja aiheita Viikinkien taiteessa, mutta Korppi-aiheista taidetta on löydetty eniten sotimiseen liittyvistä esineistä. Jumala Odinin kummallakin olkapäällä uskottiin istuvan korppi, ja koska Odin oli sodan jumala, korpitkin liitettiin sotimiseen liittyviin esineisiin.",
      },

      {
        trivia:"Viikinkien ajalta on löydetty paljon erilaisia kirjoituksia, tehtynä puuhun, metalliin ja kiveen. Viikingit käyttivät riimuja meidän nykyaikaisten kirjaimien sijasta, ja niillä he kirjoittivat erilaisia tarinoita, kuvauksia tapahtumista, loitsuja ja suojataikoja. KYSYMYS: Mikä on oikea termi viikinkien käyttämistä riimuista?",
        choices: ["Fubar","Fubark","Futhark"],
        image: "",
        answer: 2,
        feedback: "Vastauksesi oli oikein! Viikinkiajalla käytettiin Futhark-nimellä tunnettuja riimuja. Riimuja oli alunperin 24 kappaletta, mutta kielen muuttuessa ajan mittaan monimutkaisemmaksi, riimuja poistettiin ja jäljelle jäi 16 erilaista riimua kirjoitusta varten.",
      } ,

      {
        trivia: "Viikingit käyttivät liikkumiseen muunmuassa hevosia, vankkureita, laivoja, ja jopa suksia sekä luistimia. Isojen asutusten sijaitessa pääosin rannikolla veden äärellä, erilaisia laivoja ja veneitä käytettiin todella paljon liikkumiseen kaupunkien ja kylien välillä. Laivat lastattiin erilaisilla tavaroilla, joita myytiin ja vaihdettiin toisissa kylissä. KYSYMYS: Miksi kutsuttiin perinteistä liikkumiseen tarkoitettua venettä?",
        choices: ["Uisko", "Viikinkilaiva", "Pitkävene"],
        image: "",
        answer: 2,
        feedback: "Vastauksesi oli oikein! Pitkäveneestä oli olemassa monta erilaista versiota. Airot kuuluivat jokaiseen erilaiseen venemalliin, ja niihin voitiin lisätä pituutta, leveyttä sekä purjeet, jolloin niillä voitiin matkusta pitempiä matkoja. Viikinkien pitkäveneistä muokatuilla viikinkilaivoilla on käyty esimerkiksi Amerikassa asti.",
      }


  ];
  
 
/*define variables which we are using in quiz*/

let currentQuestion = 0;
let points = 0;

/*first, we reset variables and remove try-again button if user has already started new game*/

function initializeQuiz() {
    currentQuestion = 0;
    points = 0;

    
    document.getElementById('feedbackbox').innerHTML = '';
    const tryAgainButton = document.getElementById('try-again');
    if (tryAgainButton) {
        tryAgainButton.remove();
    }

    showQuestion();
}

/* Displays content on screen, including trivia, images, and feedback after a right or wrong answer*/

function showQuestion() {
    const triviaText = document.getElementById("triviabox");
    triviaText.textContent = questions[currentQuestion].trivia;

    const hideFeedback = document.getElementById("feedbackbox");
    hideFeedback.textContent = "";

    const showImage = document.getElementById("imagebox");
    showImage.src = "./images/vikings" + currentQuestion + ".jpg";
  
    const choices = document.querySelectorAll(".choice");
    const choiceLabels = document.querySelectorAll(".choice-label");

    document.getElementById('answer').disabled = false;

    choices.forEach((choice, index) => {
        choiceLabels[index].textContent = questions[currentQuestion].choices[index];
    });
}

/*form submit handler*/

document.getElementById('answerform').addEventListener('submit', answer);

/* checks if radiobutton value is the same as in answer-array, adds points and displays feedback*/
function answer(e) {
    e.preventDefault();

    let formdata = new FormData(e.currentTarget);
    document.getElementById('answer').disabled = true;

    if (formdata.get('selection') == questions[currentQuestion].answer) {
        points++;
        const correctAnswer = document.getElementById("feedbackbox");
        correctAnswer.textContent = questions[currentQuestion].feedback;
        setTimeout(nextQuestion, 8000);
    } else {
        const wrongAnswer = document.getElementById("feedbackbox");
        wrongAnswer.textContent = "Vastauksesi oli väärin! Et saanut kysymyksestä pisteitä.";
        setTimeout(nextQuestion, 3000);
    }
    
}

/* shows next question in array or displays final scores*/

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showFinalScore();
    }
}


const maxScoreKey = 'vikingQuizMaxPoints';

/* defines what is showing in the final score screen and stores max score to cache, also displays tryagain-button*/
function showFinalScore() {
  const feedbackbox = document.getElementById('feedbackbox');
  feedbackbox.textContent = `Sait ${points} pistettä kymmenestä. Haluatko yrittää uudelleen?`;
  document.getElementById('answer').disabled = true;


  const maxPoints = parseInt(localStorage.getItem(maxScoreKey)) || 0;

  
  if (points > maxPoints) {
      localStorage.setItem(maxScoreKey, points);
  }

  
  const existingButton = document.getElementById('try-again');
  if (existingButton) {
      existingButton.remove();
  }

  
  const tryAgainButton = document.createElement('button');
  tryAgainButton.id = 'try-again';
  tryAgainButton.innerText = "Yritä uudelleen";
  tryAgainButton.onclick = initializeQuiz;
  document.getElementById('answerbox').appendChild(tryAgainButton);
}

initializeQuiz();
