import campaignsModel from './campaigns';
import charactersDndModel from './character';
import dungeonsAndDragonsModels from './dungeons&dragons5e';
import userModels from './user';
import internalModel from './internal'

const models = {
  'dungeons&dragons5e': dungeonsAndDragonsModels,
  user: userModels,
  campaign: campaignsModel,
  characterDnd: charactersDndModel,
  internal: internalModel
};

export default models;
