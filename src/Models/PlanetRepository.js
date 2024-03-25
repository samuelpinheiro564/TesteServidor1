import {planet} from "../data/planet"
import Planet from "./Planet"

class PlanetsRepository {
    constructor() {
        this.planets = [];
    }
    getAll() {
        return this.planets;
    }
    get(id) {
        return this.planets.find((Planet) => Planet.id === id);
    }
    add(planet) {
        this.planets.push(planet);
    }
    remover(id) {
        const planet = this.get(id);

        if (planet) {
            planet.nome = nome;
            planet.data = data;
            planet.cor1 = cor1;
            planet.cor2 = cor2;
            planet.populacao = populacao;
            planet.loc = loc;
            planet.nome_gov = nome_gov;
            planet.titulo_gov = titulo_gov;
        }
        return planet;
    }

}

const planetsRepository = new PlanetsRepository();
const newPlanet = new Planet(planet.nome, planet.data,
    planet.cor1, planet.cor2, planet.populacao, planet.loc,
    planet.nome_gov, planet.titulo_gov);

planetsRepository.add(newPlanet);

export default planetsRepository;
