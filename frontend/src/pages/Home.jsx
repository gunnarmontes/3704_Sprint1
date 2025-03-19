import { useState, useEffect } from "react";
import api from "../api";
import FavoriteSong from "../components/FavoriteSong";
import LogoutButton from "../components/LogoutButton";

const Home = () => {


    const [favSongs, setFavSongs] = useState([]);
    const [artist, setArtist] = useState("");
    const [songName, setSongName] = useState("");
    const [username, setUsername] = useState("");

    

    

    useEffect(() => {
        let isMounted = true;
        getSongs().then(() => {
            if (isMounted) console.log("Songs loaded");
        });

        return () => {
            isMounted = false;
        };
    }, []);

    const getSongs = async () => {
        try {
            const res = await api.get("/api/favsongs/");
            setFavSongs(res.data.favSongs);   
            setUsername(res.data.user.username);
            console.log("User:", res.data.user);
        } catch (error) {
            console.error("Fetch Songs Error:", error.response?.data || error.message);
            alert("Error fetching songs.");
        }
    };

    const deleteSong = async (id) => {
        try {
            const res = await api.delete(`/api/favsongs/delete/${id}/`);
            if (res.status === 204) {
                alert("Song deleted!");
                await getSongs();
            } else {
                alert("Failed to delete song.");
            }
        } catch (error) {
            console.error("Delete Error:", error.response?.data || error.message);
            alert("Error deleting song.");
        }
    };

    const addSong = async (e) => {
        e.preventDefault();
        
        if (!artist.trim() || !songName.trim()) {
            alert("Please fill in both fields.");
            return;
        }

        try {
            const res = await api.post("/api/favsongs/", { artist, song_name: songName });
            if (res.status === 201) {
                alert("Song created!");
                await getSongs();
                setArtist("");   
                setSongName(""); 
            } else {
                alert("Failed to add song.");
            }
        } catch (error) {
            console.error("Add Song Error:", error.response?.data || error.message);
            alert("Error adding song.");
        }
    };

    return (
        <div>
            <h1>Welcome {username}</h1>
            <h2>Your Favorite Songs</h2>
            {favSongs.length > 0 ? (
                favSongs.map((song) => (
                    <FavoriteSong favorite_song={song} onDelete={deleteSong} key={song.id} />
                ))
            ) : (
                <p>No favorite songs found.</p>
            )}

            <h2>Add a new favorite song</h2>
            <form onSubmit={addSong}>
                <label htmlFor="songName">Song name:</label>
                <br />
                <input
                    type="text"
                    id="songName"
                    name="songName"
                    required
                    onChange={(e) => setSongName(e.target.value)}
                    value={songName}
                />
                <br />
                <label htmlFor="artist">Artist:</label>
                <br />
                <input
                    type="text"
                    id="artist"
                    name="artist"
                    required
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <br/>
            <LogoutButton />
            
        </div>
    );
};

export default Home;
