let mobile = document.getElementById('phone-container');
let model = mobile.getElementsByClassName('model');

for(let i=0; i<model.length; i++)
{
    alert(model[i].textContent);
}
