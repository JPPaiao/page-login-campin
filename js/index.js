// let element = document.getElementsByClassName('icon')


// console.log(element)

function focusElement(inpt) {
    let element = document.getElementsByClassName(`${inpt.className}`)

    console.log(element[0])
    if (inpt.className == 'email') {
        element[0].src = 'assets/mail-focus.svg'
    }

}

// focusElement()
