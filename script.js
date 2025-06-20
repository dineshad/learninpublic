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
 
];

let filteredEntries = [...entries];
let selectedLetter = '';
let currentView = 'grid';

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
    
    let html = '<button data-filename="pages/StaticExport" data-linenumber="684" data-visual-selector-id="pages/StaticExport684" class="letter-btn active" data-letter="" onclick="filterByLetter(\'\')">All</button>';
    letters.forEach(letter => {
        html += `<button data-filename="pages/StaticExport" data-linenumber="686" data-visual-selector-id="pages/StaticExport686" class="letter-btn" data-letter="${letter}" onclick="filterByLetter('${letter}')">${letter}</button>`;
    });
    
    filterContainer.innerHTML = html;
}

// Render entries
function renderEntries() {
    const container = document.getElementById('entriesContainer');
    
    if (filteredEntries.length === 0) {
        container.innerHTML = `
            <div data-filename="pages/StaticExport" data-linenumber="698" data-visual-selector-id="pages/StaticExport698" style="text-align: center; padding: 48px 0;">
                <div data-filename="pages/StaticExport" data-linenumber="699" data-visual-selector-id="pages/StaticExport699" style="width: 48px; height: 48px; background: #f5f5f4; border-radius: 16px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
                    <svg data-filename="pages/StaticExport" data-linenumber="700" data-visual-selector-id="pages/StaticExport700" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: #a8a29e;">
                        <circle data-filename="pages/StaticExport" data-linenumber="701" data-visual-selector-id="pages/StaticExport701" cx="11" cy="11" r="8"></circle>
                        <path data-filename="pages/StaticExport" data-linenumber="702" data-visual-selector-id="pages/StaticExport702" d="m21 21-4.35-4.35"></path>
                    </svg>
                </div>
                <h3 style="font-size: 18px; font-weight: 500; color: #1c1917; margin-bottom: 8px;">No entries found</h3>
                <p data-filename="pages/StaticExport" data-linenumber="706" data-visual-selector-id="pages/StaticExport706" style="color: #78716c;">Try adjusting your search terms or filters</p>
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
                <div data-filename="pages/StaticExport" data-linenumber="727" data-visual-selector-id="pages/StaticExport727" class="letter-section">
                    <div data-filename="pages/StaticExport" data-linenumber="728" data-visual-selector-id="pages/StaticExport728" class="letter-header">
                        <div data-filename="pages/StaticExport" data-linenumber="729" data-visual-selector-id="pages/StaticExport729" class="letter-badge">${letter}</div>
                        <div data-filename="pages/StaticExport" data-linenumber="730" data-visual-selector-id="pages/StaticExport730" class="letter-line"></div>
                        <div data-filename="pages/StaticExport" data-linenumber="731" data-visual-selector-id="pages/StaticExport731" class="entry-count">${letterEntries.length} entr${letterEntries.length === 1 ? 'y' : 'ies'}</div>
                    </div>
                    <div data-filename="pages/StaticExport" data-linenumber="733" data-visual-selector-id="pages/StaticExport733" class="entries-grid ${currentView === 'grid' ? 'view-grid' : 'view-list'}">
                        ${letterEntries.map(entry => `
                            <div data-filename="pages/StaticExport" data-linenumber="735" data-visual-selector-id="pages/StaticExport735" class="entry-card" onclick="openEntry('${entry.filename}')">
                                <div data-filename="pages/StaticExport" data-linenumber="736" data-visual-selector-id="pages/StaticExport736" class="entry-content-wrapper">
                                    <h3 class="entry-title">${entry.title}</h3>
                                    <p data-filename="pages/StaticExport" data-linenumber="738" data-visual-selector-id="pages/StaticExport738" class="entry-preview">${entry.preview}</p>
                                    <div data-filename="pages/StaticExport" data-linenumber="739" data-visual-selector-id="pages/StaticExport739" class="entry-meta">
                                        <span data-filename="pages/StaticExport" data-linenumber="740" data-visual-selector-id="pages/StaticExport740">📅 ${formatDate(entry.date)}</span>
                                    </div>
                                </div>
                                <div data-filename="pages/StaticExport" data-linenumber="743" data-visual-selector-id="pages/StaticExport743" class="entry-tags">
                                    ${entry.tags.slice(0, 4).map(tag => `
                                        <span data-filename="pages/StaticExport" data-linenumber="745" data-visual-selector-id="pages/StaticExport745" class="tag">${tag}</span>
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
