// let btn = document.querySelectorAll('.accordeon_box');
// let text = document.querySelectorAll('.accordeon_text');
// let arrow = document.querySelectorAll('.icon');


// btn.addEventListener('click', (e)=> {
//     e.preventDefault();

//     text.classList.toggle('visible');
//     arrow.classList.toggle('icon_rotate');

// })


let btns = document.querySelectorAll('.accordeon_box');
let texts = document.querySelectorAll('.accordeon_text');
let arrows = document.querySelectorAll('.icon');

btns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        // Toggle visibility of the corresponding text
        texts[index].classList.toggle('visible');

        // Toggle rotation of the corresponding arrow
        arrows[index].classList.toggle('icon_rotate');
    });
});
