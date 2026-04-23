# Hero Background Videos

⚠️ **IMPORTANT**: The videos directory is currently empty, which is why no video is playing in the background.

## 📁 Required Video Files

Place these video files in this directory:

### Primary Video (MP4 - Recommended)
- **Filename**: `hero-background.mp4`
- **Format**: MP4 (H.264)
- **Resolution**: 1920x1080 (Full HD) or higher
- **Aspect Ratio**: 16:9 (landscape)
- **Duration**: 10-30 seconds (short loops work best)
- **File Size**: Under 10MB for optimal loading

### Secondary Video (WebM - Optional)
- **Filename**: `hero-background.webm`
- **Format**: WebM (VP9)
- **Same specifications as MP4**

## 🎬 Video Content Suggestions

- School campus tours
- Students in classrooms
- Sports activities
- Graduation ceremonies
- Daily school life
- Teacher-student interactions
- Library and study areas

## 🔧 Video Preparation Tips

1. **Compress for Web**: Use tools like HandBrake or Adobe Media Encoder
2. **Loop-Friendly**: Ensure the video ends smoothly where it begins
3. **Bright Lighting**: Videos should be well-lit for good contrast with text
4. **No Audio**: Background videos should be silent (they're muted anyway)
5. **Test Autoplay**: Some browsers block autoplay - test in multiple browsers

## 🌐 Browser Compatibility

- ✅ Chrome/Edge: Full support
- ✅ Firefox: Full support
- ✅ Safari: Full support (with playsInline)
- ✅ Mobile: Supported with playsInline attribute

## 📋 Fallback Behavior

If no video files are found, the system automatically falls back to the original hero image (`hero-schoo.jpg`).

## 🛠️ Troubleshooting

- **Video not playing**: Check file names match exactly
- **Video not looping**: Ensure video duration is reasonable (under 30s)
- **Poor quality**: Check resolution and compression settings
- **Large file size**: Compress video for web delivery

## 📝 Example File Structure

```
public/
  videos/
    hero-background.mp4    ← Your main video file
    hero-background.webm  ← Optional fallback
    README.md             ← This file
```

Once you add the video files, refresh your browser to see the background video playing!