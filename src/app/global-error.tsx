'use client';

import React from 'react';

export interface GlobalErrorProps {}

export default function GlobalError({}: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>Something went wrong. Please try again later.</p>
        </div>
      </body>
    </html>
  );
}
