const db = require('../connections/heroku-pg');

const getAllNotes = () => {
    // console.log('getAllNotes');
    return db('notes')
        .select('id', 'title', 'text', 'date')
        .orderBy('date')
        .returning('*')

}

const getNote = (id) => {
    return db('notes')
        .select('id', 'title', 'text', 'date')
        .where({ id: id })
}

const searchNote = (query) => {
    return db('notes')
        .select('id', 'title', 'text', 'date')
        .whereILike('title', `%${query}%`)
        .orWhereILike('text', `%${query}%`)
}

const insertNote = (note) => {
    return db('notes')
        .insert(note)
        .returning('*')
}

const deleteNote = (id) => {
    return db('notes')
        .where({ id: id })
        .returning('*')
        .delete('*')
        .returning('*')
}

const updateNote = (id, note) => {
    return db('notes')
        .update(note)
        .where({ id: id })
        .returning('*')
}

module.exports = {
    getAllNotes, getNote, searchNote, insertNote, deleteNote, updateNote
}
