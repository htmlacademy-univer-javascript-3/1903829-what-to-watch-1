import TypeFilm from '../types/film-type';

function chooseRatingLevel(rating?: number): string {
  if (rating !== undefined) {
    if (rating >= 0 && rating < 3) {
      return 'Bad';
    } if (rating >= 3 && rating < 5) {
      return 'Normal';
    } if (rating >= 5 && rating < 8) {
      return 'Good';
    } if (rating >= 8 && rating < 10) {
      return 'Very good';
    } if (rating === 10) {
      return 'Awesome';
    } return 'None';
  }
  return '';
}

function sortGenreFilm(filmsList: TypeFilm[], genre: string): TypeFilm[] {
  if (genre === 'All genres') { return filmsList; }
  return filmsList.filter((film) => film.genre === genre);
}

function formatLeadZeros(num: number, maxLength: number) {
  const numString = num.toString();
  const lack = Math.max(0, maxLength - numString.length);
  return '0'.repeat(lack) + numString;
}

function reformatTime(filmDurationMin: number, currentPosSec: number) {
  const TIME = (n: number) => formatLeadZeros(n ,2);
  const floor = Math.floor;
  const durSec = filmDurationMin * 60;
  const leftSec = durSec - floor(currentPosSec);
  const hours = floor(leftSec / 3600);
  const minutes = floor(leftSec / 60) - hours * 60;
  const seconds = leftSec - minutes * 60 - hours * 3600;
  if (hours > 0) {
    return `-${ TIME(hours) }:${ TIME(minutes) }:${ TIME(seconds) }`;
  }
}

function convertTime(timeInMinutes: number): string {
  const hours = parseInt(String((timeInMinutes) / 60), 10);
  const minutes = timeInMinutes - hours * 60;
  const parseHours = `${ hours.toString() }h`;
  const parseMinutes = `${ minutes.toString().padStart(2,'0') }m`;

  if (hours === 0) { return parseMinutes; }
  return `${ parseHours } ${ parseMinutes }`;
}

const getAllGenres = (filmsList: TypeFilm[]) => (
  [...new Set(['All genres', ...filmsList.map((film) => film.genre)])]
);

const deleteFilm = (films: TypeFilm[], id: number | undefined) => {
  const answer = films.filter((film) => (
    film.id !== id
  ));

  return answer;
};

function convertTimeReview(time: string): string {
  const date = new Date(time);

  return (
    `${date.toLocaleString(
      'eng', { month: 'long' }) } ${ date.getDate() }, ${ date.getFullYear() }`
  );
}

export { chooseRatingLevel, sortGenreFilm, reformatTime, convertTime,
  getAllGenres, deleteFilm, convertTimeReview };
