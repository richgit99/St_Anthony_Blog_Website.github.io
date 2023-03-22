document.getElementById('theme').onclick = function(){

    const body = document.getElementById('body1')
  const separator_line = document.getElementById('separator')
  const separator_line1 = document.getElementById('separator1')
  const separator_line2 = document.getElementById('separator2')
  const separator_line3 = document.getElementById('separator3')
  const separator_line4 = document.getElementById('separator4')
  const color_of_button = document.getElementById('theme')

  const h2_highlighter6 = document.getElementById("h2_highlighter6")
  const h2_highlighter7 = document.getElementById("h2_highlighter7")
  const h2_highlighter8 = document.getElementById("h2_highlighter8")
  const h2_highlighter9 = document.getElementById("h2_highlighter9")
  const h2_highlighter10 = document.getElementById("h2_highlighter10")


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
    // h2_highlighter6.style.backgroundColor = 'blue';
    h2_highlighter6.style.color = 'blue';
    h2_highlighter7.style.color = 'blue';
    h2_highlighter8.style.color = 'blue';
    h2_highlighter9.style.color = 'blue';
    h2_highlighter10.style.color = 'blue';
    // h2_highlighter10.style.background = 'linear-gradient(red,green)';
    h2_highlighter10.style.background = 'linear-gradient(pink ,white)';
    h2_highlighter9.style.background = 'linear-gradient(gold ,white)';
    h2_highlighter8.style.background = 'linear-gradient(orange ,white)';
    h2_highlighter7.style.background = 'linear-gradient(brown ,white)';
    h2_highlighter6.style.background = 'linear-gradient(green ,white)';
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
    h2.style.backgroundColor = 'blue';
    h2.style.color = 'blue';
    h2_highlighter6.style.color = 'white';
    h2_highlighter7.style.color = 'white';
    h2_highlighter8.style.color = 'white';
    h2_highlighter9.style.color = 'white';
    h2_highlighter10.style.color = 'white';
 
    
}}

// function button_action(){
//     alert('click on the text of the button');
// }




