//Hamburger
hbtn.addEventListener('click', function(){
    if(hbtn.classList.contains('open')){
        hbtn.classList.remove('open');
        mobMenu.style.display = "none";
        closeItems('04');
        setTimeout(() => {closeItems('03')}, 50);
        setTimeout(() => {closeItems('02')}, 100);
        setTimeout(() => {closeItems('01')}, 150);

    }
    else {
        hbtn.classList.add('open');
        mobMenu.style.display ='block';
        showItems('01');
        setTimeout(() => {showItems('02')}, 50);
        setTimeout(() => {showItems('03')}, 100);
        setTimeout(() => {showItems('04')}, 150);
    }
    
});
