const {UsersController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(UsersController.fetch)
        .post(UsersController.create);
    router.route('/:id')
        .get(UsersController.fetchOne)
        .put(UsersController.save)
        .delete(UsersController.delete);
    return router;
}