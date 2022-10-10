import "dotenv/config";
import readline from "readline";
import admin from "firebase-admin";
import prompt from "prompt";

admin.initializeApp({
	credential: admin.credential.applicationDefault(),
	databaseURL: "https://cvreplayermgmt-default-rtdb.firebaseio.com/",
});
const query = admin.database().ref();

const re = /^[0-9]+$/;

prompt.start();

query.once("value").then(async (dbSnapshot) => {
	const dbData = dbSnapshot.val();
	for (const user in dbData) {
		const userData = dbData[user];
		if (userData.roster) {
			const roster = userData.roster;
			if (roster["Beat Saber"]) {
				console.log(`Viewing ${userData.discord}'s teams:`);
				console.group();
				const BSTeams = roster["Beat Saber"];
				for (const team in BSTeams) {
					if (BSTeams[team].players) {
						console.log(
							`Viewing ${BSTeams[team].type} team: ${team}`
						);
						console.group();
						const players = BSTeams[team].players;
						for (const player in players) {
							console.log(
								`${players[player].tag}'s SSID is currently '${players[player].SSID}'`
							);
							if (
								!re.test(players[player].SSID) &&
								!(players[player].SSID == "quest")
							) {
								const { newSSID } = await prompt.get([
									{
										properties: {
											newSSID: {
												description: "New SSID",
											},
										},
									},
								]);
								if (newSSID) {
									const path = `${user}/roster/Beat Saber/${team}/players/${player}/SSID`;
									query.update({
										[path]: newSSID,
									});
								}
							}
						}
						console.groupEnd();
					}
				}
				console.groupEnd();
			}
		}
	}
});
