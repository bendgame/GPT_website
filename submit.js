document.getElementById('emailForm').addEventListener('submit', function(event){
    event.preventDefault();
    var emailAddress = document.getElementById('emailAddress').value;
    if (validateEmail(emailAddress)) {
        console.log(emailAddress);
        $('#emailModal').modal('hide');
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}