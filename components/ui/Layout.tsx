
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

const Layout = ({ children, className = '' }: LayoutProps) => {
    return (
        <div className={`w-screen h-screen ${className} bg-slate-100`}>
            <div className="relative w-full h-full flex flex-col gap-5 items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default Layout;