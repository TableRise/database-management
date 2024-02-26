import campaignsModel from './campaigns';
import dungeonsAndDragonsModels from './dungeons&dragons5e';
import userModels from './user';

const models = {
  'dungeons&dragons5e': dungeonsAndDragonsModels,
  user: userModels,
  campaign: campaignsModel,
};

export default models;
