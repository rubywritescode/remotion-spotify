import { Video, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion"
import { StyledFill } from "../generics/StyledFill"
import { videoStyle, bgGradientStyle } from "../../styles/style"
import video from "./tomorrow-never-comes.mp4"


export const TomorrowNeverComes = ({ gradient, videoStart, videoEnd }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps, width, height } = useVideoConfig();
  
  const gradientSpring = spring({
    frame: frame,
    fps: fps,
    config: {
      mass: 40000,
      damping: 200,
      stiffness: 200,
    }
  })

  const rotateSpring = spring({
    frame: frame,
    fps: fps,
    config: {
      mass: 20000,
      damping: 200,
      stiffness: 200,
    }
  })

  const gradientSlideX = interpolate(gradientSpring, [0, 1], [0, -width * 3.5], { extrapolateRight: "clamp", })
  const gradientSlideY = interpolate(gradientSpring, [0, 1], [0, -height * 3.5], { extrapolateRight: "clamp", })
  const gradientRotate = interpolate(rotateSpring, [0, 1], [0, -15])

  return (
    <>
      <StyledFill bg={gradient} style={{ 
        bgGradientStyle, 
        height: height * 5,
        width: width * 5,
        zIndex: 2,
        transform: `translateX(${gradientSlideX}px) translateY(${gradientSlideY}px) rotate(${gradientRotate}deg)` }}
      />
      <Video src={video} startFrom={videoStart} endAt={videoEnd} style={videoStyle} />
    </>
  )
}