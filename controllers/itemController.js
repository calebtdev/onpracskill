const Item = require('../model/itemModel')

const getAllItems = async (req, res) => {
    try {
        const items = await Item.find()
        res.status(200).json({ items })
    } catch (error) {
        res.status(500).json({
            message: "error",
            error: error.message
        })
    }
}


const createItem = async (req, res) => {
    try {
        const { name, price } = req.body
        const newItem = await Item.create({ name, price })
        res.status(201).json({ newItem })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params
        await Item.findByIdAndDelete(id)
        res.status(204).json({ message: "deleted" })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

module.exports = { getAllItems, createItem, deleteItem }