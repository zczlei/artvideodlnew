import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

const BRAND = '#E8834A'
const INK = '#17181C'

export default function AppleIcon() {
  const holes = [24, 79, 134]

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          background: BRAND,
        }}
      >
        {holes.map((top) => (
          <div
            key={`l-${top}`}
            style={{
              position: 'absolute',
              left: 18,
              top,
              width: 22,
              height: 22,
              borderRadius: 7,
              background: INK,
            }}
          />
        ))}
        {holes.map((top) => (
          <div
            key={`r-${top}`}
            style={{
              position: 'absolute',
              right: 18,
              top,
              width: 22,
              height: 22,
              borderRadius: 7,
              background: INK,
            }}
          />
        ))}
        <svg width="72" height="72" viewBox="0 0 72 72" style={{ marginLeft: 8 }}>
          <path
            d="M16 8 L62 36 L16 64 Z"
            fill={INK}
            stroke={INK}
            strokeWidth="10"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    size,
  )
}
