import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert([
        { name: "Nhoque quatro queijos", price: 28.50 },
        { name: "Lasanha à bolonhesa", price: 32.90 },
        { name: "Spaghetti ao alho e óleo", price: 22.00 },
        { name: "Pizza margherita", price: 35.00 },
        { name: "Risoto de cogumelos", price: 38.75 },
        { name: "Sopa de legumes", price: 18.50 },
        { name: "Panqueca de frango", price: 27.30 },
        { name: "Salada Caesar", price: 24.90 },
        { name: "Hambúrguer artesanal", price: 29.90 },
        { name: "Torta de limão", price: 15.00 }
    ]);
};
