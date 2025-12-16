import type { Core } from '@strapi/types';
import { ContentType, LifecycleSetting } from '../../../../types/redirectPluginTypes';
declare const _default: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    getSettings(): Promise<any[]>;
    updateSetting(uid: string, changes: Partial<LifecycleSetting>): Promise<any[]>;
    getContentTypes(): Promise<ContentType[]>;
};
export default _default;
