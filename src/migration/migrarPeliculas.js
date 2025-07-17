const {
    Pelicula,
    Reparto,
    Categoria,
    Genero,
    PeliculaTag,
    Tag,
    Actor
} = require('../models');

async function migrarPeliculas(peliculas, transaction) {
    for (const pelicula of peliculas) {
        // Categoría
        const [categoria] = await Categoria.findOrCreate({
            where: { nombre: pelicula.categoria },
            transaction
        });
        // Género
        const [genero] = await Genero.findOrCreate({
            where: { nombre: pelicula.genero },
            transaction
        });
        // Crear película
        const nuevaPelicula = await Pelicula.create({
            poster: pelicula.poster,
            titulo: pelicula.titulo,
            categoriaID: categoria.categoriaID,
            generoID: genero.generoID,
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
                        peliculaID: nuevaPelicula.peliculaID,
                        actorID: actor.actorID
                    }, { transaction });
                }
            }
        }

        // Tags
        if (pelicula.tags) {
            const tags = pelicula.tags.split(',').map(tag => tag.trim());
            for (const tagNombre of tags) {
                if (tagNombre) {
                    const [tag] = await Tag.findOrCreate({
                        where: { tag: tagNombre },
                        transaction
                    });
                    await PeliculaTag.create({
                        peliculaID: nuevaPelicula.peliculaID,
                        tagID: tag.tagID
                    }, { transaction });
                }
            }
        }
    }
}

module.exports = { migrarPeliculas };