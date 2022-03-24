function array_fill(i:number, n:number, v:number) {
    var a = [];
    for (; i < n; i++) {
        a.push(v);
    }
    return a;
}

/**
 * Gaussian elimination
 * @param  array A matrix
 * @param  array x vector
 * @return array x solution vector
 */
function gauss(A:number[][], x:number[]) {

    var i, k, j;

    // Just make a single matrix
    for (i=0; i < A.length; i++) { 
        A[i].push(x[i]);
    }
    var n = A.length;

    for (i=0; i < n; i++) { 
        // Search for maximum in this column
        var maxEl =  Math.abs(A[i][i]),
            maxRow = i;
        for (k=i+1; k < n; k++) { 
            if ( Math.abs(A[k][i]) > maxEl) {
                maxEl =  Math.abs(A[k][i]);
                maxRow = k;
            }
        }


        // Swap maximum row with current row (column by column)
        for (k=i; k < n+1; k++) { 
            var tmp = A[maxRow][k];
            A[maxRow][k] = A[i][k];
            A[i][k] = tmp;
        }

        // Make all rows below this one 0 in current column
        for (k=i+1; k < n; k++) { 
            var c = -A[k][i]/A[i][i];
            for (j=i; j < n+1; j++) { 
                if (i===j) {
                    A[k][j] = 0;
                } else {
                    A[k][j] += c * A[i][j];
                }
            }
        }
    }

    // Solve equation Ax=b for an upper triangular matrix A
    x = array_fill(0, n, 0);
    for (i=n-1; i > -1; i--) { 
        x[i] = A[i][n]/A[i][i];
        for (k=i-1; k > -1; k--) { 
            A[k][n] -= A[k][i] * x[i];
        }
    }

    return x;
}


function polynomial_regression(x_elem:number[],y_elem:number[],order:number)
{
  var data_size = x_elem.length;

  var x_data = [];
  var yx_data = [];

  var matrix_ = [];
  var vector_ = [];


  //initialize

  for(var ii=0;ii<2*order+1;ii++)
  {
    x_data.push(0);
  }
  for(var ii=0;ii<order+1;ii++)
  {
    yx_data.push(0);
    vector_.push(0);
    
    var row = [];
    for(var jj=0;jj<order+1;jj++)
    {
      row.push(0);
    }

    matrix_.push(row);
  }



  for(var ii=0;ii<data_size;ii++)
  {
    for(var jj=0;jj<2*order+1;jj++)
    {
      x_data[jj] += Math.pow(x_elem[ii],jj);
    }
    for(var jj=0;jj<order+1;jj++)
    {
      yx_data[jj] += y_elem[ii] * Math.pow(x_elem[ii],jj);
    }
  }

  for (var ii=0;ii<order+1;ii++)
  {
    for(var jj=0;jj<order+1;jj++)
    {
      matrix_[ii][jj] = x_data[ii+jj];
    }
    vector_[ii] = yx_data[ii];
  }

  return gauss(matrix_,vector_)
  

  
  
}