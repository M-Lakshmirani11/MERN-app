class ErrorHandler extends Error {
    constructor(message, statuscode) {
        super(message);
        this.statusCode = statuscode;
    }
}
export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statucode || 500;

    if (err.name === "CastError") {
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }
    if (err.name === 'ValidationError') {
        const validationErrors = Object.values(error.errors).map(err => err.message);
        return next(new ErrorHandler(validationErrors.join(', '), 400));
    }
    return res.status(err.statuscode).json({
        success: false,
        message: err.message,
    });
};

export default ErrorHandler;
