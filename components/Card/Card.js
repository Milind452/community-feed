import { Wrapper, Title, Count } from "./Card.styles";

export default function Card({ title, views, answers }) {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Count>{`Views: ${views} | Answers: ${answers}`}</Count>
        </Wrapper>
    );
}
