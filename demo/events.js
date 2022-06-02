const EventEmmiter = require('events')

// const emmiter = new EventEmmiter()
//
// emmiter.on('anything', data => {
//     console.log('ON: anything', data)
// })
//
// emmiter.emit('anything', {a: 1})

class Dispatcher extends EventEmmiter {
    subscribe(eventName, cb) {
        console.log('[Subscribe...]')
        this.on(eventName, cb)
    }

    dispatch(eventName, data) {
        console.log('[Dispatching]')
        this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe('aa', data => {
    console.log('ON: aa', data)
})

dis.dispatch('aa', {aa: 22})
