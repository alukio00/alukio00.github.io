const sendEmail = (event) => {
    event.preventDefault()
    const getValues = (id) => event.target.querySelector("#" + id).value
    const email = getValues("email")
    const name = getValues("name")
    const lastName = getValues("last-name")
    const message = getValues("message")


    console.log(email, name, lastName, message)
    /*fetch("http://127.0.0.1:64878/api/sendEmail", {
        body: JSON.stringify({
            "email": email,
            "name": name,
            "lastName": lastName,
            "message": message
        }),
        headers: {
            "Content-type": "application/json"
        },
        method: "POST"
    })
        .then(res => res.ok ? alert("Wiadomość Wysłana Pomyślnie") : "")
        .catch(err => console.log(err))*/
}