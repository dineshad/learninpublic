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
    renderEntries(); // Initial render
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
        document.querySelector('[data-letter="' + letter + '"]').classList.add('active');
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
    
    const container = document.getElementById('entriesContainer');
    if (mode === 'grid') {
        container.classList.add('grid-view-active');
        container.classList.remove('list-view-active');
    } else {
        container.classList.add('list-view-active');
        container.classList.remove('grid-view-active');
    }
}


// Render letter filter buttons
function renderLetterFilter() {
    const letters = [...new Set(entries.map(entry => entry.title[0].toUpperCase()))].sort();
    const filterContainer = document.getElementById('letterFilter');
    
    let html = '<button data-filename="pages/StaticExport" data-linenumber="282" data-visual-selector-id="pages/StaticExport282" class="letter-btn active" data-letter="" onclick="filterByLetter(\'\')">All</button>';
    letters.forEach(letter => {
        html += '<button data-filename="pages/StaticExport" data-linenumber="284" data-visual-selector-id="pages/StaticExport284" class="letter-btn" data-letter="' + letter + '" onclick="filterByLetter(\'' + letter + '\')">' + letter + '</button>';
    });
    
    filterContainer.innerHTML = html;
}

// Render entries
function renderEntries() {
    const container = document.getElementById('entriesContainer');
    
    // Set the view mode class on the container
    setViewMode(currentView);

    if (filteredEntries.length === 0) {
        container.innerHTML = '<div data-filename="pages/StaticExport" data-linenumber="298" data-visual-selector-id="pages/StaticExport298" style="text-align: center; padding: 48px 0; color: #78716c;">No entries found.</div>';
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
            const entryCardsHtml = letterEntries.map(entry => {
                const tagsHtml = entry.tags.slice(0, 4).map(tag => '<span data-filename="pages/StaticExport" data-linenumber="316" data-visual-selector-id="pages/StaticExport316" class="tag">' + tag + '</span>').join('');
                return '<div data-filename="pages/StaticExport" data-linenumber="317" data-visual-selector-id="pages/StaticExport317" class="entry-card" onclick="openEntry(\'' + entry.filename.replace(/'/g, "\\'") + '\')">' +
                           '<div data-filename="pages/StaticExport" data-linenumber="318" data-visual-selector-id="pages/StaticExport318" class="entry-content-wrapper">' +
                               '<h3 class="entry-title">' + entry.title + '</h3>' +
                               '<p data-filename="pages/StaticExport" data-linenumber="320" data-visual-selector-id="pages/StaticExport320" class="entry-preview">' + entry.preview + '</p>' +
                           '</div>' +
                           '<div data-filename="pages/StaticExport" data-linenumber="322" data-visual-selector-id="pages/StaticExport322" class="entry-tags">' + tagsHtml + '</div>' +
                       '</div>';
            }).join('');

            html += '<div data-filename="pages/StaticExport" data-linenumber="326" data-visual-selector-id="pages/StaticExport326" class="letter-section">' +
                        '<div data-filename="pages/StaticExport" data-linenumber="327" data-visual-selector-id="pages/StaticExport327" class="letter-header">' +
                            '<div data-filename="pages/StaticExport" data-linenumber="328" data-visual-selector-id="pages/StaticExport328" class="letter-badge">' + letter + '</div>' +
                            '<div data-filename="pages/StaticExport" data-linenumber="329" data-visual-selector-id="pages/StaticExport329" class="letter-line"></div>' +
                            '<div data-filename="pages/StaticExport" data-linenumber="330" data-visual-selector-id="pages/StaticExport330" class="entry-count">' + letterEntries.length + ' entr' + (letterEntries.length === 1 ? 'y' : 'ies') + '</div>' +
                        '</div>' +
                        '<div data-filename="pages/StaticExport" data-linenumber="332" data-visual-selector-id="pages/StaticExport332" class="entries-grid">' + entryCardsHtml + '</div>' +
                    '</div>';
        });
    
    container.innerHTML = html;
}

// Open entry page
function openEntry(filename) {
    window.location.href = 'entry.html?file=' + filename;
}