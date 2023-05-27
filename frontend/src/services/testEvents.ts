import axios from 'axios'
const baseUrl = "/listener/"

export const generateTestEvents = (binder: string | undefined) => {
  try {
    axios.post(baseUrl + binder, {
      type: 'test webhook',
      provider: 'github',
      event: 'new push to repository'
    });

    setTimeout(() => {
      axios.post(baseUrl + binder, {
        type: 'test webhook',
        provider: 'basecamp',
        event: 'John Appleseed just posted a new document'
      });
    }, 1500);
  } catch (e) {
    alert("Can't generate test events at this time");
  }
}