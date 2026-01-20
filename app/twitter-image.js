import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'John Rovan - Frontend Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0c0c0c',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Green accent line */}
        <div
          style={{
            width: '80px',
            height: '4px',
            background: '#00ff88',
            marginBottom: '40px',
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 800,
            color: '#f5f5f5',
            marginBottom: '16px',
          }}
        >
          John Rovan
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '36px',
            fontWeight: 500,
            color: '#00ff88',
            marginBottom: '32px',
          }}
        >
          Frontend Developer
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '24px',
            color: '#888888',
            maxWidth: '800px',
          }}
        >
          Building fast, pixel-perfect interfaces with React & Next.js
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '80px',
            fontSize: '24px',
            color: '#555555',
            fontFamily: 'monospace',
          }}
        >
          johnrovan.com
        </div>
      </div>
    ),
    { ...size }
  );
}
