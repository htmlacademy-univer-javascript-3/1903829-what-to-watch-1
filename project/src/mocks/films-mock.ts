import TypeFilm from '../types/film-type';

const filmsList: TypeFilm[] = [
  {
    id: 1,
    name: 'We need to talk about Kevin',
    posterImage: 'https://10.react.pages.academy/static/film/poster/We_need_to_talk_about_Kevin.jpg',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/We_need_to_talk_about_Kevin.jpg',
    backgroundColor: '#0e58e4',
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima facilis enim aspernatur doloremque quos veritatis blanditiis deleniti explicabo ullam fuga animi, veniam aperiam illo dolor autem iste quaerat doloribus fugiat?',
    rating: 7.2,
    scoresCount: 453,
    director: 'Lynne Ramsay',
    starring: [
      'Tilda Swinton', 'John C. Reilly', 'Ezra Miller'
    ],
    runTime: 112,
    genre: 'Thriller',
    released: 2011,
    isFavorite: false,
  },
  {
    id: 2,
    name: 'What We Do in the Shadows',
    posterImage: 'https://10.react.pages.academy/static/film/poster/What-We-Do-in-the-Shadows.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/what-we-do-in-the-shadows.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/What-We-Do-in-the-Shadows.jpg',
    backgroundColor: '#386c8b',
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima facilis enim aspernatur doloremque quos veritatis blanditiis deleniti explicabo ullam fuga animi, veniam aperiam illo dolor autem iste quaerat doloribus fugiat?',
    rating: 9.3,
    scoresCount: 432,
    director: 'Jemaine Clement, Taika Waititi',
    starring: [
      'Taika Waititi', 'Jemaine Clement', 'Kayvan Novak', 'Matt Berry', 'Natasia Demetriou'
    ],
    runTime: 162,
    genre: 'Comedy',
    released: 2019,
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Macbeth',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Macbeth.jpg',
    previewImage: 'img/macbeth.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Macbeth.jpg',
    backgroundColor: '#e5467b',
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima facilis enim aspernatur doloremque quos veritatis blanditiis deleniti explicabo ullam fuga animi, veniam aperiam illo dolor autem iste quaerat doloribus fugiat?',
    rating: 5.6,
    scoresCount: 34223,
    director: 'Joel Coen',
    starring: [
      'Denzel Washington', 'Frances McDormand', 'Bertie Carvel', 'Alex Hassell', 'Corey Hawkins'
    ],
    runTime: 105,
    genre: 'Drama',
    released: 2021,
    isFavorite: false,
  },
  {
    id: 4,
    name: 'Dardjeeling limited',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Dardjeeling_Limited.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/dardjeeling_limited.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Dardjeeling_Limited.jpg',
    backgroundColor: '#f7f115',
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima facilis enim aspernatur doloremque quos veritatis blanditiis deleniti explicabo ullam fuga animi, veniam aperiam illo dolor autem iste quaerat doloribus fugiat?',
    rating: 7.9,
    scoresCount: 12,
    director: '	Wes Anderson',
    starring: [
      'Owen Wilson', 'Adrien Brody', 'Jason Schwartzman', 'Anjelica Huston'
    ],
    runTime: 91,
    genre: 'Drama',
    released: 2007,
    isFavorite: false,
  },
  {
    id: 5,
    name: 'Johnny English',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Johnny_English.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/johnny-english.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Johnny_English.jpg',
    backgroundColor: '#D909C3',
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima facilis enim aspernatur doloremque quos veritatis blanditiis deleniti explicabo ullam fuga animi, veniam aperiam illo dolor autem iste quaerat doloribus fugiat?',
    rating: 3.4,
    scoresCount: 4567,
    director: 'Peter Howitt',
    starring: [
      'Rowan Atkinson', 'Natalie Imbruglia', 'Ben Miller', 'John Malkovich'
    ],
    runTime: 88,
    genre: 'Comedy',
    released: 2003,
    isFavorite: false,
  },
  {
    id: 6,
    name: 'The revenant',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Revenant.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/revenant.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Revenant.jpg',
    backgroundColor: '#430AF8',
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima facilis enim aspernatur doloremque quos veritatis blanditiis deleniti explicabo ullam fuga animi, veniam aperiam illo dolor autem iste quaerat doloribus fugiat?',
    rating: 6.7,
    scoresCount: 76,
    director: 'Alejandro G. Iñárritu',
    starring: [
      'Leonardo DiCaprio', 'Tom Hardy', 'Domhnall Gleeson', 'Will Poulter'
    ],
    runTime: 156,
    genre: 'Drama',
    released: 2015,
    isFavorite: false,
  },
  {
    id: 7,
    name: 'Snatch',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Snatch.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/snatch.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Snatch.jpg',
    backgroundColor: '#D950C3',
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima facilis enim aspernatur doloremque quos veritatis blanditiis deleniti explicabo ullam fuga animi, veniam aperiam illo dolor autem iste quaerat doloribus fugiat?',
    rating: 3.5,
    scoresCount: 346,
    director: '	Guy Ritchie',
    starring: [
      'Benicio del Toro', 'Dennis Farina', 'Vinnie Jones', 'Brad Pitt', 'Rade Šerbedžija', 'Jason Statham'
    ],
    runTime: 102,
    genre: 'Crime',
    released: 2000,
    isFavorite: false,
  },
  {
    id: 8,
    name: 'War of the worlds',
    posterImage: 'https://10.react.pages.academy/static/film/poster/War_of_the_Worlds.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/war-of-the-worlds.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/War_of_the_Worlds.jpg',
    backgroundColor: '#320AF8',
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima facilis enim aspernatur doloremque quos veritatis blanditiis deleniti explicabo ullam fuga animi, veniam aperiam illo dolor autem iste quaerat doloribus fugiat?',
    rating: 7.6,
    scoresCount: 34,
    director: 'Steven Spielberg',
    starring: [
      'Tom Cruise', 'Dakota Fanning', 'Miranda Otto', 'Tim Robbins'
    ],
    runTime: 116,
    genre: 'Thriller',
    released: 2005,
    isFavorite: false,
  },
  {
    id: 9,
    name: 'Pulp Fiction',
    posterImage: 'https://10.react.pages.academy/static/film/poster/Pulp_Fiction.jpg',
    previewImage: 'https://10.react.pages.academy/static/film/preview/pulp-fiction.jpg',
    backgroundImage: 'https://10.react.pages.academy/static/film/background/Pulp_Fiction.jpg',
    backgroundColor: '#795433',
    videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    previewVideoLink: 'https://10.react.pages.academy/static/film/video/traffic.mp4',
    description: 'The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    rating: 1.5,
    scoresCount: 1635992,
    director: 'Quentin Tarantino',
    starring: [
      'John Travolta', 'Uma Thurman', 'Samuel L. Jackson'
    ],
    runTime: 153,
    genre: 'Crime',
    released: 1994,
    isFavorite: false,
  },
];

export default filmsList;
