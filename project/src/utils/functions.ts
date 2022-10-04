export function ChooseRatingLevel(rating: number | undefined): string {
  if (rating !== undefined) {
    if (rating >= 0 && rating < 4) {
      return 'Bad';
    }
    if (rating >= 4 && rating < 6) {
      return 'Normal';
    }
    if (rating >= 6 && rating < 8) {
      return 'Good';
    }
    if (rating >= 8 && rating < 10) {
      return 'Very good';
    }
    if (rating === 10) {
      return 'Awesome';
    }
    return 'None';
  }
  return '';
}
