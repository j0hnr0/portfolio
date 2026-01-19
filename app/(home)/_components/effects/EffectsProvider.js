'use client';

import CustomCursor from './CustomCursor';
import Scanline from './Scanline';
import NoiseOverlay from './NoiseOverlay';
import PageLoader from './PageLoader';

export default function EffectsProvider({ children }) {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <Scanline />
      <NoiseOverlay />
      {children}
    </>
  );
}
