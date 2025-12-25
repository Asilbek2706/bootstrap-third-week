const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// const popover = new bootstrap.Popover('.example-popover', {
//     container: 'body'
// })

const popover = new bootstrap.Popover('.popover-dismiss', {
    trigger: 'focus'
})