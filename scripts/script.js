let display = document.getElementById('display');
let initDisplay = display.innerHTML;

function playSound(pad,drum){
    display.innerHTML = drum;
    document.getElementById(pad).pause();
    document.getElementById(pad).play();
    
}

function prePlay(key){
    let drumText = '';
    switch(key){
        case "Q":
            drumText = 'Heater 1';
            break;
        case "W":
            drumText = 'Heater 2';
            break;
        case "E":
            drumText = 'Heater 3';
            break;
        case "A":
            drumText = 'Heater 4';
            break;
        case "S":
            drumText = 'Heater 6';
            break;
        case "D":
            drumText = 'Disco';
            break;
        case "Z":
            drumText = 'Kick n Hat';
            break;
        case "X":
            drumText = 'Kick';
            break;   
        case "C":
            drumText = 'Cev h2';
            break;        
        default:
            break;
    }
    playSound(key,drumText);

}

function handleEvent(event){
    let theKey = event.key.toUpperCase();
    if(/Q|W|E|A|S|D|Z|X|C/.test(theKey)){
        prePlay(theKey);
    }    
}

document.addEventListener('keydown', handleEvent);

