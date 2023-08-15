import { styled } from "styled-components";
import NavLinks from "./NavLinks";
import logo from "../assets/evaa-logo.png";
import { Button } from "../style/styled";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";

const Navbar = styled.nav`
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	font-size: 16px;
	font-family: Montserrat;
	width: 100%;
	
	& > div:first-child {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 40px 127px;
		gap: 10px;
	}

	.navbarItem {
		display: flex;
		width: 200px;
		margin-left: 121px;
	} 

	.mobileMenu{
		display: none;
	}



	@media only screen and (max-width: 880px) {
		.navbarItem {
			display: flex;
			width: 200px;
			margin-left: 20px;
		} 

		& > div:first-child {
			padding: 40px 127px 0px 127px;
		}

		.mobileMenu{
			width: 100%;
			align-self: flex-start;
			display: flex;
			padding: 10px 10px;
			z-index: 999;


			#links a {
				color: black;
				padding: 14px 16px;
				text-decoration: none;
				font-size: 17px;
				display: flex;
			}
		
			#links a:hover {
				background-color: #3854cc;
				color: white;
			}
		
			.active {
				background-color: black;
				color: white;
			}
		}
`;

const MobileMenuButton = styled.button`
	display: none;

	
	@media only screen and (max-width: 880px) {
		display: flex;
		margin-right: 20px;
    } 
`;

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	let menu;
	if (showMenu) {
		menu = <div id="links">
			<a href="https://t.me/evaaprotocol">Telegram</a>
			<a href="https://t.me/EvaaProtocolHub/"> Evaa Hub</a>
			<a href="https://twitter.com/evaaprotocol/">Twitter</a>
			<a href="https://medium.com/@evaaprotocol/">Medium</a>
			<a href="https://github.com/evaafi/docs">Documentation</a>
		</div>
	};

	return (
		<Navbar>
			<div>
				<div className="navbarItem">
					<img src={logo} alt="EVAA logotype" width="48" height="48" />
				</div>
				<NavLinks />
				<div className="navbarItem">
					<a href="https://app.evaa.finance/" >
						<Button >
							App
						</Button>
					</a>
				</div>
				<MobileMenuButton>
					<LuMenu size={45} onClick={() => setShowMenu(!showMenu)} />
					<NavLinks />
				</MobileMenuButton>
			</div>
			<div className="mobileMenu">{menu}</div>
		</Navbar >
	);
};

export default Header;
