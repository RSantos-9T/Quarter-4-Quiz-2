  function analyzeGrades() {
    // Get input values
    let math = parseFloat(document.getElementById('math').value);
    let social = parseFloat(document.getElementById('social').value);
    let science = parseFloat(document.getElementById('science').value);

    // Validate input
    if (isNaN(math) || isNaN(social) || isNaN(science)) {
      alert("Please enter all three grades.");
      return;
    }

    // Calculate average
    let average = (math + social + science) / 3;
    let rating = "";

    // Determine non-numerical rating
    if (average >= 94 && average <= 100) {
      rating = "Excellent";
    } else if (average >= 87) {
      rating = "Above Satisfactory";
    } else if (average >= 80) {
      rating = "Satisfactory";
    } else if (average >= 75) {
      rating = "Needs Improvement";
    } else if (average >= 70) {
      rating = "Poor";
    } else {
      rating = "Failing Grade";
    }

    // Output result
    document.getElementById('output').innerHTML =
      `Average Grade: ${average.toFixed(2)}<br>Rating: <span class="text-primary">${rating}</span>`;
  }