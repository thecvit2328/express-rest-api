import controller from './controller'
const setup = router => {
  router
    .get('/:id', controller.get)
    .get('/', controller.getAll)
    .post('/', controller.create)
}
export { setup }
