import Store from "../store";

export default {
  timeout: 0,
  deleteMessage: true,
  success(text) {
    const message = { text, status: "success" };
    Store.dispatch("displayMessage", { message });
    this.autoHideMessage(text);
  },
  warning(text) {
    const message = { text, status: "warning" };
    Store.dispatch("displayMessage", { message });
    this.autoHideMessage(text);
  },
  error(text) {
    const message = { text, status: "error" };
    Store.dispatch("displayMessage", { message });
    this.autoHideMessage(text);
  },
  autoHideMessage(text) {
    clearTimeout(this.timeout);
    this.deleteMessage = true;
    const duration = Math.min(Math.max(text.length * 100, 3000), 8000);
    this.timeout = setTimeout(() => {
      if (this.deleteMessage) {
        Store.dispatch("cleanMessage");
      }
    }, duration);
  },
  keepMessage() {
    this.deleteMessage = false;
  },
  hideMessage() {
    Store.dispatch("cleanMessage");
  },
  displayGenericError() {
    this.error("Oops! Something went wrong. Retry in a few minutes.");
  }
};
