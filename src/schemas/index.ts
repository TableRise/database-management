import dungeonsAndDragons5eSchemas from "./dungeons&dragons5e";
import languagesWrapperSchema from "./languagesWrapperSchema";
import updateContentZodSchema from "./updateContentSchema";

export default {
    'dungeons&dragons5e': {
        ...dungeonsAndDragons5eSchemas,
        updateContentZodSchema,
        helpers: { languagesWrapperSchema }
    },
}