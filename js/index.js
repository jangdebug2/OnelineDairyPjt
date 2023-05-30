document.addEventListener('DOMContentLoaded', function(){
    console.log('DOCUMENT READY!!');

    init();
});


const init = () => {
    console.log('init() READY!!');

    initViews();
    addEvent();
}


const initViews = () => {
    console.log('initViews() READY!!');

    let signUpWrap = document.querySelector('div.sign_up_wrap');
    let signInWrap = document.querySelector('div.sign_in_wrap');
    let writeWrap = document.querySelector('div.write_wrap');
    let listWrap = document.querySelector('div.list_wrap');

}


const addEvent = () => {
    console.log('addEvent() READY!!');


}