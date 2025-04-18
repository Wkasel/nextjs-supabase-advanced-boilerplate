/**
 * User query keys
 */

export const userKeys = {
    all: ["users"] as const,
    lists: () => [...userKeys.all, "list"] as const,
    list: (filters?: Record<string, any>) =>
        [...userKeys.lists(), { ...filters }] as const,
    details: () => [...userKeys.all, "detail"] as const,
    detail: (id: string) => [...userKeys.details(), id] as const,
    profile: (id: string) => [...userKeys.all, "profile", id] as const,
};
