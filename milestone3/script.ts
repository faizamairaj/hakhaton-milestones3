function takeValue(event: Event): void {
    event.preventDefault();  

    let name = (document.getElementById("name") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let mobile = (document.getElementById("mobile") as HTMLInputElement).value;
    let address = (document.getElementById("address") as HTMLInputElement).value;
    let experience = (document.getElementById("experience") as HTMLInputElement).value;
    let education = (document.getElementById("education") as HTMLInputElement).value;
    let skills = (document.getElementById("skills") as HTMLInputElement).value;

    document.write("Your Name is = " + name + "<br>");
    document.write("Your Email is = " + email + "<br>");
    document.write("Your Mobile Number is = " + mobile + "<br>");
    document.write("Your Address is = " + address + "<br>");
    document.write("Your Experience is = " + experience + "<br>");
    document.write("Your Education is = " + education + "<br>");
    document.write("Your Skills are = " + skills + "<br>");
}
