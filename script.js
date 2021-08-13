// Navbar

const navIcons = document.querySelectorAll('.nav-icon')

navIcons.forEach((navIcon)=>{
    navIcon.addEventListener('click', () =>{
        removeactiveclasses()
        navIcon.classList.add('active')
    } )
})

function removeactiveclasses(){
    navIcons.forEach((navIcon)=>{
        navIcon.classList.remove('active')
    })
}
