const errMiddleware = (err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || 'backend error'
    const description = err.description || 'bhai server me dikkat h'

    return res.status(status).json({message, description})
}


export default errMiddleware