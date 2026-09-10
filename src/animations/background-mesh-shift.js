const meshShift = {
  id: 'background-mesh-shift',
  name: 'Mesh Shift',
  slug: 'mesh-shift',
  category: 'background',
  tags: ['mesh', 'gradient', 'soft', 'blob', 'background'],
  description: 'Soft mesh gradient blobs drift and shift creating a bokeh background.',
  longDescription: 'Creates a multi-point gradient mesh background by stacking multiple radial gradients that animate independently. Each blob moves along its own path, and where they overlap the colors blend naturally, creating the trendy soft mesh gradient effect.',
  addedAt: '2024-01-31T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 5, complexityScore: 2, animatedProperties: ['background-position'], triggerType: 'auto',
  css: `@keyframes meshA { 0%,100% { top:0;left:0; } 50% { top:30%;left:40%; } }
@keyframes meshB { 0%,100% { top:0;right:0; } 50% { top:40%;right:30%; } }
@keyframes meshC { 0%,100% { bottom:0;left:30%; } 50% { bottom:20%;left:0; } }
.mesh-shift-el {
  position: relative;
  width: 300px; height: 200px;
  border-radius: 12px;
  overflow: hidden;
  background: hsl(235,25%,7%);
}
.mesh-shift-el::before { content:''; position:absolute; width:200px;height:200px; border-radius:50%; background:radial-gradient(circle,hsla(251,100%,69%,0.6),transparent 70%); animation:meshA 8s ease-in-out infinite; }
.mesh-shift-el::after { content:''; position:absolute; width:200px;height:200px; border-radius:50%; background:radial-gradient(circle,hsla(330,100%,71%,0.6),transparent 70%); animation:meshB 9s ease-in-out infinite; }`,
  html: `<div class="mesh-shift-el"></div>`, js: null, keyframes: null,
  variants: [
    { name: 'Warm', css: `@keyframes meshA { 0%,100% { top:0;left:0; } 50% { top:30%;left:40%; } } @keyframes meshB { 0%,100% { top:0;right:0; } 50% { top:40%;right:30%; } } .mesh-shift-el { position:relative; width:300px;height:200px; border-radius:12px; overflow:hidden; background:hsl(30,30%,8%); } .mesh-shift-el::before { content:''; position:absolute; width:200px;height:200px; border-radius:50%; background:radial-gradient(circle,hsla(0,100%,65%,0.6),transparent 70%); animation:meshA 8s ease-in-out infinite; } .mesh-shift-el::after { content:''; position:absolute; width:200px;height:200px; border-radius:50%; background:radial-gradient(circle,hsla(47,100%,65%,0.6),transparent 70%); animation:meshB 9s ease-in-out infinite; }` },
    { name: 'Cool', css: `@keyframes meshA { 0%,100% { top:0;left:0; } 50% { top:30%;left:40%; } } @keyframes meshB { 0%,100% { top:0;right:0; } 50% { top:40%;right:30%; } } .mesh-shift-el { position:relative; width:300px;height:200px; border-radius:12px; overflow:hidden; background:hsl(220,30%,5%); } .mesh-shift-el::before { content:''; position:absolute; width:200px;height:200px; border-radius:50%; background:radial-gradient(circle,hsla(200,100%,60%,0.6),transparent 70%); animation:meshA 8s ease-in-out infinite; } .mesh-shift-el::after { content:''; position:absolute; width:200px;height:200px; border-radius:50%; background:radial-gradient(circle,hsla(170,80%,50%,0.6),transparent 70%); animation:meshB 9s ease-in-out infinite; }` },
  ],
  relatedIds: ['background-gradient-morph', 'background-aurora', 'morphing-blob-morph'],
}
export default meshShift
