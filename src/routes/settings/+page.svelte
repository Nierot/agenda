<script>
  import { minutes } from '$lib/stores';
  import { onMount } from 'svelte'

  onMount(() => {
    const m = sessionStorage.getItem('minutes')
    if (m) {
      minutes.set(m)
    }
  })

  function save() {
    sessionStorage.setItem('minutes', $minutes)
    window.location.href = '/approval-of-minutes'
  }
</script>

<h1>Settings</h1>

<p>Hi! Welcome to the <i>Agenda Beun Tool 9000</i> (name subject to change). To get started, paste the minutes of past meeting into the textbox below!</p>

<form>
  <textarea bind:value={$minutes} placeholder="Paste the minutes here" />

  <button on:click={save}>
    Save!
  </button>
</form>


<style>
  textarea {
    width: calc(100% - 15vw);
    height: 50vh;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
</style>