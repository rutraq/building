window.addEventListener('load', function () {
    function imgClick(event) {
        var zoom = document.querySelector('.zoom');
        if (zoom != null) {
            zoom.classList.remove('zoom');
        }
        var target = event.target;
        if (target.matches('img') && target != zoom) {
            target.classList.add('zoom');
        }
    }
    document.body.addEventListener('click', imgClick);
});