const {ProductsController} = include('controllers');

module.exports = router => {
    router.route('/')
        .get(ProductsController.fetch);
    return router;
}