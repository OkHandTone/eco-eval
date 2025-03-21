<script>
    let titre = '';
    let date = '';
    let lieu = '';

    const handleSubmit = async (/** @type {{ preventDefault: () => void; }} */ event) => {
        event.preventDefault();
        const response = await fetch('/api/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ titre, date, lieu })
        });
        if (response.ok) {
            alert('succès');
        } else {
            alert('erreur');
        }
    };
</script>

<main>
    <h1>Bienvenue sur notre formulaire d'événement</h1>

    <form on:submit={handleSubmit}>
        <label for="titre">Titre de l'événement</label>
        <input type="text" id="titre" bind:value={titre} required>

        <label for="date">Date de l'événement</label>
        <input type="date" id="date" bind:value={date} required>

        <label for="lieu">Lieu de l'événement</label>
        <input type="text" id="lieu" bind:value={lieu} required>

        <button type="submit">Créer l'événement</button>
    </form>
</main>

<style>
    main {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        max-width: 500px;
        margin: 2rem auto;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        background-color: #f9f9f9;
    }

    h1 {
        text-align: center;
        color: #444;
        margin-bottom: 1.5rem;
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
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
