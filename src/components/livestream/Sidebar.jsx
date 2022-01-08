import React, { useState } from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { Para1 } from "..";
import Chat from './Chat';

const Box2 = styled.div`
	grid-column: 2/3;
	width: 100%;
	height: calc(100vh - 150px - 75px);

	@media (max-width: 700px) {
		grid-column: 1/3;
	}

	position: relative;
`

const NavContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #232323;
	border-radius: 8px;
	overflow: hidden;
`

const NavItem = styled(Para1)`
	flex-grow: 1;
	line-height: 55px;
	border-radius: 8px;
	text-align: center;
	&:hover {
		cursor: pointer;
		background: #333333;
	}
`

const ScheduleContainer = styled.div`
	width: 100%;
	height: 100%;
	margin-top: 20px;
	background: #232323;
	border-radius: 8px;
	padding: 15px;
	overflow-x: hidden;
	overflow-y: scroll;

	position: absolute;
	top: 55px;
	left: 0px;
`

const ScheduleItemContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 15px;
`
const ImgContainer = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	overflow: hidden;
	background: #535353;
	margin-right: 1rem;
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
	font-size: 1.1rem;
	font-weight: bold;
	line-height: 1.6;
`

const SpeakerDescription = styled.p`
	color: var(--color-tertiary);
	font-family: Helvetica, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 0.95rem;
	line-height: 1.6;
	font-weight: normal;
`

const STAGE = {
	CHAT: 'Live Chat',
	SCHEDULE: 'Event Lineup',
}

const Sidebar = ({speakers, channelId = "909151871011291162"}) => {
	const [stage, setStage] = useState(STAGE.CHAT);

	// Handlers
	const setStageToChat = () => setStage(STAGE.CHAT);
	const setStageToSchedule = () => setStage(STAGE.SCHEDULE);

	const renderStage = () => {
		return (
			<>
				<Chat channelId={channelId} />
				{stage === STAGE.SCHEDULE && (
					<ScheduleContainer>
						{speakers.sort((a, b) => a.serialNumber - b.serialNumber).filter(({hasCompleted}) => !hasCompleted).map(({name, shortDescription, img}) => (
							<ScheduleItemContainer key={name}>
								<ImgContainer>
									<Img src={img} alt={name} />
								</ImgContainer>

								<div style={{width: 'calc(100% - 60px - 1rem)'}}>
									<SpeakerName>{name}</SpeakerName>
									<SpeakerDescription>{shortDescription}</SpeakerDescription>
								</div>
							</ScheduleItemContainer>
						))}
					</ScheduleContainer>
				)}
			</>
		)
	}

	return (
		<Box2>
			<NavContainer>
				<NavItem onClick={setStageToChat}>Chat</NavItem>
				<NavItem onClick={setStageToSchedule}>Schedule</NavItem>
			</NavContainer>

			{renderStage()}
		</Box2>
	)
}

export default Sidebar;