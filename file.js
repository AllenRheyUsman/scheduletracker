const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const submitButton = document.getElementById("submit");
const output = document.getElementById("output");

submitButton.addEventListener("click", () => {
  const date = new Date(dateInput.value);
  const time = new Date(timeInput.value);
  const dateTime = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    time.getHours(),
    time.getMinutes()
  );
  output.textContent = `Your date is scheduled for ${dateTime.toLocaleString()}.`;
});