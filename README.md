# Mobile-First
an approach to website and app development that prioritizes creating the user experience for mobile devices first!


We will build the mobile-first design using HTML for the foundational content, CSS for the mobile-first presentation, and JavaScript for enhancing functionality. The process involves starting with a content-rich HTML base, styling it for small screens first with CSS, and then layering on more features for larger devices using @media (min-width: ...) queries. JavaScript is only added later to implement non-essential behaviors, ensuring the core experience remains accessible and fast for every user.


# TO achieve Mobile-First Design

```yaml
Screen width →

|--------|--------|--------|--------|--------|-------->
0       475      640      768      1024     1280    1536px

base | mobile | tablet | small desktop | desktop | large desktop
# Breakpoints
XS: 0–474px
SM: 475–639px
MD: 640–767px
LG: 768–1023px
XL: 1024–1279px
2XL: 1280–1535px+

# Example Settings

Font size (body):
XS (0–474px):       16px
SM (475–639px):     16px
MD (640–767px):     18px
LG (768–1023px):    20px
XL (1024–1279px):   20px
2XL (1280–1535px+): 22px

Padding (container):
XS:   1rem
SM:   1rem
MD:   1.5rem
LG:   2rem
XL:   2rem
2XL:  2.5rem

Margin (sections / elements):
XS:   1rem
SM:   1rem
MD:   1.5rem
LG:   2rem
XL:   2rem
2XL:  2.5rem

```

# Responsive Design with Values

```yaml 
Screen width →

|--------|--------|--------|--------|--------|-------->
0       475      640      768      1024     1280    1536px

base | mobile | tablet | small desktop | desktop | large desktop

Adjust the following properties at each breakpoint:

1. Base / Mobile (XS: 0–474px)
   ├─ Typography
   │   ├─ font-size: 16px
   │   ├─ line-height: 1.5
   │   └─ text-align: center / default
   ├─ Layout
   │   ├─ display: block / flex-column
   │   └─ gap: 1rem
   ├─ Spacing
   │   ├─ padding: 1rem
   │   └─ margin: 1rem
   ├─ Visibility
   │   └─ mobile-specific elements: display block
   ├─ Images / Media
   │   ├─ width: 100%
   │   └─ object-fit: cover
   └─ Visuals
       ├─ border-radius: 0.5rem
       └─ box-shadow: small

2. SM (475–639px)
   ├─ Typography
   │   ├─ font-size: 16px
   ├─ Layout
   │   └─ minor adjustments if needed
   ├─ Spacing
   │   ├─ padding: 1rem
   │   └─ margin: 1rem
   └─ Visibility / Images / Visuals
       └─ same as XS

3. MD (640–767px)
   ├─ Typography
   │   ├─ font-size: 18px
   ├─ Layout
   │   ├─ flex-direction: row for some containers
   │   └─ gap: 1.5rem
   ├─ Spacing
   │   ├─ padding: 1.5rem
   │   └─ margin: 1.5rem
   └─ Visibility / Images / Visuals
       └─ adjust images, show/hide tablet-specific elements

4. LG (768–1023px)
   ├─ Typography
   │   ├─ font-size: 20px
   ├─ Layout
   │   ├─ multi-column / grid layouts
   │   └─ gap: 2rem
   ├─ Spacing
   │   ├─ padding: 2rem
   │   └─ margin: 2rem
   └─ Visibility / Images / Visuals
       └─ show desktop elements, adjust image sizes

5. XL (1024–1279px)
   ├─ Typography
   │   ├─ font-size: 20px
   ├─ Layout
   │   ├─ maintain grid or row layouts
   │   └─ gap: 2rem
   ├─ Spacing
   │   ├─ padding: 2rem
   │   └─ margin: 2rem
   └─ Visibility / Images / Visuals
       └─ minor enhancements for large desktop

6. 2XL (1280–1535px+)
   ├─ Typography
   │   ├─ font-size: 22px
   ├─ Layout
   │   └─ full-width containers / expand content
   ├─ Spacing
   │   ├─ padding: 2.5rem
   │   └─ margin: 2.5rem
   └─ Visibility / Images / Visuals
       └─ enhanced visuals: box-shadow, rounded corners, large images

```