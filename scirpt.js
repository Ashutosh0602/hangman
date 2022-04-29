let wordEl= document.getElementsByClassName('word')[0]
let wrongLettersEl= document.getElementsByClassName('letter_contain')[0]
let playAgain=document.getElementsByClassName('play_bt')[0]
let popUp=document.getElementsByClassName('prompt_notf')[0]
let notification=document.getElementsByClassName('notify_letter')[0]
let finalMessage=document.getElementsByClassName('result')[0]
let figureParts=document.querySelectorAll('.figure_part')
let words=['java','python','golang','csharp',
            'rust','raspberrypi','jupiter','numpy','matplotlib',
            'tkinter','swift','kotlin','django','flask','javascript','flutter','php',
            'solidity','blockchain','typescirpt']

let selectWord=words[Math.floor(Math.random()*words.length)];
let correctLetters=[];
let wrongLetters=[];

function displayWord(){
    wordEl.innerHTML=`${selectWord.split('').map(letter => `<span class="letter">${correctLetters.includes(letter) ? letter : ''}</span>`).join('')}`;
    let innerWord = wordEl.innerText.replace(/[ \n]/g, '');

if(innerWord===selectWord){
    finalMessage.innerText="Congratulation! You won :)";
    popUp.style.display="flex";
    }
}

function updateWrongLetter(){
    wrongLetters.innerHTML=`${wrongLetters.length>0 ? '<p>Wrong</p>':''}${wrongLetters.map(letter=>`<p class='wrong_span'>${letter}</p>`)}`;
    figureParts.forEach((part,index) => {
        const err=wrongLetters.length
        if(index<err){
            part.style.display="block"
        }
        else{
            part.style.display='none'
        }
    })
    if(wrongLetters.length==figureParts.length){
        finalMessage.innerText="OOPS! You lose :("
            popUp.style.display="flex";

    }
}

function showNotification(){
    notification.classList.add('notifc_letter');
    setTimeout(()=>{
        notification.classList.remove('notifc_letter')},1000)
}

window.addEventListener('keydown',(e)=>{
    const letter=e.key;
    if(selectWord.includes(letter)){
        if(!correctLetters.includes(letter)){
            correctLetters.push(letter);
            displayWord();
        }
        else{
            showNotification();
        }
    }
    else{
        if(!wrongLetters.includes(letter)){
            wrongLetters.push(letter)
            updateWrongLetter();
        }
        else{
            showNotification();
        }
    }
    console.log(letter)
})


displayWord();