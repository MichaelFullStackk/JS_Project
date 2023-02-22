

let output = document.getElementById('output')

let words = [
    "Ui/Ux Designer", "Web Developer.", " Web Designer."
]

let charTurn = 0
let wordTurn = 0
printWord()
function printWord(){
    if(charTurn <= words[wordTurn].length){
        output.innerHTML = words[wordTurn].substr(0 , charTurn) + "<span id='blink'>|</span>";
        charTurn++
        setTimeout(printWord, 150)
    }else{
        setTimeout(deleteWord, 2000)
    }
    
}

function deleteWord(){
    if(charTurn >= 0){
       output.innerHTML = words[wordTurn].substr(0 , charTurn) + "<span id='blink'>|</span>";
        charTurn--
        setTimeout(deleteWord, 100)
    }else{
        if(wordTurn < words.length - 1){
            wordTurn++
        }else{
            wordTurn = 0
        }
        
        charTurn = 0
        setTimeout(printWord, 150)
    }
    
    
}

setInterval(() => {
    let blink = document.getElementById('blink');
    blink.style.visibility = (blink.style.visibility === 'hidden' ? '' : 'hidden');
}, 500);