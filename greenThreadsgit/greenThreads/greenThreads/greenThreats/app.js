function submitData() {
  const userInput = document.getElementById("input").value;
  const xhr = new XMLHttpRequest();

  xhr.open("POST", "http://localhost:3000/submit", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        alert("Data submitted successfully!");
      } else {
        alert("Failed to submit data. Please try again.");
      }
    }
  };

  xhr.send("input=" + encodeURIComponent(userInput));
}
