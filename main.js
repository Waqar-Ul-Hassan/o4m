//reference messages collection
var messagesRef = firebase.database().ref("messages");

//listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

    //get values
    var email = getInputVal('email');
    var comments = getInputVal('comments');

    saveMessage(email, comments);
}

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage (email, comments){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email:email,
        comments:comments
    })

}