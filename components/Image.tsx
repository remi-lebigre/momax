import NextImage, { ImageProps } from 'next/image'
import { FC } from 'react'

interface ImgProps extends ImageProps {
  noLoadBg?: boolean
}
const Image: FC<ImgProps> = ({ src, alt, noLoadBg = false }) => (
  <NextImage
    src={src}
    alt={alt}
    layout={'fill'}
    objectFit={'cover'}
    className={noLoadBg ? '' : 'bg-brown'}
  />
)

export default Image
