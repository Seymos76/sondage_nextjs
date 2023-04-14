export function isAwake() {
    const isAwake = fetch(API_URL+'api/is-awake', {
            "method": 'GET',
            "mode": "cors",
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": API_URL
            }
        })
            .then((response) => {
                console.log('is awake response',response);
                if (!response.ok) {
                    return "Le serveur ne répond pas...";
                }
                if (200 !== response.status) {
                    return "Le serveur ne répond pas...";
                }
                return response;
            })
            .catch((error) => {
                if (undefined !== error) {
                    setServerMessage("Le serveur est indisponible actuellement, merci de réessayer plus tard.");
                }
                console.log('error',error);
                return error;
            })
    ;
}
