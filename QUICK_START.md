# ⚡ Quick Start Guide - GreenGlow Portfolio

Get your portfolio up and running in just 5 minutes!

## 🎯 What You Need

- [ ] Text editor (VS Code, Sublime Text, etc.)
- [ ] Web browser
- [ ] Your content ready (name, bio, projects, photos)

## 🚀 5-Minute Setup

### Step 1: Replace Personal Information (2 minutes)

**📝 Open `index.html` and find these lines to replace:**

1. **Your Name** (Line ~85):
   ```html
   <div class="logo">&lt;/&gt; YOUR NAME HERE</div>
   ```

2. **Professional Title** (Line ~108):
   ```html
   <h1>Your Professional Title</h1>
   ```

3. **About Me Description** (Line ~175):
   ```html
   <p class="about-intro">Hello! I'm YOUR NAME, a passionate ROLE based in LOCATION.</p>
   ```

4. **Contact Information** (Lines ~1023, 1031, 1039):
   ```html
   <p>your.email@gmail.com</p>
   <p>+1 (xxx) xxx-xxxx</p>
   <p>Your City, State, Country</p>
   ```

### Step 2: Add Your Photo (1 minute)

1. Replace `images/profile.jpg` with your professional photo
2. Keep the same filename or update the path in HTML (Line ~204)

### Step 3: Test Locally (30 seconds)

**Double-click `index.html`** or use a local server:
```bash
# Python
python -m http.server 8000

# Node.js (if you have live-server installed)
npx live-server

# Then visit: http://localhost:8000
```

### Step 4: Deploy (1 minute)

**Fastest Option - Netlify Drag & Drop:**
1. Go to [netlify.com](https://netlify.com)
2. Drag your entire folder to the deploy area
3. Get your live URL! 🎉

## 📋 Customization Checklist

### Essential Updates ✅
- [ ] Replace "Marcus Thompson" with your name throughout the file
- [ ] Update professional title and description  
- [ ] Replace profile photo (`images/profile.jpg`)
- [ ] Update contact information (email, phone, location)
- [ ] Update social media links (GitHub, LinkedIn, Twitter)

### Content Updates 📝
- [ ] Update About Me section with your story
- [ ] Replace work experience with your background
- [ ] Update skills section with your technologies
- [ ] Replace project images and descriptions
- [ ] Modify services/pricing or remove if not freelancing

### SEO & Meta 🔍
- [ ] Update page title in `<title>` tag
- [ ] Update meta description
- [ ] Update Open Graph tags for social sharing
- [ ] Update structured data (JSON-LD) with your info

## 🎨 Quick Theme Changes

Want to change the green color scheme? Edit `style.css` (Line ~4):

```css
:root {
    --accent: #3b82f6;  /* Blue theme */
    /* or */
    --accent: #8b5cf6;  /* Purple theme */
    /* or */ 
    --accent: #f97316;  /* Orange theme */
}
```

## 🚨 Common Issues & Fixes

### Images Not Showing?
- Check that image paths are correct: `images/profile.jpg`
- Ensure images folder is in the same directory as `index.html`

### Layout Looks Broken?
- Make sure `style.css` and `script.js` are in the same folder as `index.html`
- Check browser console for any error messages (F12)

### Contact Form Not Working?
- **Netlify**: Form works automatically after deployment
- **Other platforms**: Consider using Formspree or similar service

## 📚 Next Steps

### Want More Customization?
- 📖 Read the [Customization Guide](Doc/customization-guide.html)
- 🚀 Check the [Deployment Guide](Doc/deployment-guide.html)

### Need Help?
- 📋 Full documentation in [README.md](README.md)

### Ready to Share?
Once deployed, share your portfolio:
- Add to your resume and LinkedIn profile
- Share on social media with #GreenGlowPortfolio
- Submit for showcase in our community

## 🎉 You're Done!

Your professional portfolio is now live and ready to impress potential employers and clients!

---

**💡 Pro Tips:**
- Keep your portfolio updated with new projects
- Test on mobile devices before sharing
- Use high-quality, compressed images
- Keep content concise and impactful

**🌟 Made with GreenGlow Template? We'd love to see it!**
Share your portfolio URL with the community! 