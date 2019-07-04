function btn_menu_patrimonio() {
    let btn_menu = document.getElementById("call-menu");
    btn_menu.classList.toggle("background-menu");
}
function scroll_line() {
    let line_down = document.getElementById("line_down");

    let start = Date.now();
    let timer = setInterval(function () {

        let timePassed = Date.now() - start;
        line_down.style.height = timePassed / 5 + 'px';
        if (timePassed > 1900) {
            clearInterval(timer);
        };
    }, 20);
}

