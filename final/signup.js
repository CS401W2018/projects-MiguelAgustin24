document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
    const first = document.getElementById('fname').value;
    const last = document.getElementById('lname').value;
    const age = document.getElementById('age').value;
    const newemail = document.getElementById('new-email').value;

    if (!first || !last) {
        alert('Please fill out your First and Last name');
        return;
    }
    if (!newemail) {
        alert('Please fill out your email address');
        return;
    }
    if (!age || age < 12) {
        alert('You must be accompanied by an adult to submit this form');
        return;
    }

    const formData = {
        first: first,
        last: last,
        age: age,
        email: newemail
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "process.html", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            window.location.href = "process.html";
        } else if (xhr.readyState === 4) {
            alert("Error: " + xhr.responseText);
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData);
});