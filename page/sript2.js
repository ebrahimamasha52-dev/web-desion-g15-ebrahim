var addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function () {

  var nameValue = document.getElementById('nameInput').value;
  var emailValue = document.getElementById('emailInput').value;

  var div = document.createElement('div');
  var h3 = document.createElement('h3');
  var h4 = document.createElement('h4');

  h3.innerText = nameValue;
  h4.innerText = emailValue;

  div.appendChild(h3);
  div.appendChild(h4);

  div.classList.add('alert', 'alert-primary');
  var divContainer = document.getElementById('divContainer');
  divContainer.appendChild(div);

  document.getElementById('nameInput').value = '';
  document.getElementById('emailInput').value = '';
});