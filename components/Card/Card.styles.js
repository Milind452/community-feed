import styled from "styled-components";

const Wrapper = styled.div`
    text-align: left;
    padding: 1%;
    background: lightgray;
    border-radius: 5px;
    margin-bottom: 2%;
`;

const Title = styled.h2`
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    color: black;
    border-bottom: 1px solid darkgray;
`;

const Count = styled.span`
    color: darkgray;
`;

export { Wrapper, Title, Count };
