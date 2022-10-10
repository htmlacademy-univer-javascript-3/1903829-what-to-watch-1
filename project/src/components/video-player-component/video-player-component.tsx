import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  src: string,
  srcImage: string,
}

function VideoPlayerComponent({ src, srcImage }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(()=> {
    if (videoRef.current === null) {
      return;
    }

    const delay: NodeJS.Timeout = setTimeout( () => videoRef.current?.play(), 1000 );

    return () => clearTimeout(delay);
  } );

  return (
    <video ref={ videoRef } poster={ srcImage } width="280" height="175" muted>
      <source src={ src } type="video/mp4" />
    </video>
  );
}

export default VideoPlayerComponent;
