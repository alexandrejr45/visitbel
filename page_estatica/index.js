function btn_menu_patrimonio() {
    let btn_menu = document.getElementById("call-menu");
    btn_menu.classList.toggle("background-menu");
}
function scroll_line() {
    let line_down = document.getElementById("line_down");
    let line_down_1 = document.getElementById("line_down_1");
    let start = Date.now();
    console.log(start);
    let timer = setInterval(function () {
        let timePassed = Date.now() - start;
        line_down.style.height = timePassed / 5 + 'px';
        if (timePassed > 2600) {
            document.getElementById("data-patrimonio").style.opacity = 1;
            clearInterval(timer);
        };
    }, 20);
}

