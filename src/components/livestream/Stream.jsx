import React, {useEffect} from 'react';

// Libraries
import styled from 'styled-components';

// Components
import LiveStreamDetails from './TalkDetails'

const Box1 = styled.div`
	grid-column: 1/2;
	border-radius: 8px;
	overflow: hidden;

	@media (max-width: 700px) {
		grid-column: 1/3;
	}
`

const Stream = ({youtubeLink, speaker}) => {
	useEffect(() => {
		const iFrame = document.getElementById('idIframe');
		if (iFrame) {
			const {width} = iFrame.getBoundingClientRect();
			iFrame.height='';
			iFrame.height=`${(9*width) / 16}px`;
		}
	}, [])

	return (
		<Box1>
			<iframe
				width='100%'
				height={500}
				src={youtubeLink}
				title="Live | TEDxNITRourkela"
				frameBorder={0}
				allow="accelerometer; autoplay; clipboard-white; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				id="idIframe"
				style={{borderRadius: '8px', overflow: 'hidden'}}
			/>

			<LiveStreamDetails speaker={speaker} />
		</Box1>
	)
}

export default Stream