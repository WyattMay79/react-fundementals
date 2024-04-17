import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";



export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* Shortcut to display component data thats stored in an array, that might change in the future */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}

        {/* 
            The code below does the same thing as the above code, except it hard codes the values in the data
            so if the amount of the data changes it could *break* the program and not display correctly or not 
            display all of the code thats actually in the array unless you hard code it in like below 
            */}
        {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}
        {/* 
            Shortcut for cutting down time on writting out the code for the component 
            this method is still hard coded and not dynamic, meaning if the amount of data changes +/- 
            it will only display what is coded below, or throw an error if the hard coded data  
            no longer exists
            */}
        {/* <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
      </ul>

    </section>
  );
};