import type { Core } from '@strapi/types';
declare const _default: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    /**
     * Handle response errors in a centralized way.
     */
    handleError(ctx: any, error: any, message?: string): any;
    /**
     * Find one redirect
     */
    findOne(ctx: any): Promise<any>;
    /**
     * Find all redirects
     */
    findAll(ctx: any): Promise<void>;
    /**
     * Create a redirect
     */
    create(ctx: any): Promise<any>;
    /**
     * Update a redirect
     */
    update(ctx: any): Promise<any>;
    /**
     * Delete a redirect
     */
    delete(ctx: any): Promise<any>;
    /**
     * Import redirects
     */
    import(ctx: any): Promise<any>;
    /**
     * Trigger publish webhook
     */
    publish(ctx: any): Promise<void>;
};
export default _default;
