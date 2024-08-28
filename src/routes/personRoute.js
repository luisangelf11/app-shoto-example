import { MyRouter } from "shoto-js";
import { createPerson, deletePerson, getPeoples, getPerson, updatePerson } from "../services/personService.js";

const person = new MyRouter('/peoples')

person.GET('/', getPeoples)
person.GET('/:id', getPerson)
person.POST('/', createPerson)
person.PUT('/:id', updatePerson)
person.DELETE('/:id', deletePerson)

export default person