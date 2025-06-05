# Asynova Landing Page - Fix Strategy

## Critical Issues Analysis

### 1. BatchedMesh Import Error
**Error**: `'BatchedMesh' is not exported from 'three'`

**Root Cause**: 
- The error comes from `three-mesh-bvh` package (a dependency of `@react-three/drei`)
- Version mismatch: `three-mesh-bvh` expects a different version of Three.js
- BatchedMesh exists in Three.js r142+, but there's a compatibility issue

**Solution**:
```bash
# Option 1: Update @react-three/drei to latest version
npm install @react-three/drei@latest

# Option 2: Add webpack alias to resolve the issue
# In webpack.config.js override:
resolve: {
  alias: {
    'three': path.resolve('./node_modules/three')
  }
}

# Option 3: Install specific compatible versions
npm install three@0.160.0 @react-three/drei@9.88.0 @react-three/fiber@8.15.0
```

### 2. ESLint Warnings

**Missing Dependencies in useEffect**:
```typescript
// Add dependencies or disable the warning
useEffect(() => {
  // code
}, [demoSteps]); // Add missing dependencies

// Or if intentional:
// eslint-disable-next-line react-hooks/exhaustive-deps
```

**Anonymous Default Exports**:
```typescript
// Instead of:
export default {
  Component1,
  Component2
};

// Use:
const exports = {
  Component1,
  Component2
};
export default exports;
```

**Import Ordering**:
```typescript
// Move all imports to the top of the file
// Remove any imports that appear after other code
```

## Recommended Implementation Order

### Phase 1: Fix Critical Error (5 minutes)
1. Create a webpack configuration override
2. Install compatible package versions
3. Test the application starts

### Phase 2: Fix ESLint Warnings (15 minutes)
1. Fix missing useEffect dependencies
2. Name all default exports
3. Fix import ordering
4. Remove unused imports

### Phase 3: Optimization (10 minutes)
1. Add proper error boundaries
2. Implement lazy loading for Three.js components
3. Add performance monitoring

## Quick Fix Script

```bash
#!/bin/bash
# fix-landing-page.sh

echo "Fixing Asynova Landing Page Issues..."

# Fix 1: Update dependencies to compatible versions
echo "Updating dependencies..."
npm install three@0.160.0 @react-three/drei@9.88.0 @react-three/fiber@8.15.0 @types/three@0.160.0

# Fix 2: Clear cache
echo "Clearing cache..."
rm -rf node_modules/.cache
npm cache clean --force

# Fix 3: Reinstall
echo "Reinstalling dependencies..."
rm -rf node_modules package-lock.json
npm install

echo "Done! Try running npm start again."
```

## Webpack Configuration Override

Create `config-overrides.js`:
```javascript
const path = require('path');

module.exports = function override(config) {
  // Fix Three.js module resolution
  config.resolve.alias = {
    ...config.resolve.alias,
    'three': path.resolve('./node_modules/three')
  };
  
  // Ignore source map warnings
  config.ignoreWarnings = [
    {
      module: /node_modules\/@mediapipe/,
      message: /Failed to parse source map/
    }
  ];
  
  return config;
};
```

## ESLint Configuration Update

Update `.eslintrc` or `package.json`:
```json
{
  "eslintConfig": {
    "extends": ["react-app"],
    "rules": {
      "react-hooks/exhaustive-deps": "warn",
      "import/no-anonymous-default-export": "off",
      "@typescript-eslint/no-unused-vars": "warn"
    }
  }
}
```

## Expected Results

After implementing these fixes:
- ✅ Application compiles without errors
- ✅ 3D visualizations load properly
- ✅ No critical warnings
- ✅ Performance optimized
- ✅ Clean console output

## Long-term Recommendations

1. **Lock Dependencies**: Use exact versions in package.json
2. **Add Pre-commit Hooks**: Run linting before commits
3. **Set Up CI/CD**: Catch these issues before deployment
4. **Monitor Bundle Size**: Three.js can be heavy
5. **Progressive Enhancement**: Ensure site works without 3D

## Testing Checklist

- [ ] Run `npm start` - no compilation errors
- [ ] Check 3D visualizations render
- [ ] Test on different devices/browsers
- [ ] Verify performance metrics
- [ ] Check console for warnings
- [ ] Test fallback scenarios
