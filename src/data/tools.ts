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

export type Tool = {
  slug: string;
  name: string;
  kind: string;
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
