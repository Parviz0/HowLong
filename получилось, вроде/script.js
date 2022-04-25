let button = document.querySelector('.btn')
let wrap = document.querySelector('.wrapper')
button.onclick = () => {
    if(wrap.classList.contains('wrapperJs')){
        wrap.classList.remove('wrapperJs')
    }else{
        wrap.classList.add('wrapperJs')
    }
}