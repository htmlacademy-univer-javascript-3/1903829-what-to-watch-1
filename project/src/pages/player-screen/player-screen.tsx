import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getFilm } from '../../store/list-data/selectors';
import { useRef, useState } from 'react';
import { reformatTime } from '../../utils/functions';
import { SyntheticEvent } from 'react';

function Player(): JSX.Element {
  const navigate = useNavigate();
  const film = useAppSelector(getFilm);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const playerRef = useRef<HTMLVideoElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const videoRef: React.RefObject<any> = useRef();
  const playerMainRef = useRef<HTMLDivElement | null>(null);
  const [timeCode, setTimeCode] = useState(reformatTime(film?.runTime || 0, 0));

  const updateTime = (evt: SyntheticEvent<HTMLVideoElement>) => {
    if (isPlaying) {
      const curTimeSec = evt.currentTarget.currentTime;
      setTimeCode(reformatTime(film?.runTime || 0, curTimeSec));
      setProgressValue(curTimeSec / ((film?.runTime || 0) * 60));
    }
  };

  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    } else {
      if (playerMainRef?.current) {
        if (playerMainRef?.current.requestFullscreen) {
          playerMainRef?.current.requestFullscreen();
        }
      }
    }
  };

  const onClickPlay = () => {
    if (isPlaying) {
      playerRef.current?.pause();
    } else {
      playerRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player" ref={ playerMainRef }>
      <video src={ film?.videoLink } className="player__video" poster={ film?.posterImage }
        onTimeUpdate={ updateTime } ref={ playerRef }
      >
      </video>

      <button type="button" className="player__exit" onClick={ () => { navigate(-1); } }>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={ progressValue } max="100"></progress>
            <div className="player__toggler" style={ { left: `${ progressValue }%` } }>Toggler</div>
          </div>
          <div className="player__time-value">{ timeCode }</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={ onClickPlay }>
            <svg viewBox="0 0 19 19" width="19" height="19">
              { !isPlaying && <use xlinkHref="#play-s"></use> }
              { isPlaying && <use xlinkHref="#pause"></use> }
            </svg>
            <span>Play</span>
          </button>

          <div className="player__name">{ film?.name }</div>

          <button type="button" className="player__full-screen" onClick={ handleFullScreen }>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
