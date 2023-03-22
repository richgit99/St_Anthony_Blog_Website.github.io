document.getElementById('theme').onclick = function(){

    const body = document.getElementById('body1')
  const separator_line = document.getElementById('separator')
  const separator_line1 = document.getElementById('separator1')
  const separator_line2 = document.getElementById('separator2')
  const separator_line3 = document.getElementById('separator3')
  const separator_line4 = document.getElementById('separator4')
  const color_of_button = document.getElementById('theme')

  


if (body.style.backgroundColor == 'white'){

color_of_button.innerHTML = 'Theme: Black';
    
    body.style.backgroundColor = "black";
    body.style.color = 'white'; 
    body.style.borderColor = 'white';
    separator_line.style.backgroundColor = 'white';
    separator_line1.style.backgroundColor = 'white';
    separator_line2.style.backgroundColor = 'white';
    separator_line3.style.backgroundColor = 'white';
    separator_line4.style.backgroundColor = 'white';

}

else{
    color_of_button.innerHTML = 'Theme: White';
    body.style.backgroundColor = "white";
    body.style.color = 'black';
    body.style.borderColor = 'black';
    separator_line.style.backgroundColor = 'white';
    separator_line1.style.backgroundColor = 'white';
    separator_line2.style.backgroundColor = 'white';
    separator_line3.style.backgroundColor = 'white';
    separator_line4.style.backgroundColor = 'white';
    


}}




















