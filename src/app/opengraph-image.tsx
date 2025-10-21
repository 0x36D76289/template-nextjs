import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <div style={{ marginBottom: 16 }}>My Next.js App</div>
        <div style={{ fontSize: 24, fontWeight: 400 }}>
          Modern web application
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
