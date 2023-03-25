const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  
  const emailInput = event.target.elements.email;
  const passwordInput = event.target.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Please fill in all fields');
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };
    
    console.log(formData);
    loginForm.reset();
  }
}
// Цей скрипт додає обробник події submit до форми з класом 
// .login-form, який запобігає перезавантаженню сторінки 
// під час відправлення форми. Після цього, при відправленні форми,
// скрипт перевіряє, чи заповнені всі поля, і якщо ні,
// виводить повідомлення про заповнення всіх полів. 
// Якщо всі поля заповнені, скрипт створює об'єкт formData
// з введеними даними і виводить його в консоль. 
// Нарешті, метод reset() викликається на формі, щоб очистити її поля.
