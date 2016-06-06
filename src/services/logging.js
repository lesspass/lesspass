import notie from 'notie';

notie.setOptions({
  colorSuccess: '#449d44',
  colorWarning: '#f0ad4e',
  colorError: '#d9534f',
  colorText: '#FFFFFF'
});

module.exports = {
  error(message, duration = 3) {
    notie.alert(3, message, duration);
  },
  success(message, duration = 3) {
    notie.alert(1, message, duration);
  },
  warning(message, duration = 3) {
    notie.alert(2, message, duration);
  }
};
