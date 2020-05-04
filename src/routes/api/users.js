const {UsersController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(UsersController.fetch);
    return router;
}