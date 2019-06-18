const remoteURL = "http://localhost:5002"



const activeUser = sessionStorage.getItem('User');
export default {
    get(id) {
        return fetch(`${remoteURL}/favorites/${id}`).then(e => e.json())
    },
    getAllFavorite() {
        return fetch(`${remoteURL}/favorites?_expand=party`).then(e => {
            const favoriteData = e.json()
    console.log("favoriteData", favoriteData);
    return favoriteData;
       
        })
    },
    favoriteByUser() {
        return fetch(`${remoteURL}/favorites?_expand=party?userId=${activeUser}`)
        .then(e => {
            const newData = e.json()
    console.log("newData", newData.id);
    return newData;
       
        })
       
        
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