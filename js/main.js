// Menu
$("#openIcon").click(function() { 
    $("#sidebar").animate({"left" : "0"})
})
$("#closeIcon").click(function() { 
    $("#sidebar").animate({"left" : "-250px"})
})
// Slider Down
$("#sliderDown h3").click(function() {
    $(this).next().slideToggle();
    $("#sliderDown div").not($(this).next()).slideUp();
})

// Counter
    let countDown = new Date("Jan 1 , 2025  12:00:00").getTime();
    let counter = setInterval(() => {

    let dateNow = new Date().getTime();
    let dateReff = countDown - dateNow;

    let getDays = Math.floor(dateReff / 1000 / 60 / 60 / 24);
    document.querySelector(".days").innerHTML = getDays + " D";

    let getHours = dateReff % (1000 * 60 * 60 * 24);
    let hours = Math.floor(getHours / 1000 / 60 / 60);
    document.querySelector(".hours").innerHTML = hours + " Hrs";

    let getMinuts = dateReff % (1000 * 60 * 60);
    let minutes = Math.floor(getMinuts / 1000 / 60);
    document.querySelector(".minutes").innerHTML = minutes + " Min";

    let getSeconds = Math.floor((dateReff % (1000 * 60)) / 1000);
    document.querySelector(".seconds").innerHTML = getSeconds + " Sec";

    if (getDays == 0 && hours == 0 && minutes == 0 && getSeconds == 0) {
        $("#counter").slideUp(1000);
    }
}, 1000);

// Contact 
$("textarea").keyup(function () { 
    let charLength = $(this).val().length
    $("#chars").text(
        100 - charLength <= 0 ? "Your Remaining Character Finished" : 100 - charLength
    )
});




