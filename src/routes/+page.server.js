import db from "../db/mongo";

export const load = async ({ request }) => {
    // const events = await db.collection('events').find();
    // return { events };
}

export const actions = {
    default: async ({ request }) => {
        
        const formData = await request.formData();
        const title = formData.get('title');
        const date = formData.get('date')?.toString() || '';
        const place = formData.get('place');
        
        const result = await db.collection('events').insertOne({
            title,
            date: new Date(date),
            place,
        });
        return { success: result.acknowledged };
    }
};