const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/parties/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${remoteURL}/parties`).then(e => e.json())
    },
    deleteParty(id) {
        return fetch(`${remoteURL}/parties/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        })
    },
    post(newParty) {
        return fetch(`${remoteURL}/parties`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newParty)
        }).then(data => data.json())
    },
    put(editedParty) {
        return fetch(`${remoteURL}/parties/${editedParty.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedParty)
        }).then(data => data.json());
      }
}