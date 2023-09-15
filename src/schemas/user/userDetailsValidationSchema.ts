import { z } from 'zod';

const gameInfoZodSchema = z.object({
    campaigns: z.array(z.string().length(16)),
    characters: z.array(z.string().length(16)),
    badges: z.array(z.string().length(16)),
});

const secretQuestionZodSchema = z.object({
    question: z.string().max(120),
    answer: z.string().max(80)
});

const userDetailsZodSchema = z.object({
    userId: z.string().length(16).optional(),
    firstName: z.string().max(16).nullable(),
    lastName: z.string().max(80).nullable(),
    pronoun: z.enum(['he/his', 'she/her', 'he/his - she/her', 'neutral']).nullable(),
    secretQuestion: secretQuestionZodSchema.nullable(),
    birthday: z.string().regex(new RegExp('^\d{4}/(0[1-9]|1[0-2])/(0[1-9]|[12]\d|3[01])$')).nullable(),
    gameInfo: gameInfoZodSchema,
    biography: z.string().max(500).nullable(),
    role: z.enum(['user', 'admin'])
});

export type UserDetail = z.infer<typeof userDetailsZodSchema>;
export type UserSecretQuestion = z.infer<typeof secretQuestionZodSchema>;
export type UserGameInfo = z.infer<typeof gameInfoZodSchema>;

export default userDetailsZodSchema;
