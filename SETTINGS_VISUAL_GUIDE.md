# Admin Settings - Visual Design Guide

## 🎨 Design System

### Color Palette

#### Primary Colors
```
Primary Blue:    #1976d2  (Main actions, links, focus states)
Secondary Blue:  #1565c0  (Hover states)
Accent Gold:     #ffd700  (Highlights, badges)
```

#### Neutral Colors
```
Text Dark:       #1a1a1a  (Primary text)
Text Medium:     #333333  (Secondary text)
Text Light:      #666666  (Helper text)
Border:          #e0e0e0  (Borders, dividers)
Background:      #fafafa  (Section backgrounds)
White:           #ffffff  (Card backgrounds)
```

#### Status Colors
```
Success:         #4caf50  (Success states)
Warning:         #ff9800  (Warning states)
Error:           #d32f2f  (Error states)
Info:            #2196f3  (Info states)
```

### Typography Scale

#### Font Families
```
Primary:   'Poppins', sans-serif
Headings:  'Playfair Display', serif
Code:      'Courier New', monospace
```

#### Font Sizes
```
Hero:        24px+  (Page titles)
H2:          20px   (Section headers)
H3:          18px   (Subsection headers)
H4:          16px   (Card titles)
Body Large:  15px   (Input text, important content)
Body:        14px   (Labels, regular text)
Small:       13px   (Helper text, captions)
Tiny:        11-12px (Badges, tags)
```

#### Font Weights
```
Light:       300
Regular:     400
Medium:      500
Semi-Bold:   600
Bold:        700
Extra-Bold:  800
```

### Spacing System

#### Base Unit: 4px

```
XXS:  4px   (Tight spacing)
XS:   8px   (Compact spacing)
SM:   12px  (Small spacing)
MD:   16px  (Medium spacing)
LG:   20px  (Large spacing)
XL:   24px  (Extra large spacing)
XXL:  32px  (Section spacing)
XXXL: 48px  (Major section spacing)
```

### Border Radius

```
Small:   6-8px   (Badges, small buttons)
Medium:  10-12px (Inputs, cards)
Large:   14-16px (Sections, major cards)
Round:   50%     (Avatars, circular elements)
```

### Shadows

#### Elevation Levels
```
Level 1: 0 2px 4px rgba(0,0,0,0.04)   (Subtle depth)
Level 2: 0 4px 8px rgba(0,0,0,0.08)   (Card elevation)
Level 3: 0 6px 16px rgba(0,0,0,0.12)  (Hover state)
Level 4: 0 8px 24px rgba(0,0,0,0.16)  (Modal, dropdown)
```

#### Colored Shadows
```
Primary: 0 4px 12px rgba(25,118,210,0.3)
Success: 0 4px 12px rgba(76,175,80,0.3)
Warning: 0 4px 12px rgba(255,152,0,0.3)
```

## 📐 Component Specifications

### Input Fields

#### Standard Input
```
Height:          48px
Padding:         14px 18px
Border:          2px solid #d0d0d0
Border Radius:   12px
Font Size:       15px
Font Weight:     400
Line Height:     1.5

Hover:
  Border:        #1976d2
  Shadow:        0 2px 8px rgba(25,118,210,0.1)

Focus:
  Border:        #1976d2
  Shadow:        0 0 0 4px rgba(25,118,210,0.12)
  Background:    #fafbff
```

#### Select Dropdown
```
Same as input +
Padding Right:   45px
Background Icon: Custom arrow (20px)
Icon Position:   right 12px center
```

#### Textarea
```
Min Height:      120px
Padding:         14px 18px
Line Height:     1.6
Resize:          vertical
```

### Labels

```
Font Size:       14px
Font Weight:     600
Color:           #1a1a1a
Letter Spacing:  0.3px
Line Height:     1.4
Margin Bottom:   10px
```

### Toggle Switch

```
Width:           56px
Height:          32px
Border Radius:   32px
Background Off:  #cccccc
Background On:   #1976d2

Slider:
  Size:          24px
  Position Off:  4px from left
  Position On:   28px from left
  Shadow:        0 2px 4px rgba(0,0,0,0.2)
```

### Checkbox Card

```
Padding:         18px 20px
Min Height:      64px
Border:          2px solid #e0e0e0
Border Radius:   12px
Font Size:       15px
Gap:             14px

Checkbox:
  Size:          24px
  Border:        2px solid #ccc
  Border Radius: 8px
  
Checked:
  Background:    #1976d2
  Border:        #1976d2
  Checkmark:     White ✓
```

### Buttons

#### Primary Button
```
Padding:         10px 20px
Background:      #1976d2
Color:           white
Border:          none
Border Radius:   10px
Font Size:       14px
Font Weight:     700
Shadow:          0 2px 8px rgba(25,118,210,0.3)

Hover:
  Background:    #1565c0
  Transform:     translateY(-2px)
  Shadow:        0 4px 12px rgba(25,118,210,0.4)
```

#### Secondary Button
```
Same as primary +
Background:      white
Color:           #1976d2
Border:          2px solid #1976d2
```

### Cards

#### Standard Card
```
Padding:         24px
Background:      white
Border:          2px solid #e0e0e0
Border Radius:   14px
Shadow:          0 2px 4px rgba(0,0,0,0.04)

Hover:
  Border:        #1976d2
  Shadow:        0 6px 16px rgba(25,118,210,0.12)
  Transform:     translateY(-2px)
```

#### Section Card
```
Padding:         24px
Background:      #fafafa
Border:          1px solid #e0e0e0
Border Radius:   16px
Margin Bottom:   48px
```

### Headers

#### Page Header
```
Background:      Linear gradient
Padding:         32px
Border Radius:   16px
Shadow:          0 4px 20px rgba(26,35,126,0.3)

Icon Badge:
  Size:          64px
  Border Radius: 16px
  Shadow:        0 6px 16px rgba(0,0,0,0.2)
```

#### Section Header
```
Font Size:       20px
Font Weight:     700
Color:           #1a1a1a
Border Bottom:   3px solid #e0e0e0
Padding Bottom:  16px
Margin Bottom:   24px
```

## 🎯 Layout Specifications

### Grid Systems

#### 2-Column Grid
```
Display:         grid
Grid Template:   repeat(2, 1fr)
Gap:             24px

Breakpoint:      968px → 1 column
```

#### 3-Column Grid
```
Display:         grid
Grid Template:   repeat(3, 1fr)
Gap:             24px

Breakpoint:      1400px → 2 columns
Breakpoint:      968px → 1 column
```

#### Auto-Fit Grid
```
Display:         grid
Grid Template:   repeat(auto-fit, minmax(280px, 1fr))
Gap:             20px
```

### Sidebar Navigation

```
Width:           280px
Position:        sticky
Top:             24px
Background:      white
Border Radius:   16px
Padding:         16px

Tab Button:
  Padding:       14px 16px
  Border:        2px solid #e0e0e0
  Border Radius: 12px
  Gap:           12px
  
Active Tab:
  Border:        var(--tab-color)
  Background:    Linear gradient
  Shadow:        0 4px 12px rgba(25,118,210,0.15)
```

## 🎨 Visual States

### Hover States
```
Transform:       translateY(-2px)
Shadow:          Enhanced
Border:          Primary color
Background:      Subtle tint
Transition:      0.3s ease
```

### Focus States
```
Outline:         3px solid rgba(25,118,210,0.5)
Outline Offset:  2px
Shadow:          0 0 0 4px rgba(25,118,210,0.12)
Background:      #fafbff
```

### Active States
```
Transform:       translateY(0) or scale(0.98)
Shadow:          Reduced
Transition:      0.1s ease
```

### Disabled States
```
Opacity:         0.5
Cursor:          not-allowed
Pointer Events:  none
```

## 📱 Responsive Breakpoints

```
Desktop Large:   1400px+  (3-column grids)
Desktop:         1200px+  (Standard layout)
Tablet:          968px+   (2-column, narrower sidebar)
Mobile Large:    640px+   (Single column)
Mobile:          < 640px  (Optimized mobile)
```

### Mobile Optimizations
```
- Single column layouts
- Horizontal scrolling tabs
- Larger touch targets (48px min)
- 16px font size (prevents iOS zoom)
- Reduced padding
- Stacked elements
```

## ✨ Animation Specifications

### Transitions
```
Duration:        0.3s (standard)
                 0.4s (toggles, complex)
Easing:          ease (default)
                 cubic-bezier(0.4,0,0.2,1) (material)
Properties:      all (comprehensive)
```

### Keyframe Animations
```
Fade In:
  From: opacity 0, translateY(10px)
  To:   opacity 1, translateY(0)
  Duration: 0.4s
  Easing: ease

Spin:
  From: rotate(0deg)
  To:   rotate(360deg)
  Duration: 1s
  Easing: linear
  Iteration: infinite
```

## 🎯 Accessibility

### Focus Indicators
```
Outline:         3px solid
Outline Offset:  2px
Color:           rgba(25,118,210,0.5)
Visible:         Always on :focus-visible
```

### Touch Targets
```
Minimum Size:    48px × 48px
Spacing:         8px minimum between targets
Padding:         Adequate for comfortable tapping
```

### Color Contrast
```
Text on White:   4.5:1 minimum (WCAG AA)
Large Text:      3:1 minimum
Interactive:     3:1 minimum
```

## 📊 Component Hierarchy

```
Level 1: Page Container
  └─ Level 2: Header Section
      └─ Icon Badge, Title, Actions
  └─ Level 2: Content Grid
      └─ Level 3: Sidebar Navigation
          └─ Tab Buttons, System Status
      └─ Level 3: Main Content
          └─ Level 4: Settings Sections
              └─ Section Header
              └─ Level 5: Form Groups
                  └─ Labels, Inputs, Helpers
```

## 🎨 Design Principles

1. **Clarity**: Every element has a clear purpose
2. **Consistency**: Unified design language throughout
3. **Hierarchy**: Clear visual importance levels
4. **Feedback**: Immediate response to interactions
5. **Accessibility**: Usable by everyone
6. **Efficiency**: Quick to understand and use
7. **Beauty**: Aesthetically pleasing design
8. **Professionalism**: Enterprise-grade quality

---

**Design System Version**: 2.0  
**Last Updated**: April 2, 2026  
**Status**: Production Ready ✅
