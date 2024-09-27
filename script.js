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