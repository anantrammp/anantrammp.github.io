# Updating the lab website

You can make routine updates in your browser. Sign in to GitHub as **anantrammp**, then open [the website repository](https://github.com/anantrammp/anantrammp.github.io).

## Add a publication

### 1. Upload the PDF

Open [`files/publications`](https://github.com/anantrammp/anantrammp.github.io/tree/main/files/publications), choose **Add file → Upload files**, and drag in the PDF. Use a short, distinctive filename, for example `2026-dna-transport.pdf`. Select **Commit changes** and save to `main`.

### 2. Add the citation

Open [`_publications`](https://github.com/anantrammp/anantrammp.github.io/tree/main/_publications), choose **Add file → Create new file**, and name the file `2026-dna-transport.md`. Copy the example below and replace its values:

```yaml
---
title: "Your paper title"
collection: publications
year: 2026
citation: "Authors. Your paper title. Journal, volume, pages (2026)."
paperurl: "/files/publications/2026-dna-transport.pdf"
doi: "10.xxxx/your-doi"
---
```

The example is a template, not an actual citation. Delete the `doi` line if you do not want a DOI link. Delete `paperurl` if a PDF is not available. Use `year: 0` for an undated manuscript. Keep the opening and closing `---` lines. PDF names are case-sensitive and must match exactly. If a quoted value contains a double quote, replace that double quote with `\"`.

Select **Commit changes** and save to `main`. The publication list, year filter, search, and detail page update automatically after GitHub finishes the build. You do not need to edit the Publications page itself.

To correct an existing citation or replace its PDF link, open its record in `_publications`, click the pencil icon, make the edit, and commit. To add an abstract, put ordinary text below the final `---` line.

## Edit a page

Open [`_pages`](https://github.com/anantrammp/anantrammp.github.io/tree/main/_pages), select the page, and click the pencil icon. Edit the paragraphs below the initial block between `---` lines. Keep that initial configuration block in place.

| What to change | File |
| --- | --- |
| Research description | `home.md` |
| Current team | `team.md` |
| Past members | `past-team.md` |
| Textbook and slides | `book.md` |
| Recruitment | `join.md` |
| Group photographs | `photos.md` |
| Group resources | `misc.md` |

Useful formatting:

```markdown
## Section heading

A paragraph of ordinary text.

[Link text](https://example.com)

![Description of image](/images/example.jpg)
```

For team members, copy an existing photograph, heading, and biography block, then replace the name, text, and image filename. Some images use a short HTML block to preserve the portrait layout; copy the existing block and change only its paths and `alt` description.

## Replace or add a photograph

Upload the original to [`images`](https://github.com/anantrammp/anantrammp.github.io/tree/main/images), then update its path in the relevant page. Prefer a new descriptive filename so you can easily reverse the change. For scientific plots, use an original SVG or a large PNG where possible. Preserve the original PDF for downloadable figures and papers.

The browser displays images at the appropriate page size; files are not recompressed by this site. Keep filenames simple and avoid spaces. Use meaningful alternative text describing the image.

## Check that an update is live

Open the repository's **Actions** tab and look for the most recent Pages build and deployment to finish successfully. Then open [the website](https://anantrammp.github.io/) and refresh. A build can take several minutes. GitHub's Markdown Preview checks basic formatting but does not show the full website design.

If a build fails, the **Actions** tab shows the error. A common cause is missing quotation marks or an extra colon in a publication record. Your change history is retained in GitHub; the file's **History** button lets you inspect earlier versions.

## File sizes

Browser uploads allow files up to 25 MiB each. The published GitHub Pages site must remain below 1 GB. The initial migration is approximately 295 MB. Large future archives can be stored in an institutional repository and linked from `paperurl` using a full HTTPS address.

## What was transferred

The initial migration preserves the existing bibliography: 120 entries, with 118 PDF downloads. The two manuscripts without supplied PDFs remain listed. Additional papers in the supplied folder were not added, as requested. The UW website was not modified.
