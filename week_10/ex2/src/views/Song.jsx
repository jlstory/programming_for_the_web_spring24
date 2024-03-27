/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";

export function Song ({data}) {
    const {slug} = useParams();
    console.log("slug", slug);
    const selectedSong = data.find((song) => song.slug === slug);
    console.log(selectedSong)
    return (
    <>
        <nav>
            <Link to="/">Go Back Home</Link>
        </nav>

        <h1>{selectedSong.title}</h1>
        <img src={selectedSong.cover} alt={selectedSong.title} />
        <p>Artist: {selectedSong.artist}</p>
        <p>Chart Ranking: {selectedSong.rank}</p>
    </>
    )
}
