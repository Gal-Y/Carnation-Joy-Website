# Carnation Joy Care Website (Redesign)

Static site for an aged care + disability support provider.

## Project Structure

```
.
├── src/
│   ├── pages/      # HTML pages (source)
│   ├── css/        # styles
│   ├── js/         # shared scripts
│   ├── images/     # image assets
│   └── static/     # root files (robots.txt, sitemap.xml, etc.)
├── scripts/
│   └── build_site.py
├── dist/           # generated deploy output
└── .github/workflows/deploy.yml
```

## Build

Generate deploy-ready output:

```bash
python3 scripts/build_site.py
```

## Local Preview (recommended)

Build first, then serve `dist`:

```bash
python3 scripts/build_site.py
python3 -m http.server 5173 --directory dist
```

Open:
- `http://localhost:5173`

## Deployment

GitHub Actions runs the same build script and syncs only `dist/` to S3.

Manual deploy command:

```bash
python3 scripts/build_site.py
aws s3 sync ./dist s3://carnationjoycare.com.au --delete
```

## Contact Form

`src/pages/contact.html` contains a form with `data-endpoint=""`.

- Leave it blank: the form shows a helpful fallback telling users to email/call.
- Set it to an API endpoint: the form will `POST` JSON to that URL.

## Image Credits

Photos were downloaded from Pexels (free to use).
