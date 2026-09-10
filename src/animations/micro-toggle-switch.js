const toggleSwitch = {
  id: 'micro-toggle-switch',
  name: 'Toggle Switch',
  slug: 'toggle-switch',
  category: 'micro',
  tags: ['toggle', 'switch', 'on-off', 'boolean', 'form'],
  description: 'Animated toggle switch with a sliding thumb and color transition.',
  longDescription: 'A custom toggle switch implemented entirely in CSS. The checkbox hidden behind controls the state; the adjacent label element transforms with translateX on the thumb and transitions background-color on the track. No JavaScript required.',
  addedAt: '2024-02-18T00:00:00Z', updatedAt: '2024-03-15T00:00:00Z', author: 'CSS Motion Master',
  browserSupport: { chrome: 40, firefox: 38, safari: 9, edge: 15 },
  performanceScore: 10, complexityScore: 2, animatedProperties: ['transform', 'background-color'], triggerType: 'click',
  css: `.toggle-wrapper { display: inline-flex; align-items: center; gap: 10px; cursor: pointer; }
.toggle-wrapper input[type="checkbox"] { display: none; }
.toggle-track {
  width: 48px; height: 26px;
  background: hsl(220, 15%, 40%);
  border-radius: 13px;
  position: relative;
  transition: background 0.3s ease;
}
.toggle-thumb {
  width: 20px; height: 20px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 3px; left: 3px;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
}
.toggle-wrapper input:checked + .toggle-track { background: var(--primary-color); }
.toggle-wrapper input:checked + .toggle-track .toggle-thumb { transform: translateX(22px); }`,
  html: `<label class="toggle-wrapper">
  <input type="checkbox" id="toggle1"/>
  <div class="toggle-track">
    <div class="toggle-thumb"></div>
  </div>
  Toggle me
</label>`,
  js: null, keyframes: null,
  variants: [
    { name: 'Large', css: `.toggle-wrapper { display:inline-flex;align-items:center;gap:10px;cursor:pointer; } .toggle-wrapper input[type="checkbox"] { display:none; } .toggle-track { width:64px;height:34px;background:hsl(220,15%,40%);border-radius:17px;position:relative;transition:background 0.3s ease; } .toggle-thumb { width:26px;height:26px;background:white;border-radius:50%;position:absolute;top:4px;left:4px;transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1);box-shadow:0 2px 6px rgba(0,0,0,0.3); } .toggle-wrapper input:checked + .toggle-track { background:var(--primary-color); } .toggle-wrapper input:checked + .toggle-track .toggle-thumb { transform:translateX(30px); }` },
    { name: 'Accent Color', css: `.toggle-wrapper { display:inline-flex;align-items:center;gap:10px;cursor:pointer; } .toggle-wrapper input[type="checkbox"] { display:none; } .toggle-track { width:48px;height:26px;background:hsl(220,15%,40%);border-radius:13px;position:relative;transition:background 0.3s ease; } .toggle-thumb { width:20px;height:20px;background:white;border-radius:50%;position:absolute;top:3px;left:3px;transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1); } .toggle-wrapper input:checked + .toggle-track { background:var(--accent-color); } .toggle-wrapper input:checked + .toggle-track .toggle-thumb { transform:translateX(22px); }` },
  ],
  relatedIds: ['micro-checkbox-tick', 'micro-loading-dot', 'button-press-depth'],
}
export default toggleSwitch
