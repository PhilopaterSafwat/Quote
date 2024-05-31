let Quote = [
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    "“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“A room without books is like a body without a soul.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
    "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”"
];

let btn = document.querySelector("button");
let h = document.querySelector("h2");
let usedIndices = [];
randomQuote()

btn.addEventListener("click", randomQuote);

function randomQuote() {
    if (usedIndices.length === Quote.length) {
        
        usedIndices = [];
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * Quote.length);
    } while (usedIndices.includes(randomIndex)); 
    usedIndices.push(randomIndex);
    h.textContent = Quote[randomIndex];
}