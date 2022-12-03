import { convertTime } from '../../utils/functions';

type AddDetailsProps = {
  director?: string;
  genre?: string;
  released?: number;
  runTime?: number;
}

function AddDetails({ director, genre, released, runTime }: AddDetailsProps): JSX.Element {
  if (runTime !== undefined) {
    return (
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{ director }</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              Tom Cruise
              Dakota Fanning
              Tim Robbins
            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{ convertTime(runTime) }</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{ genre }</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{ released }</span>
          </p>
        </div>
      </div>
    );
  }

  return (<div />);
}

export default AddDetails;
