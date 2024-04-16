import reactImg from '../assets/react-core-concepts.png';
const reactDescriptions = ['Fundemental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  // storing the dynamically generated descriptors in a constant variable for use later on if needed
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      {/* the src uses {}with the import rather than the trad "../path/to-image" to get the path instead. It will not work if you include the "" */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* the {} is a way of adding dynamic content to react projects. You do this even for JSON objects to access the details of the object to display */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}