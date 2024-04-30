
const load=()=>{
    return `<div class="loader-one"></div>`
}


const footer=()=>{
    return`    <footer class="roboto">

    <div class="container">
        <div class="sec aboutus">
            <h2 class="roboto">About Us</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam nemo omnis earum cum veritatis
                accusamus, officiis praesentium nobis beatae repudiandae perspiciatis dolorem sunt, molestiae
                accusantium ab magnam vero, exercitationem quod.</p>
            <ul class="sci">
                <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            </ul>
        </div>
        <div class="sec quicklinks">
            <h2 class="roboto">Quick links</h2>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div class="sec quicklinks">
            <h2 class="roboto">Shop</h2>
            <ul>
                <li><a href="#">Nespresso Capsules</a></li>
                <li><a href="#">Nespresso Machines</a></li>
                <li><a href="#">Instant & Beans</a></li>
                <li><a href="#">Dolce Gusto Pods</a></li>
                <li><a href="#">Lavazza Coffee</a></li>
                <li><a href="#">Oat & Almond</a></li>
            </ul>
        </div>
        <div class="sec contact">
            <h2 class="roboto">Contact US</h2>
            <ul class="info">
                <li class="address">
                    <span><i class="fa-solid fa-map"></i></span>
                    <span class="spanp">647 Linda Street <br>
                        Phoenixville, PA 19640, <br>USA</span>
                </li>
                <li class="call">
                    <span><i class="fa-solid fa-phone"></i></span>
                    <p><a href="tel:+12345678900">+1 234 567 8900</a><br><a href="tel:+12345678900">+1 234 5678900</a></p>
                </li>
                <li class="email">
                    <span><i class="fa-solid fa-envelope"></i></span>
                    <p class="roboto"><a href="mailto:knowmore@email.com ">knowmore@email.com</a></p>
                </li>
            </ul>
        </div>

    </div>
</footer>
<div class="copyrightText">
    <p class="roboto">Copyright © 2023 project js. All Rights Reserved</p>
</div>`
}

const header=()=>{
    return`    <header>
    <div class="container">
        <div class="row justify-content align-items">
            <div class="logo">
                <img src="https://caramelly.in/cdn/shop/files/caramelly-logo-new_200x.png?v=1649194947" alt="">
            </div>
            <nav>
                <ul class="row ">
                    <li>
                        <home href="/index.html" style="font-weight: 700;font-size: 15px;">home</a>
                    </li>
                    <li><a href="Page/product.html" style="font-weight: 700;font-size: 15px;">product</a></li>
                    
                </ul>
            </nav>
            <div class="btn">
                <a href="/Page/login.html" id="login">login</a>
                <a href="/Page/sign.html" id="signup">sign-up</a>
                <div class="carticon">
                    <button class="">
                        <a href="Page/cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
                        <div class="cart-s"></div>
                    </button>
                    
                </div>
                <div id="profile"></div>
            </div>
        </div>
        <aside id="user-profile">
            <a href=""><i class="fa-solid fa-xmark" id="close"></i></a>
            <div class="profile" id="profilee">
            </div>
            <a href="Page/sign.html" id="logout">logout</a>
            <a href="/Page/addproduct.html" id="addproduct">Add Product</a>
        </aside>
    </div>
</header>`
}

const prohead=()=>{
    return`     <header>
    <div class="container">
        <div class="row justify-content align-items">
            <div class="logo">
                <img src="https://caramelly.in/cdn/shop/files/caramelly-logo-new_200x.png?v=1649194947" alt="">
            </div>
            <nav>
                <ul class="row ">
                    <li>
                        <a href="/index.html" style="font-weight: 700;font-size: 15px;">home</a>
                    </li>
                    <li><a href="/Page/product.html" style="font-weight: 700;font-size: 15px;">product</a></li>
                </ul>
            </nav>
                <div class="carticon">
                    <button class="">
                        <a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
                        <div class="cart-s"></div>
                    </button>
                </div>
            </div>
        </div>
        <aside id="user-profile">
            <a href=""><i class="fa-solid fa-xmark" id="close"></i></a>
            <div class="profile" id="profilee">
            </div>
            <a href="Page/sign.html" id="logout">logout</a>
            <a href="/Page/addproduct.html" id="addproduct">Add Product</a>
        </aside>
    </div>
</header>`
}


export {load,footer,header,prohead}