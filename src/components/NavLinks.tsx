import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

const Links = styled.div`
	display: flex;
	justify-content: space-between;
	width: 400px !important;
	cursor: pointer !important;

	p {
		color: #3400EC;
	}
	@media only screen and (max-width: 880px) {
		display: none;
    }  
`;

const DropDownItem = styled.div`
	position: relative;

	p {
		color: #3e4857;
		transition: color 0.2s;
	}

	&:hover {
		p {
			color: #3400EC;

			.menuItemArrow {
				transform: rotate(0.5turn);
			}
		}
	}

	.menuItemArrow {
		transform: rotate(0);
		transition: transform 0.2s;
		margin-left: 0.5em;
	}
`;

const DropDownMenu = styled.div`
	display: none;
	position: absolute;
	
	${DropDownItem}:hover > & {
		display: block;
		flex-direction: column;
		align-items: start;
		width: 10em;
		border-radius: 10px;
		box-shadow: 0 2px 5px #aaa;
		z-index: 999;
	}

	&:hover {
		display: block;
	}

	.linkContainer {
		width: 100%;
		border-bottom: 1px solid #ddd;
		background-color: white;

		a {
			display: inline-block;
			text-decoration: none;
			width: calc(100% - 15px);
			margin: 5px 5px;
			padding-left: 5px;
			border-radius: 5px;
			color: black;
			font-weight: normal;
			text-align: start;
			line-height: 2em;
		}

		a:hover {
			// background-color: rgba(56, 135, 204, 0.3);
			color: #3400EC;
		}
	}

	.linkContainer:first-child {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}

	.linkContainer:last-child {
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
`;

const NavLinks = () => {
	return (
		<Links>
			<p >HOME</p>
			<DropDownItem>
				<p> COMMUNITY <FaChevronDown className="menuItemArrow" /> </p>
				<DropDownMenu>
					<div className="linkContainer">
						<a href="https://t.me/evaaprotocol">Telegram</a>
					</div>
					<div className="linkContainer">
						<a href="https://t.me/EVAAProtocolHub/"> EVAA Hub</a>
					</div>
					<div className="linkContainer">
						<a href="https://twitter.com/evaaprotocol/">Twitter</a>
					</div>
					<div className="linkContainer">
						<a href="https://medium.com/@evaaprotocol/">Medium</a>
					</div>
				</DropDownMenu>
			</DropDownItem>
			<DropDownItem>
				<p>
					DOCS <FaChevronDown className="menuItemArrow" />
				</p>
				<DropDownMenu>
					<div className="linkContainer">
						<a href="https://evaa.gitbook.io/intro/">Documentation</a>
					</div>
				</DropDownMenu>
			</DropDownItem>
		</Links>
	);
};

export default NavLinks;
