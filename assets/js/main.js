/*******
I)   MY WORKS SLIDER WITH OWL CAROUSEL
II)  DISPLAY/HIDE WORK DIV WITH CONTENT DEPENDING ON CLICKED WORK
*******/
(function($) {
    "use strict"
    jQuery(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    });
})(jQuery);

// DISPLAY/HIDE A WORK
const displayWork = document.querySelector('.display-work');
const historyOfRap = document.querySelector('.display-history-of-rap');
const hugoZlotowskiPortfolio = document.querySelector('.display-hugo-zlotowski-portfolio');
const escapeLife = document.querySelector('.display-escape-life');
const mattePainting = document.querySelector('.display-matte-painting');
const portrait = document.querySelector('.display-portrait');

const closeIcon = document.querySelector('.close');

const workTitle = document.querySelector('.work-title');
const workDescription = document.querySelector('.work-description');
const workFirstImage = document.querySelector('.work-first-image');
const workSecondImage = document.querySelector('.work-second-image');
const workThirdImage = document.querySelector('.work-third-image');

historyOfRap.addEventListener('click', () => {
    displayWork.style.display = "block";
    workTitle.textContent = "History Of Rap";
    workDescription.textContent = "History Of Rap is an immersive website, created during a school project at HETIC, that retranscribe the history of rap music. The whole project, from theme selection to coding has been done in less than five days. This website coded only with HTML, CSS and JS makes you live and feel rap's emotions. In this project, I was fully focused on coding";
    workFirstImage.src = "assets/images/history-of-rap/history-of-rap.png";
    workFirstImage.alt = "History of rap website's cover";
    workSecondImage.src = "assets/images/history-of-rap/landing-history-of-rap.png";
    workSecondImage.alt = "Landing page of History Of Rap website";
    workThirdImage.src = "assets/images/history-of-rap/about-history-of-rap.png";
    workThirdImage.alt = "About the project History Of Rap";
});

hugoZlotowskiPortfolio.addEventListener('click', () => {
    displayWork.style.display = "block";
    workTitle.textContent = "Hugo Zlotowski portfolio";
    workDescription.textContent = "Official portfolio of Hugo Zlotowski, a french artist. During a school project at HETIC, we created, as a team of 4 students, Hugo Zlotowski's portfolio : fan of photography, videography and most globally art, the website we created for him has a refine and clean design based on simplicity. Knowing that he shots in black and white, we followed his style. I took place mostly as a developper but also as a designer";
    workFirstImage.src = "assets/images/hugo-zlotowski-portfolio/hugo-zlotowski.png";
    workFirstImage.alt = "Hugo Zlotowski cover";
    workSecondImage.src = "assets/images/hugo-zlotowski-portfolio/landing-portfolio-hugo-zlotowski.png";
    workSecondImage.alt = "Landing page of Hugo Zlotowski portfolio";
    workThirdImage.src = "assets/images/hugo-zlotowski-portfolio/screenshot-portfolio-hugo-zlotowski.png";
    workThirdImage.alt = "Screenshot from Hugo Zlotowski's portfolio";
});

escapeLife.addEventListener('click', () => {
    displayWork.style.display = "block";
    workTitle.textContent = "Escape Life";
    workDescription.textContent = "Escape Life is a full JavaScrip 2D game. As HETIC students, we had created this website during a game coding week at school. Starting from the game topic, we created a simple 2D game where the target is to escape from work. Indeed you leave your office and will face barriers but you have your own assets. To improve the gameplay, you can play with a friend who will merrily put the obstacles! I worked on this project as a designer and a developper.";
    workFirstImage.src = "assets/images/escape-life/escape-life.png";
    workFirstImage.alt = "Escape Life game's cover";
    workSecondImage.src = "assets/images/escape-life/screenshot-escape-life.png";
    workSecondImage.alt = "Screenshot of home screen in Escape Life";
    workThirdImage.src = "assets/images/escape-life/screenshot-in-game-escape-life.png";
    workThirdImage.alt = "Screenshot while gaming Escape Life";
});

mattePainting.addEventListener('click', () => {
    displayWork.style.display = "block";
    workTitle.textContent = "Matte Painting";
    workDescription.textContent = "My apocalyptic matte painting";
    workFirstImage.src = "assets/images/matte-painting/matte-painting.png";
    workFirstImage.alt = "Apocalyptic matte painting";
    workSecondImage.src = "assets/images/matte-painting/matte-painting.png";
    workSecondImage.alt = "Apocalyptic matte painting";
    workThirdImage.src = "assets/images/matte-painting/matte-painting.png";
    workThirdImage.alt = "Apocalyptic matte painting";
});

portrait.addEventListener('click', () => {
    displayWork.style.display = "block";
    workTitle.textContent = "My portrait";
    workDescription.textContent = "My Roy Lichtenstein style like portrait";
    workFirstImage.src = "assets/images/portrait/portrait-emre.png";
    workFirstImage.alt = "Emre Palandoken Roy Lichtenstein style protrait";
    workSecondImage.src = "assets/images/portrait/portrait-emre.png";
    workSecondImage.alt = "Emre Palandoken Roy Lichtenstein style protrait";
    workThirdImage.src = "assets/images/portrait/portrait-emre.png";
    workThirdImage.alt = "Emre Palandoken Roy Lichtenstein style protrait";
});

closeIcon.addEventListener('click', () => {
    displayWork.style.display = "none";
});