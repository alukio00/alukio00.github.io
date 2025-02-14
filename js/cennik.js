const deleteErrorMessage = () => {
    const errorDiv = document.getElementById("errors-div")

    errorDiv.classList.add("hidden")
    errorDiv.innerHTML = ""
}

const sendAskEmail = async (event) => {
    event.preventDefault()
    
    const dateFrom = document.getElementById("date2").value
    const dateTo = document.getElementById("date-to2").value
    const adults = document.getElementById("adults-input").value
    const kids = document.getElementById("kids-input").value
    const kidsAge = document.getElementById("kids-age-input").value
    const email = document.getElementById("email2").value
    
    const formData = JSON.stringify({email, dateFrom, dateTo, adults, kids, kidsAge})
    try {
      
        const res = await fetch("https://europe-central2-light-scarab-439115-h3.cloudfunctions.net/function-2", {
            body: formData,
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json()

        console.log(data)

        const errorDiv = document.getElementById("errors-div")
        const { stan, mess } = data
     
        errorDiv.classList.remove("hidden")

        errorDiv.innerHTML = `<div class="p-4 w-full justify-between items-center flex shadow-lg ${stan ? "bg-green-600" : "bg-red-600"} rounded-md text-white text-lg">${mess}<div onclick="deleteErrorMessage()" class=""><svg class="w-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div></div>`

    } catch (error) {
        console.log(error)
        errorDiv.classList.remove("hidden")

        errorDiv.innerHTML = `<div class="p-4 w-full justify-between items-center flex shadow-lg bg-red-600 rounded-md text-white text-lg">Error<div onclick="deleteErrorMessage()" class=""><svg class="w-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div></div>`

    }
    
        
}

