let icons = document.getElementsByClassName('icon-focus')
let inputs = document.getElementsByClassName('focus')

for (let i=0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', (event) => {
        let clas = event.target.classList[0]
        icons[i].src = `assets/${clas}-focus.svg`
    })

    inputs[i].addEventListener('blur', (event) => {
        let clas = event.target.classList[0]
        icons[i].src = `assets/${clas}.svg`
    })
}
