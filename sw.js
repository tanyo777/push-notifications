self.addEventListener("push", (e) => {
  const options = {
    body: "Push notification",
  };
  e.waitUntil(
    self.registration.showNotification("Test push notifications", options)
  );
});
