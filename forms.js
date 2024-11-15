document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
    const first = document.getElementById('fname').value;
    const last = document.getElementById('lname').value;
    const age = document.getElementById('age').value;
    if(!first || !last){
        alert('Please fill out all fields');
        return;
    }
    if(!age|| age<18){
        alert('You must be 18 years or older to submit this form');
        return;
    }
    const formData = {
        first: first,
        last: last,
        age: age
    };

    const xhr = new XMLHttpRequest();
    xhr.open("GET","submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
           const response = JSON.parse(xhr.responseText);
              alert(response.message);
        } else if(xhr.readyState === 4 ){
            alert("Error: " + xhr.responseText);
        }
    };
    xhr.send(JSON.stringify(formData));
    console.log(formData);
});