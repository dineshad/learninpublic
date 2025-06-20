// Sample data - replace with your actual entries
const entries = [
    {
        id: 'react-hooks-fundamentals',
        title: 'React Hooks Fundamentals',
        preview: 'Hooks are functions that let you use state and other React features without writing a class component.',
        tags: ['react', 'javascript', 'frontend', 'hooks'],
        date: '2024-01-15',
        filename: 'react-hooks-fundamentals.md'
    },
    {
        id: 'css-grid-layout-system',
        title: 'CSS Grid Layout System',
        preview: 'CSS Grid is a two-dimensional layout system that revolutionizes web layouts.',
        tags: ['css', 'layout', 'grid', 'frontend'],
        date: '2024-01-12',
        filename: 'css-grid-layout-system.md'
    },
    {
        id: 'nodejs-async-programming',
        title: 'Node.js Async Programming',
        preview: 'Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.',
        tags: ['nodejs', 'javascript', 'async', 'backend'],
        date: '2024-01-10',
        filename: 'nodejs-async-programming.md'
    }
];

let filteredEntries = [...entries];
let selectedLetter = '';
let currentView = 'grid';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderLetterFilter();
    setViewMode(currentView);
});

// Search functionality
function searchEntries() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredEntries = entries.filter(entry => {
        const matchesSearch = !searchTerm || 
            entry.title.toLowerCase().includes(searchTerm) ||
            entry.preview.toLowerCase().includes(searchTerm) ||
            entry.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        
        const matchesLetter = !selectedLetter || 
            entry.title.toLowerCase().startsWith(selectedLetter.toLowerCase());
        
        return matchesSearch && matchesLetter;
    });
    
    renderEntries();
}

// Letter filter functionality
function filterByLetter(letter) {
    selectedLetter = letter;
    
    document.querySelectorAll('.letter-btn').forEach(btn => btn.classList.remove('active'));
    
    if (letter) {
        document.querySelector(`[data-letter="${letter}"]`).classList.add('active');
    } else {
        document.querySelector('[data-letter=""]').classList.add('active');
    }
    
    searchEntries(); // Re-filter with new letter
}

// Set the view mode
function setViewMode(mode) {
    currentView = mode;
    document.getElementById('grid-view-btn').classList.toggle('active', mode === 'grid');
    document.getElementById('list-view-btn').classList.toggle('active', mode === 'list');
    renderEntries(); // Re-render to apply the new view
}


// Render letter filter buttons
function renderLetterFilter() {
    const letters = [...new Set(entries.map(entry => entry.title[0].toUpperCase()))].sort();
    const filterContainer = document.getElementById('letterFilter');
    
    let html = '<button data-filename="pages/StaticExport" data-linenumber="275" data-visual-selector-id="pages/StaticExport275" class="letter-btn active" data-letter="" onclick="filterByLetter(\'\')">All</button>';
    letters.forEach(letter => {
        html += `<button data-filename="pages/StaticExport" data-linenumber="277" data-visual-selector-id="pages/StaticExport277" class="letter-btn" data-letter="${letter}" onclick="filterByLetter('${letter}')">${letter}</button>`;
    });
    
    filterContainer.innerHTML = html;
}

// Render entries
function renderEntries() {
    const container = document.getElementById('entriesContainer');
    
    if (filteredEntries.length === 0) {
        container.innerHTML = `<div data-filename="pages/StaticExport" data-linenumber="288" data-visual-selector-id="pages/StaticExport288" style="text-align: center; padding: 48px 0; color: #78716c;">No entries found.</div>`;
        return;
    }
    
    const groupedEntries = {};
    filteredEntries.forEach(entry => {
        const letter = entry.title[0].toUpperCase();
        if (!groupedEntries[letter]) {
            groupedEntries[letter] = [];
        }
        groupedEntries[letter].push(entry);
    });
    
    let html = '';
    Object.entries(groupedEntries)
        .sort(([a], [b]) => a.localeCompare(b))
        .forEach(([letter, letterEntries]) => {
            html += `
                <div data-filename="pages/StaticExport" data-linenumber="306" data-visual-selector-id="pages/StaticExport306" class="letter-section">
                    <div data-filename="pages/StaticExport" data-linenumber="307" data-visual-selector-id="pages/StaticExport307" class="letter-header">
                        <div data-filename="pages/StaticExport" data-linenumber="308" data-visual-selector-id="pages/StaticExport308" class="letter-badge">${letter}</div>
                        <div data-filename="pages/StaticExport" data-linenumber="309" data-visual-selector-id="pages/StaticExport309" class="letter-line"></div>
                        <div data-filename="pages/StaticExport" data-linenumber="310" data-visual-selector-id="pages/StaticExport310" class="entry-count">${letterEntries.length} entr${letterEntries.length === 1 ? 'y' : 'ies'}</div>
                    </div>
                    <div data-filename="pages/StaticExport" data-linenumber="312" data-visual-selector-id="pages/StaticExport312" class="entries-grid ${currentView === 'grid' ? 'view-grid' : 'view-list'}">
                        ${letterEntries.map(entry => `
                            <div data-filename="pages/StaticExport" data-linenumber="314" data-visual-selector-id="pages/StaticExport314" class="entry-card" onclick="openEntry('${entry.filename}')">
                                <div data-filename="pages/StaticExport" data-linenumber="315" data-visual-selector-id="pages/StaticExport315" class="entry-content-wrapper">
                                    <h3 class="entry-title">${entry.title}</h3>
                                    <p data-filename="pages/StaticExport" data-linenumber="317" data-visual-selector-id="pages/StaticExport317" class="entry-preview">${entry.preview}</p>
                                </div>
                                <div data-filename="pages/StaticExport" data-linenumber="319" data-visual-selector-id="pages/StaticExport319" class="entry-tags">
                                    ${entry.tags.slice(0, 4).map(tag => `<span data-filename="pages/StaticExport" data-linenumber="320" data-visual-selector-id="pages/StaticExport320" class="tag">${tag}</span>`).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
    
    container.innerHTML = html;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Open entry page
function openEntry(filename) {
    window.location.href = `entry.html?file=${filename}`;
}