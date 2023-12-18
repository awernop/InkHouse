const ger = document.querySelector('.german');
const franc = document.querySelector('.france');
const eng = document.querySelector('.england');
const elemsfranc = document.querySelector('.elems-franc');
const elemsgerm = document.querySelector('.elems-germ');
const elemseng = document.querySelector('.elems-eng');

const german = () => {
    ger.classList.add('active');
    franc.classList.remove('active');
    eng.classList.remove('active');
    elemsfranc.classList.add('none');
    elemseng.classList.add('none');
    elemsgerm.classList.remove('none');
}

const france = () => {
    ger.classList.remove('active');
    franc.classList.add('active');
    eng.classList.remove('active');
    elemsfranc.classList.remove('none');
    elemseng.classList.add('none');
    elemsgerm.classList.add('none');
}

const england = () => {
    ger.classList.remove('active');
    franc.classList.remove('active');
    eng.classList.add('active');
    elemsfranc.classList.add('none');
    elemseng.classList.remove('none');
    elemsgerm.classList.add('none');
}