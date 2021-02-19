//can make db calls in here.

import { articles } from '../../../data'

export default function handler(req, res) {
    const filtered = articles.filter(article => article.id === req.query.id)

console.log(req.query.id)

    if (filtered.length) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message: `article with the id ${req.query.id} is not found`})
    }
}