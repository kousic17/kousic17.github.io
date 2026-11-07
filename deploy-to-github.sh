#!/bin/bash
# Helper script to push your portfolio to GitHub Pages

echo "==============================================="
echo "   Deploy Kousic Srinivasan Portfolio to GitHub"
echo "==============================================="
echo ""

read -p "Enter your GitHub repository name (e.g., portfolio or kousic17.github.io): " REPO_NAME

if [ -z "$REPO_NAME" ]; then
  REPO_NAME="portfolio"
fi

REMOTE_URL="https://github.com/kousic17/${REPO_NAME}.git"

echo ""
echo "Setting remote to: $REMOTE_URL"
git remote remove origin 2>/dev/null
git remote add origin "$REMOTE_URL"

echo ""
echo "Pushing 'main' branch to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "=========================================================="
  echo "✅ Push successful!"
  echo ""
  echo "Next step to activate GitHub Pages:"
  echo "1. Go to: https://github.com/kousic17/${REPO_NAME}/settings/pages"
  echo "2. Under 'Build and deployment' -> 'Branch', select 'main' and '/ (root)'"
  echo "3. Click 'Save'"
  echo ""
  echo "Your site will be live at:"
  if [ "$REPO_NAME" = "kousic17.github.io" ]; then
    echo "👉 https://kousic17.github.io/"
  else
    echo "👉 https://kousic17.github.io/${REPO_NAME}/"
  fi
  echo "=========================================================="
else
  echo ""
  echo "❌ Push encountered an issue. Ensure the repository exists at: https://github.com/kousic17/${REPO_NAME}"
fi
