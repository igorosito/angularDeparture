const ham = document.querySelector('.ham');
const $navRes = document.querySelector('.nav-responsive');
ham.addEventListener('click', function () {
    $navRes.classList.toggle('navActive');
});
