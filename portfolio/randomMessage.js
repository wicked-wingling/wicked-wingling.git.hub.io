//The body of the quote datatbase
const messageHead = ['Push yourself', 'Don\'t follow', 'Sometimes later', 
'Dream it', 'If you can imagine it you can',  'Well done', 'Keep your face always towards',
 'Life isn\'t about', 'Our greatest', 'Either you run the day or', 'The pain you feel today',
 'Your inspirational quote', 'Motivating quotes that']
const messageBody = ['because no one else is', 'your dreams are', 'becomes never',
'wish it', 'or achieve it if you can', 'is better than', 'the sunshine and',
 'finding yourself', 'weakness', 'or', 'will be the strength,', 'has inspired me', 
'will inspire you,']
const messageFoot = ['is going to do it for you.', 'chase them!', 'do it now',
 'do it!', 'to dream it you can become it', 'well said', 'shadows will fall behind you',
 'it\'s about creating yourself!', 'lies in giving up', 'the day runs you', 'you feel tomorrow',
'to unfriend you', 'to be successful']

//deciding random quote to generate

let randomQuoteSelector = function(event) {
    let head = Math.floor(Math.random()* messageHead.length);
    let body = Math.floor(Math.random()* messageBody.length);
    let foot = Math.floor(Math.random()* messageFoot.length);
    console.log(`${messageHead[head]} ${messageBody[body]} ${messageFoot[foot]}`)
    return `${messageHead[head]} ${messageBody[body]} ${messageFoot[foot]}`

}
function dailyQuote(){
    quote.innerHTML = randomQuoteSelector();
}

//DEFINE WEBPAGE CONST

let button = document.getElementById('button');
let quote = document.getElementById('quote');

//LISTENERS

//START HERE
button.addEventListener('click', dailyQuote)