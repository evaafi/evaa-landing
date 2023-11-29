import { styled } from "styled-components";
import { FiGithub } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
import { LiaTwitter } from "react-icons/lia";
import logo from "../assets/logo-dark.svg";


const FooterContainer = styled.footer`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	padding: 3em 5em;
	background-color: #222940;
	color: white;
	font-weight: bold;
	font-family: Montserrat;
	width: 100%;

	@media only screen and (max-width: 880px) {
		flex-direction: column-reverse;
		gap: 17px;
		padding: 30px 0px 30px;
	}
`;

const FooterLogo = styled.div`
	display: flex;
	flex-direction: row;
	width: 300px;
	align-items: center;

	h2 {
		margin-left: 1em;
		margin-block: 0;
		font-weight: 600;
		line-height: 20px;
	}
`;

const LogoImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;

	img {
		width: 30px;
		height: 30px;
	}
`;

const SocialLinks = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 0.5em;
	width: 300px;

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.5em;
		border-radius: 5px;
		padding: 0.2em;
		background-color: transparent;
		border: 1px solid rgba(168, 175, 183, 0.2);
		color: #a8afb7;
		transition: all 0.2s;
		cursor: pointer;
		text-decoration: none;


		&:hover {
			background-color: #a8afb7;
			color: #222940;
		}
	}
`;

const JustifyFix = styled.div`
	width: 300px;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<FooterLogo>
				<LogoImage>
					<img src={logo} alt="EVAA logotype" height="30" />
				</LogoImage>
				<h2>EVAA Protocol</h2>
			</FooterLogo>
			<SocialLinks>
				<a href="https://github.com/evaafi/">
					<FiGithub />
				</a>
				<a href="https://t.me/evaaprotocol">
					<LiaTelegram />
				</a>
				<a href="https://twitter.com/evaaprotocol">
					<LiaTwitter />
				</a>
			</SocialLinks>
			<JustifyFix />
		</FooterContainer>
	);
};

export default Footer;
