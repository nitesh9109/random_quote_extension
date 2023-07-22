async function getQuote() {
  const response = await fetch("https://api.quotable.io/quotes/random");
  const data = await response.json();

  const { content, author } = data[0];

  document.querySelector(".quote").textContent = content;
  document.querySelector(".author").textContent =
    "- " + author;
  console.timeEnd("time");
}

console.time("time");
getQuote();
