export type ModelEntity = 'dungeons&dragons5e' | 'user' | 'campaign' | 'characterDnd';

export type DnDEntities =
  | 'Armors'
  | 'Backgrounds'
  | 'Classes'
  | 'Feats'
  | 'Gods'
  | 'Items'
  | 'MagicItems'
  | 'Monsters'
  | 'Races'
  | 'Realms'
  | 'Spells'
  | 'System'
  | 'Weapons'
  | 'Wikis';

export type UserEntities = 'Users' | 'UserDetails';

export type CampaignsEntities = 'Campaigns';

export type CharactersDndEntities = 'CharactersDnd';

export type userStatus = 
| 'done' 
| 'wait-for-new-flow'
| 'wait-to-complete' 
| 'wait-to-confirm' 
| 'wait-to-delete' 
| 'wait-to-verify'
| 'wait-to-confirm'
| 'wait-to-complete'
| 'wait-to-verify'
| 'wait-to-change-email'
| 'wait-to-start-password-change'
| 'wait-to-finish-password-change'
| 'wait-to-delete-user'
| 'wait-to-secret-question'
| 'wait-to-second-auth'
| 'wait-to-activate-secret-question'
| 'wait-to-update-secret-question'
| 'wait-to-activate-two-factor'
| 'wait-to-start-reset-two-factor'
| 'wait-to-finish-reset-two-factor'
| 'wait-to-start-email-change'
| 'wait-to-finish-email-change'
| 'wait-to-reset-profile'
| 'wait-to-finish-delete-user';