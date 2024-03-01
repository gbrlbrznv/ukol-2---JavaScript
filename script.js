const emailPrijmeni = prompt("Zadej příjmení bez diakritiky").toLocaleLowerCase()
const emailJmeno = prompt ("Zadej jméno bez diakritiky").toLocaleLowerCase()

const prijmeniTrim = emailPrijmeni.trim()

const prijmeniSlice = prijmeniTrim.slice(0, 5)

const jmenoTrim = emailJmeno.trim()

const jmenoSlice = jmenoTrim.slice(0, 3)

document.body.innerHTML =
`<h2>${prijmeniSlice}${jmenoSlice}${"@fit.cvut.cz"}</h2>`