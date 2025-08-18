import Card from "./Card.jsx"
import Links from "./Links.jsx"
import Carousel from "./Carousel.jsx"

const Hobbies = [
  {
    "title": "Hockey",
    "body": "I've watched hockey most of my life, so I'm always excited when the season starts in the winter. The Blues are my hometown favorites, but I also enjoy watching the Mavericks play locally!"
  },
  {
    "title": "F1",
    "body": "Recently I've started to watch Formula 1 racing, and it's been a ton of fun to watch with friends. I don't have any favorite constructors or drivers yet, but I'm slowly picking my favorites."
  }
]
const About = [
  {
    "title": "About Me",
    "body": " Hi! My name is Benton, and this is where I hope to be showing more of my work in the future. For now, I'm stillearning how to format this in a way that I'd like, so expect more soon! I'll try to have timelines for future changes as deadlines become more concrete, for now, enjoy watching the changes."
  },
  {
    "title": "What I'm working on",
    "body": "Right now I'm getting reacquainted with React so that I can make this site better. Once I'm happy with the layout of things, I may start working on thing outside of this website, so watch my GitHub to see what's interesting me."
  }
]

const Body = () => {
  return (
    <>
      <h2 className="p-2">About Me</h2>
      <Carousel data={About} />

      <hr className="my-4" />

      <h2 className="p-2">My Interests</h2>
      <Carousel data={Hobbies} />

      <hr className="my-4" />

      <h2 className="p-2">Contact Me!</h2>
      <Links />
    </>
  );
};

export default Body;

