<script lang="ts">
  import { buttonVariants } from "$lib/components/ui/button";

  export let href: string;
  export let variant: "default" | "outline" = "default";
  export let size: "default" | "lg" = "default";
  export let className = "";
</script>

<a
  {href}
  class={`btn ${variant === "default" ? "btn-primary" : "btn-outline"} ${buttonVariants({
    variant,
    size,
  })} ${className}`}
>
  <slot />
</a>
