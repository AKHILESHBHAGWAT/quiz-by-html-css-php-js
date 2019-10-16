(function() {
  const myQuestions = [
      <!--1-->
    {
      question: "Which One Of The Following Is Not A Prime Number",
      answers: {
        a: "31",
        b: "18",
        c: "29",
        d: "67"
      },
      correctAnswer: "b"
    },
    {
      <!--2-->
      question: "If log(a/b)+log(b/a)=log(a+b)? then,",
      answers: {
        a: "a+b=1",
        b: "a-b=1",
        c: "a=b",
        d: "a*b=1"
      },
      correctAnswer: "a"
    },
      <!--3-->
    {
      question: "2,4,12,48,240,(...)?",
      answers: {
        a: "960",
        b: "1440",
        c: "1080",
        d: "1920"
      },
      correctAnswer: "b"
    },
      <!--4-->
    {
      question: "Find Odd Man Out :396,462,572,427,671,264",
      answers: {
        a: "396",
        b: "462",
        c: "572",
        d: "264"
      },
      correctAnswer: "b"
    },
      <!--5-->
    {
      question: "1,8,27,64,?,216,?",
      answers: {
        a: "125,343",
        b: "128,432",
        c: "125,355"
      },
      correctAnswer: "a"
    },
      <!--6-->
    {
      question: "Solve it: 11*11=4, 22*22=16, 33*33=?",
      answers: {
        a: "1089",
        b: "8",
        c: "36"
      },
      correctAnswer: "c"
    },
      <!--7-->
    {
      question: "What Is The Full Form Of DDR Ram",
      answers: {
        a: "Dual Inline Ram",
        b: "Double Data Rate",
        c: "Double Data Register"
      },
      correctAnswer: "b"
    },
      <!--8-->
    {
      question: "How Much Storage Does A CMOS has?",
      answers: {
        a: "64bytes",
        b: "100bytes",
        c: "128bytes"
      },
      correctAnswer: "c"
    },
      <!--9-->
    {
      question: "What Does A DNS do?",
      answers: {
        a: "Converts IP Address into name",
        b: "Converts Mac Address Into Name",
        c: "Converts Static IP Into Dynamic "
      },
      correctAnswer: "a"
    },
      <!--10-->
    {
      question: "Which Protocol Is Used For Online Streaming?",
      answers: {
        a: "UDP",
        b: "TCP",
        c: "SMTP"
      },
      correctAnswer: "a"
    },  
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
