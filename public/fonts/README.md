# Font Files

Place the following WOFF2 font files in this directory:

1. **bricolage.woff2** - Bricolage Grotesque (variable: wght 600-800, wdth 75-100%)
   - Source: https://github.com/google/fonts/tree/main/ofl/bricolagegrotesque
   - Subset: Latin

2. **geist.woff2** - Geist (variable: wght 400-700)
   - Source: https://vercel.com/font
   - Subset: Latin

3. **geist-mono.woff2** - Geist Mono (variable: wght 400-700)
   - Source: https://vercel.com/font
   - Subset: Latin

4. **doto.woff2** - Doto (wght 800)
   - Source: https://github.com/google/fonts/tree/main/ofl/doto
   - Subset: Latin

## Optimization

Run the font optimization script for guidance:
```bash
bun run fonts:optimize
```

## Quick Download (if you have wget/curl)

```bash
# Bricolage Grotesque
wget -O bricolage.woff2 "https://github.com/google/fonts/raw/main/ofl/bricolagegrotesque/fonts/woff2/BricolageGrotesque%5Bwdth,wght%5D.woff2"

# Geist & Geist Mono - Download from https://vercel.com/font
# Doto
wget -O doto.woff2 "https://github.com/google/fonts/raw/main/ofl/doto/fonts/woff2/Doto-VariableFont_wght.woff2"
```

Then subset with pyftsubset:
```bash
pip install fonttools
pyftsubset bricolage.woff2 --unicodes="U+0000-00FF,U+0100-017F,U+0180-024F" --output-file=bricolage-subset.woff2 --flavor=woff2
```