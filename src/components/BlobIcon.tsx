import Blob from "./Blob.tsx"

type BlobIconProps = {
    background?:string;
    icon: string;
    blobClassName?: string;
    iconClassName?: string;
    wrapperClassName?: string;
    alt?: string;
};

const BlobIcon = ({
                      background="text-[var(--color-white)]",
                      icon,
                      blobClassName = "w-16 h-16 ",
                      iconClassName = "w-10 h-10",
                      wrapperClassName = "",
                      alt = "",
                  }: BlobIconProps) => {
    return (
        <div
            className={`relative inline-block shrink-0 ${wrapperClassName}`}
        >
            <Blob
                className={`${blobClassName} ${background} z-10 object-contain`}
            />

            <img
                src={icon}
                alt={alt}
                aria-hidden={alt ? undefined : true}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 
                -translate-y-1/2 pointer-events-none ${iconClassName}`}
            />
        </div>
    );
};

export default BlobIcon;