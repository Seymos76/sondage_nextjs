import Head from 'next/head'
import { useState, useEffect } from 'react'

const API_URL = process.env.API_URL ?? 'https://localhost:8000/';

export default function AllAnswers({ data }) {
    const [loading, setLoading] = useState(true);
    const [serverMessage, setServerMessage] = useState('');
    useEffect(() => {
        setServerMessage("Chargement du serveur...");
        fetch(API_URL+'api/is-awake', {
            method: 'GET',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Request-Headers': 'Content-Type'
            }
        })
            .then((response) => response.status)
            .then((status) => {
                    console.log('status',status);
                    if (200 === status) {
                        setLoading(false);
                    }
                }
            )
            .catch((error) => {
                if (undefined !== error) {
                    setServerMessage("Le serveur est indisponible actuellement, merci de réessayer plus tard.");
                }
                console.log('error',error);
            })
        ;
    }, []);
    const listResults = () => {
        if (!data) return <p>Pas de résultat pour le moment...</p>;

        return data.map((res, index) => {
            console.log('res:',res,index);
            return <p key={index}><a href={`/answer/${index}`}></a>{index}</p>
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
                    {!loading && listResults()}
                    {serverMessage}
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


export async function getServerSideProps() {
    // Fetch data from external API
    const res: any = await fetch(`${API_URL}api/surveys/results`, {
        method: 'GET',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    })
    const data: any = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
