import { Video, useVideoConfig } from "remotion";
import styled from "styled-components";
import video from "../../TomorrowNeverComes/tomorrow-never-comes.mp4"


const StyledVideo = styled(Video)`
  height: ${props => props.height};
  position: absolute;
  top: 0;
  transform: translateX(calc(-50% + (1080px / 2)));
`

export const BackgroundVideo = (startFrom, endAt) => {
  const { height } = useVideoConfig();

  return (
    <StyledVideo src={video} height={`${height}px`} startFrom={4050} endAt={4500} />
  )
}