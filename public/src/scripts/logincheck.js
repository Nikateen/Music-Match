firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        document.getElementById("notlogged").style.display = "none";
        document.getElementById("logged").innerHTML = "My Profile";			
        console.log(displayName);
        if(displayName){
            document.getElementById("logged").innerHTML = displayName;
        }
        document.getElementById("logged").style.display = "inline-block";
    } else {
        document.getElementById("notlogged").style.display = "inline-block";
        document.getElementById("logged").style.display = "none";

    }
});