//One way of creating th function to get the values for the component
// function CoreConcepts(props) {
//   return ( 
//   <li>
//     <img src={props.image} alt={props.title} />
//     <h3>{props.title}</h3>
//     <p>{props.description}</p>
//   </li>
//   );
// }


//Another way using object destructuring to copy the data (JSON or whatever) to use in the component
// by naming the incoming dataset in {val1, val2, val3...} and then using those directly in the func to have the 
//values displayed properly
export default function CoreConcepts({image, title, description}) {
    return ( 
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
    );
  }