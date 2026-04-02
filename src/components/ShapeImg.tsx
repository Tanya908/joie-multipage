import  { type ImgHTMLAttributes } from "react";
import * as React from "react";

type Props = {
    src: string;
    alt?: string;
    mask?: string;
    wrapperClassName?: string;
    imgClassName?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export const ShapeImg = ({ src,alt="",mask, wrapperClassName = "", imgClassName="",...props }: Props) => {

    return (

        <div className={`relative ${wrapperClassName}`}>
            <img
                src={src}
                alt={alt}
                className={`object-cover object-center ${imgClassName}`}
                style={
                    mask
                        ? {
                            WebkitMaskImage: `url("${mask}")`,
                            maskImage: `url("${mask}")`,
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            WebkitMaskSize: "contain",
                            maskSize: "contain",
                            WebkitMaskPosition: "center",
                            maskPosition: "center",
                            WebkitMaskMode: "luminance",
                            maskMode: "luminance",
                        } as React.CSSProperties
                        : undefined
                }
                {...props}
            />
        </div>

    );
};
export default ShapeImg
