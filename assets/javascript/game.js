// var gameWords = ["Blue", "Fear", "Dope"];

window.onload = function() {
    songTrivia.startHangman();
};


var songTrivia = {
    songs: {
        fear: {
            name: "Fear",
            artist: "Drake",
            album: "So Far So Good"
        },
        penthouse: {
            name: "Penthouse Cloud",
            artist: "The Internet",
            album: "Ego Death"
        },
        apparently: {
            name: "Apparently",
            artist: "J. Cole",
            album: "2014 Forest Hills Drive"

        }

    },


    // gameWords[Math.floor(Math.random() * gameWords.length)];
    // Variables Defined
    randomWord: null,
    chosenWord: null,
    letterGuessed: null,
    guessCount: null,
    correctGuesses: [],
    wrongGuesses: [],
    guessesRemaining: 10,
    winCount: 0,
    //  lossCount: 0,

    startHangman: function() {
        this.selectRandomWord()
        this.generateUnderscore()
        document.querySelector(
            ".guessCount"
        ).innerHTML = `Guesses Remaining: ${this.guessesRemaining}`
        document.querySelector("#winCount").innerHTML = `Wins: ${this.winCount}`
            //  document.querySelector("#lossCOunt").innerHTML = `Losses: ${this.lossCount}`
        document.querySelector(
            ".letterGuess"
        ).innerHTML = `Incorrect Guesses: ${this.wrongGuesses.join(",")}`
    },

    generateUnderscore: function() {
        word = "Song's name: &nbsp;"
        this.chosenWord = []
        for (i = 0; i < this.randomWord.length; i++) {
            if (this.correctGuesses.indexOf(this.randomWord[i].toLowerCase()) !== -1) {
                word += this.randomWord[i]
                this.chosenWord.push(this.randomWord[i])
            } else if (this.randomWord[i] === "") {
                word += "&nbsp;&nbsp;&nbsp;"
                this.chosenWord.push("")
            } else word += "&nbsp;_&nbsp;"
        }
        document.querySelector("#underScores").innerHTML = word
    },

    updateGuessedLetters: function(letter) {
        if (
            this.randomWord.toLowerCase().indexOf(letter) === -1 &&
            this.wrongGuesses.indexOf(letter) === -1
        ) {
            this.wrongGuesses.push(letter)
            this.guessesRemaining--
        } else if (this.correctGuesses.indexOf(letter) === -1) {
            this.correctGuesses.push(letter)
        }
    },

    restartHangman: function() {
        this.letterGuessed = null
        this.selectRandomWord()
        this.wrongGuesses = []
        this.correctGuesses = []
        this, this.guessesRemaining = 10
        this.generateUnderscore()

        document.querySelector("#winCOunt").innerHTML = `Wins: ${this.winCount}`
            // document.querySelector("#lossCount").innerHTML = `Losses: ${this.lossCount}`
    },

    selectRandomWord: function() {
        this.randomWord = Object.keys(this.songs)[
            Math.floor(Math.random() * Object.keys(this.songs).length)
        ]
    },

    subLetter: function() {
        document.querySelector(
            ".letterGuess"
        ).innerHTML = `Incorrect Guesses: ${this.wrongGuesses.join(",")}`
        document.querySelector(
            ".guessCount"
        ).innerHTML = `Guesses Remaining: ${this.guessesRemaining}`
    },

    gameCheck: function() {
        if (this, this.chosenWord.length === this.randomWord.length) {
            this.winCount++
                alert("You Won!")
            this.restartHangman()
        } else if (this.guessesRemaining <= 0) {
            // this.lossCount++
            alert("You Lose")
            this.restartHangman();

        }
    }

}

// startHangman();

document.onkeydown = function(p) {
    songTrivia.letterGuessed = p.key
    songTrivia.subLetter(songTrivia.letterGuessed)
}




// Create underscores based on length
// function generateUnderscore() {
//     for (let i = 0; i < chosenWord.length; i++) {
//         $("#underScores").append(`<span id = '_${i}'>
//         _ 
//         </span> `)

//     }

// }

//  generateUnderscore();
//  console.log(chosenWord);
//  $("#mainBody").keydown(function() {
//      // Guesses more than allotted, Game Over
//      for (i = 0; i < guessMax; i++)
//          if (guessMax <= 11)
//              alert("GAME OVER");
//  })

//  // letter keypress
//  $("#mainBody").keydown(function(event, res) {
//      // var res = keyword;
//      var keyword = String.fromCharCode(event.keyCode);


//      //console.log(chosenWord.split("").indexOf(keyword))
//      console.log(chosenWord.split(""))
//          // check if guess is right
//      if (chosenWord.indexOf(keyword) > -1) {
//          // add to chosen words array 
//          var index = chosenWord.indexOf(keyword);

//          $("#_" + index).replaceWith(keyword);

//          console.log(keyword);
//      }

//      // if win, then win otherwise run below
//      if (keyword === chosenWord) {
//          alert("YOU WIN");
//      }
//  });
//  });