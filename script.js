const text = document.getElementById("text");

const cover = document.querySelector(".cover");

const newQuote = document.getElementById("new-quote");

const author = document.querySelector("#author");

const twitter = document.querySelector(".bi");

const tumblr = document.querySelector(".fab");

$(document).ready(function () {

  $(".cover").css({

    display: "flex",

    "justify-content": "center",

    "align-items": "center",

  });

  $("#quote-box").css("background-color", "white");

  handleClick(); // Fetch the first quote when the page loads

});

const getRandomColor = () => {

  const r = Math.floor(Math.random() * 256); // Random red (0-255)

  const g = Math.floor(Math.random() * 256); // Random green (0-255)

  const b = Math.floor(Math.random() * 256); // Random blue (0-255)

  return `rgb(${r},${g},${b})`;

};

const handleClick = () => {

  const randomColor = getRandomColor();

  const randomNbr = Math.floor(Math.random() * randomColor.length);

  $(".cover").fadeOut(1000, function () {

    fetch("https://dummyjson.com/quotes/random")

      .then(response => {

        if (!response.ok) {

          throw new Error(`HTTP error! Status: ${response.status}`);

        }

        return response.json();

      })

      .then(data => {

        text.innerText = `"${data.quote}"`;

        author.innerText = `- ${data.author}`;

        cover.style.backgroundColor = randomColor;

        cover.style.color = randomColor;

        newQuote.style.backgroundColor = randomColor;

        twitter.style.backgroundColor = randomColor;

        tumblr.style.backgroundColor = randomColor;

        $(".cover").fadeIn();

      })

      .catch(error => console.error("Error fetching quote:", error.message));

  });

};

// Attach click event to the "New quote" button

newQuote.addEventListener("click", handleClick);