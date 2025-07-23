const {
    catalogo,
    Reparto,
    Categoria,
    Genero,
    Tagscatalogo,
    Tags,
    Actor
} = require('../models');

async function migrarPeliculas(peliculas, transaction) {
    for (const pelicula of peliculas) {
        // Categoría
        const [categoria] = await Categoria.findOrCreate({
            where: { nombreCategoria: pelicula.categoria },
            transaction
        });
        // Género
        const [genero] = await Genero.findOrCreate({
            where: { Nombre: pelicula.genero },
            transaction
        });
        // Crear película
        const nuevoCatalogo = await catalogo.create({
            poster: pelicula.poster,
            titulo: pelicula.titulo,
            idCategoria: categoria.idCategoria,
            idGenero: genero.idGenero,
            resumen: pelicula.resumen,
            temporadas: pelicula.temporadas,
            duracion: pelicula.duracion,
            trailer: pelicula.trailer,
        }, { transaction });

        // Reparto (actores)
        if (pelicula.reparto) {
            const actores = pelicula.reparto.split(',').map(actor => actor.trim());
            for (const actorNombre of actores) {
                if (actorNombre) {
                    const [actor] = await Actor.findOrCreate({
                        where: { nombreCompleto: actorNombre },
                        transaction
                    });
                    await Reparto.create({
                        idCatalogo: nuevoCatalogo.id,
                        idActores: actor.id
                    }, { transaction });
                }
            }
        }

        // Tags
        if (pelicula.tags) {
            const tags = pelicula.tags.split(',').map(tag => tag.trim());
            for (const tagNombre of tags) {
                if (tagNombre) {
                    const [tag] = await Tags.findOrCreate({
                        where: { nombre: tagNombre },
                        transaction
                    });
                    await Tagscatalogo.create({
                        idCatalogo: nuevoCatalogo.id,
                        idTags: tag.idTag
                    }, { transaction });
                }
            }
        }
    }
}

module.exports = { migrarPeliculas };