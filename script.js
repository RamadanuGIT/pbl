// navbar search
const triggerOpen = document.getElementById('triggerOpen');
const search = document.getElementById('input');

triggerOpen.addEventListener('click', () => {
    if (!input.classList.contains('input-open')) {
        input.classList.add('input-open');
        triggerOpen.innerHTML = "<i class='fa fa-times'></i>";
    } else {
        input.classList.remove('input-open');
        triggerOpen.innerHTML = "<i class='fa fa-search'></i>";
    }
});

window.addEventListener('scroll', function(){
    const navbar = document.getElementById('navbar');
    
    if (window.pageYOffset >= 100) {
        navbar.classList.add('sticky');
        document.getElementById('logo').style.display = 'none';
        document.getElementById('triggerOpen').style.color = 'white';
    }else {
        navbar.classList.remove('sticky');
        document.getElementById('logo').style.display = 'block';
        document.getElementById('triggerOpen').style.color = 'black';
    }
});