const {
    Pelicula,
    Reparto,
    Categoria,
    Genero,
    PeliculaTag
} = require('../models');

async function migrarPeliculas(peliculas, transaction) {
    for (const pelicula of peliculas) {
        const categoria = await Categoria.findorcreate({
            where: { nombre: pelicula.categoria }
        });
        const genero = await Genero.findorcreate({
            where: { nombre: pelicula.genero }
        });
        const nuevaPelicula = await Pelicula.create({
            poster: nuevaPelicula.poster,
            titulo: nuevaPelicula.titulo,
            categoriaID: nuevaPelicula.categoriaID,
            generoID: nuevaPelicula.generoID,
            resumen: nuevaPelicula.resumen,
            temporadas: nuevaPelicula.temporadas,
            duracion: nuevaPelicula.duracion,
            trailer: nuevaPelicula.trailer,
        },{transaction});

        if(pelicula.reparto) {
            const actores = pelicula.reparto.split(',').map(actor => actor.trim());
            for (const actorNombre of actores) {
                if(actor) {
                    const actor = await Actor.findorcreate({
                        where: { nombre: actorNombre }
                    });
                    await Reparto.create({
                        peliculaID: pelicula.peliculaID,
                        actorID: actor.actorID
                    },{transaction});
                }
            }
        }

        if(pelicula.tags) {
            const tags = pelicula.tags.split(',').map(tag => tag.trim());
            for (const tag of tags) {
                if(tag) {
                    const tag = await Tag.findorcreate({
                        where: { nombre: tag }
                    });
                    await PeliculaTag.create({
                        peliculaID: pelicula.peliculaID,
                        tagID: tag.tagID
                    },{transaction});
                }
            }
        }
    }


}


module.exports = migrarPeliculas;