'use client';

import { Button } from '@ui/src/Button';
import Header, { HeaderProps } from '@ui/src/components/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export interface BackHeaderProps extends HeaderProps {}

const BackHeader = (props: BackHeaderProps) => {
  const router = useRouter();

  const LeftHeader = () => {
    return (
      <Button variant={'ghost'} className="p-0" onClick={() => router.back()}>
        <Image alt="left_arrow" src="left_arrow.svg" width={25} height={25} />
      </Button>
    );
  };

  return <Header left={<LeftHeader />} {...props} />;
};

export default BackHeader;
