import type { Core } from '@strapi/types';
declare const _default: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    getContentTypes(ctx: any): Promise<void>;
    getSettings(ctx: any): Promise<void>;
    updateSettings(ctx: any): Promise<any>;
};
export default _default;
