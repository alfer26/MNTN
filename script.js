window.onload = () => {
    setTimeout(() => {
        document.body.style.visibility = 'visible';
        document.documentElement.style.scrollBehavior = 'smooth';
    }, 1)
}

const menuButton = document.querySelector('img#menuButton');
const header = document.querySelector('header#start');
const shading = document.querySelector('div#shading');
const menu = `<section class="burgerMenu">
            <div>
                <div>
                    <p class="logo">MNTN</p>
                    <img id="closeMenu" src="./images/closeMenu.png" alt="Close Menu" />
                </div>
                <p>Equipment</p>
                <p>About us</p>
                <p>Blog</p>
                <div>
                    <div>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 22 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.2295 0.803284C5.31196 0.803284 0.509277 5.8341 0.509277 12.0328C0.509277 18.2315 5.31196 23.2623 11.2295 23.2623C17.1471 23.2623 21.9498 18.2315 21.9498 12.0328C21.9498 5.8341 17.1471 0.803284 11.2295 0.803284ZM5.94445 19.0849C6.40542 18.0743 9.21413 17.0861 11.2295 17.0861C13.245 17.0861 16.0644 18.0743 16.5146 19.0849C15.0567 20.2977 13.2235 21.0164 11.2295 21.0164C9.23557 21.0164 7.40241 20.2977 5.94445 19.0849ZM18.0476 17.4566C16.5146 15.5027 12.7947 14.8402 11.2295 14.8402C9.66439 14.8402 5.94445 15.5027 4.41145 17.4566C3.31799 15.9519 2.65333 14.0766 2.65333 12.0328C2.65333 7.08058 6.50191 3.04919 11.2295 3.04919C15.9572 3.04919 19.8058 7.08058 19.8058 12.0328C19.8058 14.0766 19.1411 15.9519 18.0476 17.4566ZM11.2295 5.29509C9.14981 5.29509 7.47745 7.04689 7.47745 9.22541C7.47745 11.4039 9.14981 13.1557 11.2295 13.1557C13.3093 13.1557 14.9816 11.4039 14.9816 9.22541C14.9816 7.04689 13.3093 5.29509 11.2295 5.29509ZM11.2295 10.9098C10.3398 10.9098 9.6215 10.1575 9.6215 9.22541C9.6215 8.29337 10.3398 7.54099 11.2295 7.54099C12.1193 7.54099 12.8376 8.29337 12.8376 9.22541C12.8376 10.1575 12.1193 10.9098 11.2295 10.9098Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                    <p>Account</p>
                </div>
                <section class="social">
                    <p>Follow us</p>
                    <div>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <filter id="hoverSoc">
                                    <feFlood
                                        flood-color="#fbd784"
                                        result="colour"
                                    />
                                    <feComposite
                                        operator="in"
                                        in="colour"
                                        in2="SourceAlpha"
                                    />
                                </filter>
                                <filter id="activeSoc">
                                    <feFlood
                                        flood-color="#fab005"
                                        result="colour"
                                    />
                                    <feComposite
                                        operator="in"
                                        in="colour"
                                        in2="SourceAlpha"
                                    />
                                </filter>
                            </defs>
                            <path
                                d="M5.8 1.90735e-05H14.2C17.4032 1.90735e-05 20 2.59677 20 5.80002V14.2C20 17.4033 17.4032 20 14.2 20H5.8C2.59675 20 0 17.4033 0 14.2V5.80002C0 2.59677 2.59675 1.90735e-05 5.8 1.90735e-05ZM5.6 2C3.61177 2 2 3.61178 2 5.6V14.4C2 16.3882 3.61177 18 5.6 18H14.4C16.3882 18 18 16.3882 18 14.4V5.6C18 3.61178 16.3882 2 14.4 2H5.6ZM15.25 3.5C15.9404 3.5 16.5 4.05965 16.5 4.75C16.5 5.44036 15.9404 6 15.25 6C14.5596 6 14 5.44036 14 4.75C14 4.05965 14.5596 3.5 15.25 3.5ZM10 5C12.7614 5 15 7.23858 15 10C15 12.7614 12.7614 15 10 15C7.23857 15 5 12.7614 5 10C5 7.23858 7.23857 5 10 5ZM10 7C8.3431 7 7 8.3432 7 10C7 11.6569 8.3431 13 10 13C11.6569 13 13 11.6569 13 10C13 8.3432 11.6569 7 10 7Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                    <div>
                        <svg
                            width="22"
                            height="17"
                            viewBox="0 0 22 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <filter id="hover">
                                    <feFlood
                                        flood-color="#fbd784"
                                        result="colour"
                                    />
                                    <feComposite
                                        operator="in"
                                        in="colour"
                                        in2="SourceAlpha"
                                    />
                                </filter>
                                <filter id="active">
                                    <feFlood
                                        flood-color="#fab005"
                                        result="colour"
                                    />
                                    <feComposite
                                        operator="in"
                                        in="colour"
                                        in2="SourceAlpha"
                                    />
                                </filter>
                            </defs>
                            <path
                                d="M21.4592 2.01238C20.6896 2.35373 19.8624 2.58442 18.9944 2.68815C19.8803 2.15701 20.5609 1.31598 20.8813 0.31378C20.052 0.80564 19.1336 1.16278 18.156 1.3552C17.3732 0.52112 16.2579 0 15.0235 0C12.6534 0 10.7317 1.92147 10.7317 4.29155C10.7317 4.6279 10.7697 4.95546 10.8429 5.2696C7.27609 5.0906 4.11375 3.38203 1.99709 0.78551C1.62765 1.41935 1.41601 2.15656 1.41601 2.94309C1.41601 4.43204 2.17364 5.74563 3.32523 6.5153C2.62179 6.4929 1.95996 6.2999 1.38139 5.97846C1.38098 5.99639 1.38098 6.0143 1.38098 6.0324C1.38098 8.1118 2.86033 9.8463 4.82359 10.2406C4.46349 10.3387 4.08434 10.3912 3.69294 10.3912C3.4164 10.3912 3.14755 10.3642 2.88546 10.3142C3.43161 12.0191 5.01653 13.26 6.89454 13.2945C5.42576 14.4457 3.57527 15.1318 1.56453 15.1318C1.21812 15.1318 0.876511 15.1114 0.540771 15.0717C2.44003 16.2894 4.69591 17 7.1195 17C15.0134 17 19.3302 10.4605 19.3302 4.78918C19.3302 4.60314 19.326 4.41805 19.3177 4.23395C20.1563 3.62886 20.8839 2.87302 21.4592 2.01238Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                </section>
            </div>
        </section>`
let haveMenu = false;

console.log(menuButton);


function openMenu() {
    if (haveMenu === false) {
        shading.style.display = 'block';
        header.insertAdjacentHTML("afterend", menu);
        haveMenu === true;
        const menuButtonClose = document.querySelector('img#closeMenu');
        function closeMenu() {
            shading.style.display = null;
            const menu = document.querySelector('section.burgerMenu');
            menu.remove();
            haveMenu === false;
    }
    menuButtonClose.onclick = closeMenu;
    shading.onclick = closeMenu;
    }
}

menuButton.onclick = openMenu;