function generatePoem(event) {
        event.preventDefault();
      
        new Typewriter("#quotePL", {
          strings: "Keep your eyes on the stars, and your feet on the ground",
          autoStart: true,
          delay: 1,
          cursor: "",
        });
      }
      
      let poemFormElement = document.querySelector("#quote-generator-form");
      poemFormElement.addEventListener("submit", generatePoem);