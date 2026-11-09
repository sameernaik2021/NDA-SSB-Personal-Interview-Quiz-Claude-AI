"use strict";

/* Each question: [question, correct answer, wrong1, wrong2, wrong3, hint, explanation]
   Source: NDA SSB Personal Interview - 100 Questions with Sample Answers.
   To add more questions, push another array into the relevant set's "items". */
const SETS = [
  { name: "Set 1: Personal Background", items: [
    ["When asked \"Tell me something about yourself\", which approach is best?",
     "A short, honest introduction covering your background, interests, strengths and ambition",
     "Reading out a memorised script of achievements",
     "Listing only your exam marks",
     "Exaggerating your achievements to impress the board",
     "SSB assessors want the real person, not a rehearsed speech.",
     "Be natural, truthful and brief: background, interests, strengths and your ambition to serve as an officer."],
    ["How should you answer \"What are your weaknesses?\"",
     "Name a genuine weakness and explain how you are working to improve it",
     "Say you have no weaknesses",
     "Name a fake weakness such as \"I work too hard\"",
     "Refuse to answer the question",
     "Honesty plus an improvement plan shows maturity.",
     "Example: spending too long analysing a decision, and fixing it by setting time limits and priorities."],
    ["How should you describe your biggest failure?",
     "As feedback: explain what went wrong and what you learned",
     "As someone else's fault",
     "As something you never think about",
     "As a failure that proves you cannot succeed",
     "Think about what failure teaches you.",
     "Treat failure as feedback for future efforts: analyse the cause and identify areas to improve."],
    ["You have never held a formal leadership post. What should you say when asked about leadership?",
     "Describe an actual situation where you took responsibility",
     "Claim a post you never held",
     "Say leadership does not interest you",
     "Say you are only a follower",
     "Be specific and real.",
     "The guide advises giving a genuine example of taking responsibility instead of inventing a position."],
    ["You list \"reading\" and \"cricket\" as hobbies. What should you expect?",
     "Detailed questions about every hobby you mention",
     "No questions about hobbies",
     "Questions only about studies",
     "Questions only if the hobby is a sport",
     "Only mention what you can discuss in depth.",
     "Be prepared for detailed questions about every hobby you mention."],
    ["You were punished at school. How should you answer when asked about it?",
     "Explain the real incident, accept the mistake and share what you learned",
     "Deny that it ever happened",
     "Blame the teacher",
     "Say the punishment was unfair and you do not care",
     "Accountability matters more than a spotless record.",
     "Accept the consequences honestly and explain how you became more careful and responsible."],
    ["Which qualities in friends does the sample answer value?",
     "Honesty, reliability, positivity and willingness to give constructive feedback",
     "Popularity and wealth",
     "Agreeing with everything you say",
     "Being good at sports only",
     "Think about trust and honest feedback.",
     "The sample answer values friends who give constructive feedback rather than simply agreeing."],
    ["How should you answer \"Which subject do you dislike?\"",
     "Admit it is challenging and explain how you are improving through practice",
     "Say you hate it and ignore it",
     "Blame the teacher for it",
     "Say you like every subject equally",
     "Show a positive, improvement-focused attitude.",
     "Acknowledge the difficulty, recognise the subject's importance and work on it with regular practice."],
    ["Which values does the sample answer say a family teaches?",
     "Discipline, honesty, respect and responsibility",
     "Competition, wealth and fame",
     "Independence from all rules",
     "Winning at any cost",
     "Think of core character values.",
     "The family answer highlights discipline, honesty, respect and responsibility."],
    ["\"Who are you closer to, your mother or your father?\" What is the best approach?",
     "Say you share a good bond with both and can talk to either",
     "Say you hate one of them",
     "Refuse to answer",
     "Say you are not close to anyone",
     "Avoid creating conflict in your answer.",
     "A balanced answer shows a healthy relationship with both parents."]
  ]},
  { name: "Set 2: Personality & Leadership", items: [
    ["Which is a good reason to join the Indian Armed Forces?",
     "Responsibility, leadership, discipline and service to the nation",
     "Only a good salary",
     "Because friends are joining",
     "To avoid studying further",
     "Think about service and challenge.",
     "The sample answer cites responsibility, leadership, discipline and service to the nation."],
    ["What does leadership mean, according to the sample answer?",
     "Taking responsibility, setting an example and guiding people to a common goal",
     "Giving orders and avoiding blame",
     "Being the most popular person",
     "Doing all the work yourself",
     "A leader accepts mistakes too.",
     "A good leader listens to the team and accepts responsibility for mistakes."],
    ["Your team disagrees with your decision. What should you do first?",
     "Listen to their opinions and understand their concerns",
     "Ignore them and carry on",
     "Change the decision immediately",
     "Punish those who disagree",
     "Listening comes before deciding.",
     "Use good suggestions; if your decision still stands, explain your reasoning and keep the team motivated."],
    ["A senior gives you an order you think is incorrect. What should you do?",
     "Respectfully clarify and raise concerns through the proper channel",
     "Refuse the order openly",
     "Argue with him in front of others",
     "Ignore the order silently",
     "Use proper channels and respect lawful orders.",
     "Understand the objective and act according to lawful orders and established procedures."],
    ["Would you choose friendship over duty?",
     "No. I value friends but will not compromise responsibilities or ethics",
     "Yes, friends always come first",
     "Yes, if no one finds out",
     "Only if the friend is a senior",
     "Duty and ethics cannot be traded for favours.",
     "Handle the situation fairly and professionally."],
    ["What is the difference between confidence and overconfidence?",
     "Confidence believes in abilities while knowing limits; overconfidence overestimates abilities and ignores risk",
     "They mean the same thing",
     "Confidence ignores advice; overconfidence listens to advice",
     "Overconfidence leads to better preparation",
     "One recognises limitations, the other does not.",
     "Confidence encourages preparation, whereas overconfidence can lead to careless decisions."],
    ["How does the sample answer describe the candidate's personality type?",
     "Ambivert",
     "Pure introvert",
     "Pure extrovert",
     "Aggressive",
     "It sits between two common types.",
     "The candidate enjoys group activities and also values time to learn and reflect independently."],
    ["Your friend cheated in an exam. What does the sample answer suggest?",
     "Explain it is unethical, encourage honesty and report through proper channels if required",
     "Help him cheat better",
     "Ignore it completely",
     "Spread the news to everyone",
     "Balance friendship with integrity.",
     "Follow the examination rules and report the incident through the appropriate channel if required."],
    ["Your team made a mistake and you are responsible. What should you do?",
     "Take responsibility, correct the mistake and prevent it from recurring",
     "Blame an individual immediately",
     "Hide the mistake",
     "Say it was not your problem",
     "Focus on fixing, not blaming.",
     "Avoid unnecessary blame and concentrate on preventing similar problems."],
    ["What does discipline mean, according to the sample answer?",
     "Staying consistent, following rules and completing responsibilities even when motivation is low",
     "Working only when you feel like it",
     "Following rules only when watched",
     "Being strict with others only",
     "It continues even when motivation drops.",
     "Discipline means consistency, respecting commitments and completing responsibilities."]
  ]},
  { name: "Set 3: Defence Knowledge", items: [
    ["Where is the National Defence Academy located?",
     "Khadakwasla, near Pune, Maharashtra",
     "Dehradun, Uttarakhand",
     "Chennai, Tamil Nadu",
     "Gaya, Bihar",
     "It is near the city this quiz is being practised from.",
     "NDA is at Khadakwasla, about 17 km from Pune city."],
    ["Who is the Supreme Commander of the Indian Armed Forces?",
     "The President of India",
     "The Prime Minister",
     "The Defence Minister",
     "The Chief of Defence Staff",
     "It is the head of state.",
     "The President of India is the Supreme Commander."],
    ["What is the motto of the National Defence Academy?",
     "Seva Parmo Dharma (Service Before Self)",
     "Sham No Varunah",
     "Nabha Sparsham Deeptam",
     "Jai Hind",
     "It means \"Service Before Self\".",
     "The NDA motto is Seva Parmo Dharma."],
    ["What is the motto of the Indian Navy?",
     "Sham No Varunah",
     "Nabha Sparsham Deeptam",
     "Seva Parmo Dharma",
     "Satyameva Jayate",
     "It refers to the Lord of the Water.",
     "\"Sham No Varunah\" means \"May the Lord of the Water be auspicious unto us\"."],
    ["What is the motto of the Indian Air Force?",
     "Nabha Sparsham Deeptam",
     "Sham No Varunah",
     "Seva Parmo Dharma",
     "Vande Mataram",
     "It involves touching the sky.",
     "It means \"Touch the Sky with Glory\"."],
    ["Which statement correctly differentiates NDA and CDS?",
     "NDA is for candidates in or after Class 12; CDS is for graduates",
     "NDA is for graduates; CDS is for Class 12",
     "Both are only for graduates",
     "NDA is conducted by SSB; CDS by UPSC",
     "Think about the eligibility level.",
     "UPSC conducts the NDA exam for Class 12 candidates; CDS is for graduates entering IMA, INA, AFA and OTA."],
    ["Operation Meghdoot (1984) was conducted to secure which place?",
     "The Siachen Glacier",
     "The Maldives",
     "Kargil",
     "Sri Lanka",
     "It is the world's highest battlefield.",
     "Operation Meghdoot secured the Siachen Glacier."],
    ["Which rank comes immediately after Major in the Indian Army?",
     "Lieutenant Colonel",
     "Captain",
     "Colonel",
     "Brigadier",
     "Ranks go Lieutenant, Captain, Major, then...",
     "The order is Lieutenant, Captain, Major, Lieutenant Colonel, Colonel, Brigadier and so on."],
    ["Who is the Chief of Defence Staff (as of November 2026, per the study guide)?",
     "General N. S. Raja Subramani",
     "General Dhiraj Seth",
     "Admiral Krishna Swaminathan",
     "Air Chief Marshal Ashutosh Dixit",
     "Other names in the options lead the Army, Navy and Air Force.",
     "The guide lists General N. S. Raja Subramani as CDS. Always re-check this time-sensitive fact before your interview."],
    ["Operation Cactus (1988) was India's military intervention in which country?",
     "The Maldives",
     "Sri Lanka",
     "Bangladesh",
     "Nepal",
     "It followed an attempted coup in an island nation.",
     "India intervened in the Maldives following an attempted coup."]
  ]},
  { name: "Set 4: Situational & Awareness", items: [
    ["On which date is Kargil Vijay Diwas observed?",
     "26 July",
     "15 August",
     "26 January",
     "16 December",
     "It falls in mid-summer.",
     "Operation Vijay ended in 1999 with India regaining the occupied positions; Vijay Diwas is on 26 July."],
    ["What is the difference between internal and external security?",
     "Internal deals with threats within the country; external with threats from outside its borders",
     "Internal deals with foreign wars only",
     "External deals with local crime only",
     "There is no difference",
     "Think inside versus outside borders.",
     "Terrorism and insurgency are internal examples; military aggression and cross-border threats are external."],
    ["Your team failed despite your best efforts. What should you do?",
     "Own your part, analyse the causes and apply the lessons",
     "Blame the team",
     "Give up leadership roles",
     "Pretend nothing happened",
     "Failure is a chance to improve.",
     "Discuss improvements with the team and apply the lessons to future tasks."],
    ["Should a leader be strict or friendly?",
     "A balance: approachable, but firm on discipline and standards",
     "Always strict",
     "Always friendly",
     "Neither; avoid interacting with the team",
     "The best answer is rarely at an extreme.",
     "A leader must understand the team and still be firm about responsibilities."],
    ["Saving time versus following the correct procedure: what should you do?",
     "Never compromise safety or legal requirements to save time",
     "Always skip procedures to save time",
     "Follow procedures only when supervised",
     "Ask someone else to decide",
     "Safety comes first.",
     "In a genuine emergency, act within established emergency procedures using resources efficiently."],
    ["You notice a fellow cadet breaking an important rule. What should you do?",
     "Understand the situation, explain the rule's importance, and inform authority if serious or repeated",
     "Ignore it",
     "Join in",
     "Humiliate the cadet in public",
     "Start with understanding, escalate if needed.",
     "Ignoring a serious violation is not acceptable."],
    ["You were not recommended by the SSB. What is the best response?",
     "Accept it positively, analyse your performance and keep improving",
     "Give up your goal",
     "Blame the assessors",
     "Stop preparing for good",
     "One result does not define you.",
     "Continue developing your personality and prepare for another opportunity if eligible."],
    ["How does the sample answer distinguish success from happiness?",
     "Success relates to achieving goals; happiness is broader satisfaction and well-being",
     "They are identical",
     "Happiness is only about money",
     "Success has nothing to do with goals",
     "One is about goals, the other about wellbeing.",
     "Meaningful success should also support personal growth, relationships and purpose."],
    ["What is the balanced view of social media in the sample answer?",
     "It is useful, but misinformation and privacy risks require responsible use",
     "It is entirely harmful",
     "It has no downsides",
     "It should never be used",
     "Avoid extremes.",
     "Social media helps communication and education; excessive use, misinformation and privacy concerns are challenges."],
    ["You are stranded in an unfamiliar place without a phone. What should you do?",
     "Stay calm, assess surroundings and seek help from a trustworthy authority or person",
     "Panic and run",
     "Accept a ride from any stranger",
     "Sit and wait without acting",
     "Calm thinking first.",
     "Identify landmarks, public places and a safe route to your destination."]
  ]}
];

/* Merge the remaining questions from more-questions.js into each set */
EXTRA_ITEMS.forEach((items, i) => SETS[i].items.push(...items));

const $ = (id) => document.getElementById(id);
const el = {
  start: $("start"), quiz: $("quiz"), result: $("result"), setButtons: $("setButtons"),
  progress: $("progressText"), score: $("scoreText"), bar: $("barFill"), setLabel: $("setLabel"),
  question: $("question"), options: $("options"), hintBtn: $("hintBtn"), hint: $("hint"),
  feedback: $("feedback"), next: $("nextBtn"), restart: $("restartBtn")
};

let questions = [], index = 0, correct = 0, answered = false;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function toQuestion(item, setName) {
  return {
    set: setName, text: item[0], hint: item[5], why: item[6],
    options: shuffle([
      { text: item[1], ok: true },
      { text: item[2], ok: false },
      { text: item[3], ok: false },
      { text: item[4], ok: false }
    ])
  };
}

function buildStartScreen() {
  el.setButtons.innerHTML = "";
  const all = SETS.reduce((n, s) => n + s.items.length, 0);
  addSetButton("All sets mixed", all + " questions", -1);
  SETS.forEach((s, i) => addSetButton(s.name, s.items.length + " questions", i));
}

function addSetButton(title, count, setIndex) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "set-btn";
  b.innerHTML = "<strong></strong><span></span>";
  b.firstChild.textContent = title;
  b.lastChild.textContent = count;
  b.addEventListener("click", () => startQuiz(setIndex));
  el.setButtons.appendChild(b);
}

function startQuiz(setIndex) {
  const pool = [];
  SETS.forEach((s, i) => {
    if (setIndex === -1 || setIndex === i) s.items.forEach((it) => pool.push(toQuestion(it, s.name)));
  });
  questions = shuffle(pool);
  index = 0; correct = 0;
  el.start.classList.add("hidden");
  el.result.classList.add("hidden");
  el.quiz.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  answered = false;
  const q = questions[index];
  el.progress.textContent = "Question " + (index + 1) + " of " + questions.length;
  el.score.textContent = "Score: " + correct;
  el.bar.style.width = (index / questions.length) * 100 + "%";
  el.setLabel.textContent = q.set;
  el.question.textContent = q.text;
  el.hint.classList.add("hidden");
  el.hint.textContent = "";
  el.hintBtn.disabled = false;
  el.hintBtn.classList.remove("hidden");
  el.feedback.classList.add("hidden");
  el.next.classList.add("hidden");
  el.options.innerHTML = "";
  q.options.forEach((opt, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "option";
    b.innerHTML = '<span class="key"></span><span class="txt"></span>';
    b.querySelector(".key").textContent = i + 1;
    b.querySelector(".txt").textContent = opt.text;
    b.addEventListener("click", () => selectAnswer(i));
    el.options.appendChild(b);
  });
}

function selectAnswer(i) {
  if (answered) return;
  answered = true;
  const q = questions[index];
  const buttons = el.options.querySelectorAll(".option");
  buttons.forEach((b, k) => {
    b.disabled = true;
    if (q.options[k].ok) b.classList.add("correct");
  });
  const isRight = q.options[i].ok;
  if (isRight) correct++;
  else buttons[i].classList.add("wrong");

  el.score.textContent = "Score: " + correct;
  el.bar.style.width = ((index + 1) / questions.length) * 100 + "%";
  el.feedback.className = "feedback " + (isRight ? "ok" : "bad");
  el.feedback.innerHTML = "<strong></strong><span class='why'></span>";
  el.feedback.firstChild.textContent = isRight ? "✅ Correct!" : "❌ Incorrect. The correct answer is highlighted in green.";
  el.feedback.lastChild.textContent = q.why;
  el.hintBtn.disabled = true;
  el.next.textContent = index === questions.length - 1 ? "See Results ➜" : "Next Question ➜";
  el.next.classList.remove("hidden");
  el.next.focus();
}

function showResults() {
  el.quiz.classList.add("hidden");
  el.result.classList.remove("hidden");
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  $("percent").textContent = pct + "%";
  $("rTotal").textContent = total;
  $("rCorrect").textContent = correct;
  $("rWrong").textContent = total - correct;
  $("rScore").textContent = correct + " / " + total + " (" + pct + "%)";
  $("remark").textContent = pct >= 80 ? "Excellent. You are thinking like a candidate."
    : pct >= 60 ? "Good progress. Revisit the questions you missed."
    : "Keep practising. Read the sample answers again and focus on the reasoning.";
}

el.hintBtn.addEventListener("click", () => {
  el.hint.textContent = "💡 " + questions[index].hint;
  el.hint.classList.remove("hidden");
});

el.next.addEventListener("click", () => {
  if (index < questions.length - 1) { index++; showQuestion(); }
  else showResults();
});

el.restart.addEventListener("click", () => {
  el.result.classList.add("hidden");
  el.start.classList.remove("hidden");
});

document.addEventListener("keydown", (e) => {
  if (el.quiz.classList.contains("hidden") || answered) return;
  const n = parseInt(e.key, 10);
  if (n >= 1 && n <= 4) selectAnswer(n - 1);
});

buildStartScreen();
