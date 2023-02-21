import styled from "styled-components";

const Wrapper = styled.div`
    background-color: orange;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Title = styled.h1`
    height: 64px;
    pointer-events: none;
`;

export { Wrapper, Title };
