/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Stores Star Wars quotes and their associated
// sources, citations, years, and optional themes.

const quotes = [
  {
    quote: "Hello there!",
    source: "Obi-Wan Kenobi",
    citation: "Star Wars: Episode III - Revenge of the Sith",
    year: 2005
  },
  {
    quote: "Do. Or do not. There is no try.",
    source: "Yoda",
    citation: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    theme: "Wisdom"
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

// Selects and returns a random quote object from the quotes array.
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Selects a random color from the colors array and 
// assigns it to the background color
function changeBackgroundColor() {
  const colors = [
    "#2E7D32",
    "#1565C0",
    "#6A1B9A",
    "#00695C",
    "#9A3412"
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}

// Displays a random quote with its available citation,
// year, and theme, then updates the background color.
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

  if (randomQuote.theme) {
    html += `<span class="theme">, ${randomQuote.theme}</span>`;
  }

  html += `</p>`;

  document.getElementById('quote-box').innerHTML = html;
  changeBackgroundColor();
}

// Automatically displays a new random quote and
// changes the background color every 10 seconds.
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);