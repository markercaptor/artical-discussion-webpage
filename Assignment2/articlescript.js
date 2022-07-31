// JavaScript source code
function dissapear() {
    var x = document.getElementById("dis");
    var button = document.getElementById("hide");
    var state = x.style.display;
 
    if (state == 'block') {
        x.style.display = 'none';
        state.innerHTML = 'Uncover';

    }
    else {
        x.style.display = 'block';
        state.innerHTML='hide'
    }

    
}

function sdissapear() {
    var y = document.getElementById("dissapear");
    var button = document.getElementById("hid");
    var state = y.style.display;

    if (state == 'block') {
        y.style.display = 'none';
        state.innerHTML = 'Uncover';

    }
    else {
        y.style.display = 'block';
        state.innerHTML = 'hide'
    }
}