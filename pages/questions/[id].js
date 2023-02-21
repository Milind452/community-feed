import { useRouter } from "next/router";

import { QuestionDetailContainer } from "./questions.styles";

export default function QuestionDetail() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <QuestionDetailContainer>
            <h2>Question: {id}</h2>
        </QuestionDetailContainer>
    );
}
