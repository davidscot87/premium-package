# Admin Settings - Complete Form Specifications

## 📐 Precise Dimensions & Specifications

### Input Fields

#### Standard Text/Email/Tel/URL/Number/Password Inputs
```
Width:           100% (full container width)
Height:          52px (fixed)
Padding:         14px 18px
Border:          2px solid #d0d0d0
Border Radius:   12px
Font Size:       15px
Line Height:     1.5
Min Height:      52px
Box Shadow:      0 1px 3px rgba(0,0,0,0.05)

States:
  Hover:
    Border:      #1976d2
    Shadow:      0 2px 8px rgba(25,118,210,0.1)
  
  Focus:
    Border:      #1976d2
    Shadow:      0 0 0 4px rgba(25,118,210,0.12)
    Background:  #fafbff
```

#### Select Dropdowns
```
Width:           100%
Height:          52px
Padding:         14px 18px
Padding Right:   45px (for arrow icon)
Arrow Icon:      20px, positioned right 12px center
All other specs: Same as standard inputs
```

#### Textarea
```
Width:           100%
Min Height:      140px
Max Height:      400px
Padding:         14px 18px
Line Height:     1.6
Resize:          vertical
All other specs: Same as standard inputs
```

#### Time Inputs
```
Width:           100% (in time-range: flex 1)
Min Width:       160px (in time-range)
Height:          52px
All other specs: Same as standard inputs
```

### Labels

```
Font Size:       14px
Font Weight:     600
Color:           #1a1a1a
Letter Spacing:  0.3px
Line Height:     1.4
Min Height:      20px
Margin Bottom:   4px
Gap:             6px (for icons/required markers)
```

### Form Groups

```
Display:         flex (column)
Gap:             12px
Min Height:      90px
Width:           100%

Span Full:
  Grid Column:   1 / -1
  Min Height:    100px

Span 2:
  Grid Column:   span 2
```

### Form Grid Layouts

#### 1-Column Grid
```
Grid Template:   1fr
Max Width:       100%
Gap:             28px
Margin Top:      24px
```

#### 2-Column Grid
```
Grid Template:   repeat(2, 1fr)
Column Gap:      32px
Row Gap:         28px
Margin Top:      24px

Breakpoint:      968px → 1 column
```

#### 3-Column Grid
```
Grid Template:   repeat(3, 1fr)
Column Gap:      28px
Row Gap:         28px
Margin Top:      24px

Breakpoint:      1600px → 2 columns
Breakpoint:      1200px → 1 column
```

### Toggle Switches

```
Width:           56px
Height:          32px
Border Radius:   32px
Background Off:  #cccccc
Background On:   #1976d2
Shadow:          inset 0 2px 4px rgba(0,0,0,0.1)

Slider:
  Size:          24px × 24px
  Position Off:  4px from left
  Position On:   28px from left (translateX(24px))
  Shadow:        0 2px 4px rgba(0,0,0,0.2)
  
Hover:
  Shadow:        0 0 0 4px rgba(25,118,210,0.1)
```

### Toggle Cards

```
Grid:            repeat(auto-fit, minmax(380px, 1fr))
Gap:             24px
Padding:         28px
Min Height:      110px
Border:          2px solid #e0e0e0
Border Radius:   14px
Width:           100%

Content:
  Title:         16px / 700
  Description:   14px / 400
  Badge:         11px / 700 uppercase

Breakpoint:      1400px → minmax(340px, 1fr)
Breakpoint:      968px → 1 column
```

### Checkbox Cards

```
Grid:            repeat(auto-fill, minmax(300px, 1fr))
Gap:             20px
Padding:         20px 22px
Min Height:      70px
Border:          2px solid #e0e0e0
Border Radius:   12px
Width:           100%

Checkbox:
  Size:          26px × 26px
  Border:        2px solid #ccc
  Border Radius: 8px
  Checkmark:     15px white ✓

Breakpoint:      1200px → minmax(260px, 1fr)
Breakpoint:      968px → 1 column
```

### Checkbox List Items

```
Display:         flex
Gap:             14px
Padding:         10px 14px
Min Height:      48px
Border Radius:   8px

Checkbox:
  Size:          22px × 22px
  Accent Color:  #1976d2

Horizontal Layout:
  Flex Direction: row
  Gap:           24px
```

### Radio Buttons

```
Display:         flex
Gap:             28px
Padding:         12px 20px
Min Height:      52px
Border:          2px solid #e0e0e0
Border Radius:   10px
Flex:            1
Min Width:       200px

Radio Input:
  Size:          22px × 22px
  Accent Color:  #1976d2

Breakpoint:      768px → column layout, full width
```

### Color Pickers

```
Grid:            repeat(auto-fit, minmax(280px, 1fr))
Gap:             28px

Color Input:
  Width:         80px
  Height:        56px
  Border:        2px solid #e0e0e0
  Border Radius: 12px
  Padding:       6px

Text Input:
  Flex:          1
  Height:        52px
  Font:          'Courier New', monospace
  Font Weight:   600
  Transform:     uppercase
```

### Time Range

```
Display:         flex
Gap:             20px
Width:           100%

Input:
  Flex:          1
  Min Width:     160px
  Height:        52px

Separator:
  Font Size:     15px
  Font Weight:   600
  Padding:       0 8px
```

### Code Editors

```
Width:           100%
Min Height:      220px
Max Height:      600px
Padding:         24px
Font:            14px 'Courier New', monospace
Line Height:     1.8
Background:      #1e1e1e
Color:           #d4d4d4
Border:          2px solid #333
Border Radius:   12px
Resize:          vertical
```

### API Keys Table

```
Width:           100%
Min Width:       900px (table)
Border:          2px solid #e0e0e0
Border Radius:   14px

Header:
  Padding:       20px 24px
  Font Size:     14px
  Font Weight:   700
  Background:    linear-gradient(135deg, #f8f9fa, #e9ecef)

Cell:
  Padding:       20px 24px
  Font Size:     14px

Code:
  Padding:       8px 14px
  Font Size:     13px
  Border Radius: 6px
  Font:          'Courier New', monospace

Badge:
  Padding:       7px 16px
  Font Size:     12px
  Border Radius: 14px

Button:
  Padding:       10px
  Border Radius: 8px
```

### Action Cards (Database)

```
Grid:            repeat(auto-fit, minmax(300px, 1fr))
Gap:             28px
Padding:         36px 32px
Min Height:      240px
Border:          3px solid
Border Radius:   16px
Text Align:      center

Title:           21px / 700
Description:     14px / 400
Button:          14px / 700, padding 14px 28px

Breakpoint:      1200px → minmax(260px, 1fr)
Breakpoint:      768px → 1 column
```

### Stat Cards

```
Grid:            repeat(auto-fit, minmax(260px, 1fr))
Gap:             24px
Padding:         28px
Min Height:      100px
Border:          2px solid #e0e0e0
Border Radius:   14px
Width:           100%

Title:           13px / 600 uppercase
Value:           26px / 800

Breakpoint:      968px → minmax(220px, 1fr)
Breakpoint:      640px → 1 column
```

### Info Cards

```
Grid:            repeat(auto-fit, minmax(260px, 1fr))
Gap:             24px
Padding:         28px
Min Height:      110px
Border:          2px solid
Border Radius:   14px
Width:           100%

Title:           14px / 600 uppercase
Value:           22px / 800

Breakpoint:      968px → minmax(220px, 1fr)
Breakpoint:      640px → 1 column
```

### Sections

```
Margin Bottom:   56px
Padding:         32px
Background:      #fafafa
Border:          1px solid #e0e0e0
Border Radius:   16px
Width:           100%
```

### Section Headers

```
Font Size:       20px
Font Weight:     700
Color:           #1a1a1a
Border Bottom:   3px solid #e0e0e0
Padding Bottom:  16px
Margin Bottom:   24px
```

## 📱 Responsive Breakpoints

### Desktop Large (1600px+)
- 3-column grids remain 3 columns
- All elements at full size
- Maximum spacing

### Desktop (1200px - 1600px)
- 3-column grids → 2 columns
- Toggle cards: minmax(340px, 1fr)
- Checkbox cards: minmax(260px, 1fr)

### Tablet (968px - 1200px)
- All multi-column grids → 1 column
- Sidebar becomes horizontal tabs
- Reduced padding: 20px
- Section padding: 16px

### Mobile (640px - 968px)
- Single column layout
- Full width elements
- Reduced gaps: 24px
- Form inputs: 16px font (prevents iOS zoom)

### Mobile Small (<640px)
- Minimum padding
- Stacked elements
- Full width buttons
- Simplified layouts

## 🎯 Spacing System

### Gaps
```
Form Grid:       28px (col-2), 32px (col-2 column gap)
Toggle Grid:     24px
Checkbox Grid:   20px
Stats Grid:      24px
Info Grid:       24px
Action Grid:     28px
Color Grid:      28px
Code Grid:       28px
```

### Padding
```
Settings Pane:   36px
Settings Section: 32px
Toggle Card:     28px
Checkbox Card:   20px 22px
Stat Card:       28px
Info Card:       28px
Action Card:     36px 32px
Input:           14px 18px
Textarea:        14px 18px
Code Editor:     24px
```

### Margins
```
Section Bottom:  56px
Form Group:      12px gap
Label Bottom:    4px
Helper Text Top: 6px
Form Row:        28px
```

## 🎨 Visual Specifications

### Borders
```
Standard:        2px solid #d0d0d0
Section:         1px solid #e0e0e0
Table:           2px solid #e0e0e0
Action Card:     3px solid (color varies)
```

### Border Radius
```
Input:           12px
Card:            14px
Section:         16px
Action Card:     16px
Checkbox:        8px
Button:          10-12px
Badge:           6px
```

### Shadows
```
Input:           0 1px 3px rgba(0,0,0,0.05)
Card:            0 2px 4px rgba(0,0,0,0.04)
Hover:           0 4px 12px rgba(25,118,210,0.12)
Action Card:     0 4px 12px rgba(0,0,0,0.08)
Button:          0 2px 8px rgba(25,118,210,0.3)
```

### Typography
```
Input:           15px / 400
Label:           14px / 600
Section Header:  20px / 700
Card Title:      16px / 700
Description:     14px / 400
Helper Text:     13px / 400
Code:            14px / 400 monospace
```

## ✅ Accessibility Compliance

### Touch Targets
```
Minimum Size:    48px × 48px (WCAG 2.1 AAA)
Actual Sizes:
  - Inputs:      52px height
  - Checkboxes:  22-26px
  - Radio:       22px
  - Toggle:      56px × 32px
  - Buttons:     52px+ height
```

### Color Contrast
```
Text on White:   #1a1a1a (16.5:1 ratio)
Labels:          #1a1a1a (16.5:1 ratio)
Helper Text:     #666666 (5.7:1 ratio)
All meet WCAG 2.1 AA standards
```

### Focus Indicators
```
Outline:         3px solid rgba(25,118,210,0.5)
Outline Offset:  2px
Shadow:          0 0 0 4px rgba(25,118,210,0.12)
Always visible on :focus-visible
```

## 📊 Summary

### Total Form Elements
- Input Fields: 100% width, 52px height
- Textareas: 100% width, 140-400px height
- Toggle Switches: 56px × 32px
- Checkboxes: 22-26px
- Radio Buttons: 22px
- Buttons: Variable, min 48px height
- Cards: 100% width, variable height
- Tables: 100% width, min 900px

### Grid Systems
- 1-Column: 100% width
- 2-Column: 50% each (minus gap)
- 3-Column: 33.33% each (minus gap)
- Auto-fit: Responsive based on min-max

### All Elements
- Box-sizing: border-box
- Width: 100% (respects container)
- Max-width: 100% (no overflow)
- Min-width: 0 (allows shrinking)
- Overflow: visible (no clipping)

---

**Status**: ✅ Complete  
**Compliance**: WCAG 2.1 AA  
**Responsive**: 100%  
**Visibility**: Fully Optimized
