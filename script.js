// Knot data with names, instructions, and images
const knots = {
    "select": {
        name: "",
        instructions: "Select a knot from the dropdown menu to view instructions.",
        image: "images/default-image.jpg",
        video: "",
        usage: ""
    },
    "bowline": {
        name: "Bowline",
        instructions: "Create a loop near the end of the rope. Pass the working end up through the loop, around the standing part, and back down through the loop. Pull tight.",
        image: "images/bowline.jpg",
        video:"https://www.youtube.com/embed/hIdsTZTUl6E",
        usage: "Commonly used for creating a secure, non-slip loop at the end of a rope. Useful for rescue operations, sailing, and securing loads."
    },
    "clove-hitch": {
        name: "Clove Hitch",
        instructions: "Wrap the rope around the post. Cross over and wrap again, tucking the end under the second wrap. Pull tight.",
        image: "images/clove-hitch.jpg",
        video:"https://youtube.com/embed/aewgmUeHpuE",
        usage: "Used for temporarily securing a rope to a post or pole. Popular in camping, boating, and securing fenders to boat rails."
    },
    "figure-eight": {
        name: "Figure Eight",
        instructions: "Make a loop with the working end, then wrap it around the standing part and tuck it back through the loop to form an '8' shape. Pull tight.",
        image: "images/figure-eight.jpg",
        video:"https://www.youtube.com/embed/tFffbkXSgNI",
        usage: "A strong and easy-to-untie knot used in climbing, sailing, and rescue work. It prevents the rope from slipping through a pulley or belay device."
    },
    "reef": {
        name: "Reef Knot (Square Knot)",
        instructions: "Tie a left over right knot, then a right over left knot. Pull tight to secure. This knot is used to join two ropes of equal diameter.",
        image: "images/square-knot.jpg",
        video:"https://www.youtube.com/embed/aprfVTaxkk0",
        usage: "Used for securing bundles, bandages, and tying down sails. Not suitable for critical loads due to its tendency to slip."
    },
    "cleat-hitch": {
        name: "Cleat Hitch",
        instructions: "Wrap the rope around the base of the cleat. Cross over and loop back in a figure-eight motion. Finish with a locking half hitch under the last wrap.",
        image: "images/cleat-hitch.jpg",
        video:"https://www.youtube.com/embed/NOg85_tYk04",
        usage: "Used in boating to secure a rope to a cleat on docks or boats. Provides a quick and reliable way to tie off a line."
    },
    "double-half-hitch": {
        name: "Double Half Hitch",
        instructions: "Pass the rope around the post and tie a half hitch by looping the working end around the standing part and pulling through. Repeat with a second half hitch to secure the knot. Pull tight.",
        image: "images/double-hitch.jpg",
        video:"https://www.youtube.com/embed/q93YpbVEXAM",
        usage: "Used to secure a rope to a fixed object. Common in tent rigging, camping, and general utility tying."
    }
};

const quizQuestions = [
    { 
        question: "Which knot is best for securing a loop?", 
        answer: "Bowline" 
    },
    { 
        question: "Which knot is commonly used to join two ropes of different sizes?", 
        answer: "Sheet Bend" 
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



// Selecting elements from the DOM
const knotSelector = document.getElementById("knot-selector");
const knotInstructions = document.getElementById("knot-instructions");
const knotTitle = knotInstructions.querySelector("h3");
const knotText = knotInstructions.querySelector("p");
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
    knotVideo.alt = `${knotData.name} knot video`;
    knotVideo.title = `${knotData.name} knot video`;    

}

// Event listener for dropdown selection change
knotSelector.addEventListener("change", updateKnotDetails);

//================================================================
// ----------------------------- Quiz ----------------------------
// ===============================================================

// Select elements from the DOM for the quiz
const quizForm = document.getElementById("knot-quiz-form");
const quizQuestionLabel = quizForm.querySelector("label[for='quiz-answer']");
const quizInput = document.getElementById("quiz-answer");
const quizFeedback = document.getElementById("quiz-feedback");

function randomizeQuestions() {
    quizQuestions.sort(() => Math.random() - 0.5);
    quizInput.value = ""; // Clear previous input
    // quizFeedback.textContent = ""; // Clear previous feedback
}

let currentQuestion = {};

quizForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userAnswer = quizInput.value;
    const correctAnswer = quizQuestions[0].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        quizFeedback.textContent = "Correct! Well done!";
        quizFeedback.style.color = "green";
    } else {
        quizFeedback.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
        quizFeedback.style.color = "red";
    }

    quizInput.value = "";
    randomizeQuestions();
    quizQuestionLabel.textContent = quizQuestions[0].question;
}
);
