require('dotenv').config();
const { google } = require('googleapis');
const readline = require('readline');

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'urn:ietf:wg:oauth:2.0:oob'
);

const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: ['https://www.googleapis.com/auth/calendar.events'],
});

console.log('Open this URL, approve access, then paste the code below:\n', url);

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('Paste code here: ', async (code) => {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('\nSave this refresh token in your .env:\n', tokens.refresh_token);
    rl.close();
});