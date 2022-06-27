let typewritting = document.getElementById("typing");

let typewriter = new Typewriter(typewritting, {
    loop: true,
    delay:75
});


typewriter;


typewriter
  .pauseFor(200)
  .typeString("Software developer")
  .pauseFor(200)
  .deleteChars(18)
  .typeString("Youtuber")
  .deleteChars(8)
  .pauseFor(1000)
  .typeString("Web developer")
  .pauseFor(1000)
    .start();
  

/* typewriterfor placeholder-start*/
    var textarea = document.getElementById("type");

    var customNodeCreator = function (character) {
      // Add character to input placeholder
      textarea.placeholder = textarea.placeholder + character;

      // Return null to skip internal adding of dom node
      return null;
    };

    var onRemoveNode = function ({ character }) {
      if (textarea.placeholder) {
        // Remove last character from input placeholder
        textarea.placeholder = textarea.placeholder.slice(0, -1);
      }
    };

    var typewriters = new Typewriter(null, {
      loop: true,
      delay: 85,
      onCreateTextNode: customNodeCreator,
      onRemoveNode: onRemoveNode,
    });

    typewriters
      .typeString("Leave us a message")
      .pauseFor(1000)
    .start();
/* typewriterfor placeholder-end*/
      