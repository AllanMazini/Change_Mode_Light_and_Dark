const selector = {
    mode: 'section.main .mode',
    main: 'section.main',
    title: 'section.main .title',
    clouds: 'section.main .clouds img'
}

const mode = document.querySelector(selector.mode);
const main = document.querySelector(selector.main);
const title = document.querySelector(selector.title);
const clouds = document.querySelectorAll(selector.clouds);

console.log(mode, main, title, clouds)