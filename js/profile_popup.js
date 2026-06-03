/* ═══════════════════════════════════════
   PROFILE POPUP
═══════════════════════════════════════ */
(function () {
    const profileBtn = document.getElementById('profile');
    const profPopup = document.getElementById('profilePopup');
    const profPhotoInput = document.getElementById('profPhotoInput');
    const profAvatarLg = document.getElementById('profAvatarLg');
    const profAvatarImg = document.getElementById('profileAvatarImg');
    const profDisplayName = document.getElementById('profDisplayName');
    const profDisplayEmail = document.getElementById('profDisplayEmail');
    const profOpenProfile = document.getElementById('profOpenProfile');
    const profEditPanel = document.getElementById('profEditPanel');
    const profPanelBack = document.getElementById('profPanelBack');
    const profSaveBtn = document.getElementById('profSaveBtn');
    const profDiscardBtn = document.getElementById('profDiscardBtn');
    const profSavedMsg = document.getElementById('profSavedMsg');
    const profDarkToggle = document.getElementById('profDarkToggle');
    const profToggleTrack = document.getElementById('profToggleTrack');
    const profToggleThumb = document.getElementById('profToggleThumb');
    const profDarkIcon = document.getElementById('profDarkIcon');
    const profLogoutBtn = document.getElementById('profLogoutBtn');

    let profPhotoSrc = null;
    let savedData = {
        name: 'Rambabu Prasad',
        phone: '+91 98765 43210',
        email: 'rbpmicrosoft@gmail.com',
        age: '26'
    };

    /* Open / close popup */
    profileBtn.addEventListener('click', e => {
        e.stopPropagation();
        const isOpen = profPopup.classList.toggle('open');
        if (!isOpen) profEditPanel.classList.remove('open');
        // Menu popup band karo agar khula ho
        closePopup();
    });

    document.addEventListener('click', e => {
        if (!profPopup.contains(e.target) && e.target !== profileBtn) {
            profPopup.classList.remove('open');
        }
    });

    /* Photo upload */
    profAvatarLg.addEventListener('click', () => profPhotoInput.click());
    profPhotoInput.addEventListener('change', e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
            profPhotoSrc = ev.target.result;

            // 1. Popup ke andar bada avatar update karo
            let img1 = profAvatarLg.querySelector('img');
            if (!img1) { img1 = document.createElement('img'); profAvatarLg.appendChild(img1); }
            img1.src = profPhotoSrc;
            profAvatarLg.childNodes.forEach(n => { if (n.nodeType === 3) n.textContent = ''; });

            // 2. Navbar #profile ka SVG hatao, photo dikhao
            const profileDiv = document.getElementById('profile');
            profileDiv.innerHTML = '';
            const navImg = document.createElement('img');
            navImg.src = profPhotoSrc;
            navImg.alt = 'profile photo';
            navImg.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:50%;';
            profileDiv.appendChild(navImg);
        };
        reader.readAsDataURL(file);
    });

    /* Open profile edit panel */
    profOpenProfile.addEventListener('click', () => profEditPanel.classList.add('open'));
    profPanelBack.addEventListener('click', () => profEditPanel.classList.remove('open'));

    /* Save */
    profSaveBtn.addEventListener('click', () => {
        savedData = {
            name: document.getElementById('profFieldName').value.trim(),
            phone: document.getElementById('profFieldPhone').value.trim(),
            email: document.getElementById('profFieldEmail').value.trim(),
            age: document.getElementById('profFieldAge').value.trim()
        };
        profDisplayName.textContent = savedData.name || 'User';
        profDisplayEmail.textContent = savedData.email || '';
        if (!profPhotoSrc) {
            const initials = savedData.name.split(' ').map(w => w[0] || '').join('').toUpperCase().slice(0, 2) || 'U';
            const overlay = profAvatarLg.querySelector('.prof-avatar-overlay');
            profAvatarLg.textContent = '';
            profAvatarLg.appendChild(document.createTextNode(initials));
            if (overlay) profAvatarLg.appendChild(overlay);
            profAvatarLg.appendChild(profPhotoInput);
        }
        profSavedMsg.classList.add('show');
        setTimeout(() => profSavedMsg.classList.remove('show'), 2500);
    });

    /* Discard */
    profDiscardBtn.addEventListener('click', () => {
        document.getElementById('profFieldName').value = savedData.name;
        document.getElementById('profFieldPhone').value = savedData.phone;
        document.getElementById('profFieldEmail').value = savedData.email;
        document.getElementById('profFieldAge').value = savedData.age;
        profSavedMsg.classList.remove('show');
        profEditPanel.classList.remove('open');
    });

    /* Dark mode toggle (profile popup wala) */
    profDarkToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark');
        profToggleTrack.classList.toggle('on', isDark);
        profToggleThumb.textContent = isDark ? '☀️' : '🌙';
        profDarkIcon.className = isDark ? 'ti ti-sun' : 'ti ti-moon';
    });

    /* Logout */
    profLogoutBtn.addEventListener('click', () => {
        profPopup.classList.remove('open');
        if (confirm('Aap logout karna chahte hain?')) {
            alert('Successfully logged out!');
        }
    });
})();