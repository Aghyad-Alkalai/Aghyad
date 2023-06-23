// Hier maak ik een functie om naar de eerste section te gaan en dat is About me

const aboutmeButton = document.querySelector("div.about-link");

function goToSection(){
    const element = document.querySelector("div.section");
    element.scrollIntoView({behavior: "smooth", block: "start",});

}

aboutmeButton.addEventListener("click", goToSection);



// Hier maak ik een functie om naar de eerste section te gaan en dat is Skills

const skillsButton = document.querySelector("div.skills-link");

function goToSection2(){
    const element2 = document.querySelector("div.section2");
    element2.scrollIntoView({behavior: "smooth", block: "start",});

}

skillsButton.addEventListener("click", goToSection2);



// Hier maak ik een functie om naar de eerste section te gaan en dat is Projecten


const projectsButton = document.querySelector("div.projects-link");

function goToSection3(){
    const element3 = document.querySelector("div.section3");
    element3.scrollIntoView({behavior: "smooth", block: "start",});

}

projectsButton.addEventListener("click", goToSection3);



// Hier maak ik een functie om naar de eerste section te gaan en dat is Contact

const contactButton = document.querySelector("div.contact-link");

function goToSection4(){
    const element4 = document.querySelector("div.section4");
    element4.scrollIntoView({behavior: "smooth", block: "start",});

}

contactButton.addEventListener("click", goToSection4);
