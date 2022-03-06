function gamburger(){
    const popUp = document.querySelector('.popup'),
          nav = document.querySelector('.nav'),
          header = document.querySelector('.header'),
          logoText = document.querySelector('.header_logo-text');

    function openBar(e){
        logoText.style.color = '#fff';
        popUp.classList.remove('open');
        popUp.classList.add('close');
        popUp.style.left = 0;
        header.style.height = '373px';

        nav.classList.add('active'); 
    }

    function closeBar(e){
        popUp.classList.add('open');
        popUp.classList.remove('close');
        setTimeout(() => {
            header.style.height = '71px';
        }, 200)

        logoText.style.color = '#000';

        popUp.style.left = '-100%';
        nav.classList.remove('active');
    }

    nav.addEventListener('click', function(e){
        e.preventDefault();

        if(popUp.classList.contains('open')){
            openBar();
        } else if(popUp.classList.contains('close')){
            closeBar();
        }
    });
}

export default gamburger;