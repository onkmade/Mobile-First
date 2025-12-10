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
dotButtons.forEach(btn => {
    const dropdown = btn.closest('.recent-tab-header').querySelector('.dot-menu');

    btn.addEventListener('click', (e) => {
        e.stopPropagation(); 

        // Close all other dropdowns first
        document.querySelectorAll('.dot-menu').forEach(d => {
            if (d !== dropdown && !d.classList.contains('hidden')) {
                d.classList.remove('opa-100', 'scale-100');
                d.classList.add('opa-0', 'scale-95');
                setTimeout(() => d.classList.add('hidden'), 150);
            }
        });

        // Toggle current dropdown
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
