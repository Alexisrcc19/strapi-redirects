export interface RedirectImportType {
    source: string;
    destination: string;
    permanent: boolean;
}
interface ValidationResult extends RedirectImportType {
    status: 'VALID' | 'INVALID';
    reason?: string;
    details: {
        type: 'NEW' | 'LOOP_DETECTED' | 'DUPLICATE';
    };
}
declare const parseAndValidateCSV: (data: string) => Promise<ValidationResult[]>;
export { parseAndValidateCSV };
