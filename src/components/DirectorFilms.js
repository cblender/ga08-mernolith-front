import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./DirectorFilms.css";
import "./UNIVERSAL.css";
import DirectorFilmDisplay from "./DirectorFilmDisplay";
import SelectedDirectorFilm from "./SelectedDirectorFilm";
import AddDirectorFilm from "./AddDirectorFilm";
import { Button } from "@material-ui/core";

function DirectorFilms({ match }) {
  const [films, setFilms] = useState(null);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [addFilm, setAddFilm] = useState(null);
  const [updateFilms, setUpdateFilms] = useState(0);

  useEffect(() => {
    async function fetchFilms() {
      const res = await axios.get(`/directors/${match.params.id}`);
      console.log(res);
      setFilms(res.data.films);
      return res;
    }
    window.scrollTo(0, 0);

    fetchFilms();
  }, [updateFilms]);

  return (
    <div className=" directorFilm__page">
      {selectedFilm && (
        <div className="SelectedDirectorFilm">
          <SelectedDirectorFilm
            setUpdateFilms={setUpdateFilms}
            updateFilms={updateFilms}
            films={films}
            id={selectedFilm}
            match={match}
          />
        </div>
      )}

      <>
        {films && (
          <>
            <Button
              variant="outline-light"
              className="addFilmButton"
              onClick={() => setAddFilm(true)}
            >
              Add Film
            </Button>
            <div className="directorFilm__container">
              {films.length > 0 && (
                <>
                  {films.map((id) => (
                    <button
                      style={{ margin: "3px", border: "none" }}
                      onClick={() => setSelectedFilm(id)}
                    >
                      {console.log(updateFilms)}
                      <DirectorFilmDisplay id={id} />
                    </button>
                  ))}
                </>
              )}
            </div>
          </>
        )}
      </>

      {addFilm && (
        <div className="SelectedDirectorFilm">
          <AddDirectorFilm
            setUpdateFilms={setUpdateFilms}
            updateFilms={updateFilms}
            match={match}
            setAddFilm={setAddFilm}
          />
        </div>
      )}
    </div>
  );
}

export default DirectorFilms;
