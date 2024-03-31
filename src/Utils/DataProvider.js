
const headers = {
    "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGNmNzBjMTk2MjVhYmY2MTBhNGRlZWNlODk3NWZmYiIsInN1YiI6IjY2MDYyOWJlMmZhZjRkMDE3ZGM2YWYzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mSvkwjSyGSxtpBh1bxDNS7RhVAhFOfCps7Zi53NExx8`
}
export const DataProvider = {
    getNowPlayingMovies: async (page = 1) => {
        try {
            const response = await fetch (`https://api.themoviedb.org/3/movie/now_playing?language=es&page=${page}`, {headers: headers})
            const movies = await response.text()
            return JSON.parse(movies)

        } catch (error) {
            alert("hubo un error al obtener las peliculas")
            console.log(error)

        }     
    },


    getPopularMovies: async (page=1) => {
        try {
            const response = await fetch (`https://api.themoviedb.org/3/movie/popular?language=es&page=${page}`, {headers: headers})
            const movies = await response.text()
            return JSON.parse(movies)

        } catch (error) {
            alert("hubo un error al obtener las peliculas")
            console.log(error)

        } 

    }
}