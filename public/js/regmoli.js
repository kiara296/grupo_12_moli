window.addEventListener('load', function() {
    document.querySelector('#name').addEventListener('blur', function(e) {
        console.log(e.target.value);
    });
});