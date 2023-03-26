

export function getPokemonWithCallback(id="0", onComplete={}) {

    // Build url
    let endpoint = `https://pokeapi.co/api/v2/pokemon/${id}/`

    // Build request and send
    const request = new XMLHttpRequest()
    request.open("GET", endpoint, true)
    request.send()

    // Check status on state change
    request.onreadystatechange = function() {
        if (this.status == 200){
            onComplete(this.responseText)
        }
    }
}


export function getPokemonWithPromise(id="0") {
        // Build url
        let endpoint = `https://pokeapi.co/api/v2/pokemon/${id}/`

        // Fetch
        let ma = fetch(endpoint)

        return ma
}