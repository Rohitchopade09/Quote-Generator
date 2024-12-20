//create a variable
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person:"Winston Churchill"
},
{
    quote:"Believe you can and you're halfway there.",
    person:"Theodore Roosevelt"
},
{
    quote:"Don't watch the clock; do what it does. Keep going.",
    person:"Sam Levenson"
},
{
    quote:"The future belongs to those who believe in the beauty of their dreams.",
    person:"Eleanor Roosevelt"
},
{
    quote:"It always seems impossible until it's done.",
    person:"Nelson Mandela"
},
{
    quote:"You are never too old to set another goal or to dream a new dream.",
    person:"C.S. Lewis"
},
{
    quote:"Hardships often prepare ordinary people for an extraordinary destiny.",
    person:"C.S. Lewis"
},
{
    quote:"Your time is limited, so don't waste it living someone else's life.",
    person:"Steve Jobs"
},
{
    quote:"The only limit to our realization of tomorrow is our doubts of today.",
    person:"Franklin D. Roosevelt"
}
];
btn.addEventListener('click' , function(){
    let random= math.floor(math.random()* quotes.length);
    quote.innertext=quotes[random].quote;
    person.innertext=quotes[random].person;
})


