import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="unavailable-container">
        <h1>⚠️ Service Unavailable</h1>
        <p>This service is no longer in use.</p>
      </div>
    </div>
  );
}

export default App;

/*
 * ORIGINAL CODE - COMMENTED OUT
 * 
 * This file previously contained a full CS2 training analysis UI with:
 * - Steam ID input and player analysis
 * - Performance metrics (aim, positioning, utility)
 * - Detailed statistics (headshot accuracy, spray control, etc.)
 * - AI-powered training recommendations
 * - Radial progress bars and interactive metric displays
 * - Comparison against rank-based baselines
 * 
 * The original implementation included:
 * - React hooks for state management (useState)
 * - Async API calls to fetch player data
 * - Complex UI components with animations
 * - Performance evaluation logic
 * - Metric definitions and tier-based assessments
 * 
 * All original functionality has been preserved in version control.
 */
