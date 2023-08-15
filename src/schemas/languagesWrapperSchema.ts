import { z, ZodObject } from 'zod';

export default (zodSchema: ZodObject<any>): ZodObject<any> => {
    const languagesZodSchema = z.object({
        en: zodSchema,
        pt: zodSchema,
    });

    return languagesZodSchema;
};
