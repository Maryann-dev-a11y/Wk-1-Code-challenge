function checkspeed() {
    let speed = prompt("Enter car speed");
    speed = parseInt(speed);

    if (speed < 70){
        console.log("Ok");
    } else {
        let demeritpoints = Math.floor((speed - 70) / 5);
        console.log("points:" + demeritpoints);

        if (demeritpoints > 12) {
            console.log ("License suspended");
        }
    }
}

checkspeed();