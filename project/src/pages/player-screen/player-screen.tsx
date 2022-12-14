import { MutableRefObject, useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getFilm, getIsLoadingStatus } from '../../store/selectors';
import { fetchFilmByID } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';

function Player(): JSX.Element {
  const id = Number(useParams().id);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const film = useAppSelector(getFilm);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const playerRef = useRef() as MutableRefObject<HTMLVideoElement>;
  const [time, setTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const isLoading = useAppSelector(getIsLoadingStatus);

  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    } else {
      if (playerRef?.current) {
        if (playerRef?.current.requestFullscreen) {
          playerRef?.current.requestFullscreen();
        }
      }
    }
  };

  const onClickPlay = () => {
    playerRef.current.play();
    setIsPlaying(true);
  };

  const onClickPause = () => {
    playerRef.current.pause();
    setIsPlaying(false);
  };

  const getVideoTime = (fullTime: number, newTime: number) => {
    const timeLeft = fullTime - newTime;
    return `${ Math.floor(timeLeft / 60) }:${ (`0${ Math.floor(timeLeft % 60) }`).slice(-2) }`;
  };

  useEffect(() => { dispatch(fetchFilmByID(id.toString())); }, [id, dispatch]);

  if(playerRef.current) {
    playerRef.current.ontimeupdate = () => {
      setCurrentTime(playerRef.current?.currentTime);
      setProgressValue((playerRef.current?.currentTime / time) * 100);
    };
  }

  useEffect(() => {
    if(playerRef.current) { setTime(playerRef.current.duration); }
  }, [isPlaying]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="player">
      <video src={ film?.videoLink } className="player__video" poster={ film?.previewImage } id="video"
        onPlay={ () => setIsPlaying(true) } ref={ playerRef } autoPlay
      >
      </video>

      <button type="button" className="player__exit" onClick={ () => { navigate(-1); } }>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={ progressValue } max="100"></progress>
            <div className="player__toggler" style={ { left: `${ progressValue }%` } }>Toggler</div>
          </div>
          <div className="player__time-value">-{ time && currentTime ?
            getVideoTime(time, currentTime) : '0:00:00' }
          </div>
        </div>

        <div className="player__controls-row">
          { isPlaying ? (
            <button type="button" className="player__play" onClick={ onClickPause }>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          ) : (
            <button type="button" className="player__play" onClick={ onClickPlay }>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          )}

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
