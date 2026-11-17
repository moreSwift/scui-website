<script lang="ts">
  export let title: string;
</script>

<article class="info-card">
  <h3>{title}</h3>
  <p><slot /></p>
</article>
