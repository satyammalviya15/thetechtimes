import { useState } from "react";

// ---------------------------------------
// TOP 10 YOUTUBE PLAYLISTS (replace IDs)
// ---------------------------------------
const playlists = [
  { id: 1, title: "Top Tech News", playlistId: "90PWYobVBFg?si=CwZaUyWSJGbpX0Mt" },
  { id: 2, title: "AI & Machine Learning", playlistId: "XUH0dQuYF3U?si=UXX25aRsRUyo4Gz5" },
  { id: 3, title: "Web Development", playlistId: "PLxxxx3" },
  { id: 4, title: "React & Next.js", playlistId: "PLxxxx4" },
  { id: 5, title: "JavaScript Tutorials", playlistId: "PLxxxx5" },
  { id: 6, title: "Node.js Backend", playlistId: "PLxxxx6" },
  { id: 7, title: "Android Development", playlistId: "PLxxxx7" },
  { id: 8, title: "Cyber Security", playlistId: "PLxxxx8" },
  { id: 9, title: "Blockchain & Web3", playlistId: "PLxxxx9" },
  { id: 10, title: "Trending Interviews", playlistId: "PLxxxx10" },
];

export default function TheVideos() {
  const [activePlaylist, setActivePlaylist] = useState(playlists[0]);

  return (
    <div className="container-fluid py-3 bg-light">
      <div className="row">
        {/* LEFT: VIDEO PLAYER */}
        <div className="col-lg-9 mb-3">
          <div className="card shadow-sm">
            <div className="ratio ratio-16x9">
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/90PWYobVBFg?si=CwZaUyWSJGbpX0Mt&amp;controls=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="card-body">
              <h5 className="card-title mb-0">{activePlaylist.title}</h5>
            </div>
          </div>
        </div>

        {/* RIGHT: PLAYLIST PANEL (YouTube style) */}
        <div className="col-lg-3">
          <div className="card shadow-sm">
            <div className="card-header fw-bold">Top 10 Playlists</div>
            <ul className="list-group list-group-flush">
              {playlists.map((pl, index) => (
                <li
                  key={pl.id}
                  className={`list-group-item list-group-item-action d-flex align-items-center ${
                    activePlaylist.id === pl.id ? "active" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setActivePlaylist(pl)}
                >
                  <span className="me-2 fw-bold">{index + 1}</span>
                  <span className="small">{pl.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
