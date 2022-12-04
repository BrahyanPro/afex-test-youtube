import { useNotification } from "@kyvg/vue3-notification";

const { notify}  = useNotification()

notify({
  title: "Authorization",
  text: "You have been logged in!",
});

class Alerts {
  success(message) {
    notify({
      title: "Success",
      text: message,
      type: 'success'
    });
  }
  error(message) {
    notify({
      title: "Error",
      text: message,
      type: 'error'
    });
  }
  warning(message) {
    notify({
      title: "Warning",
      text: message,
      type: 'warning'
    });
  }
}

export default new Alerts();