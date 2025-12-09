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


const dotmenu = document.getElementById('dot-menu');
const dot3btn = document.getElementById('dot3-btn');

function threedotmenu(){
    const isHidden = dotmenu.classList.contains('hidden');

    if(isHidden){
        dotmenu.classList.remove('hidden');
        setTimeout( () => {
            dotmenu.classList.add('opa-100', 'scale-100');
            dotmenu.classList.remove('opa-0', 'scale-95');
        }, 10);
    }  else {
        dotmenu.classList.remove('opa-100', 'scale-100');
        dotmenu.classList.add('opa-0', 'scale-95');
        setTimeout(()=>{ dotmenu.classList.add('hidden'); }, 150);
    }

    document.addEventListener('click', (event)=> {
        if(!dotmenu) return;

        const inside = event.target.closest('#dot-menu');
        const toggle = event.target.closest('#dot3-btn');
        if(!inside && !toggle && !dotmenu.classList.contains('hidden')){
            dotmenu.classList.remove('opa-100', 'scale-100');
            dotmenu.classList.add('opa-0', 'scale-95');
            setTimeout(()=>{ dotmenu.classList.add('hidden'); }, 150);
        }
    });
}
