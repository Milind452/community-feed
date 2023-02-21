import { useRouter } from "next/router";

import { useState, useEffect } from "react";

import { QuestionDetailContainer } from "./questions.styles";
import Card from "../../components/Card/Card";

export default function QuestionDetail() {
    const router = useRouter();
    const { id } = router.query;

    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState({});

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                `https://api.stackexchange.com/2.2/questions/${id}?site=stackoverflow`
            );
            const result = await data.json();
            if (result) {
                setQuestion(result.items[0]);
                setLoading(false);
            }
        }
        setLoading(true);
        id && fetchData();
    }, [id]);

    return (
        <QuestionDetailContainer>
            <h2>Question: {id}</h2>
            {loading ? (
                <span>loading...</span>
            ) : (
                <Card
                    title={question.title}
                    views={question.view_count}
                    answers={question.answer_count}
                />
            )}
        </QuestionDetailContainer>
    );
}
