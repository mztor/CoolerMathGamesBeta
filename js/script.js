/* defines the value of the API key used by the gAPI for authentification of any API requests */
const CLIENT_ID = "28754738977-0ssjcguk1kkdcogqvkmu8r8v8uhvqucq.apps.googleusercontent.com";
/* defines the value of the API key used by the gAPI for authentification of any API requests */
const API_KEY = "AIzaSyBUuoufVI0aiQcZ4KbwIkMaRe7z1pwQT5U";
/* defines the URL/s of the document/s that identify machine-readable
specifications for describing and consuming RESTful APIs known as
Discovery Documents */
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
const SCOPES = "https://www.googleapis.com/auth/spreadsheets";

function handleClientLoading () {
    gapi.load("client:auth2", initClient);
}

function initClient () {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        let auth2 = gapi.auth2.getAuthInstance();
        auth2.isSignedIn.listen(getUserData);
        getUserData(auth2.isSignedIn.get());
    }, function (error) {
        throw new Error(error);
    });
}

function onSignIn (googleUser) {
    let profile = googleUser.getBasicProfile();
    console.log(profile.getEmail());
}

function signOut() {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () { console.log('User signed out.'); });
}

function getUserData (isSignedIn) {
    if (isSignedIn) {

    }
}