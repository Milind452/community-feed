import { QuestionsContainer, CardLink } from "./questions.styles";
import Card from "../../components/Card/Card";
import Pagination from "../../components/pagination/Pagination";

import Link from "next/link";

export default function Questions({ questions, hasMore, page }) {
    return (
        <QuestionsContainer>
            <h2>Questions</h2>
            <div>
                {questions &&
                    questions.map((question) => (
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
            <Pagination currentPage={parseInt(page) || 1} hasMore={hasMore} />
        </QuestionsContainer>
    );
}

export async function getServerSideProps(context) {
    const { page } = context.query;
    const data = await fetch(
        `https://api.stackexchange.com/2.2/questions?${
            page ? `page=${page}&` : ""
        }order=desc&sort=hot&tagged=reactjs&site=stackoverflow`
    );
    const result = await data.json();

    return {
        props: {
            questions: result.items,
            hasMore: result.has_more,
            page: page || 1,
        },
    };
}
