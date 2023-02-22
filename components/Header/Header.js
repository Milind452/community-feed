import { Wrapper, Title } from "./Header.styles";

import Head from "next/head";

export default function Header() {
    return (
        <>
            <Head>
                <title>Community Feed</title>
                <meta
                    name="description"
                    content="This is a community feed project built with react"
                />
            </Head>
            <Wrapper>
                <Title>Community Feed</Title>
            </Wrapper>
        </>
    );
}
