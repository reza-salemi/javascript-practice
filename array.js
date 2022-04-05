const emails = [
  "TheDebonair@gmail.com",
  "TheMarried@gmail.com",
  "TheCondemned@gmail.com",
  "TheUsed@gmail.com",
  "TheCultured@gmail.com",
  "Even@yahoo.com",
  "Green@yahoo.com",
  "Thoughtless@yahoo.com",
  "Sparkling@quera.ir",
  "Feeble@quera.ir",
  "Equal@quera.ir",
  "Labored@icloud.com",
  "Rare@icloud.com",
  "Possible@icloud.com",
  "Faded@icloud.com",
  "Gusty@icloud.com",
];

const convertedEmails = [];

for (const email of emails) {
  convertedEmails.push(email.replace("quera.ir", "yahoo.com"));
}

const newEmails = emails.map((email) => email.replace("quera.ir", "yahoo.com"));

const onlyGmails = newEmails.filter((email) => email.endsWith("@gmail.com"));

const emailsExcludedYahoo = newEmails.filter(
  (email) => !email.endsWith("@yahoo.com")
);

const onlyRNamesEmails = newEmails.filter((email) => {
  const [name] = email.split("@");
  return name.toLowerCase().includes("r");
});

const iCloudMailCount = emails.filter((email) =>
  email.endsWith("@icloud.com")
).length;

const numbers = [1, 3, 5, 8, 10, 2];

const sumReducer = (sum, nextNumber) => sum + nextNumber;

const sum = numbers.reduce(sumReducer);

const cleanedEmails = emails.map((email) => email.split("@")[1]);

const counter = {};

cleanedEmails.forEach((email) => {
  if (email in counter) {
    counter[email] += 1;
  } else {
    counter[email] = 1;
  }
});

console.log(counter);
