'use client';

import React from 'react';

export function MapsProvider({ children }: { children: React.ReactNode }) {
  // Google Maps disabled - API key removed for security
  // Maps functionality is not being used in the app
  return <>{children}</>;
}
