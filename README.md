# Profit Share Button

This tool is a proof-of-concept to move the existing share button on MIFX app to the web-based tool. 

A lightweight web tool for generating **9:16 ROI images** that can be shared easily on social media (e.g., Instagram Stories). This tool allows you to **enter a product name** and **profit value**, then outputs a high‐quality, consistently sized PNG image.

### But why?

Previously, our production app attempted to simulate the image directly in the native environment and **screenshot** it. However, we encountered several limitations:

1. **Image Quality & Consistency**  
   - The screenshot approach often produced **non‐optimal quality**.  
   - Different screen resolutions (iPhones vs. Android vs. tablets) resulted in inconsistent aspect ratios and varying sharpness levels.
   - Image output may contain other elements in user screen such as status bar, bottom bar, or others.

2. **Variable Image Dimensions**  
   - Because we relied on the user’s device screen for screenshots, the resulting image size was not always 9:16.  
   - Instagram’s or other social platforms’ compressors could distort the final image if it was too large or had unusual dimensions.

3. **Platform‐Specific Dynamic Text**  
   - Our app used each platform’s dynamic text settings, so **font sizes** in the generated image varied widely from user to user.  
   - This made the layout unpredictable and less polished.

By moving to a **web‐based** approach, we **standardize** the image creation process:

- We control the **exact 9:16 dimensions** (1080×1920).  
- We ensure **consistent fonts and styling**, unaffected by the user’s phone settings.  
- We guarantee the **highest possible image quality** without device‐dependent screenshots.

---

## How It Works

1. **User Inputs**: Enter the product name and profit amount into a simple web form.  
2. **Canvas Rendering**: The tool uses an HTML `<canvas>` (client‐side) to draw the image at a **fixed 1080×1920 resolution**.  
3. **Preview & Download**: Users can preview the generated image in real time, then **download** it as a PNG.

---

## Benefits

- **Consistent Aspect Ratio**: Always 9:16, perfect for Instagram Stories.  
- **Optimized Quality**: High‐resolution PNG output ensures the final image looks sharp.  
- **No Platform Fragmentation**: Works on any device or OS with a modern browser—no extra code needed for iOS vs. Android.  
- **Performance**: No heavy overhead—rendering is done in the browser.  
- **Free Hosting**: Because it’s purely client‐side, we can host the HTML, CSS, and JS on any static host (e.g., GitHub Pages).

---

## Project Structure

- **index.html**: The main web page with the form and preview area.  
- **Canvas**: The in‐browser `<canvas>` is used to render images at a fixed resolution.  
- **JavaScript** (inline or separate): Handles user inputs, draws on the canvas, and offers a download function.

---

## Getting Started

1. **Open** the [Live Demo](https://jose-mifx.github.io/profit-share-button/).
2. **Enter** a product name (e.g., “NZDUSD”) and a profit amount (e.g., “150.00”).
3. **Click “Preview”** to see the generated image on the right.  
4. **Click “Download”** to save the 1080×1920 PNG locally.  
5. **Share** the downloaded image on social media or elsewhere.

## Try Now
[https://jose-mifx.github.io/profit-share-button/](https://jose-mifx.github.io/profit-share-button/)