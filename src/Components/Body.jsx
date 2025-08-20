import Links from "./Links.jsx"
import Carousel from "./Carousel.jsx"

const Hobbies = [
  {
    "title": "Hockey",
    "source": "/images/Blues.png",
    "body": "I've watched hockey most of my life, so I'm always excited when the season starts in the winter. The Blues are my hometown favorites, but I also enjoy watching the Mavericks play locally!"
  },
  {
    "title": "Racing",
    "source": "/images/Alpine.jpg",
    "body": "I enjoy watching F1 on the weekends, when I'm not being an armchair crew chief for Alpine, I enjoy playing iRacing or F1 online trying to pretend I'd be a better driver if I was behind the wheel"
  }
]
const About = [
  {
    "title": "Titanic Modeling",
    "source": "/images/Python.jpg",
    "body": "Recently I made a model trying to predict who would survive the Titanic disaster. I've finished a basic model that's over on my GitHub to show my process for formatting the data and making my model for anyone who's interested!"
  },
  {
    "title": "My Site!",
    "source": "/images/React.jpg",
    "body": "Right now I'm getting reacquainted with React so that I can make this site better. Once I'm happy with the layout of things, I may start working on thing outside of this website, so watch my GitHub to see what's interesting me."
  }
]

const Body = () => {
  return (
    <>
      <h2 className="p-2">My Interests</h2>
      <Carousel data={Hobbies} />

      <hr className="my-4" />

      <h2 className="p-2">What I'm Working On</h2>
      <Carousel data={About} />

      <hr className="my-4" />

      <h2 className="p-2">Contact Me!</h2>
      <Links />
    </>
  );
};

export default Body;

