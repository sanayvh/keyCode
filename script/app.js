
let locationEl = document.getElementById("location")
let keyElem = document.getElementById("key")
let keyCodeElem = document.getElementById("keyCode")
let whichElem = document.getElementById("which")
let codeElem = document.getElementById("code")


document.body.addEventListener("keydown", function (event) {
    event.preventDefault()
    starter.style.display = "none"
    ascii.style.display = "flex"
    infos.style.display = "flex"

    let eventKeyCode = event.keyCode
    let eventLocation = event.location
    let eventKey = event.key
    let eventWhich = event.which
    let eventCode = event.code

    keyCodeElem.innerHTML = eventKeyCode
    keyElem.innerHTML = eventKey
    locationEl.innerHTML = eventLocation
    whichElem.innerHTML = eventWhich
    codeElem.innerHTML = eventCode

})