const remoteURL = "http://localhost:5002"




export default {
    get(id) {
        return fetch(`${remoteURL}/favorites/${id}`).then(e => e.json())
    },
    getAllFavorite() {
        return fetch(`${remoteURL}/favorites?_expand=party`).then(e => e.json())
       
    },
    deleteFavorite(id) {
        return fetch(`${remoteURL}/favorites/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        })
    },
    post(newFavorite) {
        return fetch(`${remoteURL}/favorites/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFavorite)
        }).then(data => data.json())
    },
  
}