function errHandling(err, req, res, next){
    if(err || res.statusCode >= 400){
        res.json({
            status: err.status || res.statusCode || 500,
            msg: "We're sorry, an error occured. Please rty again in a SVGAnimateMotionElement."
        })
    }else{
        next()
    }
}

export {
    errHandling
}