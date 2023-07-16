//задание 1
function greetUser() {
  const userName = document.getElementById('userName').value;
  alert('Привет, ' + userName + '!');
}

//задание 2
function checkAge() {
  const userAge = prompt('Введите ваш возраст:');
  let message;

  switch (true) {
      case (userAge < 0):
          message = 'Ошибка! Возраст не может быть отрицательным.';
          break;
      case (userAge >= 0 && userAge < 18):
          message = 'Вы еще слишком молоды!';
          break;
      case (userAge >= 18 && userAge < 65):
          message = 'Вы в возрасте трудоспособности.';
          break;
      default:
          message = 'Вы находитесь в золотые годы!';
  }

  alert(message);
}