self.addEventListener("push", (e) => {
  e.waitUntil(
    self.registration.showNotification("Test push notifications", {})
  );
});
