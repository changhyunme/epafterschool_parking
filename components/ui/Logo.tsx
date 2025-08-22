import Image from "next/image";

interface Props {
    className?: string;
}

const Logo = ({ className = '' }: Props) => {
    return (
        <div className={` ${className}`}>
          <Image
            src="/logo.png"
            alt="epafterschool logo"
            width={640*0.6}
            height={146*0.6}
            className="select-none"
          />
        </div>
    );
};

export default Logo;