document.querySelectorAll(".disclosure").forEach(item=> {
item.addEventListener('click', function (){
    item.classList.toggle('opened');
}
)
});
