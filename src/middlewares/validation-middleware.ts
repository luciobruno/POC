import { NextFunction, Request } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";

export default function validationSchemas(schema: ObjectSchema){
    return (req: Request, res, next: NextFunction) => {
        const validation = schema.validate(req.body, { abortEarly: false })

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message)
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors)
        }
        next()
    }

}