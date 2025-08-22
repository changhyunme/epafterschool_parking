
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
}

const Layout = ({ children, className = '' }: Props) => {
    return (
        <div className={`layout ${className}`}>
            {children}
        </div>
    );
};

export default Layout;