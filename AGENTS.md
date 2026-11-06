<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Site content constants (contacts, nav, services, projects) live in `src/lib/site.ts`; sections in `src/components/site/sections/` are reused across routes — keep one source of truth.
- Contact form posts to FormSubmit's AJAX endpoint from the browser (`src/lib/contact.ts`) — no backend is enabled; swap only if Lovable Cloud email is set up.
