/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "Hello there!",
    source: "Obi-Wan Kenobi",
    citation: "Star Wars: Episode III – Revenge of the Sith",
    year: 2005
  },
  {
    quote: "Do. Or do not. There is no try.",
    source: "Yoda",
    citation: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980
  },
  {
    quote: "This is where the fun begins.",
    source: "Anakin Skywalker",
    citation: "Star Wars: Episode III - Revenge of the Sith",
    year: 2005
  },
  {
    quote: "Never tell me the odds!",
    source: "Han Solo",
    citation: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980
  },
  {
    quote: "I find your lack of faith disturbing.",
    source: "Darth Vader",
    citation: "Star Wars: Episode IV - A New Hope",
    year: 1977
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

/***
 * `printQuote` function
***/
function printQuote() {
  const randomQuote = getRandomQuote();
  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);