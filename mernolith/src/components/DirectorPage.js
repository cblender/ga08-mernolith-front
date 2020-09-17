import React, { useState, useEffect } from "react";
import "./DirectorPage.css";
import axios from "./axios";
import Director from "./Director";

function DirectorPage() {
  const [directors, setDirectors] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get(`/directors`);
      console.log(res);
      setDirectors(res.data);
      return res;
    }
    fetchPosts();
  }, []);

  return (
    <div className="directors__container">
      {directors && (
        <>
          {directors.map((director) => (
            <>
              <Director img={director.image} />
            </>
          ))}
        </>
      )}
    </div>
  );
}

export default DirectorPage;
