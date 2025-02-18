declare const config: {
    darkMode: ["class"];
    content: string[];
    prefix: string;
    theme: {
        container: {
            center: true;
            padding: string;
            screens: {
                "2xl": string;
            };
        };
        extend: {
            backgroundImage: {
                "gradient-radial": string;
            };
            colors: {
                border: string;
                input: string;
                ring: string;
                background: string;
                foreground: string;
                primary: {
                    DEFAULT: string;
                    foreground: string;
                };
                "secondary-dark": {
                    DEFAULT: string;
                    foreground: string;
                };
                secondary: {
                    DEFAULT: string;
                    foreground: string;
                };
                "secondary-ligth": {
                    DEFAULT: string;
                    foreground: string;
                };
                destructive: {
                    DEFAULT: string;
                    foreground: string;
                };
                muted: {
                    DEFAULT: string;
                    foreground: string;
                };
                accent: {
                    DEFAULT: string;
                    foreground: string;
                };
                popover: {
                    DEFAULT: string;
                    foreground: string;
                };
                card: {
                    DEFAULT: string;
                    foreground: string;
                };
            };
            borderRadius: {
                lg: string;
                md: string;
                sm: string;
            };
            keyframes: {
                "accordion-down": {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
                "accordion-up": {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
                "label-focus": {
                    from: {
                        fontSize: string;
                    };
                    to: {
                        top: string;
                        fontSize: string;
                        zIndex: string;
                        color: string;
                        background: string;
                        padding: string;
                        fontWeight: string;
                        borderRadius: string;
                    };
                };
                "label-blur": {
                    from: {
                        top: string;
                        fontSize: string;
                        zIndex: string;
                        color: string;
                        background: string;
                        padding: string;
                        fontWeight: string;
                        borderRadius: string;
                    };
                    to: {
                        fontSize: string;
                    };
                };
                shake: {
                    "0%, 100%": {
                        transform: string;
                    };
                    "10%, 30%, 50%, 70%, 90%": {
                        transform: string;
                    };
                    "20%, 40%, 60%, 80%": {
                        transform: string;
                    };
                };
                fadeOutLeft: {
                    "0%": {
                        opacity: string;
                        transform: string;
                    };
                    "100%": {
                        opacity: string;
                        transform: string;
                    };
                };
                fadeOutRight: {
                    "0%": {
                        opacity: string;
                        transform: string;
                    };
                    "100%": {
                        opacity: string;
                        transform: string;
                    };
                };
            };
            animation: {
                "accordion-down": string;
                shake: string;
                fadeOutLeft: string;
                fadeOutRight: string;
                "accordion-up": string;
                "label-focus": string;
                "label-blur": string;
            };
        };
    };
    plugins: any[];
};
export default config;
