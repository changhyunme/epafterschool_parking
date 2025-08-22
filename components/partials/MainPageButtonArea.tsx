"use client";

import { ReactNode } from 'react';
import Button from "@/components/ui/Button";


interface Props {
    className?: string;
}

const mainPageOnClickHandler = () => {

}

const MainPageButtonArea = ({ className = '' }: Props) => {
    return (
        <>
            <div className={`flex gap-3`}>
                <Button content="(새로운 홈페이지)로 바로가기" onClick={mainPageOnClickHandler} />
                <Button content="아카이브 바로가기" variant="info" />
            </div>
        </>
    );
};

export default MainPageButtonArea;