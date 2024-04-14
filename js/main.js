// List of random words
const randomWords = ["Hatsune Miku", "Linux", "the Eye of Harmony", "the Saint Electric", "31-EDO", "pen and paper", "steam", "horse", "the law of equivalent exchange", "dark magic", "a criminal amount of coffee", "random number generation", "zombies on treadmills", "you", "bogosort", "bugs", "the soul of an 8th century warlord", "unlimited bacon, but no games", "abacus", "ancient sins, ancient sins"];
var target = document.getElementById('random-word');

// Function to generate a random word
function setRandomWord() {
    target.innerText = randomWords[Math.floor(Math.random() * randomWords.length)];
}

// Replace the text with a random word when the page is loaded or refreshed
window.onload = function() {
    setRandomWord();
};

// 
// Music Mode code
//
var musicMode = false;
const projectSection = document.querySelectorAll("#projects > div");
const musicSection = document.querySelectorAll('#music > div');

var heading = document.querySelector("h1");

const drums = [];
for (let i = 0; i <= 3; i++) {
    drums.push(new Howl({
        src: [`media/audio/drums/${i}.wav`],
        loop: false
    }));
}

const stems = [];
for (let i = 0; i <= 2; i++) {
    stems.push(new Howl({
        src: [`media/audio/stems/${i}.wav`],
        loop: false
    }));
}

function toggleMusicMode() {
    musicMode = !musicMode;

    if (musicMode == true) {
        heading.textContent = "music mode! (try clicking stuff)"

        projectSection.forEach((div, index) => {
            div.addEventListener('click', () => {
                drumClick(index);
            });
        });

        musicSection.forEach((div, index) => {
            div.addEventListener('click', () => {
                stemClick(index);
            });
        });
    }
}

function drumClick(index) {
    // Stop all other sounds
    drums.forEach((sound, i) => {
        if (sound.playing()) {
            sound.stop();
        }
    });

    // Setup css dynamic styling
    drums[index].on('end', function(){
        projectSection[index].classList.remove('active');
    });
    drums[index].on('stop', function(){
        projectSection[index].classList.remove('active');
    });
    
    drums[index].play();
    projectSection[index].classList.add('active');
}

function stemClick(index) {
    
    stems[index].on('end', function(){
        musicSection[index].classList.remove('active');
    });
    stems[index].on('stop', function(){
        musicSection[index].classList.remove('active');
    });
    
    stems[index].play();
    musicSection[index].classList.add('active');
}