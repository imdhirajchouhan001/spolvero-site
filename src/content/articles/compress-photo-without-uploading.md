---
title: "How to compress a photo without uploading it to a stranger's website"
seoTitle: "Compress a Photo Without Uploading It Anywhere"
description: "Online compressors take a copy of your photo first. How to hit an upload size limit with tools already on your phone or computer, and keep the file."
published: "2026-09-18"
updated: "2026-09-18"
answer: "Your phone and computer can already compress photos without uploading anything. On iPhone, Files or Shortcuts; on Android, the Photos app or a resize option in the share sheet; on a Mac, Preview's Export; on Windows, Paint or Photos. Reducing dimensions usually beats reducing quality — halving the width cuts the file to roughly a quarter with no visible artefacts."
tool: "/exact/"
tools: ["/exact/"]
toolCta: "See Exact Photo"
tags: ["Privacy", "Photos"]
minutes: 7
image: "exact"
---

You need a photo under 2MB for a form that will not budge. The first search result is a website with a big upload button. Before you use it, it is worth knowing what that button does — and that you almost certainly do not need it.

## What an online compressor actually does

It uploads your photo to a server, compresses it there, and sends back the result. The compression is the easy part; the upload is the part worth thinking about.

Three questions their homepage rarely answers:

**How long is the file kept?** Most say they delete after an hour or a day. Some do. "Deleted from our servers" also does not always mean deleted from backups or from the CDN cache that served it back to you.

**Who else touched it?** Many of these sites are thin wrappers around a third-party API, so your photo may pass through a company you have never heard of and whose policy you have not read.

**What was in the photo?** This is the one that matters. People compress passports, driving licences, bank statements, medical forms and utility bills, because those are exactly the documents that upload forms have size limits for. A holiday snapshot on someone's server is a shrug. A photograph of your ID is a different category of thing.

There is also metadata. A photo straight off a phone usually carries EXIF data — the exact GPS coordinates where it was taken, the time, and the device. Some compressors strip it, some pass it through, and most do not say.

## Do it on the device instead

Every platform can already do this. None of it requires an install.

### iPhone

**Quickest: Files.** Save the photo to Files, long-press it, choose **Compress**. That produces a ZIP rather than a smaller image, so it works for emailing but not for a form that wants a JPEG.

**Better: Shortcuts.** Open Shortcuts → new shortcut → add **Resize Image** and **Convert Image** (set quality). Run it from the share sheet on any photo. Fiddly to set up once, then permanent.

**Also works:** Mail. Attach a photo to an email and iOS offers Small, Medium and Large. Send it to yourself and save the result.

### Android

Varies by manufacturer, but generally: open the photo in **Google Photos** → Edit → Crop, and reduce the dimensions. Many gallery apps — Samsung's included — have a **Resize** option directly in the share sheet.

### Mac

**Preview** does it properly. Open the photo, then **File → Export**, and you get both a Quality slider and a live preview of the resulting file size. Adjust until the number is under the limit.

For several at once: select them all in Finder, right-click → **Quick Actions → Convert Image**, and pick a size.

### Windows

**Photos** app → the image → Resize, which offers preset dimensions and a custom option.

**Paint** still works and is faster: open, **Resize**, set a percentage, save as JPEG.

## The part most people get wrong

Faced with a size limit, most people reach for the quality slider. Usually the wrong lever.

**Dimensions matter more than quality.** File size scales roughly with pixel count. Halve the width and height and you have a quarter of the pixels — typically close to a quarter of the file — with no compression artefacts at all, because you have not compressed harder, you have simply made it smaller.

A 4000×3000 photo from a phone is about 12 megapixels. For a form, a web upload or an email, 1600×1200 is almost always plenty, and that alone often does the whole job.

**Then adjust quality, and not far.** JPEG quality 80 is visually near-identical to 100 for most photographs and roughly half the size. Below about 60 you start seeing blocking around edges and banding in skies. The useful range is 70–85.

**Match the format to the image.** JPEG for photographs. PNG for screenshots, diagrams and anything with sharp text or flat colour — JPEG makes text edges fuzzy, which matters for a document photo. WebP is smaller than both and now widely supported, but some upload forms still reject it, so check before committing.

## Compressing documents specifically

Photos of documents are their own case, because legibility is the whole point.

- **Crop to the document.** Cutting the desk out of the frame is the single biggest saving available, and it makes the document more readable, not less.
- **Keep the resolution up.** Small text goes to mush before a face does. Reduce dimensions less aggressively here.
- **Consider grayscale.** A black-and-white document loses nothing useful without colour, and drops significantly in size.
- **Strip the location data**, particularly if you are sending it anywhere. A photo of your passport that also carries the coordinates of your home is more than you meant to send.

## When a dedicated tool is worth it

The built-in tools all share a weakness: none of them lets you say "make this under 2MB". You adjust a slider, check the number, adjust again.

That is the gap [Exact Photo](/exact/) fills. You give it the target size the form is asking for, and it works out the quality needed to land under it — on your phone, without uploading. It handles batches, strips location data unless you choose to keep it, shows the before and after side by side, and works offline.

But the honest summary is this: for a single photo, Preview on a Mac or the Photos app on Windows will get you there in under a minute, and the file never leaves your machine. The only real reason to upload a photo to a website in order to make it smaller is that you did not know you had an alternative.

Now you do.
