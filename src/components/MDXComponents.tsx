import Image from 'next/image';
import React from 'react';

export const MDXComponents = {
  img: (props: any) => <Image {...props} alt={props.alt || ''} width={800} height={600} />,
  // add more custom MDX components as needed (PhotoGrid, VideoEmbed, etc.)
};
