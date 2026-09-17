---
title: "\"Camera is being used by another application\": how to find the app and get it back"
seoTitle: "Camera Is Being Used by Another Application — Fix"
description: "Something is holding your camera and will not let go. Here is how to identify which app it is on Windows and Mac, and what to do when nothing appears to be running."
published: "2026-09-17"
updated: "2026-09-17"
answer: "This error means another program already holds the camera. On Windows, hover the camera indicator in the taskbar corner to see which app it is; on Mac, open Control Centre while the green camera light is on. Quit that app fully — closing its window is often not enough — then reload the page or restart the app that needs the camera."
tool: "/tools/webcam-test/"
toolCta: "Check the camera is free"
tags: ["Troubleshooting", "Windows", "macOS"]
minutes: 5
---

The message varies by app — "Camera is being used by another application", "Cannot start video", "Device in use", `NotReadableError` — but the cause is the same. Something else got to the camera first.

Windows generally hands the camera to one application at a time. macOS is more permissive but still lets an app hold it exclusively. Either way, the fix is to find the holder and close it.

## Find out which app has it

Guessing is slow. Both systems will tell you.

**Windows 11 and 10.** When the camera is active, a small camera indicator appears in the taskbar corner near the clock. Hover over it and Windows names the app using it. That is usually the entire diagnosis.

**macOS.** A green dot next to the camera lights whenever the camera is on — it is wired to the camera's power and cannot be disabled in software, so it is trustworthy. Open Control Centre from the menu bar and it names the app currently using the camera.

## The usual suspects

In rough order of how often each one turns out to be responsible:

- **Zoom.** Keeps running in the system tray after you close the meeting window.
- **Microsoft Teams.** The desktop app holds devices even when minimised, and will block a Teams meeting in the browser.
- **A second browser tab.** A Google Meet green room, a previous camera test, or any tab you opened and forgot. Browsers release the camera per tab, not per window.
- **Slack.** Huddles keep the camera after the huddle window is gone.
- **OBS.** Holds the camera exclusively for as long as a video capture source exists in the scene.
- **Camera utilities.** Logitech G Hub, Camo, NVIDIA Broadcast, Snap Camera, Insta360 Link — these sit in the background by design.

## Closing them properly

This is the step people get wrong. On Windows especially, closing a window frequently minimises the app to the system tray rather than quitting it.

**Windows:** click the arrow near the clock to expand hidden tray icons, right-click the app and choose Quit or Exit. If it still appears to hold the camera, open Task Manager (right-click the taskbar), find it under Processes and use End task.

**Mac:** quitting from the menu bar (Command-Q) is enough for most apps. If one is unresponsive, force quit with Option-Command-Escape.

Then go back to whatever needs the camera and **reload or restart it**. A page that was refused the camera does not automatically retry when the camera becomes free — a browser tab needs a reload, and most desktop apps need to be restarted.

## When nothing appears to be running

Sometimes the indicator is off, no obvious app is open, and the camera is still refused. Usually one of these:

**A crashed app never released it.** An app that quit unexpectedly can leave the camera held by an orphaned process. Signing out and back in clears it; a restart certainly does.

**A background service.** Some security software, and some laptop vendors' utilities, poll the camera. Check startup items: Windows — Task Manager → Startup apps. Mac — System Settings → General → Login Items.

**A virtual camera is selected.** If OBS or Camo installed a virtual camera and the host app is not running, the virtual device may still be listed and selected, and it will produce nothing. The fix is to pick the physical camera by name rather than "Default". Our camera test lists every device it can see, which makes this quick to check.

**Windows privacy settings.** These produce a different error more often, but are worth ruling out: Settings → Privacy & security → Camera, and turn on both "Let apps access your camera" and, further down, "Let desktop apps access your camera". Browsers are covered by the first; the Zoom and Teams desktop apps need the second.

## Preventing it

Two habits avoid most recurrences.

**Quit meeting apps rather than closing them.** Zoom and Teams both keep running by default. On Windows you can turn this off in each app's settings ("When closed, keep running in background").

**Close the green room.** If you are testing your camera before a call, close the test tab before joining. That applies to our tool as much as anyone's — it releases the camera when the tab closes, but only when the tab actually closes.

## Confirm the camera is free

The fastest way to know whether the camera is genuinely available is to ask for it somewhere neutral, outside the app that was failing.

The test below does exactly that, and tells you which of the three things is happening: the camera works, the browser blocked it, or something else still holds it. If it reports "in use", the holder is still running and worth hunting down. If it works, the camera is free and the original app simply needs restarting.

Nothing is uploaded — the video is read inside your own browser tab, and the camera is released the moment you close it.
