const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const submitButton = document.getElementById("submit");
const output = document.getElementById("output");

submitButton.addEventListener("click", function() {
    const selectedDate = new Date(dateInput.value);
    const selectedTime = new Date(selectedDate.toDateString() + " " + timeInput.value);
    
    if (selectedTime.getHours() >= 7 && selectedTime.getHours() < 12) {
      output.innerText = "Your schedule is available at " + selectedTime.toLocaleString();
    } else {
      output.innerText = "Sorry, your schedule is not available at " + selectedTime.toLocaleString();
    }
  });
