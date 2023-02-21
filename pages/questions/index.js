import { QuestionsContainer, CardLink } from "./questions.styles";
import Card from "../../components/Card/Card";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Questions() {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(
                "https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&tagged=reactjs&site=stackoverflow"
            );
            const result = await data.json();
            if (result) {
                setQuestions(result.items);
                setLoading(false);
            }
        }
        setLoading(true);
        fetchData();
    }, []);

    return (
        <QuestionsContainer>
            <h2>Questions</h2>
            {loading ? (
                <span>loading...</span>
            ) : (
                <div>
                    {questions.map((question) => (
                        <Link
                            key={question.question_id}
                            href={`/questions/${question.question_id}`}
                            passHref
                        >
                            <CardLink>
                                <Card
                                    title={question.title}
                                    views={question.view_count}
                                    answers={question.answer_count}
                                />
                            </CardLink>
                        </Link>
                    ))}
                </div>
            )}
        </QuestionsContainer>
    );
}
