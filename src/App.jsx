import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
    return <p>Select an episode to learn more.</p>;
  }
  
    return (
      <section>
        <h2>{selectedEpisode.title} #{selectedEpisode.id}</h2>
        <p>{selectedEpisode.description}</p>
      </section>
    );
  }

  function EpisodeList() {
    return (
       <ul>
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
    
    );
  }

    return (
      <>
        <h1>Dark Echoes</h1>  
        <EpisodeList />
        <EpisodeDetails />
      </>
    );
}
