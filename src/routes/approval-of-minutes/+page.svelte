<script lang="ts">
  import { minutes } from '$lib/stores';
  import { getActionPoints } from '$lib/parser';

  $: {
    console.log($minutes)
    getActionPoints($minutes)
  }
</script>

<h1>Approval of Minutes</h1>
