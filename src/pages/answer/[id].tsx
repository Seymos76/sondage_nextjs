import Head from 'next/head'

const API_URL = process.env.API_URL ?? 'https://localhost:8000/';

export default function SurveyResult({ result }) {
    const showResult = () => {
        if (!result) {
            return;
        }
        return result.map((res, index) => {
            console.log('res:',res,index);
        });
    }
    console.log('API URL',API_URL);
    return (
        <>
            <div>
                <Head>
                    <title>Liste des réponses au sondage pour une initiation au 3e oeil et à sa multidimension</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={'container'}>
                    {showResult()}
                </main>

                <footer>
                    <p>
                        Sondage créé par <a href="mailto:devntech@proton.me" target={'_blank'}>Louis THOMAS</a>
                    </p>
                </footer>
            </div>
        </>
    )
}

export async function getServerSideProps(id) {
    // Fetch data from external API
    const res = await fetch(`https://localhost:8000/api/surveys/results/${id}`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
