# Redux and Redux Toolkit in React

- Learned about Redux and Redux Toolkit.
- **State, Action and Reducers** studied in Redux.
- Did a **todo** project with redux and redux toolkit.

<h2>Initialisation of redux and redux toolkit</h2>

**For Redux Toolkit :**
```
npm i @reduxjs/toolkit
```

**For core Redux :**
```
npm i react-redux
```

**Importing RTK (Redux-Toolkit) :**
```
// Importing 
import { configureStore } from '@reduxjs/toolkit';        // Creates a store
import { createSlice } from '@reduxjs/toolkit';              // Combines and creates reducer
```

**After installing of Redux with Redux Toolkit in package.json file at dependencies shows :**
```
"dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "@reduxjs/toolkit": "^1.6.1",
    "react-redux": "^7.2.5"
  }
```