const portfolio = [
  {
    id: 1,
    title: "Orbit",
    description:
      "A full stack MVP app where users can find, create, or navigate clubs/social groups or events taking place in digital spaces.",
    thumbnail: "orbit.png",
    technologies: ["Node", "Express", "Handlebars", "MySQL", "Passport"],
    github: "https://nobleburgundy.github.com/orbit/",
    link: "https://wereinorbit.herokuapp.com/",
  },
  {
    id: 2,
    title: "Burger Bonanza",
    thumbnail: "burger_bonanza.png",
    description: "A simple app demonstration the use of a custom built ORM for database interactions.",
    technologies: ["Node", "Express", "Handlebars", "Custom ORM", "MySQL"],
    github: "https://nobleburgundy.github.com/burger-bonanza",
    link: "https://jcg-burger-bonanza.herokuapp.com/",
  },
  {
    id: 3,
    title: "Anemoi",
    thumbnail: "anemoi.png",
    description: "An application that builds a playlist for you based on the current weather in a given city.",
    technologies: ["HTML/CSS", "jQuery", "AJAX", "YouTube API"],
    github: "https://nobleburgundy.github.com/anemoi",
    link: "https://nobleburgundy.github.io/anemoi/",
  },
];

module.exports = portfolio;
