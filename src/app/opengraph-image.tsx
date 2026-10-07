import { ImageResponse } from 'next/og';
import { site } from '@/data/site';

export const alt = 'Formaroute — auto-école à Domont';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Image de partage (Facebook, WhatsApp, LinkedIn…) générée au build. */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)',
        color: 'white',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', fontSize: 96, fontWeight: 800, letterSpacing: -2 }}>
        Forma<span style={{ color: '#fca5a5' }}>Route</span>
      </div>
      <div style={{ display: 'flex', marginTop: 24, fontSize: 44, opacity: 0.95 }}>
        Auto-école à Domont (95330)
      </div>
      <div style={{ display: 'flex', marginTop: 16, fontSize: 32, opacity: 0.85 }}>
        Code · Permis B manuelle ou automatique · Conduite accompagnée
      </div>
      <div style={{ display: 'flex', marginTop: 48, fontSize: 32, fontWeight: 700 }}>
        {site.contact.phoneDisplay} · {site.address.full}
      </div>
    </div>,
    size
  );
}
