import styled from "styled-components";

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const PaginationLink = styled.a`
    padding: 2%;
    margin: 1%;
    color: white;
    background: ${(props) => (props.disabled ? "lightgrey" : "orange")};
    pointer-events: ${(props) => (props.disabled ? "none" : "all")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    text-decoration: none;
    border-radius: 5px;
`;

export { PaginationContainer, PaginationLink };
