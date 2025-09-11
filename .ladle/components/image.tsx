import React from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fill?: boolean
}

const Image: React.FC<ImageProps> = ({ fill, ...props }) => {
  const style: React.CSSProperties = fill
    ? {
        position: 'absolute',
        inset: '0',
        width: '100%',
        height: '100%',
      }
    : {}

  // eslint-disable-next-line @next/next/no-img-element
  return <img alt={props.alt} {...props} style={style} />
}

export default Image
