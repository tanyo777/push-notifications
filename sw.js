self.addEventListener("push", (e) => {
  console.log(e);
  e.waitUntil(
    self.registration.showNotification("Test push notifications", {
      body: "Test",
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "2",
      },
      actions: [
        { action: "explore", title: "Explore" },
        { action: "close", title: "Close" },
      ],
    })
  );
});
