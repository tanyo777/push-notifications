const webPush = require("web-push");

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

const subscription = {};

async function send() {
  await webPush.sendNotification(subscription, "Testing push notifications");
}

send();
