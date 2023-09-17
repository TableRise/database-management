import { z } from 'zod';

const usersZodSchema = z.object({
    providerId: z.string().nullable(),
    email: z.string().email(),
    password: z.string().min(8).max(16),
    nickname: z.string().max(16).nullable(),
    tag: z.string().length(4),
    picture: z.string().max(120).optional().nullable(),
    createdAt: z.string(),
    updatedAt: z.string()
});

export type User = z.infer<typeof usersZodSchema>;

export default usersZodSchema;
