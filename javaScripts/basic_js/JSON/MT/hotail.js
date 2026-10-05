console.log("w come ");
console.log(" 1, 2, 3 ,4, ");

setTimeout(() => {
    console.log(" u selected 1 ");
}, 2000);

setTimeout(() => {
    console.log(" confirmed ");
}, 4000);

// Start interval after 8 seconds
setTimeout(() => {
     console.log(" -------------- ");
    let sam = setInterval(() => {
        console.log(" wait ");
    }, 1000);
    
    // Stop interval after 12 more seconds
    setTimeout(() => {
        clearInterval(sam);
        console.log(" take ur order ");
    }, 6000);
    
}, 6000);