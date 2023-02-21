import styled from "styled-components";

const QuestionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5%;
`;

const CardLink = styled.a`
    text-decoration: none;
`;

const QuestionDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5%;
`;

export { QuestionsContainer, QuestionDetailContainer, CardLink };
