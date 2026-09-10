const checkboxTick = {
  id: 'micro-checkbox-tick',
  name: 'Checkbox Tick',
  slug: 'checkbox-tick',
  category: 'micro',
  tags: ['checkbox', 'tick', 'check', 'form', 'micro'],
  description: 'Checkbox draws a tick mark via animated SVG stroke on check.',
  longDescription: 'A custom checkbox where checking it triggers an SVG stroke-dashoffset animation that draws a checkmark. Combines CSS transitions on the box itself (background, border-color) with SVG path draw animation for the tick, creating a satisfying form interaction.',
  addedAt: '2024-02-17T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
  performanceScore: 10, complexityScore: 3, animatedProperties: ['stroke-dashoffset', 'background', 'border-color'], triggerType: 'click',
  css: `.custom-checkbox {
  display: inline-flex; align-items: center; gap: 10px; cursor: pointer;
}
.custom-checkbox input[type="checkbox"] { display: none; }
.checkbox-box {
  width: 22px; height: 22px;
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  background: transparent;
  transition: background 0.2s ease, border-color 0.2s ease;
  display: flex; align-items: center; justify-content: center;
}
.custom-checkbox input:checked + .checkbox-box {
  background: var(--primary-color);
}
.checkbox-box svg { opacity: 0; }
.custom-checkbox input:checked + .checkbox-box svg { opacity: 1; }
.checkbox-tick {
  stroke: white;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  transition: stroke-dashoffset 0.3s ease 0.1s;
}
.custom-checkbox input:checked + .checkbox-box .checkbox-tick {
  stroke-dashoffset: 0;
}`,
  html: `<label class="custom-checkbox">
  <input type="checkbox" id="cb1"/>
  <div class="checkbox-box">
    <svg width="13" height="10" viewBox="0 0 13 10">
      <path class="checkbox-tick" d="M1.5,5 L5,8.5 L11.5,1.5"/>
    </svg>
  </div>
  Check me
</label>`,
  js: null, keyframes: null,
  variants: [
    { name: 'Rounded', css: `.custom-checkbox { display:inline-flex;align-items:center;gap:10px;cursor:pointer; } .custom-checkbox input[type="checkbox"] { display:none; } .checkbox-box { width:22px;height:22px;border:2px solid var(--primary-color);border-radius:50%;background:transparent;transition:background 0.2s ease;display:flex;align-items:center;justify-content:center; } .custom-checkbox input:checked + .checkbox-box { background:var(--primary-color); } .checkbox-box svg { opacity:0; } .custom-checkbox input:checked + .checkbox-box svg { opacity:1; } .checkbox-tick { stroke:white;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;fill:none;stroke-dasharray:20;stroke-dashoffset:20;transition:stroke-dashoffset 0.3s ease 0.1s; } .custom-checkbox input:checked + .checkbox-box .checkbox-tick { stroke-dashoffset:0; }` },
    { name: 'Large', css: `.custom-checkbox { display:inline-flex;align-items:center;gap:12px;cursor:pointer;font-size:1.1rem; } .custom-checkbox input[type="checkbox"] { display:none; } .checkbox-box { width:32px;height:32px;border:2.5px solid var(--primary-color);border-radius:7px;background:transparent;transition:background 0.2s ease;display:flex;align-items:center;justify-content:center; } .custom-checkbox input:checked + .checkbox-box { background:var(--primary-color); } .checkbox-box svg { opacity:0; } .custom-checkbox input:checked + .checkbox-box svg { opacity:1; } .checkbox-tick { stroke:white;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;fill:none;stroke-dasharray:20;stroke-dashoffset:20;transition:stroke-dashoffset 0.3s ease 0.1s; } .custom-checkbox input:checked + .checkbox-box .checkbox-tick { stroke-dashoffset:0; }` },
  ],
  relatedIds: ['micro-toggle-switch', 'micro-success-checkmark', 'keyframe-shake'],
}
export default checkboxTick
