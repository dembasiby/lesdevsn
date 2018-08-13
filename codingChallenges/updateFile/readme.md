# Code Challenge #6 - Let’s get Nody

Write a Node JS program that would read all the files with .js extension and remove all lines starting with ```console`` statements.
For example:

<pre><code>console.log(dupReq);
    return next.handle(dupReq)
      .catch( (err: any) => {
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
  </code></pre>

would become

<pre><code>
return next.handle(dupReq)
      .catch( (err: any) => {
        if( err instanceof HttpErrorResponse) {
          return Observable.throw(err.error);
        }
</code></pre>
and it would do so for every file inside the folder that was targeted. 

You have one week to complete the task. Please post your code on github but copy and format the code here.