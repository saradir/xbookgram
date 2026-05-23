import { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
    console.error(err);

    if (err && typeof err === 'object' && 'code' in err && err.code === "P2025") {
        return res.status(404).json({
            success: false,
            message: "Resource not found"
        });
    }

    const statusCode = (err && typeof err === 'object' && 'status' in err && typeof err.status === 'number') 
        ? err.status 
        : 500;

    res.status(statusCode).json({
        success: false,
        message: err instanceof Error ? err.message : "Internal server error"
    });
};
