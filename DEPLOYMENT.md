# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `your-username.github.io` for a user site, or any name for a project site)
5. Make it public
6. Don't initialize with README (since you already have files)
7. Click "Create repository"

### 2. Upload Your Files

#### Option A: Using GitHub Web Interface
1. Click "uploading an existing file"
2. Drag and drop all your files (`index.html`, `styles.css`, `script.js`, `README.md`)
3. Add a commit message like "Initial portfolio website"
4. Click "Commit changes"

#### Option B: Using Git Command Line
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio website"

# Add remote repository
git remote add origin https://github.com/yourusername/your-repository-name.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### 4. Access Your Website

- **User/Organization Site**: `https://yourusername.github.io`
- **Project Site**: `https://yourusername.github.io/repository-name`

It may take 5-10 minutes for your site to be live.

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to your repository root with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. In GitHub Pages settings, add your custom domain

## Updating Your Website

To update your website:

1. Make changes to your local files
2. Commit and push changes to GitHub
3. GitHub Pages will automatically rebuild and deploy your site

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

## Troubleshooting

### Common Issues

1. **Site not loading**: Wait 5-10 minutes after enabling Pages
2. **404 Error**: Make sure `index.html` is in the root directory
3. **Styling not working**: Check file paths in your HTML
4. **Images not showing**: Use relative paths for images

### Checking Build Status

1. Go to your repository
2. Click on "Actions" tab
3. Check the status of your Pages build

## Best Practices

1. **Keep it simple**: Start with basic HTML/CSS/JS
2. **Test locally**: Use a local server to test before deploying
3. **Optimize images**: Compress images for faster loading
4. **Mobile-first**: Ensure your site works on mobile devices
5. **SEO**: Add meta tags and descriptions

## Security Considerations

- Don't put sensitive information in your repository
- Use HTTPS for all external links
- Regularly update dependencies
- Consider using GitHub's security features

## Performance Tips

1. **Minify files**: Use tools to compress CSS and JavaScript
2. **Optimize images**: Use WebP format when possible
3. **Use CDN**: Consider using a CDN for external libraries
4. **Lazy loading**: Implement lazy loading for images

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Community Forum](https://github.community/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)

---

**Your portfolio is now live! 🎉**
