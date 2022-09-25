import * as React from 'react';
import { LayoutProps } from '@/models/index';
import Link from 'next/link';

export function MainLayout ({ children}: LayoutProps) {
  return ( 
    <div>
      <h1>
        Main Layout
      </h1>

      <Link passHref href="/">
            <a>Home</a>
        </Link>

        <Link passHref href="/about">
            <a>About</a>
        </Link>

        <>
            {children}
        </>
    </div>
  );
}
