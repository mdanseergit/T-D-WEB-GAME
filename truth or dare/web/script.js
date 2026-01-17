let players = [];
let level = 1;
let rotation = 0;
let spinning = false;

const levelNames = {
  1: "Easy",
  2: "Hard",
  3: "Extreme 18+"
};

const truths = {
  1: [
    "What is your favorite color?",
    "Who is your best friend?",
    "What food do you love the most?",
    "What is your favorite movie?",
    "Do you prefer tea or coffee?",
    "What is your dream vacation place?",
    "Who do you talk to the most?",
    "What is your favorite song?",
    "What makes you smile instantly?",
    "What is your favorite app?",
    "Are you a morning or night person?",
    "What is your favorite festival?",
    "What was your last happy moment?",
    "Do you like cats or dogs?",
    "What is your favorite snack?",
    "What is your favorite game?",
    "Who inspires you the most?",
    "What hobby do you enjoy?",
    "What is your favorite season?",
    "Do you like watching movies alone?",
    "What is your favorite emoji?",
    "What makes you laugh the most?",
    "What subject do you like?",
    "What is your favorite drink?",
    "What is your dream job?",
    "Who is your favorite celebrity?",
    "What is your favorite mobile brand?",
    "What makes you feel relaxed?",
    "What is your favorite website?",
    "Do you like travelling?",
    "What is your favorite memory?",
    "What is your favorite cartoon?",
    "Who do you miss right now?",
    "What is your favorite ice cream flavor?",
    "What app do you open first daily?",
    "What makes your day better?",
    "What is your favorite quote?",
    "What is your favorite YouTube channel?",
    "What makes you proud?",
    "What do you enjoy doing alone?",
    "What song do you play on repeat?",
    "What is your favorite holiday?",
    "What is your comfort food?",
    "Who makes you happy?",
    "What do you like about yourself?",
    "What is your favorite sound?",
    "What makes you calm?",
    "What is your favorite place?",
    "What makes you excited?",
    "What is your lucky number?"
  ],

  2: [
    "What is your biggest fear?",
    "Have you ever lied to a close friend?",
    "What is something you regret?",
    "Who do you trust the most?",
    "What is your biggest insecurity?",
    "Have you ever broken someone’s heart?",
    "What secret do you hide from your family?",
    "What habit do you want to change?",
    "What is your biggest weakness?",
    "Who disappointed you the most?",
    "Have you ever cheated in a test?",
    "What makes you feel lonely?",
    "Who do you envy secretly?",
    "What was your most embarrassing moment?",
    "What is your biggest mistake?",
    "Have you ever lied to your parents?",
    "What scares you about the future?",
    "Who do you miss but can’t talk to?",
    "What do you overthink about?",
    "What lie do you tell often?",
    "What makes you angry easily?",
    "Who hurt you emotionally?",
    "What makes you jealous?",
    "What is your hidden fear?",
    "What do you pretend not to care about?",
    "Who do you stalk on social media?",
    "What is your bad habit?",
    "What makes you cry?",
    "What truth do you avoid?",
    "What secret scares you?",
    "What do you hate about yourself?",
    "Who do you wish to apologize to?",
    "What is your biggest failure?",
    "What keeps you awake at night?",
    "What do you feel guilty about?",
    "What emotion do you hide?",
    "Who do you secretly admire?",
    "What do you fear losing?",
    "What hurts you the most?",
    "What makes you anxious?",
    "What truth do you avoid telling?",
    "What do you regret not saying?",
    "Who do you feel distant from?",
    "What makes you feel weak?",
    "What do you fear people knowing?",
    "What truth do you hide?",
    "What do you overthink daily?",
    "What scares you emotionally?",
    "What truth do you avoid facing?",
    "What secret do you protect most?"
  ],

  3: [
    "Who was your first crush?",
    "Have you ever liked a close friend?",
    "What attracts you to someone instantly?",
    "Have you ever had a secret relationship?",
    "Who do you find most attractive here?",
    "Have you ever flirted unknowingly?",
    "What kind of person turns you on emotionally?",
    "Have you ever sent a risky text?",
    "What is your biggest romantic fantasy?",
    "Who do you secretly want to kiss?",
    "Have you ever been caught flirting?",
    "What makes someone irresistible to you?",
    "Have you ever lied about liking someone?",
    "What kind of compliments affect you most?",
    "Have you ever crushed on a teacher or senior?",
    "What part of personality attracts you most?",
    "Who do you think about at night?",
    "Have you ever fallen for someone unavailable?",
    "What is your idea of a perfect date?",
    "Have you ever had a secret admirer?",
    "Who do you wish would text you right now?",
    "Have you ever been emotionally intimate quickly?",
    "What kind of touch makes you comfortable?",
    "What makes your heart race?",
    "Have you ever hidden feelings?",
    "Who do you feel strong chemistry with?",
    "Have you ever fantasized about someone?",
    "What kind of flirting do you like?",
    "Who do you find dangerously attractive?",
    "Have you ever wanted someone you shouldn’t?",
    "What kind of intimacy do you crave?",
    "Who makes you feel desired?",
    "What turns you on emotionally?",
    "Have you ever crossed emotional limits?",
    "What kind of person excites you?",
    "Who do you secretly check out?",
    "Have you ever imagined a future with someone?",
    "What kind of closeness do you enjoy?",
    "Who do you want attention from?",
    "What makes you feel attractive?",
    "Have you ever kept a romantic secret?",
    "Who do you feel tension with?",
    "What kind of vibes attract you?",
    "Have you ever wanted more than friendship?",
    "What makes you feel wanted?",
    "Who do you find tempting?",
    "What kind of romance excites you?",
    "Have you ever wanted forbidden attention?",
    "What desire do you hide?"
  ]
};

const dares = {
  1: [
    "Smile for 30 seconds",
    "Clap your hands 20 times",
    "Say something nice about someone",
    "Wave at the camera",
    "Do a funny face",
    "Spin once in place",
    "Say your name loudly",
    "Do 10 jumping jacks",
    "Send a thumbs up emoji",
    "Drink some water",
    "Stretch your arms",
    "Blink rapidly for 10 seconds",
    "Hum a tune",
    "Snap your fingers 10 times",
    "Stand up and sit down",
    "Laugh out loud",
    "Do a small dance",
    "Say hello to everyone",
    "Count from 1 to 10",
    "Smile at yourself",
    "Say a positive word",
    "Pretend to be a robot",
    "Clap slowly",
    "Say thank you",
    "Stretch your neck",
    "Tap your foot 15 times",
    "Say your favorite word",
    "Whistle softly",
    "Nod your head",
    "Take a deep breath",
    "Show a peace sign",
    "Say something funny",
    "Do a mini wave",
    "Blink slowly",
    "Smile at the screen",
    "Touch your nose",
    "Stand straight for 10 seconds",
    "Relax your shoulders",
    "Say one compliment",
    "Make a heart with fingers",
    "Pretend to yawn",
    "Say your favorite color",
    "Shake your hands",
    "Smile again",
    "Say hello loudly",
    "Tap the table",
    "Close your eyes briefly",
    "Stretch your legs",
    "Say ready!",
    "Celebrate quietly"
  ],

  2: [
    "Do 20 squats",
    "Sing one line of a song",
    "Do 10 pushups",
    "Act like a celebrity",
    "Dance for 15 seconds",
    "Speak without stopping for 20 seconds",
    "Imitate an animal",
    "Do a funny walk",
    "Post a funny emoji",
    "Say a tongue twister",
    "Tell a joke",
    "Pretend to cry",
    "Laugh loudly",
    "Do a slow spin",
    "Act like a superhero",
    "Speak in slow motion",
    "Do a plank for 20 seconds",
    "Say something embarrassing",
    "Make a silly sound",
    "Pretend to be sleepy",
    "Act like a teacher",
    "Talk in a different accent",
    "Dance without music",
    "Do 15 jumping jacks",
    "Act confused",
    "Say a secret word",
    "Pretend to be shy",
    "Show a victory pose",
    "Speak like a robot",
    "Act angry for 10 seconds",
    "Pretend to faint",
    "Act dramatic",
    "Make a funny face",
    "Act nervous",
    "Pretend to be famous",
    "Speak very fast",
    "Pretend to be scared",
    "Do wall sit 20 seconds",
    "Pretend to celebrate",
    "Act proud",
    "Say a pickup line",
    "Act surprised",
    "Speak softly",
    "Pretend to whisper",
    "Act cool",
    "Say something bold",
    "Pretend to argue",
    "Do a pose",
    "Act mysterious"
  ],

  3: [
    "Send a bold emoji to someone",
    "Say a flirty compliment",
    "Reveal your last crush name",
    "Send a risky text (non-explicit)",
    "Show your last emoji used",
    "Say who you find attractive",
    "Whisper something spicy (safe)",
    "Act confident and seductive",
    "Send a heart emoji to a contact",
    "Say a romantic line",
    "Reveal your type",
    "Post a confident selfie pose",
    "Say who you would date",
    "Pretend to flirt",
    "Say a secret desire (safe)",
    "Send a wink emoji",
    "Say who makes you nervous",
    "Act charming for 10 seconds",
    "Reveal your last crush memory",
    "Say a bold compliment",
    "Pretend to confess feelings",
    "Reveal your romantic weakness",
    "Say who you miss",
    "Send a playful message",
    "Say what attracts you",
    "Act smooth and confident",
    "Reveal your love language",
    "Say who excites you emotionally",
    "Send a teasing emoji",
    "Act mysterious",
    "Say a flirty truth",
    "Reveal your last romantic thought",
    "Say who you'd hug right now",
    "Send a heart reaction",
    "Say your favorite kind of attention",
    "Act irresistible",
    "Say what makes you blush",
    "Reveal who you want close",
    "Send a smile emoji",
    "Say what turns you on emotionally",
    "Act bold",
    "Say who you desire attention from",
    "Reveal your crush style",
    "Say a tempting line",
    "Act confident again",
    "Reveal your secret attraction",
    "Send a bold emoji again",
    "Say what excites you",
    "Act attractive"
  ]
};

function setLevel(lvl) {
  level = lvl;
  document.getElementById("levelIndicator").innerText =
    "Selected Level: " + levelNames[lvl];
  renderQuestions();
}

function renderQuestions() {
  const truthList = document.getElementById("truthList");
  const dareList = document.getElementById("dareList");

  truthList.innerHTML = "";
  dareList.innerHTML = "";

  truths[level].forEach(q => {
    const li = document.createElement("li");
    li.textContent = q;
    truthList.appendChild(li);
  });

  dares[level].forEach(q => {
    const li = document.createElement("li");
    li.textContent = q;
    dareList.appendChild(li);
  });
}

renderQuestions();

/* PLAYER LOGIC */

function addPlayer() {
  const input = document.getElementById("playerInput");
  if (!input.value.trim()) return;
  players.push(input.value.trim());
  input.value = "";
  updatePlayers();
}

function removePlayer(i) {
  players.splice(i, 1);
  updatePlayers();
}

function updatePlayers() {
  const list = document.getElementById("playerList");
  list.innerHTML = "";
  players.forEach((p, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${p} <span onclick="removePlayer(${i})">❌</span>`;
    list.appendChild(li);
  });
}

/* WHEEL */

function spinWheel() {
  if (spinning || players.length === 0) return;
  spinning = true;

  const wheel = document.getElementById("wheel");
  rotation += Math.floor(Math.random() * 360) + 1440;
  wheel.style.transform = `rotate(${rotation}deg)`;

  const player = players[Math.floor(Math.random() * players.length)];
  document.getElementById("currentPlayer").innerText = player;

  setTimeout(() => spinning = false, 4500);
}

function nextSpin() {
  document.getElementById("currentPlayer").innerText = "Next Player";
}
