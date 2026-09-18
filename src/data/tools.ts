// Every tool page, hub card and long-tail variant is generated from this file.
// Copy rules: the tool must actually do what the page claims. No numbers the tool can't measure.

export type ToolStatus = "live" | "soon";

export type Tip = { title: string; body: string };

export type Faq = { q: string; a: string };

/** A long-tail page: same tool, its own H1, intro, tips and FAQ.
 *  Only add one when it has advice the head page doesn't. */
export type Variant = {
  slug: string;
  /** Short label used in breadcrumbs and the "also test for" strip. */
  label: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  /** Leads the page, above the tool, so the answer is readable without a camera. */
  answer: string;
  tips: Tip[];
  faqs: Faq[];
};

/** Which hub a tool belongs under. This decides its URL — see toolHref — so a
 *  tool cannot be filed in one place and linked from another. */
export type ToolCategory = "device-test" | "audio";

export type Tool = {
  slug: string;
  name: string;
  kind: string;
  category: ToolCategory;
  status: ToolStatus;
  icon: string;
  accent: string;
  tint: string;
  tagline: string;
  summary: string;
  /** Which engine the page mounts. Absent means the tool has its own page file. */
  engine?: "mic" | "speaker" | "keyboard" | "dead-pixel";
  /** Page copy. Present once the tool is built. */
  page?: {
    h1: string;
    title: string;
    description: string;
    intro: string;
    answer: string;
    tips: Tip[];
    faqs: Faq[];
  };
};

export const tools: Tool[] = [
  {
    slug: "webcam-test",
    category: "device-test",
    name: "Webcam Test",
    kind: "Camera check",
    status: "live",
    icon: "camera",
    accent: "#ff7e1d",
    tint: "#ffeadb",
    tagline: "Check your camera in 3 seconds.",
    summary:
      "See your webcam, get a readiness score, and find out if your resolution, frame rate and lighting are good enough for a call. Nothing is uploaded — the video never leaves your browser.",
  },
  {
    slug: "voice-recorder",
    category: "audio",
    name: "Voice Recorder",
    kind: "Record and export",
    status: "live",
    icon: "message",
    accent: "#7c3aed",
    tint: "#ede9fe",
    tagline: "Record, trim, download. Nothing uploaded.",
    summary:
      "Record from your microphone, trim the dead air off the ends, and download an MP3 or WAV. Captured, edited and encoded on your own device — there is no server to send it to.",
  },
  {
    category: "device-test",
    slug: "mic-test", name: "Mic Test", kind: "Microphone check", status: "live", engine: "mic", icon: "message", accent: "#23b26d", tint: "#dff5ea",
    tagline: "Hear yourself before they do.",
    summary: "Check your microphone level, pick the right input, and see whether you are too quiet — in your browser, with nothing recorded.",
    page: {
      h1: "Microphone test: see your level before the call",
      title: "Microphone Test — Check Your Mic Online, Free and Private",
      description: "Test your microphone in the browser. Watch a live level meter, pick the right input, and find out if you are too quiet or clipping. Nothing is recorded or uploaded.",
      intro: "Allow the microphone and talk normally. The meter shows what the other end would hear, and tells you whether your level is actually usable.",
      answer: "To test a microphone, select Start below and allow access, then speak at your normal volume. A healthy speaking level peaks between roughly −18 dB and −6 dB on the meter. Constant silence means the wrong input is selected; a meter pinned at the top means you are clipping and should move further from the mic.",
      tips: [
        { title: "Speak at the distance you actually will", body: "A microphone tested at 10cm and used at 60cm gives completely different levels. Sit the way you will sit on the call before reading the meter." },
        { title: "Aim for the green, not the top", body: "Peaks in the upper-middle of the meter are right. A meter constantly at maximum is clipping, which sounds harsh and distorted, and no amount of volume on their end fixes it." },
        { title: "Wired beats wireless for reliability", body: "Bluetooth headsets switch to a low-quality call mode when the mic is used, which is why your music sounds worse the moment you join. Wired earbuds avoid it entirely." },
        { title: "Pick the input by name", body: "Browsers often default to the wrong device when a headset is plugged in. If the meter is flat while you are talking, switch the input in the picker rather than assuming the mic is broken." },
      ],
      faqs: [
        { q: "Is my voice recorded?", a: "No. The audio is analysed in your browser to draw the meter and is never written to disk or sent anywhere. There is no upload code and no server that could receive it." },
        { q: "The meter does not move when I speak.", a: "Usually the wrong input. Switch device in the picker. If nothing works, check your operating system's sound settings for a muted input or an input volume set to zero, and look for a physical mute switch on the headset itself." },
        { q: "What level should I aim for?", a: "Peaks between about −18 dB and −6 dB while speaking normally. Below −30 dB you will sound distant and the far end will raise their volume and then hear your room. Pinned at 0 dB you are clipping." },
        { q: "Why do I sound muffled on calls but fine here?", a: "Almost always Bluetooth. When a wireless headset's microphone is active, the connection drops to a narrowband call profile. This page uses the same profile, so if it sounds thin here too, that is the cause." },
        { q: "Does it work on a phone?", a: "Yes, in mobile Chrome and Safari. Note that phones apply their own noise suppression, so the meter may look calmer than the room actually is." },
        { q: "Can I test my mic without anyone hearing?", a: "That is exactly what this is. Nothing is transmitted — the meter is drawn from audio that never leaves the tab." },
      ],
    },
  },
  {
    category: "device-test",
    slug: "speaker-test", name: "Speaker Test", kind: "Audio output check", status: "live",
    engine: "speaker", icon: "play", accent: "#ff6fa3", tint: "#ffe6ef",
    tagline: "Left, right, and is it loud enough?",
    summary: "Play a test tone through each channel and confirm the right output device is selected before your call starts.",
    page: {
      h1: "Speaker test: check left, right and the output device",
      title: "Speaker Test — Check Left and Right Audio Channels Free",
      description: "Test your speakers or headphones in the browser. Play a tone through the left and right channels separately, check a frequency sweep, and confirm the right output.",
      intro: "Play a tone through each side. If you hear the left tone on the right, your channels are swapped — and if you hear nothing, the output device is the first thing to check.",
      answer: "To test speakers, play the left tone and then the right tone below and confirm each comes from the correct side. Silence on both usually means the browser or system is sending audio to a different output, not that the speakers are broken. Swapped sides point at a cable or a channel-balance setting.",
      tips: [
        { title: "Test with the volume you will actually use", body: "A tone at full volume proves the speakers work but tells you nothing about whether a call will be audible. Set a normal listening level first." },
        { title: "The browser and the system can disagree", body: "Your operating system may be sending sound to the headphones while a meeting app targets the laptop speakers. If the tone plays here but not in a call, check that app's own output setting." },
        { title: "Swapped channels are usually the cable", body: "If left plays on the right, check a reversed 3.5mm extension or a channel balance slider that has been dragged. It is rarely the speakers themselves." },
        { title: "Use the sweep to hear what is missing", body: "The frequency sweep runs low to high. A speaker that goes silent partway through, or buzzes at one pitch, has a real fault worth knowing about before a presentation." },
      ],
      faqs: [
        { q: "I cannot hear anything at all.", a: "Check three things in order: the system volume and mute, the selected output device, and whether the browser tab itself is muted — most browsers show a small speaker icon on the tab and allow muting a single site." },
        { q: "Can I choose which speakers to use?", a: "Browsers do not let a page choose your output device in most cases; that choice belongs to your operating system. Change it there and the tone follows." },
        { q: "Why does one side sound quieter?", a: "Either a balance setting shifted away from centre, or a failing driver. Play each side in turn at the same volume — a clear difference points at hardware." },
        { q: "What does the sweep test tell me?", a: "It plays rising frequencies so you can hear the range your speakers cover. Small laptop speakers legitimately produce little below about 200Hz; a rattle or a dropout in the middle of the range is a fault." },
        { q: "Is anything played through my microphone?", a: "No. This page only produces sound. It never requests microphone access, so nothing is captured." },
        { q: "Will this damage my speakers?", a: "No. The tones are generated at a moderate level, and you control the volume. As always, start low rather than high, especially with headphones on." },
      ],
    },
  },
  {
    category: "device-test",
    slug: "keyboard-test", name: "Keyboard Test", kind: "Key check", status: "live",
    engine: "keyboard", icon: "monitor", accent: "#2e9bff", tint: "#e2f0ff",
    tagline: "Find the key that stopped working.",
    summary: "Press every key and watch it light up, so you know whether the problem is the keyboard or the software.",
    page: {
      h1: "Keyboard test: find the key that stopped working",
      title: "Keyboard Test — Check Every Key Online, Free and Instant",
      description: "Test your keyboard in the browser. Press any key and watch it light up, spot keys that never register, and check for stuck or repeating keys. Nothing is logged.",
      intro: "Press keys and watch them light up. Anything that stays dark is not reaching the browser, which narrows the problem down fast.",
      answer: "To test a keyboard, press each key and watch the on-screen layout. A key that never lights is not reaching the browser at all, which points at the hardware, the connection or a driver rather than at the app you were using. A key that lights without being pressed is stuck.",
      tips: [
        { title: "Test the modifiers by holding them", body: "Shift, Control, Alt and Command stay lit while held. A modifier that flickers or drops is a common cause of shortcuts that only work sometimes." },
        { title: "A dark key is not always broken", body: "Some keys never reach the browser: media keys, screen brightness, and the Fn key itself are handled by the hardware or the OS. Those staying dark is normal." },
        { title: "Check for repeats", body: "A worn switch can send a keypress several times from one press. The counter beside each key shows how many times it fired, which makes a doubling key obvious." },
        { title: "Try the same key in another app", body: "If a key lights here but does nothing in one program, the keyboard is fine and that program has a shortcut conflict or a stuck modifier." },
      ],
      faqs: [
        { q: "Are my keystrokes recorded?", a: "No. Keys are read to draw the layout and nothing is stored or sent. Do not type passwords into any keyboard tester, including this one — not because this page saves them, but because it is a habit worth keeping." },
        { q: "Some keys never light up. Is the keyboard broken?", a: "Not necessarily. Media keys, brightness keys and Fn are usually intercepted before the browser sees them. A letter, number or modifier that stays dark is a genuine problem." },
        { q: "How do I test for a stuck key?", a: "Stop touching the keyboard and watch. A key that stays lit, or fires repeatedly on its own, is stuck — often from debris under the cap." },
        { q: "My layout does not match the keys shown.", a: "The on-screen layout is a standard one. If you use a different physical layout, the key that lights may sit elsewhere on your board, but the test still tells you whether the press registered." },
        { q: "Can I test a mechanical keyboard's rollover?", a: "Partly. Hold several keys at once and see how many register together. Browsers and operating systems impose their own limits, so this shows a floor rather than the keyboard's true maximum." },
        { q: "The whole keyboard is dead.", a: "If nothing registers, the browser is not receiving anything. Check the cable or battery, try another USB port, and test the keyboard on another machine before replacing it." },
      ],
    },
  },
  {
    category: "device-test",
    slug: "dead-pixel-test", name: "Dead Pixel Test", kind: "Screen check", status: "live",
    engine: "dead-pixel", icon: "browser", accent: "#ffc83d", tint: "#fff4d9",
    tagline: "Check a new screen before the return window closes.",
    summary: "Full-screen colour fields that make dead pixels, stuck pixels and backlight bleed easy to spot.",
    page: {
      h1: "Dead pixel test: check a screen properly",
      title: "Dead Pixel Test — Check Your Screen Free and Fullscreen",
      description: "Test a monitor, laptop or phone screen for dead pixels, stuck pixels and backlight bleed. Full-screen colour fields, no sign-up, and nothing to install.",
      intro: "Go fullscreen and step through the colours. A dead pixel stays black on every colour; a stuck pixel shows the wrong one. Do it now if the screen is new.",
      answer: "To check for dead pixels, go fullscreen and cycle through solid red, green, blue, white and black. A pixel that stays black on every colour is dead; one that stays lit on a single colour is stuck. Black reveals stuck pixels and backlight bleed best, white reveals dust and dead pixels.",
      tips: [
        { title: "Do it the day the screen arrives", body: "Manufacturer policies often allow a return for a small number of faulty pixels only within the return window. Finding one in month four is a very different conversation." },
        { title: "Clean the screen first", body: "Most of what looks like a stuck pixel is dust or a speck of dried spray. Wipe with a dry microfibre cloth before concluding anything." },
        { title: "Look from straight on, in a dark room", body: "Backlight bleed and clouding only show properly on a black field with the lights off. Off-angle viewing exaggerates both and will worry you unnecessarily." },
        { title: "A stuck pixel sometimes recovers", body: "Dead pixels do not come back, but stuck ones occasionally do. Rapid colour cycling over the area for a few minutes is the usual trick — worth trying before you start a return." },
      ],
      faqs: [
        { q: "What is the difference between a dead and a stuck pixel?", a: "A dead pixel receives no power and stays black on every colour. A stuck pixel is permanently on in one colour, so it shows as a bright red, green or blue dot and disappears on a field of its own colour." },
        { q: "How many faulty pixels can I return a screen for?", a: "It depends on the manufacturer and the panel grade — some allow a return for a single bright pixel, others require several. Check your specific warranty, and record what you find with a photograph." },
        { q: "Which colour should I check on?", a: "All of them. Black shows stuck pixels and backlight bleed, white shows dead pixels and dust, and the solid primaries show sub-pixel failures that plain black and white can hide." },
        { q: "Can this fix a stuck pixel?", a: "Sometimes. Rapid colour cycling over a stuck pixel can restart it, which is why the test includes a cycling mode. It never works on a dead pixel." },
        { q: "Does this work on a phone or a TV?", a: "Yes on a phone. For a TV, open the page in the TV's browser if it has one, or cast the tab — but be aware that video compression can hide a single pixel." },
        { q: "Is there a risk of burn-in from the solid colours?", a: "For a few minutes, no. OLED burn-in comes from static images over many hours. Do not leave a solid field up all day." },
      ],
    },
  },
];

export const getTool = (slug: string) => tools.find((t) => t.slug === slug);

/** Cited on every webcam page. Kept as one table so an AI answer can quote it whole.
 *  Sources: each app's own published system requirements, checked September 2026. */
export const appRequirements = [
  { app: "Zoom", video: "640×360 at 30fps", good: "1280×720 at 30fps", note: "Zoom sends 360p by default; turn on HD in Settings → Video." },
  { app: "Microsoft Teams", video: "640×360 at 30fps", good: "1280×720 at 30fps", note: "Teams caps most calls at 720p regardless of your camera." },
  { app: "Google Meet", video: "640×360 at 30fps", good: "1280×720 at 30fps", note: "1080p needs a paid Workspace plan and a 1080p camera." },
  { app: "Twitch / OBS", video: "1280×720 at 30fps", good: "1920×1080 at 60fps", note: "60fps only helps if your upload and encoder can keep up." },
];

/** What the score means, shown under the ring. */
export const scoreBands = [
  { min: 85, label: "Great for any call", tone: "success" as const },
  { min: 65, label: "Fine for most calls", tone: "success" as const },
  { min: 45, label: "Usable, worth fixing", tone: "warning" as const },
  { min: 0, label: "Needs attention", tone: "error" as const },
];

export const howToSteps = [
  { name: "Open the test", text: "Open the Spolvero webcam test in the browser you use for calls." },
  { name: "Allow the camera", text: "Select Test my camera and choose Allow when the browser asks for camera access." },
  { name: "Read the result", text: "Your live preview appears with a readiness score, plus resolution, frame rate and lighting checks and a fix for anything marked amber or red." },
];

export const webcamFaqs: Faq[] = [
  {
    q: "Is my video uploaded anywhere?",
    a: "No. The camera stream is shown and measured inside your browser with getUserMedia and a canvas. The page has no upload code, no recording, and no server to send video to. Close the tab and nothing remains.",
  },
  {
    q: "Why does the browser ask for permission?",
    a: "A browser will not hand any page a camera stream without your explicit permission — that is the protection that makes a test like this safe. The permission lasts for this site only, and you can revoke it in your browser's site settings at any time.",
  },
  {
    q: "The test says 720p but the box says 1080p. Why?",
    a: "Browsers hand out the resolution that suits the current conditions, not always the maximum. Low light makes many cameras drop resolution or frame rate to keep the picture bright. Test again in better light, close other apps using the camera, and check no driver utility is limiting it.",
  },
  {
    q: "What frame rate do I need?",
    a: "30fps is the standard for video calls and is what Zoom, Teams and Google Meet send. 60fps matters for gaming and streaming, not for meetings. Anything under 20fps looks noticeably jerky and usually means low light or a busy CPU.",
  },
  {
    q: "Why is my camera dark or grainy?",
    a: "Almost always lighting, not the camera. A laptop webcam has a tiny sensor: with too little light it raises gain, which adds grain, and slows the shutter, which drops frame rate. Put a light source in front of your face rather than behind you, and avoid sitting with a bright window at your back.",
  },
  {
    q: "Does this work on a phone?",
    a: "Yes. It runs in mobile Chrome and Safari, and you can switch between the front and rear camera with the camera picker.",
  },
  {
    q: "Nothing happens when I press the button.",
    a: "Check the address bar shows a padlock — browsers only allow camera access on secure pages. Then check whether a permission prompt is hidden behind another window, and whether another app such as Zoom, Teams or OBS is already holding the camera.",
  },
  {
    q: "Is a higher score always better?",
    a: "The score answers one question: will you look fine on a call. Past 1080p at 30fps with even lighting there is nothing more to gain for a meeting, so a 90 and a 100 look the same to the people watching.",
  },
];

/** Keyed by the error the tool actually detected, then by browser and OS. */
export const troubleshooting = [
  {
    id: "denied",
    q: "The browser blocked the camera",
    lead: "Your browser is refusing camera access for this site. The permission has to be reset from the address bar — a page cannot ask twice on its own.",
    groups: [
      { name: "Chrome, Edge, Brave", steps: ["Select the camera or padlock icon at the left of the address bar.", "Set Camera to Allow.", "Reload the page and run the test again."] },
      { name: "Safari on Mac", steps: ["Open Safari → Settings → Websites → Camera.", "Set this site to Allow.", "Reload the page."] },
      { name: "Firefox", steps: ["Select the padlock in the address bar.", "Next to 'Blocked temporarily' or Camera, select the × to clear the block.", "Reload the page and choose Allow."] },
      { name: "iPhone and iPad", steps: ["Open Settings → Safari → Camera and set it to Ask or Allow.", "For Chrome, open Settings → Chrome → Camera and turn it on.", "Return to the page and reload."] },
      { name: "Android", steps: ["Open the browser menu → Settings → Site settings → Camera.", "Allow the site, or clear it from the Blocked list.", "Reload the page."] },
    ],
  },
  {
    id: "notfound",
    q: "No camera was found",
    lead: "The browser could not see any camera at all. That is a hardware or driver problem rather than a permission one.",
    groups: [
      { name: "Any device", steps: ["Check for a physical privacy shutter or a sliding lens cover.", "Many laptops have a camera kill switch — an F-key with a camera icon, or a switch on the side.", "Unplug and replug a USB camera, ideally into a port on the computer rather than a hub."] },
      { name: "Windows", steps: ["Open Settings → Privacy & security → Camera and turn on 'Camera access' and 'Let apps access your camera'.", "Scroll down and make sure 'Let desktop apps access your camera' is on.", "Open Device Manager → Cameras. A yellow warning icon means a driver problem: right-click → Update driver."] },
      { name: "macOS", steps: ["Open System Settings → Privacy & Security → Camera and turn on your browser.", "Quit and reopen the browser — macOS only applies the change on relaunch.", "For an external camera, try a different cable; some USB-C cables carry power only."] },
    ],
  },
  {
    id: "inuse",
    q: "The camera is in use by another app",
    lead: "Something else already holds the camera. On Windows only one app can use it at a time, and background apps count.",
    groups: [
      { name: "Any device", steps: ["Fully quit Zoom, Teams, Meet tabs, Slack huddles, OBS, Camo and any camera utility — closing the window is often not enough.", "Check the system tray or menu bar for apps still running in the background.", "Reload this page and run the test again."] },
      { name: "Windows", steps: ["Right-click the taskbar → Task Manager and end Zoom, Teams or OBS if they are still listed.", "A camera in use shows a white dot in the taskbar corner; hover it to see which app.", "If nothing is listed, sign out and back in — a crashed app can leave the camera locked."] },
      { name: "macOS", steps: ["A green dot next to the camera means it is active. Check Control Centre to see which app is using it.", "Quit the app from the menu bar, or force quit it with Option-Command-Escape.", "Reload this page."] },
    ],
  },
  {
    id: "black",
    q: "The preview is black, or I look dark and grainy",
    lead: "The camera works — the picture is the problem. This is the most common complaint and almost always lighting.",
    groups: [
      { name: "Fix the light", steps: ["Face your light source. A window or lamp in front of you beats any camera upgrade.", "Move a bright window out from behind you, or close the blind — a backlit shot makes your face a silhouette.", "A cheap desk lamp bounced off a wall gives softer light than pointing it at your face."] },
      { name: "Fix the camera", steps: ["Clean the lens. A smear of finger grease is behind a surprising share of 'blurry webcam' complaints.", "Close other apps: a busy CPU makes the browser drop frames.", "If your camera has a utility app (Logitech, Elgato, Razer), check the exposure and auto-focus settings there."] },
      { name: "Still black", steps: ["Switch camera in the picker above — a virtual camera left behind by OBS or a meeting app is often selected by default.", "Disable any 'virtual background' or camera-effects software.", "Restart the browser, then the machine."] },
    ],
  },
];

/** Long-tail pages under /tools/webcam-test/. Each one carries advice the head page doesn't. */
export const webcamVariants: Variant[] = [
  {
    slug: "zoom",
    label: "Zoom",
    h1: "Webcam test for Zoom",
    title: "Webcam Test for Zoom — Check Your Camera Before the Call",
    description: "Test your webcam before a Zoom call. Check resolution, frame rate and lighting, and find out whether HD is actually on. Free and private — nothing uploaded.",
    intro:
      "Zoom sends 360p by default, so a good camera can still look soft to everyone else. Run the test below to see what your camera actually produces, then turn on HD in Zoom so it sends it.",
    answer:
      "Zoom needs 640×360 at 30fps to work and 1280×720 at 30fps to look good. If the test below shows 720p or better at 30fps, your camera is not the problem — check that HD is enabled in Zoom itself.",
    tips: [
      { title: "Turn on HD in Zoom", body: "In the Zoom app, open Settings → Video and tick HD. Without it, Zoom sends 360p even from a 1080p camera. On free accounts HD is capped at 720p." },
      { title: "Turn off Touch up my appearance while testing", body: "Zoom's smoothing filter hides exactly the grain and softness you are trying to measure. Test here first, then decide whether you want the filter on." },
      { title: "Virtual backgrounds cost you sharpness", body: "Background blur and replacement run on your CPU and are the most common cause of a Zoom picture that stutters. If the test shows 30fps here but Zoom looks jerky, turn the background off first." },
      { title: "Check the right camera is selected", body: "Zoom remembers the last camera it used. If your preview is black in Zoom but fine here, open Settings → Video and pick the camera by name rather than 'Default'." },
    ],
    faqs: [
      { q: "Why does Zoom look worse than this test?", a: "Because Zoom compresses. This test shows your camera's raw output; Zoom re-encodes it for the network and, unless HD is enabled, sends 360p. A gap between the two is normal — a large gap usually means HD is off or your upload speed is limited." },
      { q: "Does Zoom support 1080p?", a: "Full 1080p sending is limited to paid plans and specific conditions. For most accounts 720p is the practical ceiling, so a 720p result in this test is all you need." },
      { q: "How do I test my camera inside Zoom?", a: "Open the Zoom app → Settings → Video, and you get a self-preview. It shows the picture but not your resolution, frame rate or a lighting check, which is what this page adds." },
      { q: "My Zoom video freezes mid-call.", a: "That is usually network or CPU, not the camera. Turn off virtual backgrounds and filters, close other video apps, and switch to a wired connection if you have one." },
    ],
  },
  {
    slug: "teams",
    label: "Teams",
    h1: "Webcam test for Microsoft Teams",
    title: "Webcam Test for Microsoft Teams — Free Camera Check Tool",
    description: "Test your camera before a Teams meeting. Check resolution, frame rate and lighting, and fix a camera Teams cannot see. Free, private, nothing uploaded.",
    intro:
      "Teams is the most common place to meet a camera that works everywhere else and not there — usually because another app is holding it, or because Windows camera permissions are off. Test below, then use the fixes.",
    answer:
      "Microsoft Teams needs 640×360 at 30fps and caps most meetings at 1280×720. If the test below shows 720p at 30fps, your camera is ready for Teams; a black preview in Teams alone is a permission or conflict problem, not a camera fault.",
    tips: [
      { title: "The desktop app and the browser hold the camera separately", body: "If the Teams desktop app is open in the background, it can keep the camera and leave this test — or a Teams web meeting — with nothing. Quit Teams fully from the system tray before testing." },
      { title: "Check Windows camera permissions", body: "Settings → Privacy & security → Camera. Both 'Let apps access your camera' and 'Let desktop apps access your camera' need to be on for the Teams desktop app to see anything." },
      { title: "Teams caps at 720p", body: "There is no HD toggle to find. Teams limits most meetings to 720p and lowers it further on a weak connection, so a 1080p camera and a 720p camera look the same in a call." },
      { title: "Use the Teams device test too", body: "Teams has its own check under Settings → Devices → Make a test call. Use it to confirm Teams itself is wired up once this page has confirmed the camera works." },
    ],
    faqs: [
      { q: "Teams says 'We can't find your camera'. What now?", a: "Work through it in this order: run the test on this page. If the camera works here, the hardware is fine — quit Teams from the system tray, check Windows camera permissions for desktop apps, then restart Teams. If it fails here too, follow the 'No camera was found' steps below." },
      { q: "Why is my Teams video blurry when this test shows 1080p?", a: "Teams caps meeting video at 720p and drops it further when bandwidth is tight. It also compresses more heavily with many people on screen." },
      { q: "Can I use Teams video in a browser?", a: "Yes, in Chrome and Edge. Safari support is limited, and Firefox has historically not supported Teams calling — use the desktop app there." },
      { q: "My camera works in Teams web but not the Teams app.", a: "That points straight at the 'Let desktop apps access your camera' setting in Windows privacy settings, which browsers do not need but the desktop app does." },
    ],
  },
  {
    slug: "google-meet",
    label: "Google Meet",
    h1: "Camera test for Google Meet",
    title: "Camera Test for Google Meet — Free In-Browser Camera Check",
    description: "Test your camera before a Google Meet call. Check resolution, frame rate and lighting, and fix Chrome camera permissions. Free and private.",
    intro:
      "Google Meet runs in the same browser as this test, which makes it the easiest case of all: if your camera works on this page, it will work in Meet. If it doesn't, the fix is a browser permission.",
    answer:
      "Google Meet needs 640×360 at 30fps and sends 720p by default. Because Meet runs in your browser, a camera that passes the test below will work in Meet — a failure here is a browser permission problem, and the fix is in the address bar.",
    tips: [
      { title: "Same browser, same permission", body: "Meet uses exactly the same camera permission model as this page. Test in the browser you'll actually join from — a permission granted in Chrome means nothing in Safari." },
      { title: "1080p needs a paid plan", body: "Meet sends 720p by default. 1080p sending is limited to certain Workspace editions and needs a 1080p camera and a healthy connection, so 720p in the test is enough for almost everyone." },
      { title: "Close the other tab", body: "A second Meet tab, a Google Meet green room left open, or a background Hangouts window will hold the camera and leave the new call blank. Close spare tabs before joining." },
      { title: "Check the green room before the meeting", body: "Meet shows a self-view before you join. Use it together with this test: this page tells you the numbers, the green room confirms Meet picked the same camera." },
    ],
    faqs: [
      { q: "Meet says 'Camera is blocked'. How do I unblock it?", a: "Select the camera icon at the right of the Chrome address bar, choose 'Always allow', then reload the Meet tab. The same steps unblock this test page." },
      { q: "Does Google Meet work in Safari?", a: "Yes, Meet supports current Safari on macOS and iOS, though some features arrive in Chrome first. Camera permission is set in Safari → Settings → Websites → Camera." },
      { q: "Why does Meet look softer than this test?", a: "Meet compresses video for the network and lowers quality when bandwidth drops or many people are on screen. The raw camera output you see here is always the best case." },
      { q: "Can I test my Meet camera without starting a meeting?", a: "Yes — use this page, or open meet.google.com and start a new meeting without inviting anyone, which shows the green room self-view." },
    ],
  },
  {
    slug: "mac",
    label: "Mac",
    h1: "Test your camera on a Mac",
    title: "Mac Camera Test — Check Your MacBook Webcam in 3 Seconds",
    description: "Test the camera on your MacBook or an external webcam on macOS. Check resolution, frame rate and lighting, and fix macOS permissions. Free and private.",
    intro:
      "macOS has no built-in camera test app — Photo Booth is the usual workaround, and it tells you nothing about resolution or frame rate. Run the test below, and use the macOS-specific fixes if the camera doesn't appear.",
    answer:
      "On a Mac, open this page in Safari or Chrome and select Test my camera. macOS has no separate camera test app; if the camera is missing, turn your browser on under System Settings → Privacy & Security → Camera, then quit and reopen the browser — macOS only applies that change on relaunch.",
    tips: [
      { title: "Quit and reopen the browser after granting access", body: "This is the step most guides leave out. macOS will not hand the camera to an already-running browser after you tick the box in Privacy & Security — the app has to be restarted." },
      { title: "Continuity Camera can steal the picture", body: "If an iPhone is nearby, macOS may select it as the camera instead of the built-in one. Use the camera picker above to switch back, or turn off Continuity Camera on the iPhone under Settings → General → AirPlay & Continuity." },
      { title: "The FaceTime HD camera is 1080p on newer Macs", body: "Macs from 2021 onward carry a 1080p camera; older MacBooks are 720p. If the test shows 720p on a recent Mac, low light is usually the reason the camera dropped down." },
      { title: "There is no camera driver to reinstall", body: "macOS has no user-serviceable camera driver. If the camera is missing in every app, reset by restarting, and if it persists it is a hardware or SMC-level fault worth an Apple Support appointment." },
    ],
    faqs: [
      { q: "How do I test my MacBook camera without Photo Booth?", a: "Open this page and select Test my camera. Unlike Photo Booth, it also reports your resolution, frame rate and lighting, and tells you whether that is good enough for a call." },
      { q: "Why does my Mac camera say it's in use when nothing is open?", a: "A meeting app left running in the menu bar is the usual cause. Check Control Centre for the green camera dot, which names the app currently using it, and quit that app." },
      { q: "Is the green light always on when the camera is used?", a: "Yes. On a Mac the green indicator light is wired to the camera power and cannot be turned off in software, so a dark light means no app is recording." },
      { q: "Can I use my iPhone as a Mac webcam?", a: "Yes, with Continuity Camera on recent macOS and iOS versions. It appears in the camera picker on this page, and it is usually sharper than the built-in camera on older MacBooks." },
    ],
  },
  {
    slug: "windows",
    label: "Windows",
    h1: "Test your webcam on Windows 11",
    title: "Webcam Test for Windows 11 and 10 — Free Camera Checker",
    description: "Test your webcam on Windows 11 or 10 in the browser. Check resolution, frame rate and lighting, and fix permissions, privacy switches and drivers.",
    intro:
      "Windows has two layers between your camera and the browser — system privacy settings and the driver — and either can block it silently. Run the test below; if it fails, the fixes are in order of how often they work.",
    answer:
      "On Windows 11, open this page and select Test my camera. If no camera is found, check Settings → Privacy & security → Camera and turn on both 'Let apps access your camera' and 'Let desktop apps access your camera', then look for a physical privacy switch or lens cover on the laptop.",
    tips: [
      { title: "Only one app at a time", body: "Windows generally hands the camera to one app at a time. Zoom or Teams sitting in the system tray is the single most common reason a browser camera test shows nothing." },
      { title: "Look for the taskbar camera dot", body: "When the camera is live, Windows 11 shows a small indicator in the taskbar corner. Hovering it names the app that holds the camera, which saves guessing." },
      { title: "Privacy switches are physical", body: "Many Lenovo, HP and Dell laptops have a sliding lens cover or an F-key with a camera icon that cuts the camera at the hardware level. No software fix will get past one." },
      { title: "Roll a driver back before updating it", body: "If the camera broke after a Windows update, Device Manager → Cameras → right-click → Properties → Driver → Roll Back Driver fixes it more often than searching for a newer one." },
    ],
    faqs: [
      { q: "How do I test my webcam on Windows 11 without installing anything?", a: "Use this page — it runs in Edge, Chrome and Firefox and needs no download. Windows also ships a Camera app, but it shows the picture without reporting resolution, frame rate or lighting." },
      { q: "Windows Camera app works but the browser doesn't.", a: "That is a browser permission, not a hardware fault. Select the camera icon in the address bar and set Camera to Allow, then reload." },
      { q: "The browser works but Zoom or Teams doesn't.", a: "Turn on 'Let desktop apps access your camera' in Settings → Privacy & security → Camera. Browsers are covered by the app setting above it; desktop apps need this separate one." },
      { q: "My webcam shows a black screen on Windows.", a: "Check the lens cover and the camera kill switch first, then close every other app that might hold the camera, then roll back the camera driver in Device Manager." },
    ],
  },
  {
    slug: "iphone",
    label: "iPhone",
    h1: "Test the camera on your iPhone",
    title: "iPhone Camera Test — Check the Front and Rear Cameras Fast",
    description: "Test your iPhone or iPad front and rear camera in Safari or Chrome. Check resolution, frame rate and lighting before a video call. Free, private, nothing uploaded.",
    intro:
      "The iPhone Camera app tells you nothing about what a browser or a video call will actually get. This test uses the same camera path a web call does, and lets you switch between the front and rear camera.",
    answer:
      "Open this page in Safari on your iPhone and select Test my camera, then choose Allow. Use the camera picker to switch between the front and rear camera. If the prompt never appears, turn on Settings → Safari → Camera and set it to Ask or Allow.",
    tips: [
      { title: "Hold the phone at eye level", body: "A phone in your lap gives an up-the-nose angle no camera setting can fix. Prop it against something at eye height and step back until your head and shoulders fill the frame." },
      { title: "The rear camera is the better camera", body: "If picture quality matters more than eye contact — recording a clip, or joining a call propped up — switch to the rear camera in the picker. It has a bigger sensor and better low-light behaviour." },
      { title: "Face the window, don't sit in front of it", body: "Phone sensors are small and clip highlights fast. A window behind you turns your face into a silhouette that no amount of screen brightness will recover." },
      { title: "Low Power Mode can drop your frame rate", body: "If the test reports an unexpectedly low frame rate, check whether Low Power Mode is on and whether the phone is warm — both make iOS throttle camera capture." },
    ],
    faqs: [
      { q: "Why is there no permission prompt on my iPhone?", a: "Either the site is already blocked, or camera access is off for the browser. For Safari, check Settings → Safari → Camera. For Chrome, check Settings → Chrome → Camera. Then reload the page." },
      { q: "Can I test the rear camera too?", a: "Yes. Once access is granted, the camera picker lists the front and rear cameras and you can switch between them without reloading." },
      { q: "Does this work on an iPad?", a: "Yes, in Safari and Chrome on iPadOS, with the same front and rear camera picker." },
      { q: "Why does the test show a lower resolution than my iPhone camera?", a: "Browsers request a stream sized for video calling rather than the sensor's full photo resolution. What you see here is what a web call will actually get, which is the number that matters." },
    ],
  },
  {
    slug: "obs",
    label: "Streaming",
    h1: "Webcam test for streaming and OBS",
    title: "Webcam Test for OBS — Check Your Real Resolution and FPS",
    description: "Check your webcam's real resolution and frame rate before you stream. See whether you are truly getting 1080p60, and fix a camera OBS has locked.",
    intro:
      "Streaming is the one case where 60fps and 1080p are worth chasing. This test measures the frame rate your camera is really delivering, not the number printed on the box.",
    answer:
      "For streaming, aim for 1280×720 at 30fps as a floor and 1920×1080 at 60fps as a target. The test below measures the frame rate your camera actually delivers — if it is far below the rating, low light or a busy CPU is throttling it, and OBS will see the same limit.",
    tips: [
      { title: "OBS holds the camera exclusively", body: "Close OBS before running this test, or you'll get 'camera in use'. The same applies in reverse: this page must be closed before OBS can claim the camera again." },
      { title: "A virtual camera is not your camera", body: "If OBS, Camo, Snap Camera or NVIDIA Broadcast is installed, the picker above will list virtual devices. Pick the physical camera by name to measure real hardware output." },
      { title: "60fps needs light more than it needs a better camera", body: "Most webcams only sustain their top frame rate in bright light. If the test shows 30fps on a 60fps camera, add light before you buy anything." },
      { title: "Match OBS to what you measured", body: "Set the source resolution and FPS in OBS to the values shown here. Asking OBS for 1080p60 from a camera delivering 720p30 costs CPU and gains nothing." },
    ],
    faqs: [
      { q: "How do I check my real webcam fps?", a: "Run the test on this page. It counts the frames your browser actually receives over a short sample and reports the measured rate, rather than the rate the camera advertises." },
      { q: "Is 60fps worth it for streaming?", a: "For fast-motion gameplay, yes. For a talking-head stream, 30fps is fine and frees encoder headroom and upload bandwidth for a sharper picture." },
      { q: "My camera says 4K but the test shows 1080p.", a: "Browsers request a video-call-sized stream, and many 4K webcams only deliver 4K at low frame rates through specific software. The 1080p you see here is what web-based capture will give you." },
      { q: "Does a capture card camera work in this test?", a: "Yes. A capture card usually appears as a standard camera device, so it shows in the picker and can be measured like any webcam." },
    ],
  },
  {
    slug: "fps",
    label: "Resolution and fps",
    h1: "Check your webcam's real resolution and fps",
    title: "Webcam Resolution and FPS Test — See Your Real Numbers Now",
    description: "Find your webcam's real resolution and frame rate, measured in the browser rather than read off the box. See whether 1080p is really 1080p.",
    intro:
      "A webcam's box quotes its best case: brightest light, best software, highest bitrate. This test measures what your browser actually receives right now, which is the number that decides how you look on a call.",
    answer:
      "The test below reports your camera's live resolution from the video track and measures frame rate by counting the frames your browser receives over a short sample. A gap between that and the advertised rating is normal and usually comes from low light, which makes cameras lengthen exposure and drop frames.",
    tips: [
      { title: "Measure twice: dark room and bright room", body: "Run the test in your usual lighting and again next to a window. A camera that reports 1080p30 in bright light and 720p15 in your room is behaving normally — your room is the variable to change." },
      { title: "Resolution and frame rate trade against each other", body: "Many cameras cannot deliver their highest resolution at their highest frame rate. If you need 60fps, expect 720p; if you need 1080p, expect 30fps." },
      { title: "Megapixels are a photo number, not a video one", body: "A camera marketed on megapixels is quoting still images. Video calls care about resolution and frame rate, which is what this test reports." },
      { title: "Check before the return window closes", body: "Test a new camera the day it arrives, in the light you actually work in. If it can't reach its advertised numbers there, it is the wrong camera for your desk." },
    ],
    faqs: [
      { q: "How is the frame rate measured?", a: "The page counts the video frames the browser delivers over a short sample using the browser's own frame callback, then reports the rate. It measures delivery, so a slow machine or a busy CPU shows up in the number — which is exactly what a call would experience." },
      { q: "Why does my resolution change between tests?", a: "Cameras and browsers negotiate a stream based on conditions. Lower light, a busier CPU or another app sharing the camera can all push the negotiated resolution down." },
      { q: "What resolution do I actually need?", a: "1280×720 at 30fps covers every mainstream video call. 1080p helps for streaming and recording, and beyond that you are past the point where meeting software will send the extra detail." },
      { q: "Can a browser show the camera's maximum resolution?", a: "It can request one, but the camera decides. This test asks for the highest the camera will give under current conditions and reports what came back." },
    ],
  },
];

export const getVariant = (slug: string) => webcamVariants.find((v) => v.slug === slug);

/** Long-tail variants for the four tests that share the DeviceTest engine.
 *  Keyed by the head tool's slug. Same rule as `webcamVariants`: a variant
 *  earns its page by carrying advice the head page does not, not by swapping
 *  a product name into the same four tips. */
export const deviceVariants: Record<string, Variant[]> = {
  "mic-test": [
    {
      slug: "zoom",
      label: "Zoom",
      h1: "Microphone test for Zoom",
      title: "Microphone Test for Zoom — Check Your Mic Level for Free",
      description:
        "Test your microphone before a Zoom call. Watch a live level meter, pick the right input, and fix a mic Zoom cannot hear. Nothing recorded or uploaded.",
      intro:
        "Zoom's automatic volume and its noise suppression both change how you sound, and either can make a working microphone seem broken. Check your raw level here first, then match the Zoom settings below.",
      answer:
        "To test your mic for Zoom, speak at your normal volume and check the meter peaks between −18 dB and −6 dB. If the level is fine here but Zoom hears nothing, Zoom is on the wrong input — open Settings → Audio and pick the microphone by name rather than leaving it on Same as System.",
      tips: [
        { title: "Turn off Automatically adjust microphone volume", body: "Zoom raises the gain when you are quiet and lowers it when you are loud, which sounds like your voice fading in and out. Untick it in Settings → Audio and set the slider by hand against the meter here." },
        { title: "Background noise suppression eats quiet speech", body: "Zoom's suppression defaults to Auto and will gate a soft voice out entirely. If people say you cut out at the start of sentences, set it to Low." },
        { title: "Original Sound is for music, not meetings", body: "Enabling Original Sound for Musicians switches off suppression, echo cancellation and auto gain together. That is right for an instrument and wrong for a laptop in a kitchen." },
        { title: "Test the microphone Zoom will actually use", body: "Zoom remembers the last device it saw. Plug the headset in before opening Zoom, then confirm the input name in Zoom matches the one you selected here." },
      ],
      faqs: [
        { q: "Zoom says my mic is working but nobody hears me.", a: "Check you are not muted at three separate levels: the Zoom mute button, a hardware mute switch on the headset, and the operating system's input volume. Zoom's own level bar can move while the meeting audio stays muted." },
        { q: "Why am I quieter on Zoom than on this test?", a: "Zoom applies noise suppression and, by default, automatic gain control. Both reduce a soft voice. This page shows the raw signal, which is why the two disagree." },
        { q: "How do I test my mic inside Zoom?", a: "Settings → Audio → Test Mic records a short clip and plays it back. It is useful for hearing tone, but it shows no numeric level, which is the thing that tells you whether you are too quiet." },
        { q: "My Bluetooth headset sounds terrible on Zoom calls.", a: "That is the Bluetooth call profile rather than Zoom. The moment the microphone is used, the link drops to narrowband and the audio goes thin. Wired earbuds avoid it completely." },
      ],
    },
    {
      slug: "teams",
      label: "Microsoft Teams",
      h1: "Microphone test for Microsoft Teams",
      title: "Microphone Test for Microsoft Teams — Free Mic Level Check",
      description:
        "Test your microphone before a Teams meeting. Check your level, pick the right input, and fix a mic Teams cannot find. Free, private, nothing uploaded.",
      intro:
        "Teams is the most common place to meet a microphone that works everywhere else. Usually it is a Windows permission or another app holding the device. Test here, then work through the fixes below.",
      answer:
        "To test your microphone for Teams, speak normally and check the meter peaks between −18 dB and −6 dB. If it works here but Teams cannot find it, quit Teams from the system tray, turn on microphone access for desktop apps in Windows privacy settings, and reopen Teams.",
      tips: [
        { title: "There are two Windows permissions, not one", body: "Settings → Privacy & security → Microphone has a global toggle and a separate 'Let desktop apps access your microphone'. Teams in a browser needs only the first; the Teams desktop app needs both." },
        { title: "Teams noise suppression defaults to Auto", body: "Settings → Devices → Noise suppression can remove a soft voice along with the fan noise. Set it to Low if people tell you that you drop out mid-sentence." },
        { title: "Run the Teams test call afterwards", body: "Settings → Devices → Make a test call records you and plays it back through Teams' own pipeline. Use it once this page has confirmed the hardware is fine, so you are testing one thing at a time." },
        { title: "Only one app at a time can hold some headsets", body: "Certain USB and Bluetooth headsets allow a single application to open the microphone. If Teams was running in the background, this page can show a flat meter until you quit it properly." },
      ],
      faqs: [
        { q: "Teams cannot detect my microphone.", a: "Work through it in order: confirm the mic works on this page, quit Teams fully from the system tray, check Windows microphone permissions for desktop apps, then restart Teams. If it also fails here, the fault is the device or its driver." },
        { q: "Why does Teams make me sound robotic?", a: "Teams drops to a lower bitrate on a poor connection, and heavy noise suppression adds artefacts on top of that. Check your connection and set suppression to Low before blaming the microphone." },
        { q: "Can Teams use a different mic from everything else?", a: "Yes. Teams keeps its own device selection under Settings → Devices, independent of the Windows default. That is also how it ends up pointing at a headset you unplugged last week." },
        { q: "My mic works in Teams web but not the desktop app.", a: "That points straight at 'Let desktop apps access your microphone' in Windows privacy settings. Browsers do not need it; the desktop app does." },
      ],
    },
    {
      slug: "google-meet",
      label: "Google Meet",
      h1: "Microphone test for Google Meet",
      title: "Microphone Test for Google Meet — Check Your Mic Online",
      description:
        "Test your microphone before a Google Meet call. Watch your level, choose the right input, and fix the Chrome permission that silences it. Nothing is uploaded.",
      intro:
        "Meet runs in the browser, so nearly every microphone problem there is a permission or a device choice rather than a fault. Check your level here, then fix the permission if Meet still hears nothing.",
      answer:
        "To test your microphone for Google Meet, speak normally and confirm the meter moves and peaks between −18 dB and −6 dB. If Meet hears nothing, click the padlock in Chrome's address bar on meet.google.com, set Microphone to Allow, and reload the tab.",
      tips: [
        { title: "Permissions are per-site, not per-browser", body: "Allowing the microphone on this page does nothing for meet.google.com. Every site asks separately, and a single accidental Block is remembered indefinitely until you clear it." },
        { title: "Use Meet's green room check second", body: "On the screen before you join, Meet shows a level indicator and a 'Check your audio and video' option that records a short sample. Run it after this page, so each test covers one layer." },
        { title: "Close the other tab holding the microphone", body: "A second Meet tab, or any page still using the mic, can leave the one you are in silent. Browsers mark the tab that holds the microphone with a recording indicator — look along the tab strip." },
        { title: "Meet keeps its own input picker", body: "Three-dot menu → Settings → Audio. Choose the microphone by name rather than leaving it on Default, which follows the system and changes when you plug anything in." },
      ],
      faqs: [
        { q: "Google Meet cannot hear me but this test works.", a: "Then the hardware is fine and Meet has either the wrong input selected or no permission. Check the padlock icon for the microphone permission first, then Meet's own Settings → Audio device list." },
        { q: "Chrome never asks for microphone permission.", a: "It was answered before and remembered. Click the padlock beside the address, set Microphone back to Ask or Allow, and reload the page." },
        { q: "Does Google Meet work in Safari or Firefox?", a: "Yes, both support Meet, though Chrome and Edge get new features first. Each browser stores microphone permission separately, so allowing it in one does nothing for the others." },
        { q: "Why am I quiet on Meet but loud here?", a: "Meet applies its own noise cancellation and gain control, and this page shows the raw signal. A modest difference is normal; a large one usually means Meet has the wrong input selected." },
      ],
    },
    {
      slug: "discord",
      label: "Discord",
      h1: "Microphone test for Discord",
      title: "Microphone Test for Discord — Check Your Mic Level Online",
      description:
        "Test your microphone before talking on Discord. Check your level, then set input sensitivity, push-to-talk and noise suppression so people hear every word.",
      intro:
        "Most Discord microphone problems are input sensitivity rather than hardware: the gate sits above your speaking level, so the first word of every sentence disappears. Find your real level here, then set the threshold to match.",
      answer:
        "To test your mic for Discord, speak normally and note where the meter peaks — between −18 dB and −6 dB is healthy. Then open Discord's Settings → Voice & Video, switch off automatic input sensitivity, and set the slider just below your quietest speech so the gate never closes mid-sentence.",
      tips: [
        { title: "Turn automatic input sensitivity off", body: "Discord's automatic mode re-reads the room and often settles above a quiet voice, clipping the start of sentences. Set the threshold by hand using the bar in Discord's own settings." },
        { title: "Krisp suppression trades quality for quiet", body: "Discord's noise suppression is aggressive by design. It removes a mechanical keyboard convincingly and thins a soft voice while it does. Turn it off and listen before you leave it on." },
        { title: "Push-to-talk removes the problem entirely", body: "In a noisy room a bound key beats any amount of gate tuning. Set a release delay around 100ms so the last syllable is not cut off." },
        { title: "Reset Voice Settings fixes more than the sliders do", body: "Settings → Voice & Video → Reset Voice Settings clears a bad device selection and a stuck audio subsystem in one step, and is faster than working through every control." },
      ],
      faqs: [
        { q: "Discord cannot hear me but this test can.", a: "Almost always input sensitivity. Open Settings → Voice & Video, switch off automatic sensitivity, and drag the threshold below your speaking level. Check the input device by name while you are in there." },
        { q: "Why does my first word get cut off?", a: "A noise gate only opens once you cross its threshold, so anything quieter is lost. Lower the sensitivity threshold, or switch to push-to-talk." },
        { q: "Should I use the Discord app or the browser?", a: "The app exposes input sensitivity, push-to-talk and noise suppression controls that the browser version does not. If you are troubleshooting, use the app." },
        { q: "My mic is quiet on Discord only.", a: "Check the per-application input volume in your system sound settings, and confirm Discord is not still using a second device it remembered from last time." },
      ],
    },
    {
      slug: "airpods",
      label: "AirPods",
      h1: "AirPods microphone test",
      title: "AirPods Mic Test — Check Your AirPods Microphone Online",
      description:
        "Test the microphone in your AirPods or Bluetooth earbuds. See your live level, and find out why the sound quality drops the moment the mic turns on.",
      intro:
        "AirPods sound excellent until the microphone is used, and then everything goes thin. That is Bluetooth switching profiles, not a fault. This test runs through the same path, so what you see here is what a call gets.",
      answer:
        "To test an AirPods microphone, start the test and speak normally — the meter should peak between −18 dB and −6 dB. Expect the playback quality to drop as soon as the mic activates: Bluetooth switches from a high-bitrate music codec to a narrowband call profile, and every wireless headset does this.",
      tips: [
        { title: "The profile switch is the whole story", body: "With playback only, Bluetooth uses a high-bitrate codec. Open a microphone and the link drops to a call profile of roughly 16kHz. Music going dull the moment you join a call is expected behaviour, not a defect." },
        { title: "Wired earbuds beat any AirPod for calls", body: "A cheap wired headset carries full-bandwidth audio in both directions at once. Where call quality matters more than convenience, this is the largest single improvement available." },
        { title: "Work out which AirPod is doing the talking", body: "With both in, either one can be the microphone. A blocked mesh on that side halves your level. Try each one alone and compare the meter." },
        { title: "Clean the mesh before replacing anything", body: "The microphone port is a small mesh at the bottom of the stem and it clogs with pocket lint. A soft dry brush often restores a level that had been sliding for months." },
      ],
      faqs: [
        { q: "Why do my AirPods sound worse on calls?", a: "Bluetooth cannot carry high-quality playback and a microphone at the same time. When the mic opens, the link drops to a narrowband call profile. Every wireless headset behaves this way." },
        { q: "Can I use AirPods as a microphone on Windows?", a: "Yes, though support is inconsistent. Windows exposes them as two devices — a stereo playback one and a hands-free one — and only the hands-free device carries the microphone." },
        { q: "One AirPod is much quieter than the other.", a: "Try each one alone on this test. A clear difference points at a blocked microphone mesh on that side, which careful cleaning usually fixes." },
        { q: "Is the iPhone's own microphone better?", a: "In a quiet room, usually yes — the phone's microphones carry more bandwidth than a Bluetooth call profile. AirPods win in noisy places and when you need your hands free." },
      ],
    },
    {
      slug: "windows",
      label: "Windows",
      h1: "Microphone test for Windows",
      title: "Microphone Test for Windows 11 — Check Your Mic for Free",
      description:
        "Test your microphone on Windows 10 or 11 in the browser. See your level, then fix the privacy setting, input volume and enhancements that silence it.",
      intro:
        "Windows has four separate places a microphone can be silenced, and a browser only ever sees the end of that chain. Test here first — if the meter stays flat, the list below is the order to check them in.",
      answer:
        "To test a microphone on Windows, allow access below and speak normally; the meter should peak between −18 dB and −6 dB. A flat meter with the correct device selected almost always means Settings → Privacy & security → Microphone is off, or the input volume in Sound settings has been set to zero.",
      tips: [
        { title: "Check the input volume, not only the mute", body: "Sound settings → your input device → Input volume. Windows sometimes drops this to zero after a driver update, which looks exactly like a dead microphone." },
        { title: "Turn off audio enhancements while testing", body: "Many Realtek and vendor drivers add enhancements that gate or compress the signal. Disable them, retest, then turn back on only what measurably helped." },
        { title: "Exclusive mode lets one app take the device", body: "In the microphone's advanced properties, 'Allow applications to take exclusive control' means a background app can lock everything else out. Unticking it fixes a whole class of intermittent faults." },
        { title: "Re-enumerate a USB mic rather than reinstalling drivers", body: "Unplug it, remove the device under Audio inputs and outputs in Device Manager, then plug it back in. This is more reliable than a driver reinstall and takes a fraction of the time." },
      ],
      faqs: [
        { q: "Windows shows my mic but records nothing.", a: "Check in order: the two privacy toggles, the input volume slider, the device mute in Sound settings, then a physical mute switch on the hardware. Windows can list a device as working while any one of these blocks the signal." },
        { q: "How do I test a mic without installing anything?", a: "This page does it — it uses the browser's own audio API, installs nothing and uploads nothing. Windows also has a level bar under Settings → System → Sound → your input device." },
        { q: "My USB mic disappeared after a Windows update.", a: "Unplug it, remove the device in Device Manager under Audio inputs and outputs, then reconnect it so Windows re-enumerates it from scratch." },
        { q: "Which microphone is Windows actually using?", a: "Settings → System → Sound shows the default input. Individual apps can override it, which is why a mic that works here can still be ignored by one program." },
      ],
    },
  ],

  "speaker-test": [
    {
      slug: "headphones",
      label: "Headphones",
      h1: "Headphone test: left, right and the full range",
      title: "Headphone Test — Check Left, Right and Stereo Channels Free",
      description:
        "Test your headphones in the browser. Play a tone through each ear separately, run a frequency sweep, and confirm the channels are not swapped.",
      intro:
        "Play the left tone and confirm it arrives on your left. Swapped channels are more common than people expect and nearly impossible to notice in music, but they ruin anything mixed with direction in it.",
      answer:
        "To test headphones, play the left tone and the right tone separately and confirm each arrives on the correct side. Sound from one ear only usually means the plug is not fully seated or a conductor in the cable has failed. Reversed sides point at an extension lead or a channel balance setting, not at the headphones.",
      tips: [
        { title: "Seat the plug fully", body: "A 3.5mm jack pushed in only to the first click gives you one channel or a thin, phasey sound. Push until it seats — a phone case with a narrow port is the usual reason it does not." },
        { title: "Flex the cable near the plug while a tone plays", body: "Crackling or dropouts as you move it means a broken conductor rather than a driver fault. It is the most common headphone failure, and the plug end is where it happens." },
        { title: "Turn spatial audio off before judging anything", body: "Head-tracked and spatial modes move the stereo image deliberately, which makes a left-right test meaningless. Switch to plain stereo, test, then turn it back on." },
        { title: "Start the sweep quiet", body: "Headphones sit against your ears, so a sweep at a level that is comfortable on speakers can genuinely damage hearing. Set the volume low and raise it only if you need to." },
      ],
      faqs: [
        { q: "One side is silent.", a: "Try another pair in the same socket, and the same pair in another socket. Those two tests separate the headphones, the cable and the port in under a minute." },
        { q: "The sides are swapped. Is that possible?", a: "Yes. A reversed extension lead, a badly wired adapter or a balance slider dragged off centre all do it. It is almost never the headphones themselves." },
        { q: "Why do cheap headphones go quiet at the low end of the sweep?", a: "Small drivers cannot move enough air to produce deep bass. Very little output below about 60Hz is normal on in-ear headphones. A rattle or a dropout anywhere in the range is not." },
        { q: "Is testing at full volume safe?", a: "No. Prolonged exposure above roughly 85 dB damages hearing and headphones reach well past that. Test at the level you would actually listen at." },
      ],
    },
    {
      slug: "surround",
      label: "Surround sound",
      h1: "Surround sound test: what a browser can and cannot check",
      title: "Surround Sound Test — Check 5.1 and 7.1 Speakers Online",
      description:
        "Test a surround setup channel by channel. See what a browser can and cannot send to 5.1 or 7.1, and which built-in tool checks the rest of the chain.",
      intro:
        "Browsers output stereo and let the operating system handle everything after that, so a web page cannot address a rear speaker directly. This test proves the front pair and the signal path; the section below covers the honest limits.",
      answer:
        "A browser cannot send discrete 5.1 or 7.1 channels — it outputs stereo, and your operating system or receiver upmixes it. Use the tones below to confirm the front pair and the signal path, then use the speaker configuration test in Windows or macOS, or your receiver's own test tone, to check the centre, surround and subwoofer channels individually.",
      tips: [
        { title: "Use the system test for discrete channels", body: "On Windows: Sound settings → your device → Configure → Test plays each speaker in turn by name. On macOS: Audio MIDI Setup → Configure Speakers. Those tools address individual channels; a browser cannot." },
        { title: "The receiver's test tone is the ground truth", body: "Every AV receiver has a channel test in its setup menu, and it bypasses the computer entirely. That is exactly what you want when deciding whether a silent rear speaker is the PC or the wiring." },
        { title: "A silent centre channel is usually the source", body: "Stereo material has no centre channel at all. Check whether what you are playing is genuinely multichannel before you start adjusting speaker levels." },
        { title: "Check the declared speaker layout first", body: "If the system believes you have two speakers, it folds everything into two no matter how many are connected. The configuration screen above is where that is declared." },
      ],
      faqs: [
        { q: "Can I test 5.1 speakers in a browser?", a: "Not channel by channel. Web audio outputs stereo to the operating system, which then upmixes it. Use the speaker configuration test in Windows or macOS to hear individual channels." },
        { q: "Why do my rear speakers stay silent?", a: "Either the source is stereo, or the system is configured for two channels. Check the declared speaker layout in your sound settings before suspecting the speakers or the wiring." },
        { q: "What about surround from a streaming site?", a: "Some services pass multichannel audio through in specific browsers and apps, and many do not. It varies by service and platform, which is another reason a browser test cannot settle this." },
        { q: "My subwoofer does nothing.", a: "Check that it is enabled in the speaker configuration, that the crossover is not set below the range of the material, and that the receiver is not in a stereo mode that bypasses it." },
      ],
    },
    {
      slug: "windows",
      label: "Windows",
      h1: "Speaker test for Windows",
      title: "Speaker Test for Windows 11 — Check Sound and Channels Free",
      description:
        "Test speakers on Windows 10 or 11 in the browser. Play left and right tones, then fix the output device, volume mixer and enhancements that silence them.",
      intro:
        "Windows keeps at least three volume controls plus a per-application mixer, and any one of them can silence a working speaker. Play the tones first — if they work here but not elsewhere, the mixer is where to look.",
      answer:
        "To test speakers on Windows, play the left and right tones below and confirm each comes from the correct side. If you hear nothing, check the output device in Settings → System → Sound, then the per-app volume mixer, then whether the browser tab itself is muted — in that order.",
      tips: [
        { title: "The volume mixer is per application", body: "Settings → System → Sound → Volume mixer keeps a separate level for every running app. A browser muted there stays silent whatever the main slider says." },
        { title: "Windows switches output when you plug in a monitor", body: "Connecting a display over HDMI usually moves audio to that monitor's speakers, which may not exist. If sound vanished the moment a screen was connected, this is why." },
        { title: "Use the built-in test for individual speakers", body: "Sound settings → your device → Configure → Test names and plays each speaker in turn. It is the right tool for anything beyond a stereo pair." },
        { title: "Disable enhancements before chasing a fault", body: "Loudness equalisation and virtual surround change level and imaging enough to make a channel test read wrongly. Turn them off, test, then decide what to restore." },
      ],
      faqs: [
        { q: "Sound works in one app but not another.", a: "That is either the per-application volume mixer or that app having its own output device setting. Check the mixer first — it is much the more common of the two." },
        { q: "There is a red cross on my speaker icon.", a: "Windows cannot see an output device at all. Check the physical connections, then Device Manager for a disabled or missing audio device, then reinstall the audio driver." },
        { q: "Audio moved to my monitor and I want it back.", a: "Settings → System → Sound, and choose the correct output device. Windows remembers this per display, so it will switch again the next time that monitor is connected." },
        { q: "Why is there no sound from the front panel jack?", a: "Front headphone sockets sit on a separate connector inside the case, and many drivers need the front and rear jacks configured as separate devices before either one works." },
      ],
    },
    {
      slug: "mac",
      label: "Mac",
      h1: "Speaker test for Mac",
      title: "Speaker Test for Mac — Check Output, Left and Right Sides",
      description:
        "Test the speakers or headphones on your Mac. Play a tone through each channel, check the balance slider, and confirm the right output is selected.",
      intro:
        "macOS keeps a balance slider that is easy to nudge and hard to find, and it sits behind a surprising share of \"one side is quiet\" reports. Play both tones, then check the settings below.",
      answer:
        "To test speakers on a Mac, play the left and right tones below and confirm each comes from the correct side. If one side is quiet, open System Settings → Sound and check the Balance slider is centred — a slider dragged off centre is far more common than a failed speaker.",
      tips: [
        { title: "Check the balance slider first", body: "System Settings → Sound → Output → Balance. A stray trackpad gesture can move it, and nothing anywhere on screen indicates that it is off centre." },
        { title: "Option-click the volume icon to switch output fast", body: "Holding Option while clicking the menu bar volume control lists every input and output device and lets you switch without opening System Settings at all." },
        { title: "Audio MIDI Setup is where the detail lives", body: "It shows the sample rate, per-channel volume and the speaker configuration. When something sounds wrong but the basic settings look fine, look there next." },
        { title: "Turn Spatial Audio off for a channel test", body: "Spatial and head-tracked modes move the stereo image on purpose, which makes a left-right check unreliable. Switch to Stereo in Control Centre before you start." },
      ],
      faqs: [
        { q: "No sound from my Mac at all.", a: "Check the output device in System Settings → Sound, then that the volume is not muted, then whether the browser tab is muted. If the output list is empty, restart — Core Audio occasionally needs it." },
        { q: "Why did my Mac send audio to the TV?", a: "macOS switches output when an HDMI or AirPlay device connects, and remembers the choice. Set it back in System Settings → Sound; it will switch again next time that device appears." },
        { q: "One side went quieter and I changed nothing.", a: "Check the Balance slider. It causes this far more often than a failing speaker, and nothing on screen flags it as being off centre." },
        { q: "Can I test each speaker on a MacBook individually?", a: "The tones here separate left and right, which is what a MacBook has. For a setup with more speakers, use Audio MIDI Setup → Configure Speakers." },
      ],
    },
  ],

  "keyboard-test": [
    {
      slug: "gaming",
      label: "Gaming and ghosting",
      h1: "Keyboard ghosting test: how many keys register at once",
      title: "Keyboard Ghosting Test — Check N-Key Rollover Online Free",
      description:
        "Test your keyboard for ghosting and rollover. Hold several keys at once to see how many register together, and learn what a browser can actually prove.",
      intro:
        "Hold your movement keys plus a modifier and watch what registers. Ghosting is a keyboard that cannot report certain combinations at all — the missing input never reaches the game, and no setting recovers it.",
      answer:
        "To test for ghosting, hold several keys down together — W, A, Shift and Space is a realistic combination — and count how many stay lit. A membrane keyboard typically manages three to six before extra presses are dropped; a keyboard with n-key rollover registers every one you can physically hold.",
      tips: [
        { title: "Test the combinations you actually play", body: "Rollover limits are not uniform. A keyboard can handle six arbitrary keys and fail on a specific three that share a matrix row. Hold your real movement and ability keys, not random ones." },
        { title: "The browser reports a floor, not a ceiling", body: "The operating system and USB polling can drop simultaneous presses before the browser ever sees them. If every key you need registers here, the keyboard is fine; if one does not, retest before concluding anything." },
        { title: "This does not measure polling rate", body: "A 1000Hz keyboard and a 125Hz keyboard both light a key here. Polling affects latency, not whether a press registers, and no browser can measure it reliably." },
        { title: "Anti-ghosting and n-key rollover are different claims", body: "Anti-ghosting usually means a handful of common gaming keys are wired to work together. N-key rollover means all of them are. Marketing blurs the two; the test above does not." },
      ],
      faqs: [
        { q: "What is keyboard ghosting?", a: "A keyboard failing to report a key that is genuinely being pressed, because of how its key matrix is wired. The press never reaches the computer, so it cannot be fixed in software." },
        { q: "How many keys should register at once?", a: "A good gaming keyboard registers every key you can physically hold down. A standard membrane keyboard manages three to six, which is fine for typing and often not enough for movement plus abilities." },
        { q: "Does USB or PS/2 matter for rollover?", a: "It used to. The old USB boot protocol limited six keys, but modern keyboards send a full HID report and are not constrained by it. PS/2 is no longer a meaningful advantage." },
        { q: "My keys work here but not in one game.", a: "Then the keyboard reports them and the game is not acting on them. Check for a binding conflict, and for an overlay or macro utility intercepting the input first." },
      ],
    },
    {
      slug: "mac",
      label: "Mac",
      h1: "Keyboard test for Mac",
      title: "Keyboard Test for Mac — Check Every Key on Your MacBook",
      description:
        "Test a Mac or MacBook keyboard in the browser. Press each key and watch it light up, check Command and Option, and find a key that stopped registering.",
      intro:
        "Press keys and watch them light. On a Mac several keys never reach the browser by design, so a dark key is not automatically a broken one — the list below says which ones to ignore.",
      answer:
        "To test a Mac keyboard, press each key and watch the on-screen layout. Letters, numbers, Command, Option, Control and Shift should all light. The top-row keys in their media mode, the brightness keys and Fn itself are handled by macOS before the browser sees them, so those staying dark is normal.",
      tips: [
        { title: "Hold Fn to reach the real function keys", body: "By default the top row sends media commands that macOS consumes. Hold Fn and those same keys send F1 to F12, which the browser does receive and will light." },
        { title: "Check both Command keys separately", body: "The left and right Command keys are distinct switches. A shortcut that works with one hand and not the other is the clearest possible sign of a failing key." },
        { title: "Butterfly keyboards fail from debris", body: "The 2016–2019 MacBook keyboards are notorious for a single key dying from one crumb. Compressed air at an angle, with the machine on its side, recovers more of these than any software step." },
        { title: "Rule out the software before the hardware", body: "If keys light here but do nothing in one app, check System Settings → Keyboard → Keyboard Shortcuts for a conflict, and Accessibility for Slow Keys or Sticky Keys left switched on." },
      ],
      faqs: [
        { q: "Which Mac keys will not show up in this test?", a: "The media functions on the top row, screen and keyboard brightness, Launchpad, and Fn itself. macOS intercepts them, so the browser never receives an event to draw." },
        { q: "How do I test an external keyboard on a Mac?", a: "The same way — plug it in and press keys. If nothing registers at all, check System Settings → Keyboard, then try the keyboard on another machine before replacing it." },
        { q: "A key types the wrong character.", a: "That is a layout problem rather than a hardware one. Check System Settings → Keyboard → Input Sources and confirm the selected layout matches the physical keyboard." },
        { q: "My MacBook keyboard repeats characters.", a: "A worn or dirty switch sends several events from one press, and the counter beside each key here makes it obvious. On butterfly-era machines it is often dust, and sometimes a service issue." },
      ],
    },
    {
      slug: "laptop",
      label: "Laptop",
      h1: "Laptop keyboard test: find the keys that stopped working",
      title: "Laptop Keyboard Test — Find the Keys That Stopped Working",
      description:
        "Test a laptop keyboard in the browser. Press every key, spot the dead ones, and work out whether it is debris, a driver or a cable before paying for a repair.",
      intro:
        "Press each key and watch the layout. On a laptop the useful question is not whether a key is broken but whether the fault is a crumb, a driver or the ribbon cable — and the pattern of dead keys usually tells you which.",
      answer:
        "To test a laptop keyboard, press every key and watch the on-screen layout. A single dead key is usually debris under the cap. A dead row or a dead block points at the ribbon connector or the controller, which is a repair rather than a clean. Keys that work here but not in one program are a software problem.",
      tips: [
        { title: "Read the pattern, not the key", body: "One dead key is mechanical. A whole row, or a contiguous block failing together, is the matrix or the ribbon cable, and no amount of cleaning will change it." },
        { title: "Plug in a USB keyboard to split the problem", body: "If an external keyboard works perfectly, the operating system and drivers are fine and the fault is in the built-in keyboard. That single test removes most of the guesswork." },
        { title: "Compressed air at an angle, machine on its side", body: "Blowing straight down pushes debris further in. Tilt the laptop and aim across the key so the crumb leaves the way it arrived." },
        { title: "Mention any spill before paying for a diagnosis", body: "Liquid damage shows as keys that work intermittently, or a keyboard that starts repeating. Even a small spill changes the repair path completely, so say so up front." },
      ],
      faqs: [
        { q: "Is it worth replacing a laptop keyboard?", a: "It depends on the machine. On many laptops it is a serviceable part at modest cost; on thin ultrabooks the keyboard is bonded to the top case and the repair approaches the value of the laptop. Check your model before deciding." },
        { q: "My laptop keyboard works in BIOS but not in Windows.", a: "That isolates it to software — the hardware is fine. Remove the keyboard device in Device Manager and reboot so Windows re-detects it, and check for a filter driver from a vendor utility." },
        { q: "Only the number keys stopped working.", a: "Check Num Lock, and on a compact laptop check whether the embedded numeric keypad has been switched on over the letter keys. This is a mode rather than a fault more often than people expect." },
        { q: "Can I keep using a laptop with one dead key?", a: "Yes, with a remap. Windows PowerToys and macOS Karabiner both move a function to another key, which is a reasonable stopgap while you decide about a repair." },
      ],
    },
    {
      slug: "mechanical",
      label: "Mechanical and chatter",
      h1: "Mechanical keyboard test: chatter, repeats and stuck keys",
      title: "Mechanical Keyboard Test — Check for Chatter and Repeats",
      description:
        "Test a mechanical keyboard for double-typing, switch chatter and stuck keys, using a per-key counter that makes an intermittent failing switch obvious.",
      intro:
        "Switch chatter is a worn contact bouncing and sending two presses where you made one. It is intermittent, which makes it maddening to prove — the per-key counter below is what proves it.",
      answer:
        "To test a mechanical keyboard for chatter, press each key once deliberately and watch its counter. A counter advancing by two from a single press is a bouncing switch. That is a hardware failure, fixed by replacing the switch or raising the debounce time in firmware, not by cleaning.",
      tips: [
        { title: "One deliberate press at a time", body: "Chatter only shows against a known number of presses. Press once, pause, read the counter. A fast run of presses proves nothing at all." },
        { title: "Raise the debounce time before desoldering", body: "QMK, VIA and most vendor software expose a debounce value. Increasing it masks a marginal switch for a few milliseconds of latency, and often buys a keyboard another year." },
        { title: "Hot-swap sockets make this a two-minute repair", body: "If the board is hot-swap, pull the failing switch and move a known-good one over from a key you never use, like Scroll Lock, to confirm the diagnosis before ordering parts." },
        { title: "Test after cleaning, not before", body: "Contact cleaner and compressed air genuinely fix chatter caused by contamination. Run the counter test, clean, then run it again so you know whether it worked." },
      ],
      faqs: [
        { q: "What causes double-typing on a mechanical keyboard?", a: "The metal contact inside the switch bounces as it closes. A worn switch bounces for longer than the firmware's debounce window allows, so the firmware reads two separate presses." },
        { q: "Can chatter be fixed in software?", a: "Partly. Raising the debounce time in QMK, VIA or vendor software hides a marginal switch. It does not repair the switch, and a badly worn one eventually exceeds any sensible debounce value." },
        { q: "How do I test one switch in isolation?", a: "Press only that key, repeatedly and deliberately, and compare its counter with the number of presses you made. Doing the same for a known-good key alongside it makes any difference obvious." },
        { q: "Is a stuck key the same as chatter?", a: "No. A stuck key stays registered with your hands off the board. Chatter produces extra presses only when you do press the key." },
      ],
    },
  ],

  "dead-pixel-test": [
    {
      slug: "monitor",
      label: "Monitor",
      h1: "Monitor dead pixel test: check a new display properly",
      title: "Monitor Dead Pixel Test — Check a New Display for Faults",
      description:
        "Test a new monitor for dead pixels, stuck pixels and backlight bleed, and find out what manufacturers actually accept as a warranty fault.",
      intro:
        "Do this the day it arrives. Manufacturers accept a pixel fault only within a set window and above a set number, and both are easier to meet now.",
      answer:
        "To test a monitor for dead pixels, go fullscreen and cycle through red, green, blue, white and black at full brightness from about 50cm away. A pixel black on every colour is dead; one lit on a single colour is stuck. Photograph anything you find straight away — manufacturers usually want evidence inside the return window.",
      tips: [
        { title: "Photograph the fault with something for scale", body: "A photo of a bright dot on a black field, with a ruler or a coin beside it, is far harder to dismiss than a description. Take it the day you find it." },
        { title: "Know the class your panel is sold under", body: "ISO 9241-307 defines pixel fault classes, and most consumer monitors are Class II, which permits a small number of faults before the panel counts as defective. Retailers are often more generous than manufacturers, so ask both." },
        { title: "Test at native resolution", body: "Scaling blends a faulty pixel with its neighbours and can hide it completely. Set the display to its native resolution before you look for anything." },
        { title: "Check the corners on black with the lights off", body: "Backlight bleed and IPS glow show at the edges on a dark field in a dark room. Some is normal on IPS; a bright patch that is obvious during a film is not." },
      ],
      faqs: [
        { q: "How many dead pixels before I can return a monitor?", a: "It varies by manufacturer and panel class. Some accept a single bright pixel, others require several. Check the warranty text for your model, and check the retailer's return policy separately — it is often the easier route." },
        { q: "What is the difference between backlight bleed and IPS glow?", a: "Bleed is light escaping at the edges and stays put as you move. Glow is a wash across a corner that shifts with your viewing angle. Bleed can be a warranty fault; glow is a property of the panel type." },
        { q: "Will a dead pixel spread?", a: "No. A dead pixel is a single failed transistor and does not affect its neighbours. New faults appearing over time is a different problem and worth reporting." },
        { q: "Should I test a second-hand monitor before buying?", a: "Yes, and take a phone with this page already open. Five minutes of colour fields is the cheapest inspection available." },
      ],
    },
    {
      slug: "laptop",
      label: "Laptop screen",
      h1: "Laptop screen test: dead pixels and pressure marks",
      title: "Laptop Screen Test — Check Dead Pixels and Backlight Bleed",
      description:
        "Test a laptop screen for dead pixels, stuck pixels, pressure marks and backlight bleed. Fullscreen colour fields, nothing to install and no sign-up.",
      intro:
        "Laptop panels add two faults monitors rarely show: pressure marks from the keyboard, and bleed along the bottom edge. Both appear on the fields below.",
      answer:
        "To test a laptop screen, go fullscreen and cycle through red, green, blue, white and black at maximum brightness. Dead pixels stay black on every colour and stuck pixels stay lit on one. Pressure marks are different: they show as faint light or dark patches on a solid grey or white field.",
      tips: [
        { title: "Look for pressure marks on grey, not black", body: "A keyboard pressing against the panel inside a bag leaves faint blotches that a mid-grey field reveals and a black field hides. Check for them in a line matching the key rows." },
        { title: "Bottom-edge bleed is common and often acceptable", body: "The backlight enters most laptop panels from the bottom, so a slight glow along that edge is normal. An obvious bright patch is not." },
        { title: "Open the lid fully and look straight on", body: "Laptop panels, especially TN ones, shift colour sharply with angle. A half-open lid will show you faults that are not actually there." },
        { title: "Find it before the return window closes", body: "A laptop screen is rarely user-serviceable, so a panel fault means a whole-machine return or a service visit. The day it arrives is the cheapest possible time to discover one." },
      ],
      faqs: [
        { q: "What are the faint blotches on my laptop screen?", a: "Usually pressure marks, where the keyboard or something in a bag pressed against the panel. They show best on a grey or white field. Light ones sometimes fade; deep ones do not." },
        { q: "Can a laptop screen be replaced for a dead pixel?", a: "Under warranty, if the fault meets the manufacturer's threshold. Out of warranty, panel replacement is possible on many models but not on those with a bonded display assembly." },
        { q: "Is backlight bleed on a laptop a fault?", a: "Some is expected, particularly along the bottom edge. It becomes a fault when it is visible during normal use on dark content, rather than only when you go looking in a dark room." },
        { q: "Should I test a refurbished laptop?", a: "Yes, immediately. Refurbished units are the most likely to arrive with a cosmetic screen fault, and their return windows are usually shorter." },
      ],
    },
    {
      slug: "phone",
      label: "Phone screen",
      h1: "Phone screen test: dead pixels and OLED burn-in",
      title: "Phone Screen Test — Check for Dead Pixels and OLED Burn-In",
      description:
        "Test a phone screen for dead pixels, stuck pixels and OLED burn-in with fullscreen colour fields, plus the checks that matter on an AMOLED panel.",
      intro:
        "On an OLED phone the usual fault is burn-in, not a dead pixel — a faint ghost of the status bar on a grey field. The colours below reveal both.",
      answer:
        "To test a phone screen, open this page fullscreen at maximum brightness with auto-brightness turned off, then cycle through the colours. Dead pixels show as black dots on every colour. Burn-in shows as a faint permanent ghost of the status bar, navigation bar or keyboard, and is clearest on a solid grey field.",
      tips: [
        { title: "Turn auto-brightness off first", body: "The ambient sensor will change the level part way through and make a uniform field look uneven. Set brightness manually to maximum and leave it alone." },
        { title: "Grey shows burn-in that white hides", body: "A mid-grey field reveals uneven pixel wear far better than pure white. Look specifically where the status bar, navigation bar and keyboard sit." },
        { title: "Take the case off and clean the glass", body: "A smudge under a screen protector looks exactly like a stuck pixel. Clean the surface, and check with the protector removed if you can." },
        { title: "Buying second-hand? Check burn-in before anything else", body: "It is the most common real fault on a used OLED phone, it cannot be repaired, and a thirty-second grey field finds it." },
      ],
      faqs: [
        { q: "What is OLED burn-in?", a: "Uneven ageing of the pixels. Elements that stay on screen for long periods — the status bar, the keyboard — dim faster than the rest, leaving a permanent faint ghost. It is wear rather than a failure, and it cannot be reversed." },
        { q: "Is a green or pink tint a dead pixel problem?", a: "No. A tint across a region is a panel uniformity issue, most often seen on AMOLED at low brightness. It is a separate fault, and worth reporting under warranty if it is pronounced." },
        { q: "Can I fix a stuck pixel on a phone?", a: "Sometimes, with rapid colour cycling over the area for a few minutes. It works on stuck pixels and never on dead ones. Do not press on the screen — that risks making it worse." },
        { q: "Does this work on iPhone and Android?", a: "Yes, in Safari and Chrome. Use the browser's fullscreen mode, turn off auto-brightness, and set brightness to maximum before you start." },
      ],
    },
    {
      slug: "tv",
      label: "TV screen",
      h1: "TV screen test: dead pixels and panel uniformity",
      title: "TV Screen Test — Check for Dead Pixels and Panel Uniformity",
      description:
        "Test a TV for dead pixels, stuck pixels and uniformity problems, and see why casting a browser tab can hide the exact fault you are looking for.",
      intro:
        "Casting compresses the picture, and compression hides the single-pixel faults you are testing for. Use the TV's own browser or a USB stick instead.",
      answer:
        "To test a TV for dead pixels, display solid red, green, blue, white and black fullscreen and inspect from about 50cm — far closer than you would watch from. Avoid casting the tab: video compression smooths single-pixel faults and can hide one entirely. Use the TV's built-in browser, a directly connected computer, or image files from a USB stick.",
      tips: [
        { title: "Connect directly or use a USB stick", body: "HDMI from a laptop, or solid-colour image files on a USB drive, both give an uncompressed field. Casting and screen mirroring do not." },
        { title: "Inspect close, then judge from your sofa", body: "Stand close enough to resolve individual pixels while inspecting. Then step back to your normal seating distance and decide whether the fault is visible in use — on a large panel, many are not." },
        { title: "Turn off every picture enhancement", body: "Noise reduction, motion smoothing and local dimming all alter a solid field. Switch to a plain picture mode — often called Filmmaker, Cinema or PC — before judging uniformity." },
        { title: "Dirty screen effect shows on grey, not black", body: "Faint vertical bands across a solid mid-grey field are a uniformity problem, most visible on sport and panning shots. A black field will not reveal it at all." },
      ],
      faqs: [
        { q: "Can I test a TV by casting this page?", a: "You can, but the result is unreliable. Cast and mirror paths compress video, and compression removes single-pixel detail. Use the TV's own browser or a directly connected source." },
        { q: "How close should I look?", a: "Close enough to resolve individual pixels, which on a large 4K panel means roughly 30 to 50cm. Then judge from your real seating distance whether it actually matters." },
        { q: "What is the dirty screen effect?", a: "Uneven brightness across the panel, showing as faint bands or blotches on uniform content. It is most obvious on sport and on grey fields. It is a uniformity fault rather than a pixel fault." },
        { q: "Is there a burn-in risk from this test?", a: "Not from a few minutes. OLED burn-in comes from static content over many hours. Do not leave a solid colour on an OLED TV and walk away." },
      ],
    },
  ],
};

export const getDeviceVariant = (tool: string, slug: string) =>
  deviceVariants[tool]?.find((v) => v.slug === slug);

/** The only place a tool URL is constructed. Device tests and audio tools live
 *  under their own hub so the menu, the hubs and the sitemap agree; timers have
 *  their own file and their own /tools/timers/ prefix. */
export const toolHref = (t: Pick<Tool, "slug" | "category">) =>
  t.category === "audio" ? `/tools/audio/${t.slug}/` : `/tools/device-tests/${t.slug}/`;

export const deviceTests = tools.filter((t) => t.category === "device-test");
export const audioTools = tools.filter((t) => t.category === "audio");
