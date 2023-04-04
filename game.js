function makeEvent(){
    const dateEl = document.querySelector('#gameDate');
    const locationEl = document.querySelector('#location');
    window.location.href = "sched.html";
    let eventsData = [];
    const newEvent = {eventDate : dateEl, location : locationEl}
    eventsData.push(newEvent);
    localStorage.setItem('events', JSON.stringify(eventsData));
    window.location.href = "sched.html";
}

getEvent() {
    return localStorage.getItem('event') ?? 'stealing the moon';
    //we are gru
}

getLocation() {
    return localStorage.getItem('location') ?? 'the moon';
}

getGameDate() {
    return localStorage.getItem('gameDate') ?? 'Jan 1';
}






saveScore(score) {
    //pulls username
    const userName = this.getPlayerName();
    let scores = []; //iniaties empty array
    //scores text is a json with all the good stuff
    const scoresText = localStorage.getItem('scores'); 
    if (scoresText) { //if scorestext has a val
      scores = JSON.parse(scoresText); //parses json
    }
    scores = this.updateScores(userName, score, scores); //updates with new data

    //sets the local with new data
    localStorage.setItem('scores', JSON.stringify(scores));
}


updateScores(userName, score, scores) {
    const date = new Date().toLocaleDateString(); //current date?

    //initiates a new score frame
    const newScore = { name: userName, score: score, date: date };

    let found = false;
    //reorders the vals
    for (const [i, prevScore] of scores.entries()) {
        if (score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
        }
    }

    if (!found) {
        scores.push(newScore);
    }

    // limits the amount of vals we see
    if (scores.length > 10) {
        scores.length = 10;
    }

    return scores;
}




/*Make a vector to store the events and store it in the local storage.
Include in the vecors the date, location, and a list of people that are 
attending the event. */