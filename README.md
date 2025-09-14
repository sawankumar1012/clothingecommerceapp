# Monova - Fashion Collection App 👗

A beautifully animated React Native fashion collection app built with Expo, featuring smooth animations, elegant UI components, and an intuitive tab-based navigation system.

## ✨ Animation Features

This app showcases various sophisticated animations implemented with React Native Reanimated v4:

### 🎯 Tab Selector Animations
- **Sliding Indicator**: Smooth spring-based sliding indicator that follows tab selection with customizable damping (20), stiffness (200), and mass (0.8)
- **Tab Item Interactions**: 
  - Scale animation on press (0.95 scale with spring physics)
  - Opacity transitions for active/inactive states (0.7 to 1.0)
  - Text opacity interpolation for smooth text state changes
  - Spring-based animations with damping: 15, stiffness: 150-200

### 🃏 Card Animations
- **Entry Animations**: ZoomIn animation with 200ms duration and springify effect
- **Exit Animations**: ZoomOut animation with 200ms duration
- **Staggered Animations**: Support for animation delays to create cascading effects
- **Save Icon Animations**: Bookmark icons animate in with 300ms delay after card animation


### 👋 Micro-Interactions
- **Wave Animation**: CSS-based rotation animation (25° rotation, 4 iterations, 300ms duration)
- **Haptic Feedback**: Integrated haptic feedback for tab interactions

### 🔄 List & Collection Animations
- **Horizontal Scroll Sync**: Synchronized scrolling between tab selector and content
- **Momentum-based Navigation**: Automatic tab switching based on scroll momentum
- **Snap-to-Interval**: Precise page snapping with customizable page widths

## 🚀 How to Run

### Prerequisites
- Node.js 16+ installed
- Expo CLI installed globally: `npm install -g @expo/cli`
- iOS Simulator (for iOS) or Android Studio (for Android)

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npx expo start
   ```

3. **Run on device/simulator**
   - Press `i` for iOS Simulator
   - Press `a` for Android Emulator  
   - Scan QR code with Expo Go app on your device

### 📱 Snack Link
*[Snack link will be added once published to Expo Snack]*

## 🏗️ Component Structure & State Management

### Architecture Overview
The app follows a component-based architecture with centralized state management:

```
app/
├── (tabs)/           # Tab-based navigation
│   ├── index.tsx     # Home screen with tab selector
│   └── explore.tsx   # Secondary tab (placeholder)
├── _layout.tsx       # Root navigation layout
└── modal.tsx         # Modal screen

components/
├── ui/
│   ├── tab-selector/ # Reusable tab component system
│   └── Background.tsx
├── Collections.tsx   # Collection grid with horizontal pagination
├── Items.tsx         # Items grid with filter chips
├── Outfits.tsx      # Outfits display component
├── Card.tsx         # Animated card wrapper
├── SingleImageCard.tsx
├── ThreeImageCard.tsx
└── RenderCards.tsx
```

### State Management Strategy

**Local Component State (useState)**
- Tab selection state in main screen
- Collection filtering and pagination
- Animation states and scroll positions
- Chip button selections

**Shared Values (Reanimated)**
- Animation values for smooth transitions
- Scroll offsets and gesture states
- Scale and opacity values for interactions

**Prop Drilling Pattern**
- Theme colors passed through custom hooks
- Animation configurations passed as props
- Event handlers passed down component tree

### Key Components

1. **TabSelector**: Fully animated tab switching system
2. **Collections**: Horizontal paginated collection browser
3. **Items**: Vertical scrolling item grid with filters
4. **Card**: Reusable animated card wrapper
5. **Background**: Themed background component

## 🔧 Technical Stack

- **Framework**: Expo SDK 54.0.7
- **React Native**: 0.81.4
- **Animations**: React Native Reanimated 4.1.0
- **Navigation**: Expo Router 6.0.4 with file-based routing
- **Gestures**: React Native Gesture Handler 2.28.0
- **Images**: Expo Image 3.0.8
- **Icons**: Expo Vector Icons 15.0.2
- **Haptics**: Expo Haptics 15.0.7

## 📋 Assumptions and Limitations

### Assumptions
- **Target Platform**: Designed primarily for mobile devices (iOS/Android)
- **Screen Sizes**: Optimized for standard smartphone screen sizes
- **Network**: Assumes stable internet connection for image loading
- **Data Structure**: Mock data follows consistent schema patterns
- **User Interaction**: Touch-first interaction model

### Current Limitations

1. **Data Management**
   - Uses static mock data instead of dynamic API
   - No data persistence or caching mechanism
   - Limited error handling for data loading

2. **Performance**
   - Large image sets may impact memory usage
   - No image lazy loading implementation
   - Animation performance may vary on older devices

3. **Accessibility**
   - Limited accessibility labels and screen reader support
   - No high contrast mode support
   - Gesture-based navigation may not be fully accessible

4. **Platform Support**
   - Web version has limited functionality
   - Some animations may not work optimally on web
   - Platform-specific optimizations not fully implemented

5. **Customization**
   - Theme system is basic (light/dark only)
   - Limited user preference settings
   - Fixed layout configurations

6. **Content Management**
   - No user-generated content support
   - No search or filtering beyond basic categories
   - No social features or sharing capabilities

### Future Improvements
- Integration with real fashion APIs
- Advanced image optimization and caching
- Enhanced accessibility features
- User preference system
- Social features and user accounts
- Advanced search and recommendation engine

## 🎨 Design Philosophy

The app emphasizes **fluid interactions** and **delightful micro-animations** to create an engaging user experience. Every animation serves a purpose:
- **Feedback**: Immediate visual response to user actions
- **Continuity**: Smooth transitions between states
- **Hierarchy**: Animations guide user attention
- **Personality**: Subtle animations add character to the interface

## 📱 App Features

- **Collections**: Browse curated fashion collections with horizontal pagination
- **Outfits**: View complete outfit combinations
- **Items**: Explore individual fashion items with filtering
- **Bookmarking**: Save favorite items and collections
- **Dark/Light Theme**: Automatic theme switching based on system preferences

---

*Built with ❤️ using Expo and React Native Reanimated*
