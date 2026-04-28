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

/* ORIGINAL CODE - COMMENTED OUT

import React, { useState } from 'react';
import './App.css';

function App_OLD() {
  const [steamId, setSteamId] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [expandedMetric, setExpandedMetric] = useState(null);

  const metricDefinitions = {
    'aim': 'Overall aim skill rating based on accuracy, crosshair placement, and target acquisition',
    'positioning': 'How well you position yourself on the map for advantageous engagements',
    'utility': 'Effectiveness of grenade usage including smokes, flashes, and HE grenades',
    'accuracy_head': 'Percentage of shots that result in headshots kills',
    'accuracy_enemy_spotted': 'Accuracy when shooting at enemies visible in your field of view',
    'spray_accuracy': 'Accuracy when controlling weapon spray (rifles only)',
    'counter_strafing_good_shots_ratio': 'Percentage of shots taken with proper counter-strafing technique',
    'preaim': 'Average distance needed to move crosshair and damage enemies after first appearance',
    'reaction_time_ms': 'Average time to damage enemies after first appearance',
    'flashbang_hit_foe_per_flashbang': 'Average number of enemies blinded per flashbang thrown',
    'he_foes_damage_avg': 'Average damage dealt to enemies with HE grenades',
    'utility_on_death_avg': 'Average utility value remaining after death',
    'ct_leetify': 'Performance rating specifically on CT side',
    't_leetify': 'Performance rating specifically on T side',
    'clutch': 'Performance in clutch situations (1vX scenarios)',
    'opening': 'Performance in opening duels at round start'
  };

  const analyzePlayer = async () => {
    if (!steamId.trim()) {
      setError('Please enter a Steam ID');
      return;
    }

    setLoading(true);
    setError('');
    setResults(null);

    try {
      const response = await fetch(`https://cs-project1-827962626003.us-central1.run.app/analyze/${steamId}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Analysis failed');
      }

      console.log('Analysis data:', data.analysis);
      console.log('Reference values:', data.analysis.reference_values);
      setResults(data);
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      analyzePlayer();
    }
  };

  // Function to evaluate performance using Leetify tier labels from Elasticsearch
  const evaluatePerformance = (diffValue, metricKey) => {
    if (!results?.analysis?.leetify_tiers) {
      return 'Average';
    }
    
    const thresholds = {
      'aim': 1.0,
      'positioning': 1.0,
      'utility': 1.0,
      'accuracy_enemy_spotted': 1.0,
      'accuracy_head': 1.0,
      'counter_strafing_good_shots_ratio': 1.0,
      'spray_accuracy': 1.0,
      'ct_leetify': 1.0,
      't_leetify': 1.0,
      'clutch': 1.0,
      'opening': 1.0,
      'he_foes_damage_avg': 0.1,
      'preaim': -0.2,
      'flashbang_hit_foe_per_flashbang': 0.05,
      'reaction_time_ms': 10,
      'utility_on_death_avg': -5
    };
    
    const tiers = results.analysis.leetify_tiers;
    const weight = thresholds[metricKey] || 1.0;
    const evalValue = diffValue * Math.sign(weight);
    
    // Apply weight to leetify tier thresholds
    if (evalValue >= tiers.great?.[0] * weight) {
      return 'Great';
    } else if (evalValue >= tiers.good?.[0] * weight) {
      return 'Good';
    } else if (evalValue >= tiers.average?.[0] * weight && evalValue <= tiers.average?.[1] * weight) {
      return 'Average';
    } else if (evalValue >= tiers.subpar?.[0] * weight) {
      return 'Subpar';
    } else {
      return 'Poor';
    }
  };

  // Helper function to format AI recommendations
  const formatRecommendations = (text) => {
    if (!text) return '';
    
    return text
      .split('\n')
      .map((line, index) => {
        // Handle bullet points (single asterisk at start of line)
        if (line.trim().startsWith('* ')) {
          const content = line.replace(/^\s*\*\s*/, '');
          let formattedContent = content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*([^*]+)\*/g, '<em>$1</em>')
            .replace(/\[([^\]]+)\]/g, '<span class="metric-highlight">$1</span>');
          return `<li key="${index}">${formattedContent}</li>`;
        }
        // Handle bold text (double asterisks)
        else {
          let formattedLine = line
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*([^*]+)\*/g, '<em>$1</em>')
            .replace(/\[([^\]]+)\]/g, '<span class="metric-highlight">$1</span>');
          return formattedLine ? `<p key="${index}">${formattedLine}</p>` : '';
        }
      })
      .join('');
  };

  // Extract score from AI recommendations
  const extractScore = (text) => {
    const match = text.match(/\*\*Overall Score:\s*(\d+)\/100\*\*/i);
    return match ? parseInt(match[1]) : null;
  };

  // All the JSX and component code was here...
  // (Removed for brevity - full UI implementation with metrics, charts, etc.)
  
  return null; // Original return statement was complex JSX
}

END OF COMMENTED CODE */
