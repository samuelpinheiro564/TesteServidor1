import {planet} from "../../data/UserPlanet"
import Planet from "./Planet"

class PlanetsRepository {
    constructor() {
        this.planets = [];
    }
    getAll() {
        return this.planets;
    }
    get(id) {
        return this.planets.find((planet) => planet.id === id);
    }
    add(planet) {
        this.planets.push(planet);
    }
    remove(id){
        this.planets = this.planets.filter((planet) =>planet.id !==id);
    }

    update(id,nome,data,cor1,cor2,populacao,loc,nome_gov,titulo_gov) {
        const planet = this.get(id);

        if (planet) {
            planet.nome = nome;
            planet.data = data;
            planet.cor1 = cor1;
            planet.cor2 = cor2;
            planet.populacao = populacao;
            planet.loc = loc;UserPlanet
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
