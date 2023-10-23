import { styled } from "styled-components";
import SellingPoints from "./SellingPoints";
import Roadmap from "./Roadmap";
import RunByCommunity from "./RunByCommunity";
import FinalInvitation from "./FinalInvitation";
import bitcoin from "../assets/bitcoin.png";
import ethereum from "../assets/ethereum.png";
import ton from "../assets/ton.png";
import tether from "../assets/tether.png";
import usdt from "../assets/usdt.png";

const Coins = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 185px 125px;
	gap: 15px;

	img {
		height: 80px;
		object-fit: cover;
		height: auto;
	}

	.firstRow{
		display: flex;
		justify-content: space-around;
		width: 58%;
		gap: 40px;
	}
	.secondRow{
		display: flex;
		justify-content: space-around;
		width: 42%
	}

	@media only screen and (max-width: 880px) {
		display: flex;
		flex-direction: column;
		margin: 50px 125px;
		gap: 50px;

		.firstRow{
			display: flex;
			justify-content: space-around;
			width: 100%
		}

		.secondRow{
			display: flex;
			justify-content: space-around;
			width: 100%;
			gap: 50px;
		}
	}

`;

const MainContent = styled.main`
	display: flex;
	flex-direction: column;
	font-family: Cairo;
	width: 100%;
	overflow-x: hidden;
`;

const Main = () => {
	return (
		<MainContent>
			<SellingPoints />
			<Coins>
				<div className="firstRow">
					<img src={bitcoin} alt="Bitcoin" />
					<img src={ethereum} alt="Ethereum" />
					<img src={ton} alt="TON" />
				</div>
				<div className="secondRow">
					<img src={tether} alt="Tether" />
					<img src={usdt} alt="USDT" />
				</div >
			</Coins>
			<Roadmap />
			<RunByCommunity />
			<FinalInvitation />
		</MainContent>
	);
};

export default Main;
