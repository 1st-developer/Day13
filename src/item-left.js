document.addEventListener("DOMContentLoaded", function () {
    const start = document.querySelector('.hamburger input');
    const item = document.querySelector('.item-left');

    function showwrapper () {
        if(item.classList.contains('show')) {
            item.classList.remove('show');
        }else{
            item.classList.add('show');
        }
    }

    start.addEventListener('click', function () {
        showwrapper();
    });
});