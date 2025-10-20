import { useState} from "react";
import { tvShows} from "./shows/data";
import ShowDetails from "./shows/ShowDetails"
import ShowSelection from "./shows/ShowSelection";



/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */



//COMPONENTS

export default function App() {
  const [shows] = useState (tvShows);
  const[selectedShow, setSelectedShow] =useState();

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection
        shows={shows}
        selectedShow={selectedShow}
        setSelectedShow={setSelectedShow} />
        </header>


      <main>
        <ShowDetails key= {selectedShow?.name} show={selectedShow} />
      </main>
    </>
  );
  
}
