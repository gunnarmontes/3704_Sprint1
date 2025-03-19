import React from "react";

const FavoriteSong = ({ favorite_song, onDelete }) => {

    return (
        <div className="song-container">
            <p className="song-name">{favorite_song.song_name}</p>
            <p className="song-artist">{favorite_song.artist}</p>
            <button className="delete-button" onClick={() => onDelete(favorite_song.id)}>
                Delete
            </button>
        </div>
    );
}

export default FavoriteSong