function getInputFieldValueById(id){
                const inputValue = document.getElementById(id).value;
                const inputValue2=parseFloat(inputValue);
                return inputValue2;
}
function getTextFieldValueById(id){
  const inputValue3= document.getElementById(id).innerText;
  const inputValue4=parseFloat(inputValue3);
  return inputValue4;
}

function getNumberFieldValueById(id){
  const inputValue5 = document.getElementById(id).innerText;
  const inputValue6=parseFloat(inputValue5);
  return inputValue6;
}


function historyBtn(id){


  document.getElementById('button-main').classList.add('hidden');
  document.getElementById('history-section').classList.add('hidden');
  document.getElementById(id).classList.remove('hidden');
}

function moneyNotification(TK, NAME) {
  const div = document.createElement('div');
  div.style.padding = '20px';
  div.style.margin = '20px';
  div.style.border = "2px solid black";
  div.style.borderRadius = '10px';

  const date = new Date();
  const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

  div.innerHTML = `
      <h1>${TK} Taka is ${NAME}</h1>
      <br>
      <p>Date: ${formattedDate}</p>
  `;
  document.getElementById('history-section').appendChild(div);
}
