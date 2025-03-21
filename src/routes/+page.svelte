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
</script>