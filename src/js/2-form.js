const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  formData = JSON.parse(savedData);

  form.elements.email.value = formData.email ?? '';
  form.elements.message.value = formData.message ?? '';
}

form.addEventListener('input', evt => {
  const value = evt.target.value.trim();
  const key = evt.target.name;

  formData[key] = value;

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  formData = { email: "", message: "" };
  form.reset();
});