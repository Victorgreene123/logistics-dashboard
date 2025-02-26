class MockWebSocket {
  constructor(url) {
    this.url = url;
    this.readyState = 1; // OPEN state
    this.listeners = {};

    // Start sending random updates every 5 seconds
    this.interval = setInterval(() => {
      this.sendRandomUpdate();
    }, 5000);
  }

  sendRandomUpdate() {
    const randomUpdate = {
      id: Math.random().toString(36).substring(7),
      type: "Mercedes Benz Sprinter",
      plate: "G 421 NG",
      status: Math.random() > 0.5 ? "On The Way" : "Loading",
      load: Math.floor(Math.random() * 100),
      location: {
        lat: -6.914744 + (Math.random() * 0.01 - 0.005),
        lng: 107.60981 + (Math.random() * 0.01 - 0.005),
      },
    };

    // Trigger event listener
    if (this.listeners["message"]) {
      this.listeners["message"]({ data: JSON.stringify(randomUpdate) });
    }
  }

  addEventListener(event, callback) {
    this.listeners[event] = callback;
  }

  close() {
    clearInterval(this.interval);
  }
}

export default MockWebSocket;
