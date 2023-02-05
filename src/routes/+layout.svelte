<script>
</script>

<header>
  <h1>
    <a href="/">
      <h1>Agenda beun tool 9000</h1> 
    </a>
</header>

<div id="container">
  <aside>
    <section>
      <a href="/settings">0. Settings</a>
    </section>
    <section>
      <a href="/approval-of-minutes">1. Approval of minutes</a>
    </section>
    <section>
      <a href="/action-points">2. Action points</a>
    </section>
    <section>
      <a href="/past-activities">3. Past activities</a>
    </section>
    <section>
      <a href="/upcoming-activities">4. Upcoming activities</a>
    </section>
    <section>
      <a href="/extras">5. Extras</a>
    </section>
    <section>
      <a href="/committees-and-responsibilities">6. Committees and Responsibilities</a>
    </section>
  </aside>
  
  <main>
    <slot />
  </main>
</div>


<style lang="scss">
  a:hover {
    text-decoration: underline;
  }

  header {
    background-color: #1d428a;
    color: white;
    width: 100%;
    height: 10vh;
    display: grid;
    justify-content: center;
    align-content: center;

    h1 {
      font-size: 2rem;
    }
  }

  aside {
    background-color: #1d428a;
    color: white;
    width: 15vw;
    height: 100%;

    section {
      padding: 1rem;
    }
  }

  #container {
    display: grid;
    grid-template-columns: 15vw 1fr;
    height: 100%;

    main {
      padding: 1rem;
    }
  }
</style>
