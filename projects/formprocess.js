document.getElementById('FormProcess').addEventListener('submit', function(event){
    event.preventDefault();
    const first = document.getElementById('fname').value;
    const last = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    if(!first || !last){
        alert('Please fill out your First and Last name');
        return;
    }
    if(!email){
        alert('Please fill out your email address');
        return;
    }
    if(!age|| age<18){
        alert('You must be 18 years or older to submit this form');
        return;
    }
    const formData = {
        first: first,
        last: last,
        age: age,
        email: email
    };

    const xhr = new XMLHttpRequest();
    xhr.open("GET","formprocess.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
           const response = JSON.parse(xhr.responseText);
                document.getElementById("message").innerHTML = response.message;
                document.getElementById('FormProcess').innerHTML = " ";
        } else if(xhr.readyState === 4 ){
            alert("Error: " + xhr.responseText);
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData);
});