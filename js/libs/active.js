async function get(url){
    let rem = await fetch(url);

    if(!rem){
        throw new Error(`Error, url: ${url}`);
    }

    return await rem.json();
}

export default get;