function focusElement(clas) {
    let element = document.getElementsByClassName(clas)
    let icon = document.getElementsByClassName(`icon-${clas}`)

    console.log(element)
    console.log(icon)
    if (element[0].onfocus != null) {
        icon[0].style = 'display: none;'
    } else {
        console.log('ok')
    }

}

// focusElement()
