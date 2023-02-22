import styled from "styled-components";

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const PaginationLink = styled.a`
    padding: 2%;
    margin: 1%;
    background: orange;
    color: white;
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;
`;

export { PaginationContainer, PaginationLink };
