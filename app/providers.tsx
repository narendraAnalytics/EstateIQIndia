'use client';

import React from 'react';
import { APIProvider } from '@vis.gl/react-google-maps';

export function MapsProvider({ children }: { children: React.ReactNode }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    console.error('Google Maps API key is missing');
    return <>{children}</>;
  }

  return (
    <APIProvider apiKey={apiKey}>
      {children}
    </APIProvider>
  );
}
