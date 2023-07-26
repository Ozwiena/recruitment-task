const horrorMovies = [
    {
      id: 1,
      title: 'The Exorcist',
      director: 'William Friedkin',
      year: 1973,
      rating: 8
    },
    {
      id: 2,
      title: 'Hereditary',
      director: 'Ari Aster',
      year: 2018,
      rating: 8
    },
    {
      id: 3,
      title: 'Scream',
      director: 'Wes Craven',
      year: 1996,
      rating: 6
    },
    {
      id: 4,
      title: 'Skinamarink',
      director: 'Kyle Edward Ball',
      year: 2022,
      rating: 7
    },
    {
      id: 5,
      title: 'Halloween',
      director: 'John Carpenter',
      year: 1978,
      rating: 5
    },
    {
      id: 6,
      title: 'The Ring',
      director: 'Gore Verbinski',
      year: 2002,
      rating: 2
    },
    {
      id: 7,
      title: 'It Follows',
      director: 'David Robert Mitchell',
      year: 2014,
      rating: 7
    }
  ]
  
  export const getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() <= 0.8) {
          resolve(horrorMovies)
        } else {
          reject('Error ocurred')
        }
      }, Math.random() * 5 * 1000)
    })
  }