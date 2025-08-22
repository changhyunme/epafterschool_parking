
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
}

const Card = ({ children, className = '' }: Props) => {
    return (
        <div className={`w-3xl text-lg font-light text-center bg-white py-10 px-5 rounded-xl border-1 border-zinc-200 ${className}`}>
            {children}
        </div>
    );
};

export default Card;