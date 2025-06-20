# Static Learning Journal

## Folder Structure
```
learning-journal/
├── index.html          # Main index page
├── entry.html          # Entry display page
├── add-entry.html      # Form to add new entries (optional)
├── styles.css          # All styles
├── script.js           # JavaScript functionality
└── entries/            # Markdown files for each entry
    ├── react-hooks-fundamentals.md
    ├── css-grid-layout-system.md
    └── nodejs-async-programming.md
```

## Setup Instructions

1. **Download all files** and create the folder structure above
2. **Create an `entries` folder** and add your markdown files there
3. **Update the entries array** in `script.js` with your actual entries
4. **Host on GitHub Pages**, Netlify, or any static hosting service

## Adding New Entries

1. Create a new `.md` file in the `entries/` folder
2. Add entry metadata to the `entries` array in `script.js`:

```javascript
{
    id: 'your-entry-slug',
    title: 'Your Entry Title',
    preview: 'Brief description...',
    tags: ['tag1', 'tag2'],
    date: '2024-01-15',
    filename: 'your-entry-file.md'
}
```

## GitHub Pages Deployment

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose `main`
5. Your site will be live at `https://yourusername.github.io/repository-name`

## Features

- ✅ Responsive design
- ✅ Search functionality
- ✅ Alphabetical filtering
- ✅ Grid/List view toggle
- ✅ Markdown support
- ✅ Shareable URLs
- ✅ Clean, elegant design
- ✅ No database required
- ✅ Easy to host and maintain

Perfect for personal knowledge management and sharing!