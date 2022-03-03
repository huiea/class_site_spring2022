let keys= document.querySelectorAll('.keys');
let spaceKey= document.querySelector('.space_key');
let shift_left= document.querySelector('.shift_left');
let shift_right= document.querySelector('.shift_right');
let caps_lock_key= document.querySelector('.caps_lock_key');
let toggle_circle= document.querySelector('.toggle_circle');
let night_mode= document.querySelector('.night_mode');
let body= document.querySelector('body');
let text_input= document.querySelector('.text');
let change_color= document.querySelector('.change_light_color');
let colors_input= document.querySelector('.colors_input');
let keyboard_lights= document.querySelector('.keyboard_lights');

for(let i =0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase())
}

window.addEventListener('keydown', function(e)
    for(let i = 0; i< keys.length; i++) {
    
    }
})

