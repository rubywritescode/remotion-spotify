import { Composition } from 'remotion';
import { TomorrowNeverComes } from './TomorrowNeverComes/TomorrowNeverComes';
import { getSecondsInFrames } from './utils/utils'

import { bgGradientColors } from './utils/constants';

export const RemotionVideo = () => {
	const fps = 30;
	const tomorrowNeverComesConfig = {
		videoStartInSeconds: 135 * fps,
		videoEndInSeconds: 150 * fps,
	}

	const videoStart = 4054;
	const videoEnd = 4740;

	return (
		<>
			<Composition
				id="TomorrowNeverComes"
				component={TomorrowNeverComes}
				durationInFrames={685}
				fps={fps}
				height={1920}
				width={1080}
				defaultProps={{
					gradient: bgGradientColors,
					videoStart: videoStart,
					videoEnd: videoEnd,
				}}
			/>
		</>
	);
};
