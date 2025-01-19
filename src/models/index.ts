import campaignsModel from './campaigns';
import charactersDndModel from './character';
import dungeonsAndDragonsModels from './dungeons&dragons5e';
import userModels from './user';

const models = {
  'dungeons&dragons5e': dungeonsAndDragonsModels,
  user: userModels,
  campaign: campaignsModel,
  characterDnd: charactersDndModel
};

export default models;
