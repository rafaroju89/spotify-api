export const getAll = async (searchForm) => {
  const { artist, album, track } = searchForm;
    if (artist.trim() !== '') {
     return  await getArtistData(artist)
    } else if (album !== '') {
      return await getAlbumData(album)
    } else if (track !== '') {
      return await getATrackData(track)
    }

}

/* In this case I use the fetch method to call the the backend API, because It is a browser native method and all my mehthods
   are GET methods and it will be easy to use.
   Axios has some adventages but I used fetch because I used axios in the backend.
*/

/*Method that get all the Artist Data */
const getArtistData = async (artist) => {
  try {
    const response = await fetch(`http://localhost:8081/v1/artists/${artist}`)
    const artists = await response.json();
    return artists;
  } catch (error) {
    throw new Error(error)
  }
}

/*Method that get all the Album Data */
const getAlbumData = async (album) => {
  try {
    const response = await fetch(`http://localhost:8081/v1/albums/${album}`)
    const albums = await response.json();
    return albums;
  } catch (error) {
    throw new Error(error)
  }
}

/*Method that get all the Track Data */
const getATrackData = async (track) => {
  try {
    const response = await fetch(`http://localhost:8081/v1/tracks/${track}`)
    const tracks = await response.json();
    return tracks;
  } catch (error) {
    throw new Error(error)
  }
}

/*Method that get details of the Artist*/
export const getArtistDetails = async (id) => {

  const response = await fetch(`http://localhost:8081/v1/artists/details/${id}`)
  const artistDetails = await response.json();
  return artistDetails;
}

/*Method that get details of the Album */
export const getAlbumDetails = async (id) => {
  const response = await fetch(`http://localhost:8081/v1/albums/details/${id}`)
  const albumDetails = await response.json();
  return albumDetails;
}