import NextImage, { ImageProps } from 'next/image'
import { FC } from 'react'


const Image: FC<ImageProps> = ({ src,
    alt,
}) => <NextImage
        src={src}
        alt={alt}
        layout={'fill'}
        objectFit={'cover'}
        className={'bg-brown'}
    />

export default Image