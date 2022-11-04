interface Movie {
  title: string,
  duration: number
}

interface TVShow {
  title: string,
  numEpisodes: number,
  episodeDuration: number
}
// We confronted with comparing two objects, it can get tricky. 
// An avenue to consider is what unique properties are in those objects.
function getDuration(media: Movie | TVShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration
  }
  return media.duration
}