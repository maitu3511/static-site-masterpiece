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

- Keep TanStack Start as the live bootstrap; retain uploaded index.html unchanged as original source because the user's source must remain available.
- Render the imported website through one shared WebsiteLayout and seven TanStack content routes to preserve the original presentation with reload-safe navigation.
- Store uploaded photographs and logos as Lovable Assets pointers; retain original imported styling and page content to avoid redesigning the supplied website.
