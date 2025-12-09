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

// Three dot button JS
const dotButtons = document.querySelectorAll('.dot3-btn');

dotButtons.forEach(btn => {
    const dropdown = btn.closest('.recent-tab-header').querySelector('.dot-menu');

    btn.addEventListener('click', (e) => {
        e.stopPropagation(); 

        const isHidden = dropdown.classList.contains('hidden');

        if (isHidden) {
            dropdown.classList.remove('hidden');
            setTimeout(() => {
                dropdown.classList.add('opa-100', 'scale-100');
                dropdown.classList.remove('opa-0', 'scale-95');
            }, 10);
        } else {
            dropdown.classList.remove('opa-100', 'scale-100');
            dropdown.classList.add('opa-0', 'scale-95');
            setTimeout(() => dropdown.classList.add('hidden'), 150);
        }
    });
});

document.addEventListener('click', (event) => {
    document.querySelectorAll('.dot-menu').forEach(dropdown => {
        const btn = dropdown.closest('.recent-tab-header').querySelector('.dot3-btn');
        const inside = event.target.closest('.dot-menu');
        const toggle = event.target.closest('.dot3-btn');

        if (!inside && !toggle && !dropdown.classList.contains('hidden')) {
            dropdown.classList.remove('opa-100', 'scale-100');
            dropdown.classList.add('opa-0', 'scale-95');
            setTimeout(() => dropdown.classList.add('hidden'), 150);
        }
    });
});
