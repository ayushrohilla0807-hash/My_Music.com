let userscore = 0;
let compscore = 0;

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

// LOGIN ELEMENTS
// const loginPage = document.querySelector("#login-page");
// const gamePage = document.querySelector("#game-page");
// const loginBtn = document.querySelector("#login-btn");
// const logoutBtn = document.querySelector("#logout-btn");

// const usernameInput = document.querySelector("#username");
// const passwordInput = document.querySelector("#password");
// const loginMsg = document.querySelector("#login-msg");
// const welcomeUser = document.querySelector("#welcome-user");


// // LOGIN FUNCTION
// loginBtn.addEventListener("click", () => {
//     const username = usernameInput.value.trim();
//     const password = passwordInput.value.trim();

//     if (username === "" || password === "") {
//         loginMsg.innerText = "Please enter username and password!";
//         loginMsg.style.color = "red";
//         return;
//     }

//     // Simple password check (you can change it)
//     if (password !== "1234") {
//         loginMsg.innerText = "Wrong password! Try 1234";
//         loginMsg.style.color = "red";
//         return;
//     }

//     // Success Login
//     loginMsg.innerText = "";
//     loginPage.style.display = "none";
//     gamePage.style.display = "block";
//     welcomeUser.innerText = "Hello, " + username + " 👋";
// });


// LOGOUT FUNCTION
logoutBtn.addEventListener("click", () => {
    loginPage.style.display = "block";
    gamePage.style.display = "none";

    usernameInput.value = "";
    passwordInput.value = "";
    userscore = 0;
    compscore = 0;
    userscorepara.innerText = 0;
    compscorepara.innerText = 0;

    msg.innerText = "Play your move";
    msg.style.backgroundColor = "rgb(137, 100, 174)";
});


// GAME LOGIC
const gencompchoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randchoice = Math.floor(Math.random() * 3);
    return option[randchoice];
};

const drawgame = () => {
    msg.innerText = "Game was draw.";
    msg.style.backgroundColor = "blue";
};

const userwiner = (userwin) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    const compchoice = gencompchoice();

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;

        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissor" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }

        userwiner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});