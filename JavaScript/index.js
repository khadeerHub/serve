function greet() {
    var name = document.querySelector("#name").value;
    var lowercaseName = name.toLowerCase();

    if (lowercaseName === "john cena") {
        document.write("We can't see you. <br>"); 
        document.write("<img src=\"Image.gif\" />"); 
    } else {
        var age = document.querySelector("#age").value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        FirstChar = name.slice(0, 1).toUpperCase();
        remainingWords = name.slice(1, name.length).toLowerCase();
        document.write("Hello, " + FirstChar + remainingWords + "<br>");
        document.write("Your age is " + age + "<br>");
        document.write("You are " + gender + "<br>");
    }

}