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

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderLetterFilter();
    renderEntries();
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
    
    // Update button states
    document.querySelectorAll('.letter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    if (letter) {
        document.querySelector(`[data-letter="${letter}"]`).classList.add('active');
    } else {
        document.querySelector('[data-letter=""]').classList.add('active');
    }
    
    searchEntries(); // This will apply both search and letter filter
}

// Render letter filter buttons
function renderLetterFilter() {
    const letters = [...new Set(entries.map(entry => entry.title[0].toUpperCase()))].sort();
    const filterContainer = document.getElementById('letterFilter');
    
    let html = '<button data-filename="pages/StaticExport" data-linenumber="537" data-visual-selector-id="pages/StaticExport537" class="letter-btn active" data-letter="" onclick="filterByLetter(\'\')">All</button>';
    letters.forEach(letter => {
        html += `<button data-filename="pages/StaticExport" data-linenumber="539" data-visual-selector-id="pages/StaticExport539" class="letter-btn" data-letter="${letter}" onclick="filterByLetter('${letter}')">${letter}</button>`;
    });
    
    filterContainer.innerHTML = html;
}

// Render entries
function renderEntries() {
    const container = document.getElementById('entriesContainer');
    
    if (filteredEntries.length === 0) {
        container.innerHTML = `
            <div data-filename="pages/StaticExport" data-linenumber="551" data-visual-selector-id="pages/StaticExport551" style="text-align: center; padding: 48px 0;">
                <div data-filename="pages/StaticExport" data-linenumber="552" data-visual-selector-id="pages/StaticExport552" style="width: 48px; height: 48px; background: #f5f5f4; border-radius: 16px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
                    <svg data-filename="pages/StaticExport" data-linenumber="553" data-visual-selector-id="pages/StaticExport553" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #a8a29e;">
                        <circle data-filename="pages/StaticExport" data-linenumber="554" data-visual-selector-id="pages/StaticExport554" cx="11" cy="11" r="8"></circle>
                        <path data-filename="pages/StaticExport" data-linenumber="555" data-visual-selector-id="pages/StaticExport555" d="m21 21-4.35-4.35"></path>
                    </svg>
                </div>
                <h3 style="font-size: 18px; font-weight: 500; color: #1c1917; margin-bottom: 8px;">No entries found</h3>
                <p data-filename="pages/StaticExport" data-linenumber="559" data-visual-selector-id="pages/StaticExport559" style="color: #78716c;">Try adjusting your search terms or filters</p>
            </div>
        `;
        return;
    }
    
    // Group entries by first letter
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
                <div data-filename="pages/StaticExport" data-linenumber="580" data-visual-selector-id="pages/StaticExport580" class="letter-section">
                    <div data-filename="pages/StaticExport" data-linenumber="581" data-visual-selector-id="pages/StaticExport581" class="letter-header">
                        <div data-filename="pages/StaticExport" data-linenumber="582" data-visual-selector-id="pages/StaticExport582" class="letter-badge">${letter}</div>
                        <div data-filename="pages/StaticExport" data-linenumber="583" data-visual-selector-id="pages/StaticExport583" class="letter-line"></div>
                        <div data-filename="pages/StaticExport" data-linenumber="584" data-visual-selector-id="pages/StaticExport584" class="entry-count">${letterEntries.length} entr${letterEntries.length === 1 ? 'y' : 'ies'}</div>
                    </div>
                    <div data-filename="pages/StaticExport" data-linenumber="586" data-visual-selector-id="pages/StaticExport586" class="entries-grid">
                        ${letterEntries.map(entry => `
                            <div data-filename="pages/StaticExport" data-linenumber="588" data-visual-selector-id="pages/StaticExport588" class="entry-card" onclick="openEntry('${entry.filename}')">
                                <h3 class="entry-title">${entry.title}</h3>
                                <p data-filename="pages/StaticExport" data-linenumber="590" data-visual-selector-id="pages/StaticExport590" class="entry-preview">${entry.preview}</p>
                                <div data-filename="pages/StaticExport" data-linenumber="591" data-visual-selector-id="pages/StaticExport591" class="entry-meta">
                                    <span data-filename="pages/StaticExport" data-linenumber="592" data-visual-selector-id="pages/StaticExport592">📅 ${formatDate(entry.date)}</span>
                                </div>
                                <div data-filename="pages/StaticExport" data-linenumber="594" data-visual-selector-id="pages/StaticExport594" class="entry-tags">
                                    ${entry.tags.map(tag => `
                                        <span data-filename="pages/StaticExport" data-linenumber="596" data-visual-selector-id="pages/StaticExport596" class="tag">
                                            <svg data-filename="pages/StaticExport" data-linenumber="597" data-visual-selector-id="pages/StaticExport597" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path data-filename="pages/StaticExport" data-linenumber="598" data-visual-selector-id="pages/StaticExport598" d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                                                <line data-filename="pages/StaticExport" data-linenumber="599" data-visual-selector-id="pages/StaticExport599" x1="7" y1="7" x2="7.01" y2="7"></line>
                                            </svg>
                                            ${tag}
                                        </span>
                                    `).join('')}
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
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

// Open entry page
function openEntry(filename) {
    window.location.href = `entry.html?file=${filename}`;
}