import { Exceptions } from "shoto-js";
import { prisma } from '../lib/prisma.js'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function getPeoples(req, res) {
    try {
        const peoples = await prisma.person.findMany()
        if (!peoples.length) return Exceptions.NotFound(res, 'This table is empty')
        res.json(peoples)
    } catch (error) {
        if (error instanceof Error)
            return Exceptions.InternalServerError(res, error.message)
    }
}

export async function getPerson(req, res) {
    try {
        const person = await prisma.person.findFirst({
            where: {
                id: Number(req.params.id)
            }
        })
        if (!person) return Exceptions.NotFound(res, `This person (${req.params.id}) is not exist`)
        res.json(person)
    } catch (error) {
        if (error instanceof Error)
            return Exceptions.InternalServerError(res, error.message)
    }
}

export async function createPerson(req, res) {
    try {
        const { name, age } = req.body;
        console.log(req.body)
        const newPerson = await prisma.person.create({
            data: {
                name,
                age: Number(age)
            }
        })
        res.json(newPerson)
    } catch (error) {
        if (error instanceof Error)
            return Exceptions.InternalServerError(res, error.message)
    }
}

export async function updatePerson(req, res) {
    try {
        const { name, age } = req.body;
        const updatePerson = await prisma.person.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                name,
                age: Number(age)
            }
        })
        res.json(updatePerson)
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError)
            return Exceptions.NotFound(res, `This id (${req.params.id}) is not found`)
        if (error instanceof Error)
            return Exceptions.InternalServerError(res, error.message)
    }
}

export async function deletePerson(req, res) {
    try {
        const deletePerson = await prisma.person.delete({
            where: {
                id: Number(req.params.id)
            },
        })
        res.json(deletePerson)
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError)
            return Exceptions.NotFound(res, `This id (${req.params.id}) is not found`)
        if (error instanceof Error)
            return Exceptions.InternalServerError(res, error.message)
    }
}