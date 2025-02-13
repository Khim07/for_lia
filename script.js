let index = 0;
let hasStarted = false;
let clickCount = 0; // Track clicks

// Array of reasons
const reasons = [
    "I love your smooth and soft hair.",
    "I love your eyes that glow when you laugh.",
    "I love your perfect teeth.",
    "I love your genuine smile.",
    "I love your soft lips that I love love love to kiss.",
    "I love your laugh every second we are together.",
    "I love your beautiful face.",
    "I love your scent that I can smell from afar.",
    "I love your hands that I will always choose to hold.",
    "I love your gold earrings that you've worn since you were a kid.",
    "I love your soft voice that calms me down every time I hear.",
    "I love your girly side that loves everything that's pink.",
    "I love your shy side whenever I stare at you.",
    "I love your grumpy face whenever I say something wrong.",
    "I love your demanding side when it comes to my love.",
    "I love your clingy side.",
    "I love the way you hold my arm whenever we are walking.",
    "I love the way you're willing to share any food with me without hesitation.",
    "I love your new haircut that you hate.",
    "I love the way you want to capture everything whenever we're together.",
    "I love how you complain whenever I don't often say 'I miss you.'",
    "I love your body that you are insecure about.",
    "I love your soft and fragile heart that I need to be careful with.",
    "I love your nerdy side that prioritizes studies over anything.",
    "I love your music taste that I can enjoy without forcing myself.",
    "I love seeing you happy whenever I give you my handmade gifts.",
    "I love how sure I am that you would always choose to stand beside me.",
    "I love your independent girly side that you never thought you could be.",
    "I love that you're the best sister to Jillian and Roxie.",
    "I love seeing how cute you are when you bite the tip of your index finger whenever you've done something wrong.",
    "I love how you want me to be included in everything.",
    "I love listening to your stories that you yap at me whenever you get home from school.",
    "I love that you miss me every second I'm gone.",
    "I love your overly jealous side.",
    "I love that you're a lefty because it perfectly matches with me (a righty).",
    "I love how you always want to sit beside me whenever we're eating.",
    "I love how you complain about small details that I often forget.",
    "I love how you always want us to eat at the same time.",
    "I love how you worry about me every time.",
    "I love your little dance when you like the food you're eating.",
    "I love your grumpy attitude when you see someone with the same thing as you.",
    "I love whenever you are brave enough to try new things on your own.",
    "I love whenever you remind me to take my meds and vitamins.",
    "I love your handwritten letters that I have lost count of how many times I have read.",
    "I love your cute little complaints when the weather is too hot.",
    "I love whenever you sniff my scent on my neck.",
    "I love how you make me laugh in times when I don't even know how to smile"
];


// Function to start the sequence
function start() {
    if (clickCount === 0) {
        // First click: Hide initial message & show personal message with fade effect
        document.getElementById("valentineMessage").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("valentineMessage").style.display = "none";
            let personalMessage = document.getElementById("personalMessage");
            personalMessage.style.display = "block";
            personalMessage.style.opacity = "1"; // Fade in
        }, 300);
    } else if (clickCount === 1) {
        // Second click: Hide personal message & show main content with fade effect
        document.getElementById("personalMessage").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("personalMessage").style.display = "none";
            let mainContent = document.getElementById("mainContent");
            mainContent.style.display = "block";
            mainContent.style.opacity = "1"; // Fade in
        }, 300);
    } else {
        showNextReason();
    }
    clickCount++; // Move to next step
}

// Function to show the next reason when clicked
function showNextReason() {
    if (index < reasons.length) {
        const reasonElement = document.getElementById("reason");

        // Apply fade-out effect before changing text
        reasonElement.style.opacity = "0";

        setTimeout(() => {
            reasonElement.textContent = reasons[index];
            index++;
            reasonElement.style.opacity = "1"; // Apply fade-in effect
        }, 300);
    } else {
        // Last message
        document.getElementById("reason").innerHTML = `
            I love you so so so much—every little thing that makes you who you are. <br><br> 
            No matter how many reasons I list, they will never be enough to express how much you mean to me. <br><br>
            I will always choose you every single day. <br><br>
            I love you, my baby! <3 <br><br>
        `;

        document.querySelector("h2").style.display = "none"; // Hide title
        document.getElementById("signature").style.display = "block"; // Show signature
    }
}

// Click anywhere to start or show the next reason
document.body.addEventListener("click", () => {
    if (!hasStarted) {
        hasStarted = true;
    }
    start();
});

// Function to create a floating heart
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    let size = Math.random() * 20 + 30;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // Between 3s - 6s

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Play background music on first click
document.body.addEventListener("click", () => {
    let music = document.getElementById("bgMusic");
    music.volume = 0.3; // Adjust volume (0.0 to 1.0)
    music.play();
}, { once: true });

// Generate floating hearts
setInterval(createHeart, 300);