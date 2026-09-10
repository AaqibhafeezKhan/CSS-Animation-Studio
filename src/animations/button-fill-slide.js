const fillSlide = {
  id: 'button-fill-slide',
  name: 'Fill Slide',
  slug: 'fill-slide',
  category: 'button',
  tags: ['fill', 'slide', 'hover', 'button', 'background'],
  description: 'Button background slides in from bottom on hover, creating a fill effect.',
  longDescription: 'A hover transition where the button background color slides up from the bottom using a pseudo-element. The original border disappears as the fill takes over, creating a smooth transformation from outlined to filled state.',
  addedAt: '2024-01-16T00:00:00Z',
  updatedAt: '2024-03-15T00:00:00Z',
  author: 'CSS Motion Master',
  browserSupport: { chrome: 40, firefox: 38, safari: 9, edge: 15 },
  performanceScore: 9,
  complexityScore: 2,
  animatedProperties: ['transform'],
  triggerType: 'hover',
  css: `.fill-slide-btn {
  position: relative;
  padding: 12px 28px;
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  overflow: hidden;
  transition: color 0.3s ease;
  z-index: 0;
}

.fill-slide-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--primary-color);
  transform: translateY(101%);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.fill-slide-btn:hover {
  color: #fff;
}

.fill-slide-btn:hover::after {
  transform: translateY(0);
}`,
  html: `<button class="fill-slide-btn">Hover me</button>`,
  js: null,
  keyframes: null,
  variants: [
    { name: 'From Top', css: `.fill-slide-btn { position: relative; padding: 12px 28px; background: transparent; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 6px; cursor: pointer; overflow: hidden; transition: color 0.3s ease; z-index: 0; } .fill-slide-btn::after { content: ''; position: absolute; inset: 0; background: var(--primary-color); transform: translateY(-101%); transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1); z-index: -1; } .fill-slide-btn:hover { color: #fff; } .fill-slide-btn:hover::after { transform: translateY(0); }` },
    { name: 'From Left', css: `.fill-slide-btn { position: relative; padding: 12px 28px; background: transparent; color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 6px; cursor: pointer; overflow: hidden; transition: color 0.3s ease; z-index: 0; } .fill-slide-btn::after { content: ''; position: absolute; inset: 0; background: var(--primary-color); transform: translateX(-101%); transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1); z-index: -1; } .fill-slide-btn:hover { color: #fff; } .fill-slide-btn:hover::after { transform: translateX(0); }` },
  ],
  relatedIds: ['button-ripple', 'hover-background-sweep', 'button-border-draw'],
}
export default fillSlide
