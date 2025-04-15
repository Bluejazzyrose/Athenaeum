/*
Jasmine Frye
Athenaeum Animals JavaScript File
*/

const dialogButtons = document.querySelectorAll('[data-dialog-target]');
const closeButtons = document.querySelectorAll('[data-close-dialog]');

dialogButtons.forEach(button => {
  button.addEventListener('click', () => {
    const dialogId = button.getAttribute('data-dialog-target');
    const dialog = document.getElementById(dialogId);
    dialog.showModal();
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const dialog = button.closest('dialog');
    dialog.close();
  });
});