const Card = require("../models/Card");

/**
 * @function getAllCards
 * @description Récupère toutes les cartes appartenant à un utilisateur donné.
 * @param {Request} req - Objet request Express, doit contenir l'ID de l'utilisateur dans req.user ou req.params.
 * @param {Response} res - Objet response Express.
 * @returns {void} Envoie la liste des cartes ou une erreur.
 */
const getAllCards = async (req, res) => {
  try {
    const userId = req.user.id; // ou req.params.id, selon le système d'authentification
    const cards = await Card.find({ user_id: userId });

    // ✅ Succès : on renvoie les cartes
    return res.status(200).json(cards);
  } catch (error) {
    // ❌ Erreur serveur
    return res.status(500).json({ message: "Erreur lors de la récupération des cartes." });
  }
};

/**
 * @function addCard
 * @description Crée une nouvelle carte pour un utilisateur donné.
 * @param {Request} req - Objet request Express, doit contenir un body avec title, user_id, et elements.
 * @param {Response} res - Objet response Express.
 * @returns {void} Envoie la carte créée ou une erreur.
 */
const addCard = async (req, res) => {
  try {
    const { title, user_id, elements } = req.body;

    // TODO: Ajouter une validation plus fine si nécessaire
    const newCard = await Card.create({ title, user_id, elements });

    return res.status(201).json(newCard);
  } catch (error) {
    return res.status(400).json({ message: "Impossible de créer la carte", error });
  }
};

module.exports = {
  getAllCards,
  addCard,
};
