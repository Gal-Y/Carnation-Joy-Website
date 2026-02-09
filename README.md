# Carnation Joy Care Website (Redesign)

Static site for an aged care + disability support provider.

## Local Preview

Run a simple static server from the repo root:

```bash
python3 -m http.server 5173
```

Open:
- `http://localhost:5173/`

## Contact Form

`contact.html` contains a form with `data-endpoint=""`.

- Leave it blank: the form shows a helpful fallback telling users to email/call.
- Set it to an API endpoint: the form will `POST` JSON to that URL.

## Structure

- Pages: `*.html` in the repo root
- Styles: `css/site.css`
- Shared JS: `js/site.js`
- Images: `images/`

## Image Credits

Photos were downloaded from Pexels (free to use).

