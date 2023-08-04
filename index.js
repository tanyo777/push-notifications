const webPush = require("web-push");
const express = require("express");

const app = express();

app.use(express.static("./"));

app.listen(5000);

const vapidKeys = {
  publicKey:
    "BHYKFCo79xV0GBJQOmvUIySwVvQJKNqKGB9-GYaec70jo4eI1nogxtOpGR7R5TCJSu8sF1rCkY4EWaXniKTy7DA",
  privateKey: "4RZK7-B4V2lxOFuubrT66wJpXx8awyBr4l8Lv0A3e7o",
};

webPush.setVapidDetails(
  "mailto:test@test.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const subscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dcxo2J0C25o:APA91bErvjpozl7aTb5Vq0BXPiB6Lq8fVCVC6IzonvBg6HjZ5aX00p-uiOxNLbqWjuHu1KbyDClambDZm-tqBkpHRzZIJLIfnHcJtHPuVuA0ZU1YaiH0wUTbd3NebMhN-ZuAlDOYqok3",
  expirationTime: null,
  keys: {
    p256dh:
      "BPracTC6BfSJ6VfVlKxMevGvrp3ybsUYX1EVJ8PYo49_mBXU-p4WuEhIOUFUEZrK2oL1b8Mzd32sl2CZubGe3cE",
    auth: "JP60jxh8eXkuYQwddjlNaw",
  },
};

const test = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/d9WtvUMypLA:APA91bEPyGjs707KrkplhIt71SRYpE81kwEvZcl1mHAkfUhNlldbSLpjG12tIy-PgdinpupSU48UrZ5sdFzvioKD1P7akBMUTelidP96aHJFJZK5TdMk8WlZY6u0657VUEfjV7B9QIf4",
  expirationTime: null,
  keys: {
    p256dh:
      "BJ8H0igGYatxClEHVE8yBKLu0CZj1tNrw6N87e_T38cN7Z60riSKMSvNp_MltPSSdNAP48gpiEmacUOBPgNwGYE",
    auth: "UeJGfLl09mwPS5jBaLRY0Q",
  },
};
async function send() {
  const response = await webPush.sendNotification(
    test,
    "Testing push notifications"
  );

  console.log(response);
}

send();
