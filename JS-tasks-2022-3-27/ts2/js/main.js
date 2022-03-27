function fil() {
    var inf = document.getElementsByClassName('inf')

    localStorage.clear();
    localStorage.setItem(fullnam, inf[0].value)
    localStorage.setItem(age, inf[1].value)
    localStorage.setItem(gender, inf[2].value)
    localStorage.setItem(des, inf[3].value)
    localStorage.setItem(birth, inf[4].value)
    localStorage.setItem(unv, inf[5].value)
    localStorage.setItem(progr, inf[6].value)
    localStorage.setItem(fdes, inf[7].value)

}