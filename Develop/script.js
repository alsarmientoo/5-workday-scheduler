// var taskText = document.querySelector(".description");
// var taskTime = document.querySelector(".hour");

// ready frunction, reloads the website with the stored data
$(document).ready(function() {
    // var currentDate = document.querySelector(".lead");
    // set the date with the right format based on moment.js
    var currentDate = moment().format("dddd, MMMM Do");
    
    // to check if the date is correct
    // console.log(currentDate); 
    // to display current date
    $("#currentDay").text(currentDate);
    // $("#currentDate").textContent = date;
    
    function hourlyTasks() {
        var currentHour = moment().hour();
        // format current hour in "hour" 
        // console.log(currentHour);
        
        $(".time-block").each(function() {
            // to make sure the hour is an integer and not a string, put parseInt
            // blockedTime with an id attr with an hour value, split the value per hour
            // to run the if else statement
            var blockedTime = parseInt($(this).attr("id").split("hour")[1]);
            
            if (blockedTime > currentHour) {
                // 
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
            else if (blockedTime === currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
        });
        
        $(".saveBtn").on("click", function() {
            //     var saveTask = {
            //         text: taskText.value.trim()
            //         // time: taskTime.parentElement.attr("id")
            //     };
            // localStorage.setItem("saveTask", JSON.stringify(saveTask))
            
            // Get nearby values of the description in JQuery
            // finds description in the closest element, stores its value
            var taskText = $(this).closest(".time-block").find(".description").val();
            // closest begins with the current element,Travels up the DOM tree and returns the first (single) ancestor that matches the passed expression
            var taskTime = $(this).parent().attr("id");
            // parent begins with parent element, Travels up the DOM tree and returns all ancestors that matches the passed expression
            
            // Save text in local storage
            localStorage.setItem(taskTime, taskText);
        });   
    };
    
    // localStorage.getItem(saveTask);
    // getItem
    // GetS value of description for every hour from local storage
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    
    
    hourlyTasks();
    
    
});
