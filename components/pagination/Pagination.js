import { PaginationContainer, PaginationLink } from "./Pagination.styles";

import Link from "next/link";

export default function Pagination({ currentPage, hasMore }) {
    return (
        <PaginationContainer>
            <Link href={`?page=${parseInt(currentPage) - 1}`}>
                <PaginationLink>
                    Previous
                </PaginationLink>
            </Link>
            <Link href={`?page=${parseInt(currentPage) + 1}`}>
                <PaginationLink>Next</PaginationLink>
            </Link>
        </PaginationContainer>
    );
}
