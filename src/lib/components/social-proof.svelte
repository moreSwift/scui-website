<script lang="ts">
  import { onMount } from "svelte";
  import Person from "svelte-radix/Person.svelte";
  import Rocket from "svelte-radix/Rocket.svelte";
  import StarFilled from "svelte-radix/StarFilled.svelte";
  import { github, videovillage } from "$lib/site";

  const fallbackStars = 1808;
  const fallbackContributors = 26;
  const cacheKey = "swiftcrossui-social-proof";
  const cacheDuration = 1000 * 60 * 60 * 6;

  let stars = fallbackStars;
  let contributors = fallbackContributors;

  $: starLabel = stars.toLocaleString("en-US");

  onMount(async () => {
    try {
      const cached = JSON.parse(localStorage.getItem(cacheKey) ?? "null");
      if (
        cached &&
        Date.now() - cached.cachedAt < cacheDuration &&
        typeof cached.stars === "number" &&
        typeof cached.contributors === "number"
      ) {
        stars = cached.stars;
        contributors = cached.contributors;
        return;
      }
    } catch {
      // Ignore malformed or unavailable storage and fall back to the API.
    }

    try {
      const [repoResponse, contributorsResponse] = await Promise.all([
        fetch("https://api.github.com/repos/moreSwift/swift-cross-ui"),
        fetch(
          "https://api.github.com/repos/moreSwift/swift-cross-ui/contributors?per_page=100",
        ),
      ]);

      if (!repoResponse.ok || !contributorsResponse.ok) return;

      const repo = await repoResponse.json();
      const contributorList = await contributorsResponse.json();

      if (typeof repo.stargazers_count === "number") {
        stars = repo.stargazers_count;
      }
      if (Array.isArray(contributorList)) {
        contributors = contributorList.length;
      }

      localStorage.setItem(
        cacheKey,
        JSON.stringify({ stars, contributors, cachedAt: Date.now() }),
      );
    } catch {
      // Keep the build-time values if GitHub is unavailable.
    }
  });
</script>

<div class="social-proof" aria-label="SwiftCrossUI project statistics">
  <a class="social-proof-item" href={github}>
    <StarFilled size="14" ariaLabel="" />
    <strong>{starLabel}</strong> GitHub stars
  </a>
  <a
    class="social-proof-item"
    href={`${github}/graphs/contributors`}
  >
    <Person size="14" ariaLabel="" />
    <strong>{contributors}</strong> contributors
  </a>
  <span class="social-proof-item social-proof-production">
    <Rocket size="14" ariaLabel="" />
    Used in production by <a href={videovillage}>Video Village</a>
  </span>
</div>
