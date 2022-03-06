import get from '../libs/active';

function makes(){
    get("http://localhost:3000/makes")
        .then(data => {
            data.forEach(item => {
                const elem = document.createElement('div'),
                      wrapper = document.querySelector('.makes_wrapper');
                elem.classList.add('makes_wrapper-list');

                elem.innerHTML = `
                <div class="makes_wrapper-list-ellips">
                    <img src=${item.img} alt="step">
                </div>
                <h3>${item.title}</h3>
                <p class="makes_wrapper-list-sibtitle">${item.subtitle}</p> 
                `;

                wrapper.appendChild(elem);
            })  
        });
}

export default makes;