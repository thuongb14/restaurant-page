export default function menu() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const menu = document.createElement('div');
    menu.classList.add('menu');
    content.appendChild(menu);
    menu.innerHTML =
    `   <h3 class="list">
            THE MENU.
        </h3>
        <div class="starter">
            <h4>STARTER</h4>
            <p>Doritos cereal special starter to begin the meal, chocolate or vanilla with homemade milk 
                <br>
                <br> Full-cream milk or low-fat milk
            </p>
        </div>
        <div class="main">
            <h4>MAIN COURSE</h4>
            <p>Burnt toast with smashed avocado, walnut toasted butternut and coats expired cheese
                <br> 
                <br>
                Or 
                <br>
                <br>
            Cheesy Marmite toast comes with cheddar cheese and mustard</p>
        </div>
        <div class="dessert">
            <h4>DESSERT</h4>
            <p>Bologna Cake with mayo 'frosting' and mustard detailing</p>
        </div>
        <div class="drink">
            <h4>Drink</h4>
            <p>Cola or Pepsi?</p>
        </div>
        </div>
    `
}