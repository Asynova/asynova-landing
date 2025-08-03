# Asynova Landing Page - Build Configuration

This file configures Netlify builds to handle warnings gracefully.

## Build Settings
- `CI=false` prevents treating warnings as errors
- This allows the build to complete even with ESLint warnings

## Why This Matters
- Local builds show warnings but complete successfully
- CI environments (like Netlify) treat warnings as errors by default
- This config ensures deployment works consistently

## Future Improvements
To remove this workaround, ensure all ESLint warnings are resolved in the codebase.