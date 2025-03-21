import db from "../db/mongo";

export const load = async ({ request }) => {
    console.log('load');
}

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const title = formData.get('title')?.toString() || '';
        const date = formData.get('date')?.toString() || '';
        const place = formData.get('place')?.toString() || '';
        
        const result = await db.collection('events').insertOne({
            title,
            date: new Date(date),
            place,
        });
        return { success: result.acknowledged };
    }
};