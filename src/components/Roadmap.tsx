import { styled } from "styled-components";
import { LiaBitcoin	} from 'react-icons/lia'
import { LiaBoxOpenSolid } from 'react-icons/lia'
import { LiaClipboard } from 'react-icons/lia'
import { LiaMoneyCheckSolid } from 'react-icons/lia'
import { LuMessageSquare } from 'react-icons/lu'
import { SlPencil } from 'react-icons/sl';
import { SlScreenDesktop } from "react-icons/sl";
import { useEffect } from "react";

const RoadmapContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-self: center;
	margin-bottom: 320px;

	h1 {
		color: #3400EC;
		font-size: 44px;
		font-weight: 800;
		margin-bottom: 2em;
	}

	@media only screen and (max-width: 880px) {
		margin-bottom: 115px;
	}

`;

const Content = styled.div`
	display: flex;
	border-top: 3px solid #3400EC;
	width: 82%;
	overflow-y: visible;
	overflow-x: hidden;
	scroll-snap-type: x mandatory;

	@media only screen and (max-width: 880px) {
		width: 250px;

	}

`;

const CheckpointContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 210px;
	min-width: 250px;
	scroll-snap-align: end;

	&:nth-child(2n) {
		.checkpoint {
			background-color: #3400EC;
		}

		p {
			color: #ecf0f6;
		}

		.icon {
			background: none;
			color: white;
		}
	}
`;

const Line = styled.div`
	position: relative;
	width: 0;
	top: -10px;
	height: 50px;
	border-inline: 1px solid #3400EC;
`;

const Intersection = styled.div`
	transform: translateY(-8px) rotate(45deg);
	width: 12px;
	height: 12px;
	background-color: #3400EC;
	border-radius: 3px;
`;

const Checkpoint = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 160px;
	margin-top: -10px;
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 50px;
	border-radius: 50%;
	padding: 10px;
	margin-top: 10px;
	background-color: #ebeefa;
	color: #3400EC;
`;

const DateAnnotation = styled.p`
	margin-bottom: 0;
	margin-top: 2em;
	color: #8792a4;
`;

const Explanation = styled.p`
	color: #474b52;
	font-weight: 600;
	margin-top: 0;
	font-family: Montserrat;
`;

const Roadmap = () => {
	useEffect(() => {
		const roadmap = document.getElementById("roadmapContent");
		const interval = setInterval(() => {
			const scrollLeft = roadmap?.scrollLeft ?? 0;
			const scrollWidth = roadmap?.scrollWidth ?? 0;
			const offsetWidth = roadmap?.offsetWidth ?? 0;
			if (scrollLeft !== scrollWidth - offsetWidth) {
				roadmap?.scrollBy({
					left: 90,
					behavior: "smooth",
				});
			} else {
				roadmap?.scroll({
					left: 0,
					behavior: "smooth",
				});
			}
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<RoadmapContainer>
			<h1>Success Roadmap</h1>
			<Content id="roadmapContent">
				<CheckpointContainer>
					<Intersection></Intersection>
					<Line></Line>
					<Checkpoint className="checkpoint">
						<Icon className="icon">
							<SlPencil size={30} />
						</Icon>
						<DateAnnotation>December, 2022</DateAnnotation>
						<Explanation>Concept planning</Explanation>
					</Checkpoint>
				</CheckpointContainer>
				<CheckpointContainer>
					<Intersection></Intersection>
					<Line></Line>
					<Checkpoint className="checkpoint">
						<Icon className="icon">
							<LiaClipboard size={30} />
						</Icon>
						<DateAnnotation>Q2, 2023</DateAnnotation>
						<Explanation>Testnet v1 Starts</Explanation>
					</Checkpoint>
				</CheckpointContainer>
				<CheckpointContainer>
					<Intersection></Intersection>
					<Line></Line>
					<Checkpoint className="checkpoint">
						<Icon className="icon">
							<LiaMoneyCheckSolid size={30} />
						</Icon>
						<DateAnnotation>Q3, 2023</DateAnnotation>
						<Explanation>Mainnet v1 Starts</Explanation>
					</Checkpoint>
				</CheckpointContainer>
				<CheckpointContainer>
					<Intersection></Intersection>
					<Line></Line>
					<Checkpoint className="checkpoint">
						<Icon className="icon">
							<LuMessageSquare size={30} />
						</Icon>
						<DateAnnotation>Q4, 2023</DateAnnotation>
						<Explanation>DAO BETA</Explanation>
					</Checkpoint>
				</CheckpointContainer>
				<CheckpointContainer>
					<Intersection></Intersection>
					<Line></Line>
					<Checkpoint className="checkpoint">
						<Icon className="icon">
							<LiaBoxOpenSolid size={30} />
						</Icon>
						<DateAnnotation>Q1, 2024</DateAnnotation>
						<Explanation>SDK for Apps</Explanation>
					</Checkpoint>
				</CheckpointContainer>
				<CheckpointContainer>
					<Intersection></Intersection>
					<Line></Line>
					<Checkpoint className="checkpoint">
						<Icon className="icon">
							<LiaBitcoin size={30} />
						</Icon>
						<DateAnnotation>Q2, 2024</DateAnnotation>
						<Explanation>Naitive TON Stablecoin</Explanation>
					</Checkpoint>
				</CheckpointContainer>
			</Content>
		</RoadmapContainer>
	);
};

export default Roadmap;
