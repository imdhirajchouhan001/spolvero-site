---
title: "Camera not working in Chrome? 7 fixes, in the order that works"
seoTitle: "Camera Not Working in Chrome? 7 Fixes That Work"
description: "Chrome can't find your camera, shows a black screen, or says it's blocked. Here are the seven fixes, ordered by how often each one is the answer."
published: "2026-09-17"
updated: "2026-09-17"
answer: "Most Chrome camera problems come down to three things: the site permission is blocked, another app is holding the camera, or the operating system is refusing access. Work through the fixes below in order — the first three solve the large majority of cases, and none of them take more than a minute."
tool: "/tools/device-tests/webcam-test/"
tools: ["/tools/device-tests/webcam-test/", "/tools/device-tests/mic-test/"]
toolCta: "Test your camera"
tags: ["Chrome", "Troubleshooting"]
minutes: 6
image: "article-camera-not-working"
---

A camera that works in one app and not in Chrome is almost never broken hardware. There are several independent layers between the lens and the web page — the operating system's privacy settings, whichever app grabbed the camera first, Chrome's own per-site permission, and the camera driver — and any one of them can quietly say no.

The fixes below are ordered by how often each one turns out to be the answer, so start at the top.

Before you begin, it helps to know *which* layer is failing. Run the camera test and read the error it reports: "blocked" points at the permission, "not found" points at the driver or a physical switch, and "in use" points at another app. That single piece of information saves most of the guesswork.

## 1. Unblock the camera for this site

If you ever chose Block — or dismissed the permission prompt, which Chrome sometimes remembers as a refusal — the page cannot ask again. It has to be reset by you.

1. Look at the left of the address bar for a camera icon or a padlock.
2. Select it, then set **Camera** to **Allow**.
3. Reload the page.

If no camera icon appears at all, the page never got as far as asking, which usually means the problem is further down this list.

One thing worth knowing: this permission is per-site and per-browser. Allowing a camera on one site tells Chrome nothing about another, and a permission granted in Chrome means nothing in Safari or Firefox.

## 2. Close whatever else is using the camera

On Windows especially, only one application can hold the camera at a time. Zoom, Teams, Slack huddles, OBS and camera utilities all count — and closing the window is often not the same as quitting the app.

- **Windows**: check the system tray by the clock for icons still running. Right-click the taskbar → Task Manager and end Zoom, Teams or OBS if they are listed. Windows 11 also shows a small camera indicator in the taskbar corner while the camera is live; hovering it names the app responsible.
- **Mac**: a green dot beside the camera means it is active. Open Control Centre to see which app has it, then quit that app from its menu bar, or force quit with Option-Command-Escape.

Then reload the Chrome tab. A camera released by another app does not always come back to an already-open page.

## 3. Give Chrome permission at the operating system level

This is the fix people miss most often, because the browser gives no clear signal that the OS is the one refusing.

**Windows 11 and 10**: Settings → Privacy & security → Camera. Turn on **Camera access**, then **Let apps access your camera**. Scroll down and confirm Chrome appears in the list and is switched on.

**macOS**: System Settings → Privacy & Security → Camera, and turn on Google Chrome. Then **quit Chrome completely and reopen it** — macOS does not hand the camera to an application that was already running when you changed the setting. Skipping the restart is why this fix so often appears not to work.

## 4. Check for a physical switch or a lens cover

No amount of software configuration gets past hardware that has cut the camera off.

Many Lenovo, HP and Dell laptops have a sliding shutter over the lens, or an F-key with a camera icon that disables the camera outright. Some external webcams have a privacy cap that looks like part of the housing. If the camera test reports "no camera found" rather than "blocked", check this before touching any settings.

## 5. Make sure you are on a secure page

Browsers will only hand a camera to a page served over HTTPS. If the address bar shows "Not secure" or the URL starts with `http://`, no permission prompt will ever appear.

The exception is `localhost`, which browsers treat as secure for development. On any real site, look for the padlock first.

## 6. Pick the right camera

If Chrome shows a black rectangle rather than an error, the stream is probably arriving from a camera that is not pointing at you.

Virtual cameras are the usual culprit. OBS, Snap Camera, Camo, NVIDIA Broadcast and several meeting apps install virtual devices that persist after the app closes, and browsers sometimes select one by default. Our camera test lists every camera it can see and lets you switch between them, which is the fastest way to find out whether a real camera is available.

While you are there, check for camera-effects software. Background blur and beauty filters intercept the stream, and when their host app is not running they can pass through nothing at all.

## 7. Fix the driver — Windows only

macOS has no user-serviceable camera driver, so this step applies to Windows.

Open Device Manager and expand **Cameras**. A yellow warning triangle means a driver problem.

Counter-intuitively, if the camera stopped working shortly after a Windows update, **rolling the driver back** works more often than searching for a newer one. Right-click the device → Properties → Driver → **Roll Back Driver**. If that button is greyed out, choose **Update driver** → Browse my computer → Let me pick, and try a different listed driver.

## When none of it works

At that point the useful question is whether the camera works anywhere at all.

Open the Windows **Camera** app or macOS **Photo Booth**. If the camera fails there too, the problem is below the browser — hardware, driver or OS — and no browser fix will help. If it works there but not in Chrome, you have a permission or conflict problem, and steps 1 to 3 are where the answer lives.

It is also worth testing in a second browser. A camera that works in Edge but not Chrome points at Chrome's own profile or permissions; one that fails in both points at the system.

## Check whether it is actually fixed

Working is a low bar. A camera can be recognised, permitted, and still make you look bad on a call, which is a separate problem with separate fixes.

Run the test below once the camera comes back: it reports your real resolution, measures your actual frame rate rather than the number on the box, and checks whether the light on your face is good enough. Nothing is uploaded — the video is read inside your own browser tab.
