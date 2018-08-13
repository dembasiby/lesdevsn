  return next.handle(dupReq)
    .catch( (err) => {
      if( err instanceof HttpErrorResponse) {
                                                                                    
        return Observable.throw(err.error);
      }
    });