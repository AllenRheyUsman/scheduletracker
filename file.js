const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const submitButton = document.getElementById("submit");
const output = document.getElementById("output");

// submitButton.addEventListener("click", () => {
//   const date = new Date(dateInput.value);
//   const time = new Date(timeInput.value);
//   const dateTime = new Date(
//     date.getFullYear(),
//     date.getMonth(),
//     date.getDate(),
//     time.getHours(),
//     time.getMinutes()
//   );
//   output.textContent = `Your date is scheduled for ${dateTime.toLocaleString()}.`;
// });

submitButton.addEventListener("click", function() {
    const selectedDate = new Date(dateInput.value);
    const selectedTime = new Date(selectedDate.toDateString() + " " + timeInput.value);
    
    if (selectedTime.getHours() >= 7 && selectedTime.getHours() < 12) {
      output.innerText = "Your schedule is available at " + selectedTime.toLocaleString();
    } else {
      output.innerText = "Sorry, your schedule is not available at " + selectedTime.toLocaleString();
    }
  });
