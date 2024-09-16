# Podcast Summarizer.Ai - Frontend

## Overview

Podcast Summarizer.Ai is a web application that provides summarized content for podcasts, powered by AI transcription and natural language processing. This repository contains the **frontend code** built using **React** to display podcast summaries fetched from a MongoDB backend API.

## Features

- Display podcast episodes with title, publish date, TLDR, and full summary.
- "Read More" button to expand and collapse podcast summaries.
- Smooth fade-in/fade-out animations for showing and hiding full summaries.
- Responsive design for a seamless experience on both desktop and mobile devices.
  
## Live Demo

You can view the live project here: [Podcast Summarizer.Ai](https://podcast-summarizer-frontend.onrender.com)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v12 or later)
- **npm** or **yarn**

### API Integration

The frontend fetches podcast summaries from a backend API, which is hosted separately on Render.

- API Endpoint: https://your-backend-api-url.onrender.com/api/episodes

The app uses fetch to get the podcast data, which includes the episode title, publish date, TLDR, and full summary.

### Deployment

This frontend is hosted on Render.com

To deploy this frontend:
1. Push code to GitHub.
2. Go to Render dashboard and create a new **Statis Site**.
3. Connect Github repo.
4. Set the build command:
   ```bash
   npm install && npm run build
   ```
