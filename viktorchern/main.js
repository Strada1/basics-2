const ERRORS = {
  NAME_EMPTY: 'Вы не ввели имя',
  NAME_ERROR: 'Вы не корректно ввели имя',
  STATUS_ERROR: 'Запрос к серверу не увенчался успехом, попробуйте еще',
  GENDER_ERROR: 'Пол не определен',
}

function showGender(event){
  event.preventDefault();
  const firstName = document.querySelector('#user-name').value;
  const serverUrl = 'https://api.genderize.io';
  const url = `${serverUrl}?name=${firstName}`;
  try {
    if( firstName === '' ){
      throw new SyntaxError(ERRORS.NAME_EMPTY);
    } else if( !firstName ){
      throw new SyntaxError(ERRORS.NAME_ERROR);
    }
    fetch(url)
      .then(
        function(response) {
          try {
            if( !response.ok ){
              throw new SyntaxError(ERRORS.STATUS_ERROR);
            }
            return response.json();
          } catch(err) {
            alert(err.message);
          }
        }
      )
      .then(
        function(commit) {
          try {
            if( commit.gender === null ){
              throw new SyntaxError(ERRORS.GENDER_ERROR);
            }
            alert(`${firstName} is ${commit.gender}`);
          } catch(err){
            alert(err.message);
          }
        }
      )
  } catch(err){
    alert(err.message);
  }
}
document.querySelector('#submit-button').addEventListener('click', showGender);