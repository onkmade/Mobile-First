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