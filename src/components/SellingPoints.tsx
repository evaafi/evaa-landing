import { styled } from "styled-components";
import { Button } from "../style/styled";
import duck from "../assets/duck.png";
import macbook from "../assets/macbook.png";
import diamond from "../assets/diamond.png";
import tonforduck from "../assets/tonforduck.svg";
import Blob1 from "../assets/blob-1.svg";
import { ReactComponent as Blob2 } from "../assets/blob-2.svg";
import { ReactComponent as Medal } from "../assets/medal-icon.svg";
import { ReactComponent as Cross } from "../assets/cross-icon.svg";
import { ReactComponent as Shield } from "../assets/shield-icon.svg";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const Point = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: bold;
	padding: 0px 0px 0px 127px;

	&:nth-child(2) {
		flex-direction: row-reverse;
		align-items: center;

		img {
			position: absolute;
			left: 70px;
			top: 50px;
			width: 650px;
		}
		svg {
			position: relative;
			bottom: 0;
			left: 0;
			z-index: -1;
		}
	}

	&:last-child {
		img {
			position: relative;
		}

		svg {
			left: 0;
		}
	}

	@media only screen and (max-width: 880px) {
		padding: 0px 0px 0px 17px;
		display: flex;
		flex-direction: column;
		gap: 20px;

		&:nth-child(2) {
			flex-direction: row-reverse;
			align-items: center;
	
			img {
				position: absolute;
				left: 70px;
				top: 50px;
				width: 650px;
			}
			svg {
				position: relative;
				bottom: 0;
				left: 0;
				z-index: -1;
			}
		}

		&:last-child {
			img {
				position: relative;
			}
		}
    } 
`;

const SecondPoint = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: bold;
	margin-bottom: 250px;

	&:nth-child(2) {
		flex-direction: row-reverse;
		align-items: center;

		img:first-child  {
			position: absolute;
			left: 35px;
			top: 50px;
			width: 650px;
		}
		img:last-child {
			position: relative;
			bottom: -100px;
			left: 0;
			width: 700px;
		}
	}


	@media only screen and (max-width: 880px) {
		display: flex;
		flex-direction: column-reverse;
		margin-bottom: 275px;
		gap:50px;

		&:nth-child(2) {
			flex-direction: column-reverse;
			align-items: center;
	
			img:first-child {
				position: absolute;
				left: -200px;
				top: -15px;
				width: 440px;
			}
			img:last-child {
				position: relative;
				width: 440px;
				height: auto;
				top: 15px;
				left: -65% !important;
			}
		}

	}

`;

const ThirdPoint = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: bold;
	padding: 0px 0px 0px 127px;

	&:nth-child(2) {
		flex-direction: row-reverse;
		align-items: center;

		img {
			position: absolute;
			left: 70px;
			top: 50px;
			width: 650px;
		}
		svg {
			position: relative;
			bottom: 0;
			left: 0;
			z-index: -1;
		}
	}

	&:last-child {
		img {
			position: relative;
		}

		svg {
			left: 0;
		}
	}

	@media only screen and (max-width: 880px) {
		padding: 0px 0px 0px 17px;
		display: flex;
		flex-direction: column-reverse;
		gap: 20px

		&:nth-child(2) {
			flex-direction: row-reverse;
			align-items: center;
	
			img {
				position: absolute;
				left: 70px;
				top: 50px;
				width: 650px;
			}
			svg {
				position: relative;
				bottom: 0;
				left: 0;
				z-index: -1;
			}
		}

		&:last-child {
			img {
				position: relative;
			}
		}
    } 
`;

const Texts = styled.div`
	text-align: start;
	width: 45%;

	h1 {
		background-image: linear-gradient(
			89.83deg,
			#3854cc -5.92%,
			#278ce5 -5.91%,
			#4c65d1 85.36%
		);
		background-size: 100%;
		background-repeat: repeat;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
		font-size: 128px;
		line-height: 120px;
		font-weight: 900;
		letter-spacing: 6px;
		margin-block-end: 0;

		&:nth-child(2) {
			display: inline-block;
			margin-top: -30px;
			font-size: 108px;
			line-height: 128px;
			letter-spacing: 0;
			font-weight: 800;
		}

		& + p {
			margin-top: 1em;
			font-weight: 700;
		}
	}

	h3 {
		color: #3854cc;
		font-size: 44px;
		font-weight: 800;
		margin-bottom: 12px;
		line-height: 40px;
	}

	p {
		color: #8792a4;
		margin-bottom: 2em;
		font-size: 24px;
		line-height: 32px;
		overflow-wrap: break-word;
		word-wrap: break-word;
		min-height: 4em;
		font-weight: 600;
		margin-top: 0;
	}

	b {
		color: #54729b;
	}

	.argument {
		width: 100%;
		display: flex;

		&:first-of-type {
			margin-top: 2em;
		}

		&:last-of-type {
			margin-bottom: 2em;
		}

		p {
			margin-top: 0;
			margin-bottom: 40px;
			width: 85%;
		}

		b {
			display: block;
			color: black;
			font-size: 30px;
			font-weight: 800;
			margin-bottom: 10px;
		}

		svg {
			margin-top: 0.5em;
			margin-right: 1em;
		}
	}
	@media only screen and (max-width: 880px) {
		width: 100%;
		margin-top: 80px;
		margin-bottom: 100px;
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;

		a {
			display: flex;
			justify-content: center;
		}
		div:first-of-type {
			display: flex;
			text-align: start;
		} 
		
    } 
`;
const TextsStart = styled.div`
	text-align: start;
	width: 45%;
	a {
		text-decoration: none;
	}

	h1 {
		background-image: linear-gradient(
			89.83deg,
			#3854cc -5.92%,
			#278ce5 -5.91%,
			#4c65d1 85.36%
		);
		background-size: 100%;
		background-repeat: repeat;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
		font-size: 128px;
		line-height: 120px;
		font-weight: 900;
		letter-spacing: 6px;
		margin-block-end: 0;

		&:nth-child(2) {
			display: inline-block;
			margin-top: -30px;
			font-size: 108px;
			line-height: 128px;
			letter-spacing: 0;
			font-weight: 800;
		}

		& + p {
			margin-top: 1em;
			font-weight: 600;
			padding-right: 10px;
		}
	}

	h3 {
		color: #3854cc;
		font-size: 44px;
		font-weight: 800;
		margin-bottom: 12px;
		line-height: 40px;
	}

	p {
		color: #8792a4;
		margin-bottom: 2em;
		font-size: 24px;
		line-height: 32px;
		overflow-wrap: break-word;
		word-wrap: break-word;
		min-height: 4em;
		font-weight: 600;
		margin-top: 0;
	}

	b {
		color: #54729b;
	}

	.argument {
		width: 100%;
		display: flex;

		&:first-of-type {
			margin-top: 2em;
		}

		&:last-of-type {
			margin-bottom: 2em;
		}

		p {
			margin-top: 0;
			margin-bottom: 40px;
			width: 85%;
		}

		b {
			display: block;
			color: black;
			font-size: 30px;
			font-weight: 800;
			margin-bottom: 10px;
		}

		svg {
			margin-top: 0.5em;
			margin-right: 1em;
		}
	}
	@media only screen and (max-width: 880px) {
		width: 100%;
		margin-bottom: 100px;
		display: flex;
		flex-direction: column;
		text-align: start;
		align-items: flex-start;
		
		h1 {
			background-image: linear-gradient(
				89.83deg,
				#3854cc -5.92%,
				#278ce5 -5.91%,
				#4c65d1 85.36%
			);
			background-size: 100%;
			background-repeat: repeat;
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			-moz-background-clip: text;
			-moz-text-fill-color: transparent;
			font-size: 120px;
			line-height: 120px;
			font-weight: 900;
			letter-spacing: 6px;
			margin-block-end: 0;
			margin-top: -20px;
	
			&:nth-child(2) {
				display: inline-block;
				margin-top: -40px;
				font-size: 90px;
				line-height: 128px;
				letter-spacing: 0;
				font-weight: 800;
			}

		a {
			display: flex;
			justify-content: center;
			text-decoration: none;
		}
		div:first-of-type {
			display: flex;
			text-align: start;
		} 
    } 
`;

const ImagesTop = styled.div`
	position: relative;
	width: 65%;	
	img:first-of-type {
		position: relative;
		right: -100px;
	}

	img:last-of-type {
		position: absolute;
		bottom: 50px;
		left: 50%;
		width: 300px;
	}

	@media only screen and (max-width: 880px) {
		position: relative;
		width: 100%;	
		img:first-of-type  {
			right: -62px;
			width: 381px;
			top: -64px;
		}
		img:last-of-type {
			position: absolute;
    		bottom: 80px;
    		left: 50%;
    		width: 121px;
		}
    }
`;

const Images = styled.div`
	position: relative;
	width: 50%;	
	img {
		position: relative;
		right: -100px;
	}

	svg {
		position: absolute;
		bottom: 50px;
		left: 50%;
	}
	@media only screen and (max-width: 880px) {
		img:first-of-type  {
			position: relative;
			right: 60px;
			width: 330px;
		}
		img:last-of-type {
			position: absolute;
    		bottom: 20px;
    		left: -45% !important;
    		width: 300px;
			height: 300px;
		}
	}
`;

const ImagesBottom = styled.div`
	position: relative;
	width: 50%;	
	img {
		position: relative;
		right: -100px;
	}

	svg {
		position: absolute;
		bottom: 50px;
		left: 50%;
	}
	@media only screen and (max-width: 880px) {
		svg {
			position: absolute;
			width: 341px;
			height: 300px;
			left: -37%!important;
			top: -324px;
		}
		img:last-of-type {
			position: absolute;
    		bottom: 0px;
    		left: -25% !important;
    		width: 385px;
			height: auto;
		}
	}
`;

const CarouselIndicatorContainer = styled.div`
	display: flex;
	column-gap: 10px;
`;

const CarouselIndicator = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 3px;
	background-color: #9ea8d3;
	cursor: pointer;
	transition: all 0.5s;

	&.chosen {
		transform: rotate(45deg);
		background-color: #3854cc;
	}
`;

type CarouselItems = {
	title: string;
	description: string;
};
const SellingPoints = () => {
	// eslint-disable-next-line
	const [carouselItems, setCarouselItems] = useState<CarouselItems[]>([
		{
			title: "Our innovative protocol",
			description:
				"Our innovative protocol allows borrowers to access capital quickly and easily, while providing lenders with a high-yield investment opportunity.",
		},
		{
			title: "Our platform utilizes",
			description: "Our platform utilizes cutting-edge blockchain technology to ensure the safety and security of all transactions.",
		},
		{
			title: "All loan agreements and repayments",
			description:
				"All loan agreements and repayments are recorded on the blockchain, providing an immutable and transparent record of all activity.",
		},
		{
			title: "User-friendly and easy to navigate",
			description:
				"Our platform is user-friendly and easy to navigate, making it simple for borrowers and lenders to connect and conduct business.",
		},
		{
			title: "Customer support",
			description:
				"And our dedicated customer support team is available to assist you with any questions or concerns you may have.",
		},
	]);
	const [chosenText, setChosenText] = useState(0);

	return (
		<div>
			<Point>
				<TextsStart>
					<h1>EVAA</h1>
					<h1>protocol</h1>
					<p>
						The first decentralized lending protocol on <b>TON</b> that lets
						users lend or borrow assets without going to a centralized
						intermediary.
					</p>
					<a href="https://app.evaa.finance/">
						<Button>Application</Button>
					</a>
				</TextsStart>
				<ImagesTop>
					<img src={duck} alt="Duck holding TONcoin" />
					<img src={tonforduck} alt="TonCoin to hold" />
				</ImagesTop>
			</Point>



			<SecondPoint>
				<Texts>
					<h3>{carouselItems[chosenText].title}</h3>
					<p>{carouselItems[chosenText].description}</p>
					<CarouselIndicatorContainer>
						{carouselItems.map((item, index) => (
							<CarouselIndicator
								key={index}
								className={chosenText === index ? "chosen" : ""}
								onClick={() => setChosenText(index)}
							/>
						))}
					</CarouselIndicatorContainer>
				</Texts>
				<Images>
					<img src={Blob1} alt="Blob1" />
					<img src={macbook} alt="Macbook with EVAA on screen" />
				</Images>
			</SecondPoint>




			<ThirdPoint>
				<TextsStart>
					<h3>Why EVAA</h3>
					<div className="argument">
						<Medal width="24" />
						<p>
							<b>First on TON</b>
							EVAA Protocol is the first TON blockchain lending protocol
						</p>
					</div>
					<div className="argument">
						<Cross width="24" />
						<p>
							<b>TON native and wrapped assets</b>
							Evaa Protocol has TON and TON native tokens besides wrapped tokens
							from other chains
						</p>
					</div>
					<div className="argument">
						<Shield width="24" />
						<p>
							<b>Decentralized</b>
							The protocol is based on smart contracts — fully decentralized
						</p>
					</div>
					<a href="https://app.evaa.finance/">
						<Button>
							Dashboard
							<FaChevronRight size={10} style={{ marginLeft: "1em" }} />
						</Button>
					</a>
				</TextsStart>
				<ImagesBottom>
					<Blob2 />
					<img src={diamond} alt="Macbook with EVAA on screen" />
				</ImagesBottom>
			</ThirdPoint>
		</div>
	);
};

export default SellingPoints;
