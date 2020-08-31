const projectTemplate = document.getElementById("project-template").innerHTML;
const projectsList = document.getElementById("projects-list")

const projects = [
    {
        url: "https://github.com/voidJuneau/grateful",
        img: "https://raw.githubusercontent.com/voidJuneau/grateful/master/screenshot.png",
        title: "Greatful",
        detail: "A full stack web application with NoSQL DB to help mental problem." +
         "<br>node.js, Express.js, MongoDB, React.js"
    },
    
    {
        url: "https://play.google.com/store/apps/details?id=im.juneau.discretemathformulas",
        img: "https://raw.githubusercontent.com/ljuneaul/DiscreteMathFormulas/master/screenshot.png",
        title: "Discrete Math & Statistics Formulas",
        detail: "The application provides not only all the formulas but also" +
         "thoughtfully curated useful videos which will help your understanding." +
         "<br>Java for android"
    },
    
    {
        url: "https://github.com/ljuneaul/kiosk",
        img: "https://raw.githubusercontent.com/ljuneaul/kiosk/master/screenshot.png",
        title: "Tom Kiosk",
        detail: "Functioning mockup Web page." +
        "<br>JavaScript, Vue.js, HTML, Bootstrap, Sass"
    },
    
    {
        url: "https://github.com/ljuneaul/tiny_little_things/tree/master/CardFlipping",
        img: "https://raw.githubusercontent.com/ljuneaul/tiny_little_things/master/CardFlipping/screenshot.png",
        title: "Card Flipping",
        detail: "JavaFX application"
    },
    
    {
        url: "https://github.com/ljuneaul/tiny_little_things/tree/master/bracket_detective",
        img: "https://raw.githubusercontent.com/ljuneaul/tiny_little_things/master/bracket_detective/screenshot.gif",
        title: "Bracket Detective",
        detail: "Python application for finding syntax error and style error"
    }
]

projects.forEach(project => {
    const html = Mustache.render(projectTemplate, project)
    projectsList.insertAdjacentHTML('beforeend', html)
})