import type { Core } from '@strapi/types';
import { CodeBuildClient } from '@aws-sdk/client-codebuild';
import { RedirectInput, ImportResult, FindAllResponse, FindAllParams } from '../../../../types/redirectPluginTypes';
declare const _default: ({ strapi, }: {
    strapi: Core.Strapi;
}) => {
    codebuildClient: CodeBuildClient;
    format: (urlTemplate: string, fieldValue: string, locale?: string) => string;
    findOne: (id: string) => Promise<import("@strapi/types/dist/modules/documents").AnyDocument>;
    findAll: (params?: FindAllParams) => Promise<FindAllResponse>;
    create: (redirect: RedirectInput) => Promise<import("@strapi/types/dist/modules/documents").AnyDocument>;
    update: (id: string, redirectData: RedirectInput) => Promise<import("@strapi/types/dist/modules/documents").AnyDocument>;
    delete: (documentId: string) => Promise<{
        documentId: string;
        entries: import("@strapi/types/dist/modules/documents").AnyDocument[];
    }>;
    import: (data: (RedirectInput & Partial<{
        status: string;
    }>)[]) => Promise<ImportResult[]>;
    publish: (stage?: string) => Promise<{
        status: string;
    }>;
} & Core.CoreAPI.Service.Base;
export default _default;
