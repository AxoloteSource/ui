export declare const useSidebar: () => {
    semidark: string | boolean;
    toggleSidebar: () => void;
    t: import('i18next').TFunction<"translation", undefined>;
    currentMenu: string;
    toggleMenu: (value: string) => void;
};
