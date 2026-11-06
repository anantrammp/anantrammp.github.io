# Quantum Devices Lab

The Anantram Research Group at the University of Washington.

**Website:** https://anantrammp.github.io/

**[Editing guide](EDITING.md)** · **[Publication template](publication-template.txt)**

The website publishes automatically when changes are committed to `main`. Routine updates can be made entirely through GitHub's website; no programming tools need to be installed.

## Common tasks

- **Add a paper:** upload its PDF into `files/publications`, then add a short record in `_publications` using the publication template.
- **Change text:** open the appropriate Markdown file in `_pages`, click the pencil, edit, and select **Commit changes**.
- **Update a photograph:** upload the new file to `images` and replace the image path in the appropriate page.

Publication entries are grouped automatically by year and can be searched by title, author, and topic. Original photographs, figures, and PDFs are retained without recompression. Click a gallery figure or photograph to open its original file.

## Source organization

| Location | Content |
| --- | --- |
| `_pages/home.md` | Research homepage |
| `_pages/team.md` | Current team |
| `_pages/past-team.md` | Past members |
| `_pages/book.md` | Textbook and teaching-material links |
| `_pages/join.md` | Joining the group |
| `_pages/photos.md` | Group photo galleries |
| `_pages/misc.md` | Group resources |
| `_publications/` | One editable record per publication |
| `files/publications/` | Publication PDFs |
| `images/` | Photographs and research figures |

## Hosting

GitHub Pages builds the site from the root of the `main` branch using its supported Jekyll build. In **Settings → Pages**, the source is **Deploy from a branch**, branch **main**, folder **/(root)**.

The site uses the publication-collection conventions of [Academic Pages](https://academicpages.github.io/) with a custom lab layout and standard GitHub Pages support. It has no database, server application, or external content-management service. The design and JavaScript are kept in `assets`; normal content updates do not require editing them.

The Academic Pages upstream license is retained in `LICENSE`. That software license does not grant rights to the lab's photographs, research figures, publications, or other supplied content; those retain their respective rights.
