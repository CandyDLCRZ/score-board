let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById('home-score');
let guestScoreEl = document.getElementById('guest-score');

function incrementh1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore;
}

function incrementh2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore;
}

function incrementh3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore;
}

/*****/

function incrementg1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore;
}

function incrementg2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore;
}

function incrementg3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore;

}

function resetHome() {
    homeScore = 0;
    homeScoreEl.textContent = homeScore;
}

function resetGuest() {
    guestScore = 0;
    guestScoreEl.textContent = guestScore;
}   

function decrementHome() {
        homeScore -= 1;
        homeScoreEl.textContent = homeScore;
}

function decrementGuest() {
        guestScore -= 1;
        guestScoreEl.textContent = guestScore;
}