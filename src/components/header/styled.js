import styled from "styled-components";
import { NavLink as Nav } from 'react-router-dom';
export const Link = styled(Nav)`
    text-transform: capitalize;
    color: #FF1D5F !important;
    text-decoration: none;
    padding: 0px 10px;
    font-weight:500;
    :hover{
        color:gray !important;
    }
`;