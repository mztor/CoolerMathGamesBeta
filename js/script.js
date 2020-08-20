let user;
let apiURL = "https://sheetsu.com/apis/v1.0su/ff1114550f8e";

function errFunc (e) { throw new Error(e) }
function successFunc () { console.log("you idea is good and you should feel good :)") }

function onSignIn (googleUser) {
    let profile = googleUser.getBasicProfile();

    console.table([{attribute: 'Email', value: profile.getEmail()}]);

    Sheetsu.read(apiURL, {search: {email: profile.getEmail()}})
        .then(function (data) {
            user = {...data[0]};
            console.log(user);
        }, errFunc);
}

function signOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

function newHighScore (user, id, score) {

}