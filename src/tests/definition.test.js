import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Generator from '../pages/Generator'

let container = null;
beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // nettoie en sortie de test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("affiche les données d'un mot", async () => {
    const fakeDefinition = {list: [{
        word: "potatoe",
        definition: "yellow rock",
        example: "your potatoe is dry"
    }]};
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeDefinition)
      })
    );

    // Utilise la version asynchrone de `act` pour appliquer les promesses accomplies
    await act(async () => {
        render(<Generator />, container);
    });

    expect(container.querySelector("h3").textContent).toBe(fakeDefinition.list[0].word)
    expect(container.querySelector("p").textContent).toBe(fakeDefinition.list[0].definition);
    // selectionne le deuxieme element 'p' contenu dans mon component
    expect(container.querySelectorAll("p")[1].textContent).toContain(fakeDefinition.list[0].example);

    // Retirer la simulation pour assurer une bonne isolation des tests
    global.fetch.mockRestore();
});