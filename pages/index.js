import Questions, {
    getServerSideProps as getServerSideProps_Questions,
} from "./questions";

export function getServerSideProps(context) {
    return getServerSideProps_Questions(context);
}

export default function Home(props) {
    return <Questions {...props} />;
}
