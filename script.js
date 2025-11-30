function goToSignIn() {
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("signPage").style.display = "flex";
}

function startTestFromSignIn() {
    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;

    if (name == "" || email == "") {
        alert("Please enter your name and email!");
        return;
    }

    document.getElementById("signPage").style.display = "none";
    document.getElementById("startPage").style.display = "flex";

    document.getElementById("displayName").innerText = name;
}

function startTestFromStartPage() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("quizPage").style.display = "block";
    startTest();
}


let questions = [
    { q: "Which country's national language is Arabic?", options: ["Turkey", "Egypt", "Iran", "Israel"], answer: 1 },
    { q: "Amazon rainforest mostly belongs to?", options: ["Brazil","Peru","Colombia","Venezuela"], answer: 0 },
    { q: "Capital of Russia?", options: ["St. Petersburg","Moscow","Novosibirsk","Kazan"], answer: 1 },
    { q: "National language of Egypt?", options: ["Spanish","Arabic","Urdu","Turkish"], answer: 1 },
    { q: "Amazon rainforest mostly belongs to?", options: ["Brazil","Peru","Colombia","Venezuela"], answer: 0 },
    { q: "Capital of Russia?", options: ["St. Petersburg","Moscow","Novosibirsk","Kazan"], answer: 1 },
    { q: "Largest planet?", options: ["Mars","Earth","Saturn","Jupiter"], answer: 3 },
    { q: "5 + 7 =", options: ["10","11","12","13"], answer: 2 },
    { q: "Which is a fruit?", options: ["Potato","Carrot","Apple","Spinach"], answer: 2 },
    { q: "Sun rises in?", options: ["North","West","East","South"], answer: 2 },
    { q: "Smallest continent?", options: ["Asia","Australia","Europe","Africa"], answer: 1 },
    { q: "Water freezes at?", options: ["0°C","50°C","100°C","10°C"], answer: 0 },
    { q: "Which is a web browser?", options: ["Chrome","Excel","Word","Photoshop"], answer: 0 },
    { q: "What is the data type of the price in let price = 120 (for biryani)?",options: ["String", "Number", "Object", "Array"],answer: 1},
    { q: "Which method adds 'imli' to the chaat array?",options: ["pop()", "push()", "shift()", "slice()"], answer: 1},
    { q: "What will 'paneer'.toUpperCase() return?",options: ["paneer", "Paneer", "PANEER", "Panneer"],answer: 2},
    {  q: "What is the index of 'jalebi' in ['jalebi','laddu','rasgulla']?",options: ["0", "1", "2", "undefined"],answer: 0},
    { q: "console.log(typeof 'dosa') prints?",options: ["object", "string", "undefined", "char"],answer: 1 },
         { q: "Which keyword is used to declare a variable for storing 'samosa' count?",options: ["make", "set", "let", "varname"],answer: 2 },
  {  q: "What will this return: 'chai'.length?",options: ["3", "2", "4", "5"],answer: 2 },
  { q: "Which country has the largest population in the world?", options: ["India", "China", "USA", "Russia"], answer: 0 },
{ q: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Thailand"], answer: 1 },
{ q: "Which country has the largest area?", options: ["Canada", "USA", "Russia", "China"], answer: 2 },
{ q: "Which country’s capital is Canberra?", options: ["New Zealand", "Australia", "Austria", "Canada"], answer: 1 },
{ q: "Mount Everest lies between Nepal and which country?", options: ["India", "China", "Pakistan", "Bhutan"], answer: 1 },
{ q: "Which country is famous for pizzas and pasta?", options: ["Mexico", "Italy", "Spain", "France"], answer: 1 },
{ q: "Which country invented paper?", options: ["Greece", "China", "Egypt", "India"], answer: 1 },
{ q: "Which country is known for the Eiffel Tower?", options: ["France", "Italy", "Belgium", "Germany"], answer: 0 },
{ q: "Which country is closest to the South Pole?", options: ["Australia", "Argentina", "Antarctica", "Chile"], answer: 2 },
{ q: "Which country’s capital is Berlin?", options: ["Austria", "Germany", "Belgium", "Poland"], answer: 1 },
{ q: "Which country is known for pyramids?", options: ["Brazil", "Egypt", "Mexico", "Iraq"], answer: 1 },
{ q: "Which country has the most FIFA World Cup wins?", options: ["Brazil", "Argentina", "Germany", "Italy"], answer: 0 },
{ q: "Which country is an island nation in South Asia?", options: ["Nepal", "Bhutan", "Sri Lanka", "Bangladesh"], answer: 2 },
{ q: "The Statue of Liberty was gifted to the USA by which country?", options: ["UK", "France", "Italy", "Germany"], answer: 1 },
{ q: "Which country is the largest in Africa by land area?", options: ["Nigeria", "Egypt", "Algeria", "South Africa"], answer: 2 },
{ q: "Which country is known for tulips and windmills?", options: ["Belgium", "Netherlands", "Denmark", "Finland"], answer: 1 },
{ q: "Which country has the currency ‘Yen’?", options: ["South Korea", "Japan", "China", "Thailand"], answer: 1 },
{ q: "Which country is known as the Land of the Midnight Sun?", options: ["India", "Norway", "Canada", "Russia"], answer: 1 },
{ q: "Which country hosted the 2022 FIFA World Cup?", options: ["Russia", "USA", "Qatar", "Brazil"], answer: 2 },
{ q: "Which country’s capital is Ottawa?", options: ["USA", "Australia", "Canada", "Ireland"], answer: 2 },
{ q: "Which is the smallest country in the world?", options: ["Monaco", "Vatican City", "Maldives", "Nauru"], answer: 1 },
{ q: "Which country is famous for Samba dance?", options: ["Spain", "Brazil", "Argentina", "Portugal"], answer: 1 },
{ q: "Which country does the Amazon Rainforest mainly belong to?", options: ["Peru", "Brazil", "Colombia", "Bolivia"], answer: 1 },
{ q: "Which country has New Delhi as its capital?", options: ["India", "Nepal", "Pakistan", "Sri Lanka"], answer: 0 },
{ q: "Which country is famous for the Great Wall?", options: ["India", "China", "Japan", "Mongolia"], answer: 1 },
{ q: "Which country uses the currency ‘Euro’?", options: ["UK", "France", "India", "Japan"], answer: 1 },
{ q: "Which country’s capital is Moscow?", options: ["Ukraine", "Russia", "Belarus", "Poland"], answer: 1 },
{ q: "Which country is known for the Taj Mahal?", options: ["Pakistan", "India", "Bangladesh", "Iran"], answer: 1 },
{ q: "Which country has Nairobi as its capital?", options: ["Kenya", "Tanzania", "Uganda", "Ethiopia"], answer: 0 },
{ q: "Which country is famous for its maple leaf symbol?", options: ["USA", "Sweden", "Canada", "Denmark"], answer: 2 }

  
  
]



let selectedQuestions = [15];
let index = 0;
let userAnswers = [];

function startTest() {
    selectedQuestions = [];
    index = 0;
    userAnswers = [];

    while (selectedQuestions.length < 15) {
        let randomIndex = Math.floor(Math.random() * questions.length);
        if (!selectedQuestions.includes(questions[randomIndex])) {
            selectedQuestions.push(questions[randomIndex]);
        }
    }

    document.getElementById("quizPage").style.display = "block";
    showQuestion();
}


function showQuestion() {
    let q = selectedQuestions[index];

    document.getElementById("qNo").innerHTML = "QUESTION " + (index + 1);
    document.getElementById("questionText").innerHTML = q.q;

    let optDiv = document.getElementById("options");
    optDiv.innerHTML = "";

    for (let i = 0; i < q.options.length; i++) {
        optDiv.innerHTML += `
            <label>
                <input type='radio' name='opt' value='${i}' 
                ${userAnswers[index] == i ? "checked" : ""}>
                ${q.options[i]}
            </label><br>
        `;
    }
    updateButtons();

}

function nextQuestion() {
    saveAnswer();
    if (index < selectedQuestions.length - 1) {
        index++;
        showQuestion();
    }
}

function prevQuestion() {
    saveAnswer();
    if (index > 0) {
        index--;
        showQuestion();
    }
}

function saveAnswer() {
    let selected = document.querySelector("input[name='opt']:checked");
    if (selected) userAnswers[index] = selected.value;
}
function updateButtons() {
    
    document.getElementById("prevBtn").style.display = (index == 0) ? "none" : "inline-block";

    
    if (index == selectedQuestions.length - 1) {
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("submitBtn").style.display = "inline-block";
    } 
    else {
        document.getElementById("nextBtn").style.display = "inline-block";
        document.getElementById("submitBtn").style.display = "none";
    }
}

function submitTest() {
    saveAnswer();

    let confirmSubmit = confirm("Are you sure you want to submit the test?");
    if (!confirmSubmit) return;

    let score = 0;

    for (let i = 0; i < selectedQuestions.length; i++) {
        if (String(userAnswers[i]) === String(selectedQuestions[i].answer)) score++;
    }

    document.getElementById("quizPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";

    document.getElementById("scoreText").innerHTML =
        "Marks: " + score + " / " + selectedQuestions.length;
}


