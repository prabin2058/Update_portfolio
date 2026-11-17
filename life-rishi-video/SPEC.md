# SPEC.md — Life Rishi App Launch Film

GOAL:    The viewer feels grounded reassurance and cosmic clarity, realizing Life Rishi turns daily life dilemmas into clear Vedic direction through instant AI guidance and certified Gurukul astrologers.
OUTPUT:  HyperFrames, 1080 x 1920 (9:16 portrait), 30 fps
TIME:    24 seconds x 30 fps = 720 frames; 90 BPM (20 frames per beat, 80 frames per bar)

LOOK:    ground: #FFF9F4 (warm Vedic morning cream), shifting smoothly to #FFF2E5 in Scene 2/3;
         ink: #2A1608 (deep roasted espresso, 100% opacity) for headers; #7C6555 (warm earthy taupe) for body text;
         one accent: #FA5D00 (sacred flame orange) and #FF9233 (solar amber); strictly rationed to the Scorpio emblem, active CTA buttons, and AI Rishi eyes/pulsing aura;
         display face: Outfit / Plus Jakarta Sans, 700 bold, 56px–72px, tracking -0.02em;
         body face: Inter / Plus Jakarta Sans, 500–600 weight, 28px–34px, line-height 1.35;
         medium: Native high-fidelity mobile UI cards (border-radius: 36px, background: #FFFFFF, subtle elevation shadow: 0 16px 48px rgba(250, 93, 0, 0.08), soft border: 1.5px solid rgba(250, 93, 0, 0.12));
         light and depth: warm upper-diffuse light, contact shadow blur 32px opacity 0.06, 0% fake grain, 0% vignette.

OBJECTS: 
         - Vedic Birth Hub: Circular solar badge (diameter 220px) with glowing Scorpio icon, surrounded by 6 astrological metrics (Sun Capricorn, Moon Taurus, Rising Scorpio, Element Earth, Polarity Feminine, Modality Mutable).
         - Energy Focus Card: High-contrast card with quote "You are a natural initiator who leads with quiet strength" and bold badge "Prioritize structure over speed."
         - AI Rishi Cosmic Persona: Pulsing solar orb (diameter 240px) in radiant saffron-orange (#FA5D00), two expressive blinking white eyes (diameter 24px, 48px apart), encircled by 3 concentric orbital rings and 18 drifting planetary stardust particles.
         - Quick Chat Chip: Frosted pill button "What is my sun sign & daily energy?" with glowing paper plane icon.
         - Daily Insight Tabs: Horizontal pill row (Career, Finance, Education, Health) with active teal/orange pill indicator.
         - Verified Astrologer Card: Photo portrait of Vikram Rao, 4.8★ (1250+ reviews), 18+ years exp, Gurukul of Astrology Science tag, and full-width #FA5D00 "Book Consultation" button.
         - Final Brand Lockup: Golden-orange four-pointed star emblem, "Life Rishi" wordmark, tagline "Ancient Vedic Wisdom. Everyday Clarity.", and store badges.

MOTION:  
         - enter: power3.out (duration: 16 frames / 0.53s)
         - move: power2.inOut (duration: 12 frames / 0.40s)
         - orb pulse: sine.inOut (scale 0.98 to 1.04, period 45 frames)
         - orb blink: instantaneous closure (4 frames) every 90 frames
         - cursor click: scale 0.92 with 0.15s spring release
         - camera transitions: vertical push-in (y: 60px -> 0px) and scale morph (0.95 -> 1.0)

SHOTS:
         - Shot 1 (Frames 0–120 / 0.0s–4.0s): Hook — Morning Vedic alignment. Dashboard lands, Scorpio badge illuminates, and energy focus badge pops: "Prioritize structure over speed." Sound: Morning temple chime, soft ambient sitar pad. Handoff: Push-in directly into the "AI Rishi" conversational card.
         - Shot 2 (Frames 121–300 / 4.0s–10.0s): Reveal & Proof 1 — AI Rishi entity wakes up. The celestial orb blinks awake, orbital rings radiate outward, quick prompt chip is clicked, and AI Rishi replies: "Your Saturn phase favors steady discipline today." Sound: Resonant glass chime, haptic click, warm cosmic resonance tone. Handoff: Prompt card expands into Daily Insights dashboard.
         - Shot 3 (Frames 301–480 / 10.0s–16.0s): Proof 2 — Daily Insights & Planetary Timing. Career, Finance, and Health tabs slide across. Health card highlights mixed cosmic energy and recommends grounding routines. Sound: Smooth card glide whoosh, crisp notification ping. Handoff: "Plan Your Event with Vedic Timing" button triggers consultation view.
         - Shot 4 (Frames 481–630 / 16.0s–21.0s): Payoff — Verified Gurukul Master Astrologer. Profile of Vikram Rao (18+ yrs exp, 4.8★) slides in. User taps large radiant orange "Book Consultation" button. Sound: Deep resonant tanpura hum, punchy rewarding button tap. Handoff: Card zooms smoothly into the glowing sun-star brand lockup.
         - Shot 5 (Frames 631–720 / 21.0s–24.0s): Claim & End Card — Life Rishi glowing logo mark lands, title "Life Rishi" wipes in, tagline "Ancient Vedic Wisdom. Everyday Clarity." and "Download Free" button hold steady. Sound: Singing bowl bell note ringing into quiet silence.

BANNED:  Dark cyberpunk void, neon purple/magenta glowing laser grids, tiny unreadable text, blurry low-res mockups, generic stock photos, unanchored floating UI cards with no context, fake tech HUD borders.

QA:      
         - Frame 30: Morning dashboard fully rendered with Scorpio icon and "Prioritize structure over speed" legible.
         - Frame 200: AI Rishi celestial orb glowing, eyes open, orbital particles positioned along rings.
         - Frame 400: Daily Insights tabs clearly active, Health card showing actionable advice.
         - Frame 550: Vikram Rao astrologer profile and "Book Consultation" button centered and legible.
         - Frame 680: Brand lockup with "Life Rishi" and tagline firmly held in safe-title area.
