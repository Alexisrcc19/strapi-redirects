interface RedirectData {
    source: string;
    destination: string;
    permanent: boolean;
}
interface ValidationResult {
    ok: boolean;
    errorMessage?: string;
    details?: any;
}
/**
 * Validates a redirect by checking for duplicates and loops.
 *
 * @param redirectData The redirect data.
 * @param id Optional ID of the redirect for update.
 * @returns The validation result.
 */
export declare function validateRedirect(redirectData: RedirectData, id?: string | undefined): Promise<ValidationResult>;
export {};
