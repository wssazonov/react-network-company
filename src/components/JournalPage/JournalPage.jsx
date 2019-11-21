import React from 'react';
import JournalTable from './JournalTable/JournalTable';
import { Dropdown } from 'semantic-ui-react';
import './JournalTable/JournalTable.scss';

const mockJournalData = [
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
    { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
  { 
    createdAt: new Date().toISOString(), 
    event: [
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
      {_id: '5da0a704613209b4eafe42c6', guid: 'f6aeadd7-1f71-4cc5-a718-b96a26a82b04', isActive: false}, 
    ] 
  },
];

const dateFilterOptions = [
  {
    key: '1 января 2019 - 1 сентября 2019',
    text: '1 января 2019 - 1 сентября 2019',
    value: '1 января 2019 - 1 сентября 2019',
  },
  {
    key: '1 сентября 2019 - 1 октября 2019',
    text: '1 сентября 2019 - 1 октября 2019',
    value: '1 сентября 2019 - 1 октября 2019',
  },
];
function JournalPage() {
  const handleUnford = event => console.log('Clicked Unfold');
  const handleShowAll = event => console.log('Clicked show all');

  return (
    <div className="page-content">
      <h1>Журнал</h1>
      <p className="regular-text">Сюда записывается всё, что происходит в системе.</p>
      <div className='flex-row'>
        <Dropdown
            defaultValue='1 января 2019 - 1 сентября 2019'
            fluid
            icon='angle down'
            className="app-dropdown-button journal-dropdown"
            selection
            options={ dateFilterOptions }
        />
        <button className="secondary-button borderless show-all-button" onClick={ handleShowAll }>Показать за всё время</button>
      </div>
      <JournalTable 
        events={ mockJournalData } 
        onUnfold={ handleUnford } 
      />
    </div>
  );
}

export default JournalPage;