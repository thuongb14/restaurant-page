export default function home() {
    const content = document.querySelector('#content');
    content.innerHTML = ''
    const main = document.createElement('main');
    main.innerHTML = `
    <img class="main-photo" src="https://gourmetfood.com.au/wp-content/uploads/2020/05/homepage-crackers.png" alt="restaurant" srcset="">
    <h3>HORRIBLE <br> FOOD <span class="highlight">24/7</span></h3>`
    content.appendChild(main);
}

