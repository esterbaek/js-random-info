// List of possible choices
function showInfo() { 
   var infoList = [
      "University of Cincinnati",
      "Lindner College of Business",
      "Entrepreneurial Studies",
      "<h2>Ester Baek</h2>"
   ];
   // Generate a random number and pick that item from the array
   var randomizer = Math.floor(Math.random() * infoList.length);
   
   // Write that information in the HTML element that has the ID of "info"
   document.getElementById("info").innerHTML = infoList[randomizer];
};