const phrases = [
  "Developers create, testers save",
  "Les développeurs créent, les testeurs sauvent", 
  "開発者は作り、テスターは救う", 
  "المطورون يخلقون، المختبرون ينقذون", 
  "Desenvolvedores criam, testadores salvam",
  "我的工作是发现你遗漏的东西", 
  "Mein Job ist es, das zu finden, was Sie übersehen haben", 
  "Il mio lavoro è trovare ciò che ti sei perso", 
  "Моя работа — находить то, что вы пропустили", 
  "내 직업은 당신이 놓친 것을 찾는 것입니다", 
  "Ваше ПО работает? Давайте проверим", 
  "Does your software work? Let's check", 
  "Votre logiciel fonctionne? Vérifions", 
  "あなたのソフトウェアは動きますか？確認しましょう", 
  "هل يعمل برنامجك؟ دعنا نتحقق", 
  "Seu software funciona? Vamos verificar", 
  "你的软件能用吗？我们来检查一下", 
  "Funktioniert Ihre Software? Lass uns das überprüfen", 
  "Il tuo software funziona? Controlliamo", 
  "당신의 소프트웨어가 작동합니까? 확인해 봅시다", 
  "Нет непробиваемого кода. Есть плохие тестировщики", 
  "There's no unbreakable code. Only bad testers", 
  "Il n'y a pas de code incassable. Seulement de mauvais testeurs", 
  "壊せないコードはない。悪いテスターだけがいる", 
  "لا يوجد كود غير قابل للكسر. هناك فقط اختبارات سيئة",
  "Não há código inquebrável. Apenas maus testadores", 
  "没有牢不可破的代码。只有糟糕的测试员", 
  "Es gibt keinen unzerbrechlichen Code. Nur schlechte Tester", 
  "Non esiste un codice infrangibile. Solo tester scadenti", 
  "깨지지 않는 코드는 없습니다. 나쁜 테스터만 있을 뿐입니다", 
  "Разработчики создают, тестировщики спасают", 
  "Los desarrolladores crean, los probadores salvan",
  "Entwickler erschaffen, Tester retten", 
  "开发者创造，测试者拯救", 
  "Les développeurs créent, les testeurs sauvent", 
  "開発者は作成し、テスターは保存します", 
  "المطورون يخلقون ، المختبرون ينقذون", 
  "Desenvolvedores criam, testadores salvam", 
  "Sviluppatori creano, tester salvano", 
  "개발자는 창조하고 테스터는 구합니다"
];

let current = 0;
const phraseEl = document.getElementById('phrase');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function showNextPhrase() {
  phraseEl.style.opacity = 0;
  setTimeout(() => {
    phraseEl.textContent = phrases[current];
    phraseEl.style.opacity = 1;
    current = (current + 1) % phrases.length;
  }, 500);
}

setInterval(showNextPhrase, 3000);
showNextPhrase();

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    themeIcon.src = "icon-light.svg";
  } else {
    themeIcon.src = "icon-dark.svg";
  }
});
