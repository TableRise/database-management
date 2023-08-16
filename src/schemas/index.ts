import { z } from 'zod';
import dungeonsAndDragons5eSchemas from "./dungeons&dragons5e";
import languagesWrapperSchema from "./languagesWrapperSchema";
import updateContentZodSchema from "./updateContentSchema";

const schemas = {
    'dungeons&dragons5e': {
        ...dungeonsAndDragons5eSchemas,
        updateContentZodSchema,
        helpers: { languagesWrapperSchema }
    },
}

export type SchemasDnDType = typeof schemas['dungeons&dragons5e'];
export default schemas;
