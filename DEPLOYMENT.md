# 🚀 Vercel Deployment Guide for BitLink

## 📋 Prerequisites

1. **GitHub Repository** - Push your code to GitHub
2. **MongoDB Atlas Account** - Set up a cloud database
3. **Vercel Account** - Sign up at https://vercel.com

## 🗄️ Step 1: Set up MongoDB Atlas

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a new cluster (free tier is fine)
3. Create a database user
4. Whitelist your IP address (or use `0.0.0.0/0` for all IPs)
5. Get your connection string

## 🔧 Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables:
   - `MONGODB_URI` = Your MongoDB Atlas connection string
5. Click "Deploy"

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variables
vercel env add MONGODB_URI
# Paste your MongoDB connection string when prompted
```

## 🌍 Step 3: Configure Environment Variables

In your Vercel project settings, add:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bitlink?retryWrites=true&w=majority
```

## ✅ Step 4: Test Your Deployment

1. Visit your deployed URL
2. Test URL shortening functionality
3. Test URL redirection

## 🐛 Common Issues & Solutions

### Build Errors
- **React Hook Rules**: Component names must start with uppercase ✅ (Fixed)
- **ESLint Errors**: Check for unused variables and imports

### Runtime Errors
- **MongoDB Connection**: Ensure `MONGODB_URI` is set correctly
- **Environment Variables**: Make sure they're added in Vercel settings

### Network Issues
- **CORS**: Not needed for same-origin requests
- **API Routes**: Should work automatically with Vercel

## 🔄 Automatic Deployments

- Every push to your main branch will trigger a new deployment
- Pull requests create preview deployments
- You can set up deployment hooks for other branches

## 📊 Monitoring

- Check deployment logs in Vercel dashboard
- Monitor function invocations
- Set up error tracking if needed

## 🚀 Production Checklist

- [ ] MongoDB Atlas set up
- [ ] Environment variables configured
- [ ] Build passes successfully
- [ ] URL shortening works
- [ ] URL redirection works
- [ ] Custom domain configured (optional)
- [ ] Analytics set up (optional)

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify MongoDB Atlas connection
3. Test locally first with `npm run build`
4. Check environment variables spelling

---

Happy deploying! 🎉
