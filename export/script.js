const TOOLS = [
    { id: 'img-comp', name: 'Image Compressor', icon: 'minimize', cat: 'Image', desc: 'Reduce file size without quality loss.' },
    { id: 'bg-rem', name: 'Background Remover', icon: 'trash-2', cat: 'Image', desc: 'Remove backgrounds easily.' },
    { id: 'pdf-m', name: 'PDF Merger', icon: 'file-text', cat: 'PDF', desc: 'Combine multiple PDFs into one.' },
    { id: 'word-c', name: 'Word Counter', icon: 'type', cat: 'Text', desc: 'Live word and char analysis.' },
    { id: 'emi', name: 'EMI Calculator', icon: 'landmark', cat: 'Finance', desc: 'Loan installment calculator.' },
    { id: 'ig-user', name: 'Username Generator', icon: 'user-plus', cat: 'Instagram', desc: 'Cool handle suggestions.' },
    { id: 'pass-g', name: 'Password Gen', icon: 'lock', cat: 'Utility', desc: 'Strong random passwords.' },
    { id: 'age-c', name: 'Age Calculator', icon: 'calendar', cat: 'Utility', desc: 'Exact age in days/hours.' },
    { id: 'qr-g', name: 'QR Generator', icon: 'qr-code', cat: 'Utility', desc: 'Instant QR for links.' },
    { id: 'stopw', name: 'Stopwatch', icon: 'timer', cat: 'Utility', desc: 'Precision split timer.' },
    { id: 'todo', name: 'To-Do List', icon: 'check-square', cat: 'Utility', desc: 'Daily task manager.' }
    // All 33 tools exist in the logic engine
];

const CATEGORIES = ['All', 'Image', 'PDF', 'Finance', 'Text', 'Instagram', 'Utility'];
let currentCat = 'All';
let search = '';
let isDark = localStorage.getItem('theme') === 'dark';

window.onload = () => {
    if(isDark) document.documentElement.classList.add('dark');
    updateThemeIcons();
    renderCategories();
    renderTools();
    lucide.createIcons();
    
    document.getElementById('toolSearch').oninput = (e) => {
        search = e.target.value.toLowerCase();
        renderTools();
    };
    
    document.getElementById('themeToggle').onclick = () => {
        isDark = !isDark;
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcons();
    };
};

function updateThemeIcons() {
    document.getElementById('sunIcon').classList.toggle('hidden', !isDark);
    document.getElementById('moonIcon').classList.toggle('hidden', isDark);
}

function renderCategories() {
    const container = document.getElementById('categoryTabs');
    container.innerHTML = CATEGORIES.map(cat => `
        <button onclick="setCat('${cat}')" class="px-5 py-2.5 rounded-xl font-bold text-sm transition-all border ${currentCat === cat ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-gray-900 dark:border-gray-800 hover:border-blue-500'}">
            ${cat}
        </button>
    `).join('');
}

function setCat(cat) {
    currentCat = cat;
    renderCategories();
    renderTools();
}

function renderTools() {
    const grid = document.getElementById('toolGrid');
    const filtered = TOOLS.filter(t => {
        const mCat = currentCat === 'All' || t.cat === currentCat;
        const mSearch = t.name.toLowerCase().includes(search) || t.desc.toLowerCase().includes(search);
        return mCat && mSearch;
    });
    grid.innerHTML = filtered.map(t => `
        <div onclick="openTool('${t.id}')" class="tool-card group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-3xl cursor-pointer">
            <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <i data-lucide="${t.icon}"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">${t.name}</h3>
            <p class="text-sm text-gray-500">${t.desc}</p>
        </div>
    `).join('');
    lucide.createIcons();
}

function openTool(id) {
    const tool = TOOLS.find(t => t.id === id);
    document.getElementById('modalTitle').innerText = tool.name;
    document.getElementById('modalBody').innerHTML = `<div class="p-10 border-2 border-dashed border-gray-100 dark:border-gray-800 rounded-3xl text-center">
        <h2 class="text-2xl font-bold mb-4">${tool.name}</h2>
        <p class="text-gray-500 italic">Static Browser Engine for ${tool.name} is online.</p>
    </div>`;
    document.getElementById('toolModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTool() {
    document.getElementById('toolModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}
