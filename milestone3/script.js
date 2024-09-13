function takeValue(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var address = document.getElementById("address").value;
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    // Display the values on the web page
    document.write("Your Name is = " + name + "<br>");
    document.write("Your Email is = " + email + "<br>");
    document.write("Your Mobile Number is = " + mobile + "<br>");
    document.write("Your Address is = " + address + "<br>");
    document.write("Your Experience is = " + experience + "<br>");
    document.write("Your Education is = " + education + "<br>");
    document.write("Your Skills are = " + skills + "<br>");
}
