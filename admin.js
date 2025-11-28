class ContentEditor {
    constructor() {
        this.isEditing = false;
        this.init();
    }

    init() {
        console.log('Content Editor initialized');
    }
}

createEditButton() {
    const editBtn = document.createElement('button');
    editBtn.id = 'editContentBtn';
    editBtn.innerHTML = '✏️ Редактировать';
    editBtn.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        background: #007bff;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
    `;
    document.body.appendChild(editBtn);
}
setupEventListeners() {
    document.getElementById('editContentBtn').addEventListener('click', () => {
        this.toggleEditMode();
    });
}

toggleEditMode() {
    this.isEditing = !this.isEditing;
    alert(this.isEditing ? 'Режим редактирования включен' : 'Режим редактирования выключен');
}
enterEditMode() {
    this.makeContentEditable();
    const btn = document.getElementById('editContentBtn');
    btn.innerHTML = '💾 Сохранить';
    btn.style.background = '#28a745';
}

exitEditMode() {
    this.makeContentNotEditable();
    const btn = document.getElementById('editContentBtn');
    btn.innerHTML = '✏️ Редактировать';
    btn.style.background = '#007bff';
}
makeContentEditable() {
    const editableElements = document.querySelectorAll('h1, h2, h3, p, .card-text');
    editableElements.forEach(element => {
        element.setAttribute('contenteditable', 'true');
        element.style.border = '2px dashed #007bff';
        element.style.padding = '5px';
    });
}

makeContentNotEditable() {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(element => {
        element.removeAttribute('contenteditable');
        element.style.border = '';
        element.style.padding = '';
    });
}
constructor() {
    this.isEditing = false;
    this.edits = {};
    this.init();
}

loadSavedEdits() {
    const saved = localStorage.getItem('cosmicExplorerEdits');
    if (saved) {
        this.edits = JSON.parse(saved);
    }
}

saveEdits() {
    localStorage.setItem('cosmicExplorerEdits', JSON.stringify(this.edits));
}
constructor() {
    this.isEditing = false;
    this.edits = {};
    this.init();
}

loadSavedEdits() {
    const saved = localStorage.getItem('cosmicExplorerEdits');
    if (saved) {
        this.edits = JSON.parse(saved);
    }
}

saveEdits() {
    localStorage.setItem('cosmicExplorerEdits', JSON.stringify(this.edits));
}
editBtn.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    background: linear-gradient(45deg, #007bff, #0056b3);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
    transition: all 0.3s ease;
`;
editBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 6px 20px rgba(0, 123, 255, 0.4)';
});

editBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 15px rgba(0, 123, 255, 0.3)';
});
showSaveNotification() {
    const notification = document.createElement('div');
    notification.innerHTML = '✅ Изменения сохранены';
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 9999;
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}
init() {
    try {
        this.createEditButton();
        this.loadSavedEdits();
        this.setupEventListeners();
        console.log('Content Editor successfully initialized');
    } catch (error) {
        console.error('Error initializing Content Editor:', error);
    }
}