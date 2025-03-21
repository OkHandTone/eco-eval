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
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
        text-align: center;
        color: #333;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-top: 10px;
        font-weight: bold;
    }

    input {
        padding: 8px;
        margin-top: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        margin-top: 20px;
        padding: 10px;
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #218838;
    }
    
</style>