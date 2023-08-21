import { styled } from "styled-components";
import NavLinks from "./NavLinks";
import logo from "../assets/evaa-logo.png";
import { Button } from "../style/styled";
import { LuMenu } from "react-icons/lu";
import { useEffect, useState } from "react";

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
	position: sticky;
	top: 0;
	z-index: 999;
	background: transparent;

	.is-sticky {
    	position: fixed;
    	top: 0;
		width: 100%;
		z-index: 999;
		box-shadow: 0 2px 24px 0 rgb(0 0 0 / 15%);
		background-color: #fff !important;
		opacity: 0.95;
		animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
		padding-top: 0px;
		padding-bottom: 0px;
	}

	& > div:first-child {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 40px 127px;
		gap: 20px;
	}

	.navbarWithoutMenu{
 	    display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		gap: 20px;
	}

	.navbarItem {
		display: flex;
		width: 200px;
		margin-left: 121px;

		a {
			text-decoration: none;
		}
	} 

	.mobileMenu{
		display: none;
	}



	@media only screen and (max-width: 880px) {
		.navbarItem {
			display: flex;
			width: 200px;
			margin-left: 20px;
			a {
				text-decoration: none;
			}
		} 

		& > div:first-child {
			padding: 40px 0px 5px 0px;
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



interface MobileMenuContainerProps extends React.HTMLProps<HTMLDivElement> {
	show: boolean;
}

interface MenuIconProps {
	show: boolean;
}

const MenuIcon = styled(LuMenu) <MenuIconProps>`
	transition: transform 0.3s ease-in-out;
	transform: ${props => (props.show ? 'rotate(90deg)' : 'none')};
  `;

const MobileMenuContainer = styled.div<MobileMenuContainerProps>`
  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  transform: translateX(${props => (props.show ? '0%' : '-100%')});
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out, transform 0.5s ease-in-out;
`;

const MobileMenuButton = styled.nav`
	display: none;

	
	@media only screen and (max-width: 880px) {
		display: flex;
		margin-right: 20px;
		cursor: pointer;
		z-index: 999;
    } 
`;

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', isSticky);
		return () => {
			window.removeEventListener('scroll', isSticky);
		};
	});
	const isSticky = () => {
		const header = document.querySelector('.navbarWrapper');
		const scrollTop = window.scrollY;
		scrollTop >= 250 ? header?.classList.add('is-sticky') : header?.classList.remove('is-sticky');
	};

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
			<div className="navbarWrapper">
				<div className="navbarWithoutMenu">
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
					<MobileMenuButton onClick={() => setShowMenu(!showMenu)}>
						<MobileMenuButton onClick={() => setShowMenu(!showMenu)}>
							<MenuIcon size={45} show={showMenu} />
						</MobileMenuButton>
						<NavLinks />
					</MobileMenuButton>
				</div>
				<MobileMenuContainer show={showMenu} className="mobileMenu">{menu}</MobileMenuContainer>
			</div>
		</Navbar >
	);
};

export default Header;
