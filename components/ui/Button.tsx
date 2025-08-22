import { IconChevronRight } from "@tabler/icons-react"

type ButtonVariant = 'default' | 'disabled' | 'info' | 'warning' | 'error' | 'success';

interface Props {
    content: string;
    onClick?: () => void;
    className?: string;
    variant?: ButtonVariant;
}

const getVariantStyles = (variant: ButtonVariant) => {
    const styles = {
        default: {
            button: 'bg-neutral-700 hover:bg-neutral-600 cursor-pointer',
            text: 'text-zinc-100'
        },
        disabled: {
            button: 'bg-gray-400 cursor-not-allowed opacity-60',
            text: 'text-zinc-100'
        },
        info: {
            button: 'bg-sky-600 hover:bg-sky-500 cursor-pointer',
            text: 'text-zinc-100'
        },
        warning: {
            button: 'bg-yellow-600 hover:bg-yellow-500 cursor-pointer',
            text: 'text-zinc-100'
        },
        error: {
            button: 'bg-red-600 hover:bg-red-500 cursor-pointer',
            text: 'text-zinc-100'
        },
        success: {
            button: 'bg-green-600 hover:bg-green-500 cursor-pointer',
            text: 'text-zinc-100'
        }
    };
    return styles[variant];
};

const Button = ({ content, onClick, variant = "default", className = "" }: Props) => {
    const variantStyles = getVariantStyles(variant);
    const isDisabled = variant === 'disabled';

    return (
        <button
            onClick={isDisabled ? undefined : onClick}
            disabled={isDisabled}
            className={`flex flex-row gap-2 items-center px-3 pt-1.5 pb-2 text-md rounded-sm
                        active:opacity-70 shadow-sm hover:shadow-lg transition-all duration-300
                        ${variantStyles.button} ${className}`}
        >
            <div className={`font-medium ${variantStyles.text}`}>
                {content}
            </div>
            <IconChevronRight size="20" className={`pt-0.5 ${variantStyles.text}`} />
        </button>
    );
};
export default Button;