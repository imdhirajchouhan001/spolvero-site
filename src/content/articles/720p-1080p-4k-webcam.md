---
title: "720p, 1080p or 4K: what a webcam actually needs to be"
seoTitle: "720p vs 1080p vs 4K Webcam: What You Really Need"
description: "Meeting apps cap what they will send long before a 4K webcam becomes useful. Here is what each resolution is really worth, and what to spend on instead."
published: "2026-09-17"
updated: "2026-09-17"
answer: "For video calls, 1280×720 at 30fps is enough — Zoom, Teams and Google Meet all cap most calls at 720p regardless of your camera. 1080p is worth it for streaming and recording. 4K webcams are almost never worth it, because no mainstream meeting app will send that resolution."
tool: "/tools/webcam-test/fps"
toolCta: "Check what yours delivers"
tags: ["Buying advice", "Resolution"]
minutes: 6
---

Webcam listings compete on resolution because it is the easiest number to print. It is also the number that matters least, past a fairly low threshold.

## What the apps will actually send

This is the fact that settles most of the question. Your camera's resolution is irrelevant if the software refuses to transmit it.

| App | Minimum | What it sends at best | Worth knowing |
| --- | --- | --- | --- |
| Zoom | 640×360 at 30fps | 1280×720 at 30fps | HD is off by default — turn it on in Settings → Video |
| Microsoft Teams | 640×360 at 30fps | 1280×720 at 30fps | Caps most meetings at 720p, with no setting to raise it |
| Google Meet | 640×360 at 30fps | 1280×720 at 30fps | 1080p needs a paid Workspace plan |
| Twitch / OBS | 1280×720 at 30fps | 1920×1080 at 60fps | You control the encode, so higher genuinely helps |

For the first three — which is where most people spend their camera time — **720p is the ceiling in practice**. A 4K webcam on a Teams call is transmitting 720p.

And these are best cases. All of them reduce quality further when bandwidth is tight or when many people are on screen, because the available bitrate is shared out.

## What each resolution is for

**720p (1280×720)** covers every mainstream video call. This is the practical target. A 720p camera in good light beats a 1080p camera in bad light, every time.

**1080p (1920×1080)** is worth having if you record video, stream, or occasionally get a full-screen share. The extra detail survives compression slightly better even when downscaled, so it is not wasted — just not transformative for meetings.

**1440p and 4K** make sense for a narrow set of uses: recording footage you will crop or zoom into in editing, or a camera framing a whiteboard where fine detail matters. For talking to people, no.

There is a real cost, too. 4K webcams often hit their top resolution only at low frame rates, and only through the manufacturer's own software — so in a browser you may get 1080p30 from a camera you paid a 4K premium for. They also need more USB bandwidth and more CPU to encode.

## Frame rate matters more than resolution

Given a choice between more pixels and smoother motion, take smoother motion.

**30fps** is the standard for video calls, and what all the major apps send. Motion looks natural.

**60fps** is worth it for gaming streams and fast movement. For a talking head it is largely wasted, and it consumes encoder headroom and upload bandwidth that would produce a sharper picture if spent on quality instead.

**Below 20fps** is where things start to look visibly jerky — and if you are seeing that, the cause is usually not the camera's rating. Cameras drop frames in dim light because they hold the shutter open longer per frame. A camera rated 1080p60 will happily deliver 720p15 in a dark room.

That is why measuring matters more than reading the box. A camera's advertised numbers describe its best case, in bright light, with the manufacturer's software. Your room is not that.

## Numbers on the box that mean nothing

**Megapixels.** A photography number. A 1080p video frame is about 2 megapixels; a camera advertising "8MP" is describing still images, not video.

**Interpolated resolution.** Some cheap cameras upscale a lower-resolution sensor in software and print the larger number. The detail is invented. If a listing says "interpolated" anywhere, read the native resolution instead.

**"Full HD 1080p" with no frame rate.** Almost always 1080p at 30fps, sometimes at 15fps. The missing number is the one you want.

**Field of view.** Not meaningless, but frequently wrong for the job — a very wide lens designed for group calls will include a great deal of your room when you are alone at a desk.

## What to spend on instead

If you have a working 720p camera and want to look better on calls, in order of impact per pound spent:

1. **A lamp.** More impact than any camera upgrade, and cheaper than all of them. Light in front of you lets your existing camera stop compensating.
2. **A microphone.** People tolerate a mediocre picture and will not tolerate bad audio. Even wired earbuds beat a laptop microphone.
3. **Something to raise the laptop.** A stack of books fixes the up-the-nose angle for free.
4. **Then, maybe, a camera.**

## When a new camera is genuinely the answer

Some cases are real:

- Your laptop is old enough to have a 720p camera that cannot hold 720p in normal light.
- You need to sit further from the camera than a laptop allows.
- You stream or record, where 1080p60 is used rather than discarded.
- You need manual control over exposure and focus.

In those cases, a decent 1080p webcam from a known brand is the sensible purchase. Going beyond that buys headroom that meeting software will throw away.

## Find out what yours is really doing

The camera test below reports your live resolution from the video stream and measures your frame rate by counting the frames your browser actually receives — not the number printed on the box.

The informative experiment takes two minutes: run it in your normal lighting, then again next to a window. If your camera reports 1080p30 by the window and 720p15 at your desk, the camera is fine and the room is the variable. That is worth knowing before you spend anything.
