interface UseAccordionParams {
    open: boolean;
    duration?: number;
}
interface UseAccordionReturn {
    contentRef: React.RefObject<HTMLDivElement | null>;
    containerStyle: React.CSSProperties;
}
/**
 * useAccordion centralizes the expand/collapse height animation logic.
 * It measures the content's scrollHeight when open and animates max-height.
 */
export declare function useAccordion({ open, duration }: UseAccordionParams): UseAccordionReturn;
export default useAccordion;
