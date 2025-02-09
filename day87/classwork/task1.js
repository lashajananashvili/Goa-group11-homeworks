const interval = setInterval(() => {
    const currentDate = new Date();
    const currentMinute = currentDate.getMinutes(); 
    console.log(`Current minute: ${currentMinute}`);

    if (currentMinute === 35) {
        clearInterval(interval);
        console.log("Interval stopped. The minute is 35.");
    }
}, 1000);