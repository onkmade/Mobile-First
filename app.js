const profileBtn = document.getElementById('profile-icon');
const dropdownmenu = document.getElementById('user-dropdownmenu');

function usermenu(){
    const ishidden = dropdownmenu.classList.contains('hidden')
    if(ishidden){
        dropdownmenu.classList.remove('hidden');
        setTimeout(()=>{
            dropdownmenu.classList.add('opa-100', 'scale-100');
            dropdownmenu.classList.remove('opa-0', 'scale-95');
        }, 10);
    } else {
        dropdownmenu.classList.remove('opa-100', 'scale-100');
        dropdownmenu.classList.add('opa-0', 'scale-95');
        setTimeout(()=>{ dropdownmenu.classList.add('hidden'); }, 150);
    }
}

document.addEventListener('click', (event) => {
    if (!dropdownmenu) return;
    const inside = event.target.closest('#user-dropdownmenu');
    const toggle = event.target.closest('#profile-icon');
    if (!inside && !toggle && !dropdownmenu.classList.contains('hidden')) {
      dropdownmenu.classList.remove('opa-100', 'scale-100');
      dropdownmenu.classList.add('opa-0', 'scale-95');
      setTimeout(() => dropdownmenu.classList.add('hidden'), 150);
    }
});

