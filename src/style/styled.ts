import { styled } from "styled-components";

export const Button = styled.button`
	display: flex;
	align-items: center;
	width: fit-content;
	background-color: #4c65d1;
	color: white;
	border-radius: 5px;
	padding: 11px 3em;
	font-weight: 700;
	letter-spacing: 1px;
	border: none;
	cursor: pointer;
	font-size: 20px;
	href: "";

	&:active {
		background-color: #304dd1;
	}
`;
