import scaleUp from './hover-scale-up.js'
import shadowLift from './hover-shadow-lift.js'
import borderTrace from './hover-border-trace.js'
import backgroundSweep from './hover-background-sweep.js'
import textReveal from './hover-text-reveal.js'
import rotateTilt from './hover-rotate-tilt.js'

import spin from './keyframe-spin.js'
import bounce from './keyframe-bounce.js'
import shake from './keyframe-shake.js'
import heartbeat from './keyframe-heartbeat.js'
import float from './keyframe-float.js'
import wobble from './keyframe-wobble.js'
import rubberBand from './keyframe-rubber-band.js'
import jello from './keyframe-jello.js'

import ripple from './button-ripple.js'
import fillSlide from './button-fill-slide.js'
import pressDepth from './button-press-depth.js'
import borderDraw from './button-border-draw.js'
import magnetic from './button-magnetic.js'
import glowPulse from './button-glow-pulse.js'

import typewriter from './text-typewriter.js'
import fadeWords from './text-fade-words.js'
import gradientShift from './text-gradient-shift.js'
import glitch from './text-glitch.js'
import letterSpacingExpand from './text-letter-spacing-expand.js'
import blurSharpen from './text-blur-sharpen.js'
import waveChars from './text-wave-chars.js'
import scramble from './text-scramble.js'

import gradientMorph from './background-gradient-morph.js'
import particleField from './background-particle-field.js'
import meshShift from './background-mesh-shift.js'
import aurora from './background-aurora.js'
import noiseDrift from './background-noise-drift.js'
import radialBurst from './background-radial-burst.js'

import fadeUp from './scroll-fade-up.js'
import parallaxLayer from './scroll-parallax-layer.js'
import staggerList from './scroll-stagger-list.js'
import revealClip from './scroll-reveal-clip.js'

import cardFlip from './3d-card-flip.js'
import cubeRotate from './3d-cube-rotate.js'
import perspectiveTilt from './3d-perspective-tilt.js'
import depthZoom from './3d-depth-zoom.js'
import foldingPanel from './3d-folding-panel.js'

import pathDraw from './svg-path-draw.js'
import morphingBlob from './svg-morphing-blob.js'
import strokeDash from './svg-stroke-dash.js'
import shapeShift from './svg-shape-shift.js'

import checkboxTick from './micro-checkbox-tick.js'
import toggleSwitch from './micro-toggle-switch.js'
import loadingDot from './micro-loading-dot.js'
import successCheckmark from './micro-success-checkmark.js'

import skeletonPulse from './loading-skeleton-pulse.js'
import progressBar from './loading-progress-bar.js'
import spinnerArc from './loading-spinner-arc.js'
import dotCascade from './loading-dot-cascade.js'

import pageSlide from './transition-page-slide.js'
import modalPop from './transition-modal-pop.js'
import drawerSlide from './transition-drawer-slide.js'

import blobMorph from './morphing-blob-morph.js'
import liquidButton from './morphing-liquid-button.js'

import flipY from './3d-flip-y.js'
import hoverLift3d from './3d-hover-lift.js'
import rotateIn3d from './3d-rotate-in.js'
import swing3d from './3d-swing.js'
import dotsDrift from './background-dots-drift.js'
import backgroundPan from './background-pan.js'
import backgroundRipple from './background-ripple.js'
import buttonBounce from './button-bounce.js'
import outlineGlow from './button-outline-glow.js'
import rippleRing from './button-ripple-ring.js'
import buttonShine from './button-shine.js'
import blurFocus from './hover-blur-focus.js'
import hoverGlow from './hover-glow.js'
import lift from './hover-lift.js'
import hoverSkew from './hover-skew.js'
import underlineSweep from './hover-underline-sweep.js'
import fade from './keyframe-fade.js'
import pulse from './keyframe-pulse.js'
import slideUp from './keyframe-slide-up.js'
import zoomIn from './keyframe-zoom-in.js'
import zoomOut from './keyframe-zoom-out.js'
import fadeScale from './scroll-fade-scale.js'
import slideLeft from './scroll-slide-left.js'
import scrollZoomIn from './scroll-zoom-in.js'
import drawCircle from './svg-draw-circle.js'
import pulseStroke from './svg-pulse-stroke.js'
import rotatePath from './svg-rotate-path.js'
import textFadeIn from './text-fade-in.js'
import textShadowGlow from './text-shadow-glow.js'
import textShimmer from './text-shimmer.js'
import textSlideUp from './text-slide-up.js'
import glowBorder from './hover-glow-border.js'
import bounceIn from './keyframe-bounce-in.js'
import fadeOut from './keyframe-fade-out.js'
import jelly from './button-jelly.js'
import typingCaret from './text-typing-caret.js'
import gridDrift from './background-grid-drift.js'
import scrollSlideRight from './scroll-slide-right.js'
import rotateY from './3d-rotate-y.js'
import badgePulse from './micro-badge-pulse.js'
import scalePop from './transition-scale-pop.js'

const ALL_ANIMATIONS = [
  scaleUp, shadowLift, borderTrace, backgroundSweep, textReveal, rotateTilt,
  spin, bounce, shake, heartbeat, float, wobble, rubberBand, jello,
  ripple, fillSlide, pressDepth, borderDraw, magnetic, glowPulse,
  typewriter, fadeWords, gradientShift, glitch, letterSpacingExpand, blurSharpen, waveChars, scramble,
  gradientMorph, particleField, meshShift, aurora, noiseDrift, radialBurst,
  fadeUp, parallaxLayer, staggerList, revealClip,
  cardFlip, cubeRotate, perspectiveTilt, depthZoom, foldingPanel,
  pathDraw, morphingBlob, strokeDash, shapeShift,
  checkboxTick, toggleSwitch, loadingDot, successCheckmark,
  skeletonPulse, progressBar, spinnerArc, dotCascade,
  pageSlide, modalPop, drawerSlide,
  blobMorph, liquidButton,
  flipY, hoverLift3d, rotateIn3d, swing3d,
  dotsDrift, backgroundPan, backgroundRipple,
  buttonBounce, outlineGlow, rippleRing, buttonShine,
  blurFocus, hoverGlow, lift, hoverSkew, underlineSweep,
  fade, pulse, slideUp, zoomIn, zoomOut,
  fadeScale, slideLeft, scrollZoomIn,
  drawCircle, pulseStroke, rotatePath,
  textFadeIn, textShadowGlow, textShimmer, textSlideUp,
  glowBorder, bounceIn, fadeOut, jelly, typingCaret, gridDrift, scrollSlideRight, rotateY, badgePulse, scalePop,
]

export default ALL_ANIMATIONS.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt))
