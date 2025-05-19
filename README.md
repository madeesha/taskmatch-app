# TaskMatch React Application

## Folder Structure

```
taskmatch-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Layout.js
│   │   │   └── Header.js
│   │   ├── Pages/
│   │   │   └── HomePage.js
│   │   ├── Common/
│   │   │   └── HeroSection.js
│   │   └── Tasks/
│   │       ├── TaskGrid.js
│   │       └── TaskCard.js
│   ├── contexts/
│   │   └── AppContext.js
│   ├── styles/
│   │   └── theme.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Installation & Setup

1. Create a new React app directory:
   ```bash
   mkdir taskmatch-app
   cd taskmatch-app
   ```

2. Initialize the project:
   ```bash
   npm init react-app .
   ```

3. Install Material-UI dependencies:
   ```bash
   npm install @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom
   ```

4. Replace the files with the provided code files.

5. Start the development server:
   ```bash
   npm start
   ```

## Features Implemented

- **Responsive Header**: Matches the TaskMatch design with navigation items
- **Hero Section**: Large hero with illustration area and call-to-action buttons
- **Task Cards**: Grid layout displaying featured tasks with icons, descriptions, and pricing
- **Material-UI Theme**: Custom theme matching TaskMatch colors and styling
- **Context API**: State management for tasks and user data
- **Responsive Design**: Works on mobile and desktop

## Components Overview

### Layout Components
- **Layout.js**: Main layout wrapper
- **Header.js**: Navigation header with logo and menu items

### Page Components
- **HomePage.js**: Main landing page

### Common Components
- **HeroSection.js**: Hero section with headline and illustration

### Task Components
- **TaskGrid.js**: Grid layout for displaying tasks
- **TaskCard.js**: Individual task card component

### Context
- **AppContext.js**: Global state management using React Context API

### Styles
- **theme.js**: Material-UI theme configuration
- **index.css**: Global CSS styles

## Customization

The application is structured to be easily customizable:

1. **Colors**: Modify the theme colors in `src/styles/theme.js`
2. **Components**: Add new components in their respective folders
3. **State**: Extend the context in `src/contexts/AppContext.js`
4. **Tasks**: Modify the initial tasks data in the context file

## Next Steps

To complete the TaskMatch application:

1. Add routing for different pages (Browse Tasks, Post Task, etc.)
2. Implement authentication system
3. Add task filtering and search functionality
4. Create task detail pages
5. Implement user profiles and messaging
6. Add real API integration