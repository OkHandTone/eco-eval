<script>
	import { goto } from "$app/navigation";

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        if ((form instanceof HTMLFormElement)) {
            const url = new URL('/', window.location.origin);
            const response = await fetch(url.toString(), {
                method: 'POST',
                body: new FormData(form),
            });

            if (response.ok) {
                form.reset();
                goto('/');
            } else {
                console.error('Failed to submit alert');
            }
        }
    }

    // Fetch events initially
    // fetchEvents();
</script>

<main>
    <h1>Gestion des Événements</h1>

    <section>
        <h2>Créer un nouvel événement</h2>
        <form on:submit={handleSubmit}>
            <label for="title">Titre de l'événement</label>
            <input type="text" id="title" name="title" required>

            <label for="date">Date de l'événement</label>
            <input type="date" id="date" name="date" required>

            <label for="lieu">Lieu de l'événement</label>
            <input type="text" id="place" name="place" required>

            <button type="submit">Créer l'événement</button>
        </form>
    </section>

    <!-- <section>
        <h2>Liste des Événements</h2>
        <button on:click={fetchEvents}>Rafraîchir les événements</button>

        {#if loading}
            <p>Chargement des événements...</p>
        {:else if error}
            <p>Erreur : {error}</p>
        {:else if events.length === 0}
            <p>Aucun événement disponible.</p>
        {:else}
            <ul>
                {#each events as event}
                    <li>
                        <h3>{event.titre}</h3>
                        <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                        <p><strong>Lieu:</strong> {event.lieu}</p>
                    </li>
                {/each}
            </ul>
        {/if}
    </section> -->
</main>

<style>
    main {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        max-width: 800px;
        margin: 2rem auto;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        background-color: #f9f9f9;
    }

    h1, h2 {
        text-align: center;
        color: #444;
        margin-bottom: 1.5rem;
    }

    section {
        margin-bottom: 2rem;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: #333;
    }

    input {
        padding: 0.75rem;
        margin-bottom: 1rem;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 1rem;
    }

    input:focus {
        border-color: #007bff;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        outline: none;
    }

    button {
        padding: 0.75rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
        display: block;
        margin: 0 auto;
    }

    button:hover {
        background-color: #0056b3;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin-bottom: 1.5rem;
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 8px;
    }

    li h3 {
        margin-top: 0;
        font-size: 1.25rem;
    }

    li p {
        margin: 0.5rem 0 0;
        color: #555;
    }
</style>
