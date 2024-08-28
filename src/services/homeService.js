import { Exceptions } from "shoto-js"

export function getHome(req, res) {
    try {
        res.json({ message: 'Say hello' })
    } catch (error) {
        Exceptions.InternalServerError(res, error.message)
    }
}

export function postHome(req, res) {
    try {
        res.json({ message: 'This is a post' })
    } catch (error) {
        Exceptions.InternalServerError(res, error.message)
    }
}

export function putHome(req, res) {
    try {
        res.json({ message: 'This is a put' })
    } catch (error) {
        Exceptions.InternalServerError(res, error.message)
    }
}

export function deleteHome(req, res) {
    try {
        res.json({ message: 'This is a delete' })
    } catch (error) {
        Exceptions.InternalServerError(res, error.message)
    }
}