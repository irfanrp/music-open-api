const routes = (handler) => [
     {
        method:'POST',
        path: '/albums',
        handler: handler.postAlbumsHandler,
     },
     {
        method: 'GET',
        path: '/albums/{id}',
        handler: handler.getAlbumByIdHandler,
     },
     {
        method:'PUT',
        path:'/albums/{id}',
        handler: handler.editAlbumHandler,
     },
     {
        method:'DELETE',
        path:'/albums/{id}',
        handler: handler.deleteAlbumHandler,
     }
]

module.exports = routes;