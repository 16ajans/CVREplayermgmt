import admin from 'firebase-admin';

admin.initializeApp();

var email = process.argv.slice(2)[0];

if (email) {

  admin
    .auth()
    .getUserByEmail(email)
    .then((userRecord) => {
      admin.auth().setCustomUserClaims(userRecord.uid, { admin: true })
      console.log("Set sucessfully.");
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
    });

} else {
  console.log("Provide an email of user to be made into admin.")
}