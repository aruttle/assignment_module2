document.addEventListener("DOMContentLoaded", () => {
    // ==========================
    //  Knot Guide Functionality
    // ==========================

    // Knot data Object with names, instructions, and images
    const knots = {
        "select": {
            name: "",
            instructions: "Select a knot from the dropdown menu to view instructions.",
            image: "images/common-knots.jpg",
            video: "",
            usage: ""
        },
        "bowline": {
            name: "Bowline",
            instructions: "Create a loop near the end of the rope. Pass the working end up through the loop, around the standing part, and back down through the loop. Pull tight.",
            image: "images/bowline.jpg",
            video: "https://www.youtube.com/embed/hIdsTZTUl6E",
            usage: "Commonly used for creating a secure, non-slip loop at the end of a rope. Useful for rescue operations, sailing, and securing loads."
        },
        "clove-hitch": {
            name: "Clove Hitch",
            instructions: "Wrap the rope around the post. Cross over and wrap again, tucking the end under the second wrap. Pull tight.",
            image: "images/clove-hitch.jpg",
            video: "https://youtube.com/embed/aewgmUeHpuE",
            usage: "Used for temporarily securing a rope to a post or pole. Popular in camping, boating, and securing fenders to boat rails."
        },
        "figure-eight": {
            name: "Figure Eight",
            instructions: "Make a loop with the working end, then wrap it around the standing part and tuck it back through the loop to form an '8' shape. Pull tight.",
            image: "images/figure-eight.jpg",
            video: "https://www.youtube.com/embed/tFffbkXSgNI",
            usage: "A strong and easy-to-untie knot used in climbing, sailing, and rescue work. It prevents the rope from slipping through a pulley or belay device."
        },
        "reef": {
            name: "Reef Knot (Square Knot)",
            instructions: "Tie a left over right knot, then a right over left knot. Pull tight to secure. This knot is used to join two ropes of equal diameter.",
            image: "images/square-knot.jpg",
            video: "https://www.youtube.com/embed/aprfVTaxkk0",
            usage: "Used for securing bundles, bandages, and tying down sails. Not suitable for critical loads due to its tendency to slip."
        },
        "cleat-hitch": {
            name: "Cleat Hitch",
            instructions: "Wrap the rope around the base of the cleat. Cross over and loop back in a figure-eight motion. Finish with a locking half hitch under the last wrap.",
            image: "images/cleat-hitch.jpg",
            video: "https://www.youtube.com/embed/NOg85_tYk04",
            usage: "Used in boating to secure a rope to a cleat on docks or boats. Provides a quick and reliable way to tie off a line."
        },
        "double-half-hitch": {
            name: "Double Half Hitch",
            instructions: "Pass the rope around the post and tie a half hitch by looping the working end around the standing part and pulling through. Repeat with a second half hitch to secure the knot. Pull tight.",
            image: "images/double-hitch.jpg",
            video: "https://www.youtube.com/embed/q93YpbVEXAM",
            usage: "Used to secure a rope to a fixed object. Common in tent rigging, camping, and general utility tying."
        }
    };

    // Selecting elements from the DOM
    const knotSelector = document.getElementById("knot-selector");
    // const knotInstructions = document.getElementById("knot-instructions");
    const knotTitle = document.getElementById("knot-title");  
    const knotText = document.getElementById("knot-text");    
    const knotImage = document.getElementById("knot-image");
    const knotVideo = document.getElementById("knot-video");
    const knotUsage = document.getElementById("knot-usage-text");

    // Function to update the displayed knot details
    function updateKnotDetails() {
        const selectedKnot = knotSelector.value;
        const knotData = knots[selectedKnot];

        knotTitle.textContent = knotData.name;
        knotText.textContent = knotData.instructions;
        knotUsage.textContent = knotData.usage;
        knotImage.src = knotData.image;
        knotImage.alt = `${knotData.name} knot`;
        knotVideo.src = knotData.video;
        knotVideo.title = `${knotData.name} knot video`;
    }

    // Event listener for dropdown selection change
    if (knotSelector) {
        knotSelector.addEventListener("change", updateKnotDetails);
    }

    // ==========================
    //  Quiz Functionality
    // ==========================

    // Quiz questions
    const quizQuestions = [
        { 
            question: "Which knot is best for securing a loop?", 
            answer: "Bowline" 
        },
        { 
            question: "What knot is often used for securing a rope to a cleat?", 
            answer: "Cleat Hitch" 
        },
        { 
            question: "Which knot forms an '8' shape and is used in climbing?", 
            answer: "Figure Eight" 
        },
        { 
            question: "Which knot is ideal for temporarily securing a rope to a post?", 
            answer: "Clove Hitch" 
        }
    ];

    // Shuffle questions
    let shuffledQuestions = quizQuestions.sort(() => Math.random() - 0.5); 
    let questionIndex = 0;

    const quizForm = document.getElementById("knot-quiz-form");
    const quizQuestionLabel = document.getElementById("quiz-question-label");
    const quizInput = document.getElementById("quiz-answer");
    const quizFeedback = document.getElementById("quiz-feedback");
    const quizFinishPopUp = document.getElementById("quiz-finish-popup");
    const finalScorePopUp = document.getElementById("final-score");
    
    let index = 0;

    function loadNextQuestion() {
        
        if (questionIndex < shuffledQuestions.length) {
            quizQuestionLabel.textContent = shuffledQuestions[questionIndex].question;
            quizInput.value = ""; 
            quizFeedback.textContent = ""; 


        } else {

            quizFinishPopUp.style.display = "block";
            finalScorePopUp.textContent = `${index} out of ${questionIndex}`;
            quizFeedback.textContent = "";
            console.log(index);
            console.log(questionIndex);
            let resultMessage = "";
            // Not using '<=' comparison here as my VScode has an issue with it, more detail in the doc 
            if (index < 2 || index === 2) { 
                resultMessage += "Maybe have a look at the Knot Guide again!";
                
            } else if (index === 3) {
                resultMessage += "Good Job!";
            } else {
                resultMessage += "Perfect Score!";
            }

            quizQuestionLabel.textContent = resultMessage;
            quizForm.style.display = "none"; 
            
        }
    }

    if (quizForm) {
        loadNextQuestion();

        quizForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const userAnswer = quizInput.value.trim().toLowerCase();
            const correctAnswer = shuffledQuestions[questionIndex].answer.toLowerCase();

            if (userAnswer === correctAnswer) {
                index++;
                quizFeedback.textContent = `Correct! Your Score is ${index} out of ${questionIndex+1}`;
                quizFeedback.classList.add("text-success");
                quizFeedback.classList.remove("text-danger");
                
                console.log(index);
            } else {
                quizFeedback.textContent = `Incorrect! Correct answer: ${shuffledQuestions[questionIndex].answer}`;
                quizFeedback.classList.add("text-danger");
                quizFeedback.classList.remove("text-success");
            }

            questionIndex++;
            setTimeout(loadNextQuestion, 1500); 
        });
    }

    // ====================================
    // Local Storage  Functionality
    // ====================================

    document.getElementById("save-score").addEventListener("click", () => {
        const username = document.getElementById("username").value.trim();
        // const score = document.getElementById("final-score").textContent;
        const score = index;
    
        if (username === "") {
            alert("Please enter your name before saving.");
            return;
        }
    
        let scores = JSON.parse(localStorage.getItem("quizScores")) || [];  // Get existing scores from local storage or create an empty array
    
        scores.push({ name: username, score: score,date: new Date().toLocaleString() });
    
        localStorage.setItem("quizScores", JSON.stringify(scores));
    
        document.getElementById("quiz-finish-popup").style.display = "none";
    
        alert("Score saved successfully!");
        location.reload();
    });

    function updateLeaderboard() {
        const leaderboardBody = document.querySelector("#leaderboard tbody");
        leaderboardBody.innerHTML = ""; // Clear existing rows
    
        const scores = JSON.parse(localStorage.getItem("quizScores")) || [];
    
        scores.forEach((entry, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${entry.name}</td>
                <td>${entry.score}</td>
                <td>${entry.date}</td>
            `;
            leaderboardBody.appendChild(row);
        });
    }
    
   
    updateLeaderboard();


});
