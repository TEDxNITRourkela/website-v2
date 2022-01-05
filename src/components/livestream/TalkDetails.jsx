import React from 'react';

// Libraries
import styled from 'styled-components';

const Box3 = styled.div`
	border-radius: 8px;
	background: #232323;
	margin-top: 20px;
	padding: 15px;
	height: 39.5%;

	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
`

const ImgContainer = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	overflow: hidden;
	margin-right: 2rem;
	background: #535353;
`

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`

const SpeakerName = styled.h4`
	color: var(--color-secondary);
	font-family: 'Zilla Slab', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 1.3rem;
	font-weight: bold;
	line-height: 1.6;
`

const SpeakerShortDescription = styled.p`
	color: var(--color-tertiary);
	font-family: Helvetica, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 1rem;
	line-height: 1.6;
	font-weight: normal;
	margin-bottom: 2rem;
`

const SpeakerLongDescription = styled.p`
	color: var(--color-tertiary);
	font-family: Helvetica, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 0.9rem;
	line-height: 1.6;
	font-weight: normal;
`

const TalkDetails = ({speaker}) => {
	return (
		<Box3>
			<ImgContainer>
				<Img src={speaker?.img} alt={speaker?.name} />
			</ImgContainer>

			<div style={{width: 'calc(100% - 100px - 2rem)'}}>
				<SpeakerName>{speaker?.name}</SpeakerName>
				<SpeakerShortDescription>{speaker?.description}</SpeakerShortDescription>
				<SpeakerLongDescription>{speaker?.longDescription}</SpeakerLongDescription>
			</div>
		</Box3>
	)
}

export default TalkDetails;