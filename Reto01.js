/**
 * Durante la noche de Halloween 🎃, una bruja 🧙‍♀️ está preparando una mezcla mágica.
 * Tiene una lista de pociones, cada una con un poder asociado, y quiere combinar dos de ellas para obtener un poder total específico.
 * Dada una lista de enteros donde cada número representa el poder de una poción 🧪 y un número entero que representa el poder objetivo,
 * debes encontrar el índice de las dos primeras pociones que sumen exactamente el poder objetivo.
 */

/**
 * Ejemplo:
 * const potions = [4, 5, 6, 2]
 * const goal = 8
 *
 * Resultado:
 * createMagicPotion(potions, goal) // [2, 3]
 *
 * Notas: 
 * - Si no se encuentra ninguna combinación, devuelve undefined
 * - En el caso que haya más de una combinación posible, selecciona la combinación cuya segunda poción aparezca primero en la lista.
 */

function createMagicPotion(potions, target) {
    const complements = new Map();

    for (const [index, potion] of potions.entries()) {
        if (complements.has(target - potion)) {
            return [complements.get(target - potion), index];
        }
        else {
            complements.set(potion, index);
        }
    }

    return undefined;
}

const potions = [4, 3, 2, 3, 4];
const goal = 6;

const result = createMagicPotion(potions, goal);
console.log(result);