import TypeFilm from '../types/film-type';

function ChooseRatingLevel(rating?: number): string {
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

function SortGenreFilm(filmsList: TypeFilm[], genre: string): TypeFilm[] {
  if (genre === 'All genres') { return filmsList; }
  return filmsList.filter((film) => film.genre === genre);
}

function formatLeadZeros(num: number, maxLength: number) {
  const numString = num.toString();
  const lack = Math.max(0, maxLength - numString.length);
  return '0'.repeat(lack) + numString;
}

function reformatTime(filmDurationMin: number, currentPosSec: number) {
  const z = (n: number) => formatLeadZeros(n ,2);
  const floor = Math.floor;
  const durSec = filmDurationMin * 60;
  const leftSec = durSec - floor(currentPosSec);
  const h = floor(leftSec / 3600);
  const m = floor(leftSec / 60) - h * 60;
  const s = leftSec - m * 60 - h * 3600;
  if (h > 0) {
    return `-${z(h)}:${z(m)}:${z(s)}`;
  }
}

export { ChooseRatingLevel, SortGenreFilm, reformatTime };
