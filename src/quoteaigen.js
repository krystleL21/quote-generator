function displayQuote(response) {
    new Typewriter("#quotePL", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}



function generateQuote(event) {
        event.preventDefault();
   
        let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "b68t905a51397a01bf1fcdf4ao4dde24";
  let prompt = `Generate a quote about ${instructionsInput.value}`;
  let context = "You are a expert in quote writing and love to write short quotes. Your mission is to generate a 3 line quotes in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the quote. Sign at the end of the quote with 'SheCodes AI' inside a <strong> element and NOT at the beginning. Do not include 'html' and '''''";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quotePL");
    quoteElement.classList.remove("hidden");
    quoteElement.innerHTML = `⌚ Generating a quote about ${instructionsInput.value}`;

  axios.get(apiURL).then(displayQuote);
      }
      
      let quoteFormElement = document.querySelector("#quote-generator-form");
      quoteFormElement.addEventListener("submit", generateQuote);