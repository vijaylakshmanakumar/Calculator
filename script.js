function insert(num) {
  document.form.textarea.value = document.form.textarea.value + num;
}
function equal() {
  var text = document.form.textarea.value;
  document.form.textarea.value = eval(text);
}
function clean() {
  document.form.textarea.value = '';
}
function back() {
  var backButton = document.form.textarea.value;
  document.form.textarea.value = backButton.substring(0, backButton.length - 1);
}
