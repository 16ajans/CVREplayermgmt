import admin from 'firebase-admin';

admin.initializeApp();

var email = process.argv.slice(2)[0];
var make = (process.argv.slice(2)[1] === 'true');

if (make) {
  admin
    .auth()
    .getUserByEmail(email)
    .then((userRecord) => {
      admin.auth().setCustomUserClaims(userRecord.uid, { admin: true }).then((lmaoWut) => {
        console.log("Set as admin sucessfully.");
        process.exit(0);
      });
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
      process.exit(1);
    });
} else {
  admin
    .auth()
    .getUserByEmail(email)
    .then((userRecord) => {
      admin.auth().setCustomUserClaims(userRecord.uid, { admin: false }).then((lmaoWut) => {
        console.log("Removed as admin.");
        process.exit(0);
      });
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
      process.exit(1);
    });
}
