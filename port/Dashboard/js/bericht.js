console.log("main.js loaded.");

//Drie antwoorden
const answer = [
    "Hallo","Wat leuk","Fijne dag", "Wat ga je doen vanavond?"
];
const messages = document.querySelector(".messages");
const messagesInput = document.querySelector(".messages-input");
const btn = document.querySelector(".send-button");

let input1 = document.querySelector('.input1');


messages.innerHTML= "";
btn.addEventListener("click",sendMessage);


//de code om als je op verzend drukt een antwoord krijgt
messagesInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
});

// Hier is de function om een een bericht te sturen
function sendMessage() {
    console.log("sending");
    console.log("message = " + input1.value);
        messages.innerHTML+=createRow(input1.value,"", "Aghyad ");
        setTimeout(giveAnswer,1000);
        
        messages.scrollTop = messages.scrollHeight;
        
        input1.value = "";
}


// Hier is de function om een antwoord terug te krijgen.
  function giveAnswer() {
    messages.innerHTML+=createRow(getRandomAnswer(),"", "Chatbot");
    messages.scrollTop = messages.scrollHeight;
  }
 function getRandomAnswer() {
    
    return answer[getRandomNumber(0,answer.length -1)];
 };
 function getRandomNumber(min,max) {
    return Math.floor(Math.random()* (max - min +1) + min);
 }

function createRow(messagesText, imgUrl,sendName) {
    const message=`
    <div class="msg-row">
    <div class="msg-text">
        <h2> ${sendName}</h2>
        <p> ${messagesText}</p>
    </div>
    <img src="${imgUrl}" class="msg-img img-runded">
</div>`;
return message;
};