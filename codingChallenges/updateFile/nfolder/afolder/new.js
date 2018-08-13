console.log(dupReq);
  return next.handle(dupReq)
    .catch( (err) => {
      if( err instanceof HttpErrorResponse) {
        console.group("Error Instance");
          console.log('Error Status:');
          console.log(`${err.status} - ${err.error.message}`);
          console.log('----------------');
          console.log('Error Object:');
          console.log(err);
          console.log('--------------');
        console.groupEnd();
        console.log(`Something bad happened: ${err.status} - ${err.error.message}`);

        return Observable.throw(err.error);
      }

    });