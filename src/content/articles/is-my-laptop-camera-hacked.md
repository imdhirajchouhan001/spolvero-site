---
title: "Is my laptop camera hacked? How to actually check"
seoTitle: "Is My Laptop Camera Hacked? How to Check Properly"
description: "Camera hijacking is rarer than the headlines suggest, but not impossible. How to check properly on Windows and Mac, and what the light tells you."
published: "2026-09-17"
updated: "2026-09-17"
answer: "Start with the indicator light: on a Mac it is wired to the camera's power and cannot be turned off in software, so a dark light means the camera is off. On Windows it is usually firmware-controlled and very hard to bypass, but not guaranteed. Check which apps have camera permission, look for processes you do not recognise, and cover the lens when you are not using it."
tool: "/tools/device-tests/webcam-test/"
tools: ["/tools/device-tests/webcam-test/"]
toolCta: "See what your camera sees"
tags: ["Privacy", "Security"]
minutes: 6
---

It is a reasonable thing to wonder, and the honest answer has two halves: this is much rarer than the coverage implies, and it is not impossible. Both halves matter — panic is not useful, and neither is dismissal.

Here is how to check properly.

## The indicator light

The light next to your camera is the most useful signal you have, and how much you can trust it depends on the machine.

**On a Mac**, the green light is wired into the same circuit that powers the camera. It is a hardware interlock, not a software convention: if the camera has power, the light is on. Apple has designed it this way for years across its laptops. A dark light means the camera is not recording.

**On a Windows laptop**, the light is usually controlled by the camera's firmware and is difficult to bypass — but it is a firmware behaviour rather than a physical guarantee, and historic proof-of-concept attacks on specific older models did defeat it. Treat it as strong evidence, not proof.

So: a light that comes on when you are not using the camera is worth investigating immediately. A light that stays off is reassuring on a Mac, and mostly reassuring on Windows.

## Check what has permission

Most unwanted camera access is not sophisticated. It is an app you installed that asked for the camera, got it, and kept it.

**Windows:** Settings → Privacy & security → Camera. This lists every app with access and shows recent activity. Turn off anything you do not recognise or no longer use.

**macOS:** System Settings → Privacy & Security → Camera. Same idea — a list of apps, each with a toggle.

**Browsers:** each browser keeps its own per-site permissions, separately from the OS. In Chrome and Edge: Settings → Privacy and security → Site settings → Camera. In Safari: Settings → Websites → Camera. In Firefox: Settings → Privacy & Security → Permissions → Camera. Revoke any site you do not actively use.

Go through all three. A site with standing camera permission in your browser is the most common route by a wide margin, and the easiest to forget about.

## Look for what is running

**Windows.** Open Task Manager and read the Processes list. You are looking for something unfamiliar consuming CPU when you are idle. Right-click anything suspicious → Open file location; software installed somewhere odd, like a temp folder, is worth investigating. Task Manager → Startup apps shows what launches with the machine.

**Mac.** Activity Monitor does the same job. Check System Settings → General → Login Items for anything that starts automatically.

On both, run a scan with a reputable anti-malware tool. On Windows, Microsoft Defender is built in and adequate for this; a second opinion from Malwarebytes is a reasonable extra step. The genuine risk here is remote access trojans, and mainstream scanners detect the common families.

## Signs worth taking seriously

Individually these have innocent explanations. Several at once is a pattern.

- The camera light comes on when nothing should be using it.
- Your camera is unavailable to your own apps, as though something else holds it — though this is far more often a mundane app conflict.
- The machine is unusually slow or hot at idle.
- Camera or microphone settings change without you changing them.
- Browser extensions you do not remember installing.
- Security software has been disabled and will not re-enable.

## What to actually do

**Cover the lens.** Unglamorous and completely effective. A sliding webcam cover costs very little; a piece of tape works. Many laptops now ship with a built-in shutter. This is the only measure that is not defeated by a software compromise, which is why it remains the standard advice.

**Keep the system updated.** Most real-world compromises use known vulnerabilities that were patched months earlier. Automatic updates on the OS and browser close off the large majority of routes.

**Be careful what gets camera access.** The question to ask of any app requesting the camera is whether it plausibly needs it. A note-taking app does not.

**Do not install "camera security" tools you found through a scary article.** That niche is full of software that is itself the problem. Stick to the OS's own permission settings and a mainstream anti-malware product.

## If you think something is wrong

Disconnect from the network first — that stops data leaving while you work out what is happening. Run a full malware scan. Change passwords from a different device, not the one you are suspicious of. If it is a work machine, tell your IT team rather than investigating alone; they have tooling you do not.

If a scan turns up nothing but the symptoms persist, a clean reinstall of the operating system is the definitive answer.

## A note on how our camera test works

Since you are reading about camera privacy, it is fair to ask what this site does with the camera.

The test asks your browser for the camera stream, shows it in a video element on the page, and samples frames onto a canvas to measure brightness. All of that happens inside your own browser tab. There is no upload code, no recording, and no server that could receive video. Close the tab and the camera stops — and the indicator light goes out, because the stream has genuinely ended.

That is also a small, useful demonstration of the principle above: grant the permission, watch the light come on, close the tab, watch it go off. A camera indicator that behaves exactly as expected is the most reassuring thing on this page.
