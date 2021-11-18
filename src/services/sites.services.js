const BASE_URL = "http://localhost:3000/sites";

const services = {};

services.getAllSites = async () => {
    const response = await fetch(BASE_URL);

    if(response.ok) {
        const sitesObj = await response.json();
        return sitesObj.sites;
    }
    else {
        return [];
    }
}

services.addSite = async (title, url) => {
    const response = await fetch(`${BASE_URL}/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            url: url
        })
    });

    if(response.ok) {
        console.log("Sitio creado");
    }
    console.log(await response.json());
}

export default services