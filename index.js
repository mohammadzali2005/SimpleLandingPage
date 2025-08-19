// changing the theme of the page 
// for defining theme for now
let isThemeDark = false;

// elements that will change their style when user changes the theme
willChangeElements = {
    body: document.querySelector('body'),
    logo: document.querySelector('.logo'),
    navItems: document.querySelectorAll('.nav-item'),
    moon: [document.querySelector('.moon'), document.querySelector('.mobile-moon')],
    sun: [document.querySelector('.sun'), document.querySelector('.mobile-sun')],
    hook: document.querySelector('.hook'),
    title: document.querySelector('.title'),
    info: document.querySelector('.info'),
    liveDemoButton: document.querySelector('.live-demo-button'),
    benefit: document.querySelectorAll('.benefit'),
    theme: document.querySelector('.theme'),
    mobileTheme: document.querySelector('.mobile-theme'),
}

// a function for changing the element's styles 
const changeTheme = () => {
    if (!isThemeDark){                                                          // deciding wheter the theme is bright or not
        willChangeElements.body.style.backgroundColor = '#223344';
        willChangeElements.logo.src = './logo-dark.svg';
        willChangeElements.navItems.forEach((navItem) => {
            navItem.style.color = '#F2F9FE';
        });
        willChangeElements.moon[0].style.backgroundColor = '#223344';
        willChangeElements.moon[1].style.backgroundColor = '#223344';
        willChangeElements.theme.style.backgroundColor = '#F2F9FE';
        willChangeElements.mobileTheme.style.backgroundColor = '#F2F9FE';
        willChangeElements.hook.style.color = '#F2F9FE';
        willChangeElements.title.style.color = '#F2F9FE';
        willChangeElements.info.style.color = '#F2F9FE';
        willChangeElements.liveDemoButton.style.color = '#F2F9FE';
        willChangeElements.liveDemoButton.style.backgroundColor = '#223344';
        willChangeElements.benefit.forEach((bene) => {
            bene.style.color = '#F2F9FE';
        });

        isThemeDark = true;
    } else if (isThemeDark){                                                    // deciding wheter the theme is dark or not
        willChangeElements.body.style.backgroundColor = '#F2F9FE';
        willChangeElements.logo.src = './logo-light.svg';
        willChangeElements.navItems.forEach((navItem) => {
            navItem.style.color = '#223344';
        });
        willChangeElements.sun[1].style.backgroundColor = '#F2F9FE';
        willChangeElements.theme.style.backgroundColor = '#223344';
        willChangeElements.mobileTheme.style.backgroundColor = '#223344';
        willChangeElements.hook.style.color = '#223344';
        willChangeElements.title.style.color = '#223344';
        willChangeElements.info.style.color = '#223344';
        willChangeElements.liveDemoButton.style.color = '#223344';
        willChangeElements.liveDemoButton.style.backgroundColor = '#F2F9FE';
        willChangeElements.benefit.forEach((bene) => {
            bene.style.color = '#223344';
        });

        isThemeDark = false;
    }
}

// changing the theme when user clicks one of these elements by calling the previous function
willChangeElements.moon.forEach(m => m.addEventListener('click', changeTheme));
willChangeElements.sun.forEach(s => s.addEventListener('click', changeTheme));

// opening and closing the navbar in mobile 
let isNavbarOpen = false;
const navbarToggle = document.querySelector('.navbar-toggle-container');
const navbarCloseButton = document.querySelector('.close-button');

// opening the navbar of the phone 
navbarToggle.addEventListener('click', () => {
    if (!isNavbarOpen){
        document.querySelector('.mobile-navbar-container').style.display = 'flex';
        isNavbarOpen = true;
    };
});
// closing the navbar of the phone
navbarCloseButton.addEventListener('click', () => {
    if (isNavbarOpen){
        document.querySelector('.mobile-navbar-container').style.display = 'none';
        isNavbarOpen = false;
    }
});