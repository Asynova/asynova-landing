#!/bin/bash

echo "================================================"
echo "Asynova Landing Page - TypeScript Verification"
echo "================================================"
echo

echo "[1/3] Installing dependencies..."
npm install
echo

echo "[2/3] Running TypeScript type check..."
npm run type-check

if [ $? -eq 0 ]; then
    echo "✅ TypeScript compilation successful! No errors found."
    echo
    echo "[3/3] All Three.js TypeScript errors have been fixed!"
    echo
    echo "You can now run 'npm start' to launch the application."
else
    echo "❌ TypeScript errors still exist. Please check the output above."
fi

echo
echo "================================================"
